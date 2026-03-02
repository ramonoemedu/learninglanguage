// app/api/ai/pronounce/route.ts
// 🎉 NOW 100% FREE - Uses browser Web Speech API + free validation
// Cost: $0 (was $0.02/minute)

import { createClient } from '@/lib/supabase/server'
import { validateSpeaking } from '@/lib/writing-validator'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { transcript, targetText } = body

    if (!transcript || !targetText) {
      return NextResponse.json(
        { error: 'Missing transcript or target text' },
        { status: 400 }
      )
    }

    // ✅ USE FREE VALIDATION (no OpenAI Whisper!)
    const result = validateSpeaking(transcript, targetText)

    return NextResponse.json({
      score: result.score,
      transcript: transcript,
      feedback: result.feedback,
      isCorrect: result.isCorrect,
    })
  } catch (error) {
    console.error('Error in pronunciation API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
