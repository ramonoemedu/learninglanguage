// app/api/ai/generate-reading-passage/route.ts
import { openai, OPENAI_CHAT_MODEL } from '@/lib/openai/client'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const generateReadingSchema = z.object({
  chapterId: z.string(),
  languageCode: z.string().length(2),
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { chapterId, languageCode } = generateReadingSchema.parse(body)

    // In a real scenario, you'd fetch vocabulary for this chapter
    // and provide it to the AI for context and to ensure level-appropriateness.
    // For now, we'll use a generic prompt.

    const systemPrompt = `You are a helpful language teacher. Generate a short reading passage (100-150 words) in ${languageCode} about a simple daily life topic, suitable for a beginner. 
    Make sure the vocabulary is simple and repetitive.
    Then, generate 3 multiple-choice comprehension questions about the passage.
    Your response should be a JSON object with the following structure:
    {
      "passage": "string",
      "comprehensionQuestions": [
        {
          "question": "string",
          "options": ["string", "string", "string", "string"],
          "correctAnswer": "string"
        },
        // ... more questions
      ]
    }`

    const chatCompletion = await openai.chat.completions.create({
      model: OPENAI_CHAT_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Generate a reading passage and 3 comprehension questions for a beginner in ${languageCode} for a chapter on daily greetings.` },
      ],
      response_format: { type: "json_object" },
      max_tokens: 1000,
      temperature: 0.7, // Allow some creativity
    })

    const responseContent = chatCompletion.choices[0]?.message?.content
    if (!responseContent) {
      throw new Error('No content received from AI')
    }

    const aiGeneratedContent = JSON.parse(responseContent)
    // Basic validation of AI response structure
    const contentSchema = z.object({
      passage: z.string(),
      comprehensionQuestions: z.array(z.object({
        question: z.string(),
        options: z.array(z.string()).length(4),
        correctAnswer: z.string(),
      })).min(1),
    })
    const validatedContent = contentSchema.parse(aiGeneratedContent)

    return NextResponse.json(validatedContent)
  } catch (error) {
    console.error('Error generating reading passage:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
