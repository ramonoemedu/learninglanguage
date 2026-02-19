// app/api/ai/explain/route.ts
import { openai, OPENAI_CHAT_MODEL } from '@/lib/openai/client'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const explainSchema = z.object({
  topic: z.string().min(1), // e.g., "Chinese tones", "Past tense in Khmer"
  targetLanguage: z.string().length(2),
  nativeLanguage: z.string().length(2),
})

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const topic = searchParams.get('topic')
    const targetLanguage = searchParams.get('targetLanguage')
    const nativeLanguage = searchParams.get('nativeLanguage')

    const { topic: validatedTopic, targetLanguage: validatedTargetLanguage, nativeLanguage: validatedNativeLanguage } = explainSchema.parse({ topic, targetLanguage, nativeLanguage })

    // Check if explanation exists in cache (Prisma grammar_explanations table)
    // For now, we skip caching and generate directly.

    const systemPrompt = `You are an expert language teacher specializing in ${validatedTargetLanguage}.
    You are asked to explain a grammar topic to a learner whose native language is ${validatedNativeLanguage}.
    Provide a clear, concise explanation of the topic.
    Include 2-3 simple example sentences in ${validatedTargetLanguage} with their ${validatedNativeLanguage} translations.
    If applicable, briefly compare or contrast it with how it works in ${validatedNativeLanguage}.
    Keep the explanation easy to understand for a language learner.`

    const chatCompletion = await openai.chat.completions.create({
      model: OPENAI_CHAT_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Explain "${validatedTopic}" in ${validatedTargetLanguage} for a ${validatedNativeLanguage} speaker.` },
      ],
      max_tokens: 500,
      temperature: 0.5,
    })

    const explanation = chatCompletion.choices[0]?.message?.content
    if (!explanation) {
      throw new Error('No explanation received from AI')
    }

    // In a real scenario, you would save this to the grammar_explanations table for caching.

    return NextResponse.json({ explanation })
  } catch (error) {
    console.error('Error generating grammar explanation:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
