// app/api/ai/generate-reading-passage/route.ts
// 🎉 NOW 100% FREE - Uses pre-written reading passage library
// Cost: $0 (was ~$25/month)

import { createClient } from '@/lib/supabase/server'
import { getPassagesByStage, getPassagesByLanguage } from '@/lib/reading-passages'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const generateReadingSchema = z.object({
  languageCode: z.string().length(2),
  stageNumber: z.number().min(1).max(10).optional(),
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { languageCode, stageNumber } = generateReadingSchema.parse(body)

    // 1. Get passages for the stage if provided
    let passages = stageNumber
      ? getPassagesByStage(languageCode, `stage${stageNumber}`)
      : getPassagesByLanguage(languageCode)

    if (passages.length === 0) {
      return NextResponse.json(
        {
          error: 'No passages available for this language/stage',
          available:
            stageNumber
              ? `Try a different stage (1-10)`
              : `No content for language: ${languageCode}`,
        },
        { status: 404 }
      )
    }

    // 2. Return random passage from available
    const randomPassage = passages[Math.floor(Math.random() * passages.length)]

    return NextResponse.json({
      passage: randomPassage.passage,
      title: randomPassage.title,
      difficulty: randomPassage.difficulty,
      wordCount: randomPassage.wordCount,
      vocabularyWords: randomPassage.vocabularyWords,
      comprehensionQuestions: randomPassage.comprehensionQuestions,
    })
  } catch (error) {
    console.error('Error fetching reading passage:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
