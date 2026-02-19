// app/api/ai/dialogue/route.ts
import { openai, OPENAI_CHAT_MODEL } from '@/lib/openai/client'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const dialogueRequestSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string(),
  })),
  scenario: z.string().min(1),
  targetLanguage: z.string().length(2),
  nativeLanguage: z.string().length(2),
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { history, scenario, targetLanguage, nativeLanguage } = dialogueRequestSchema.parse(body)

    const systemPrompt = `You are playing a role in a language learning dialogue.
    The scenario is: "${scenario}".
    You should respond as your character in ${targetLanguage}.
    The user's native language is ${nativeLanguage}.
    Occasionally, provide feedback or explanations in ${nativeLanguage} to guide the user, especially if they make a mistake or ask for help.
    Keep your responses concise and natural for the given scenario.`

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
    ]

    const stream = await openai.chat.completions.create({
      model: OPENAI_CHAT_MODEL,
      messages: messages as any,
      stream: true,
      max_tokens: 300,
      temperature: 0.8, // More creative for dialogue
    })

    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || ''
          controller.enqueue(encoder.encode(`data: ${content}

`))
        }
        controller.close()
      },
    })

    return new Response(readableStream, {
      headers: { 'Content-Type': 'text/event-stream' },
    })
  } catch (error) {
    console.error('Error in AI Dialogue API:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
