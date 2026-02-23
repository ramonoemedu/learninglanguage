// app/api/ai/chat/route.ts
import { openai, OPENAI_CHAT_MODEL, ensureOpenAIConfigured } from '@/lib/openai/client'
import { createClient } from '@/lib/supabase/server'
import { redis } from '@/lib/upstash/redis'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const chatRequestSchema = z.object({
  message: z.string().min(1),
  history: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string(),
  })),
  targetLang: z.string().length(2),
  nativeLang: z.string().length(2),
})

export async function POST(request: Request) {
  try {
    // Ensure OpenAI is properly configured
    ensureOpenAIConfigured()

    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { message, history, targetLang, nativeLang } = chatRequestSchema.parse(body)

    // 1. Rate Limiting (Free users: 20 messages/day)
    // For now, simple counter. In future, implement token bucket or similar
    const userMessageCountKey = `ai_chat_messages:${user.id}:${new Date().toDateString()}`
    const currentCount = await redis.get<number>(userMessageCountKey) || 0

    // TODO: Implement plan check (free vs pro/tester)
    const isFreeUser = true // Placeholder
    const maxMessages = 20

    if (isFreeUser && currentCount >= maxMessages) {
      return NextResponse.json({
        error: `You have reached your daily AI chat limit of ${maxMessages} messages. Upgrade to Pro for unlimited chat.`,
      }, { status: 429 })
    }
    await redis.incr(userMessageCountKey) // Increment message count

    // 2. Build OpenAI messages
    const messages = [
      { role: 'system', content: `You are a helpful language teacher. You teach ${targetLang} to a ${nativeLang} speaker. Always respond in ${targetLang} but provide explanations and tips in ${nativeLang} when appropriate. Keep responses concise.` },
      ...history,
      { role: 'user', content: message },
    ]

    // 3. Request streaming completion from OpenAI
    const stream = await openai.chat.completions.create({
      model: OPENAI_CHAT_MODEL,
      messages: messages as any,
      stream: true,
      max_tokens: 500,
    })

    // 4. Return as Server-Sent Events (SSE)
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
    console.error('Error in AI Chat API:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
