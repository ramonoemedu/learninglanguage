// app/api/ai/grade-writing/route.ts
// 🎉 NOW 100% FREE - Uses rule-based validation instead of GPT-4o-mini
// Cost: $0 (was $0.0005/request)

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { validateWriting } from '@/lib/writing-validator'
import { z } from 'zod'

const gradeWritingSchema = z.object({
  userText: z.string().min(1),
  correctAnswer: z.string().min(1),
  stageNumber: z.number().min(1).max(10).optional(),
  languageCode: z.string().min(2).max(2).optional(),
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { 
      userText, 
      correctAnswer, 
      stageNumber = 1, 
      languageCode = 'en' 
    } = gradeWritingSchema.parse(body)

    // ✅ USE FREE VALIDATION (no OpenAI API call!)
    const result = validateWriting(userText, correctAnswer, stageNumber, languageCode)

    return NextResponse.json({
      score: result.score,
      feedback: result.feedback,
      correctedText: result.correctedText,
    })
  } catch (error) {
    console.error('Error grading writing:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
