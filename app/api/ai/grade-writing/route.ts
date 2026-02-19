// app/api/ai/grade-writing/route.ts
import { openai, OPENAI_CHAT_MODEL } from '@/lib/openai/client'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const gradeWritingSchema = z.object({
  userText: z.string().min(1),
  prompt: z.string().min(1),
  targetLanguage: z.string().length(2),
  nativeLanguage: z.string().length(2),
  correctAnswer: z.string().optional(), // For translation tasks
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { userText, prompt, targetLanguage, nativeLanguage, correctAnswer } = gradeWritingSchema.parse(body)

    const systemPrompt = `You are a helpful language teacher. You are grading a writing exercise for a ${targetLanguage} learner whose native language is ${nativeLanguage}.
    The prompt was: "${prompt}".
    The user wrote: "${userText}".
    
    ${correctAnswer ? `The expected correct answer (for translation) was: "${correctAnswer}".` : ''}

    Please provide constructive feedback focusing on grammar, vocabulary, and naturalness. Give a score from 0 to 100.
    Then, provide a corrected version of the user's text.
    Your response should be a JSON object with the following structure:
    {
      "score": number, // Overall score out of 100
      "feedback": string, // Detailed feedback on grammar, vocab, naturalness
      "correctedText": string // Corrected version of the user's text
    }
    `

    const chatCompletion = await openai.chat.completions.create({
      model: OPENAI_CHAT_MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Please grade the following text based on the prompt.
Prompt: "${prompt}"
User's text: "${userText}"` },
      ],
      response_format: { type: "json_object" }, // Ensure JSON output
      max_tokens: 500,
      temperature: 0.2, // Keep responses consistent
    })

    const responseContent = chatCompletion.choices[0]?.message?.content
    if (!responseContent) {
      throw new Error('No content received from AI')
    }

    const aiFeedback = JSON.parse(responseContent) // Parse the JSON response
    
    // Validate AI response structure
    const feedbackSchema = z.object({
      score: z.number().min(0).max(100),
      feedback: z.string(),
      correctedText: z.string(),
    })
    const validatedFeedback = feedbackSchema.parse(aiFeedback)

    return NextResponse.json(validatedFeedback)
  } catch (error) {
    console.error('Error grading writing:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
