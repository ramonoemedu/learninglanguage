// app/api/ai/dialogue/route.ts
// 🎉 NOW 100% FREE - Uses pre-written dialogue library
// Cost: $0 (was ~$15/month)

import { createClient } from '@/lib/supabase/server'
import { getDialogue, getDialoguesByLanguage, getRandomDialogue } from '@/lib/dialogues/dialogue-library'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const dialogueRequestSchema = z.object({
  dialogueId: z.string().optional(), // If provided, fetch specific dialogue
  targetLanguage: z.string().length(2), // If no dialogueId, get random for this language
})

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const dialogueId = searchParams.get('dialogueId')
    const targetLanguage = searchParams.get('targetLanguage') || 'en'

    const { dialogueId: validatedDialogueId, targetLanguage: validatedTargetLanguage } = dialogueRequestSchema.parse({
      dialogueId,
      targetLanguage,
    })

    // 1. If specific dialogue requested, fetch it
    let dialogue = validatedDialogueId ? getDialogue(validatedDialogueId) : null

    // 2. If not found, get random dialogue for the language
    if (!dialogue) {
      dialogue = getRandomDialogue(validatedTargetLanguage)
    }

    if (!dialogue) {
      return NextResponse.json(
        { error: 'No dialogues available for this language' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      id: dialogue.id,
      title: dialogue.title,
      scenario: dialogue.scenario,
      difficulty: dialogue.difficulty,
      characters: dialogue.characters,
      dialogue: dialogue.dialogue,
      vocabularyWords: dialogue.vocabularyWords,
      comprehensionQuestions: dialogue.comprehensionQuestions,
    })
  } catch (error) {
    console.error('Error fetching dialogue:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
