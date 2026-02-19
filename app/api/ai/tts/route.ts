// app/api/ai/tts/route.ts
import { NextResponse } from 'next/server'
import { openai, OPENAI_TTS_MODEL } from '@/lib/openai/client'
import { r2, R2_BUCKET_NAME, R2_PUBLIC_URL } from '@/lib/cloudflare/r2'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { prisma } from '@/lib/db/prisma'
import { z } from 'zod'

const ttsSchema = z.object({
  text: z.string().min(1),
  voice: z.enum(['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer']).default('nova'),
  speed: z.number().min(0.25).max(4.0).default(1.0),
  vocabId: z.string().optional(), // Optional: if generating for a specific vocab word
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { text, voice, speed, vocabId } = ttsSchema.parse(body)

    // 1. Generate audio with OpenAI TTS
    const mp3 = await openai.audio.speech.create({
      model: OPENAI_TTS_MODEL,
      voice: voice,
      input: text,
      speed: speed,
    })

    const buffer = Buffer.from(await mp3.arrayBuffer())

    const audioKey = vocabId 
      ? `audio/vocab/${vocabId}_${voice}_${speed.toFixed(2)}.mp3`
      : `audio/temp/${Date.now()}_${voice}_${speed.toFixed(2)}.mp3` // For on-demand preview

    // 2. Upload to Cloudflare R2
    const uploadCommand = new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: audioKey,
      Body: buffer,
      ContentType: 'audio/mpeg',
    })
    await r2.send(uploadCommand)

    const audioUrl = `${R2_PUBLIC_URL}/${audioKey}`

    // 3. Update Vocabulary in DB if vocabId provided
    if (vocabId) {
      await prisma.vocabulary.update({
        where: { id: vocabId },
        data: { audioUrl }, // Only update if this is the primary audio
      })
    }

    return NextResponse.json({ audioUrl })
  } catch (error) {
    console.error('Error generating TTS:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
