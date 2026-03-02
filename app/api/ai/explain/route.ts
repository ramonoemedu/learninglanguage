// app/api/ai/explain/route.ts
// 🎉 NOW 100% FREE - Uses pre-written grammar library
// Cost: $0 (was ~$20/month)

import { createClient } from '@/lib/supabase/server'
import { getGrammarTopic, getGrammarByLanguage } from '@/lib/grammar-guide'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const explainSchema = z.object({
  topicId: z.string().min(1), // Grammar topic ID
  targetLanguage: z.string().length(2),
})

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const topicId = searchParams.get('topicId')
    const targetLanguage = searchParams.get('targetLanguage')

    const { topicId: validatedTopicId, targetLanguage: validatedTargetLanguage } = explainSchema.parse({
      topicId,
      targetLanguage,
    })

    // 1. Try to get specific grammar topic by ID
    let grammarTopic = getGrammarTopic(validatedTopicId)

    // 2. If not found, return available topics for the language
    if (!grammarTopic) {
      const topicsForLanguage = getGrammarByLanguage(validatedTargetLanguage)
      if (topicsForLanguage.length === 0) {
        return NextResponse.json(
          { error: 'No grammar topics available for this language' },
          { status: 404 }
        )
      }
      return NextResponse.json({
        error: 'Topic not found. Available topics:',
        availableTopics: topicsForLanguage.map(t => ({
          id: t.id,
          title: t.title,
          difficulty: t.difficulty,
        })),
      })
    }

    return NextResponse.json({
      id: grammarTopic.id,
      title: grammarTopic.title,
      difficulty: grammarTopic.difficulty,
      content: grammarTopic.content,
      examples: grammarTopic.examples,
      tips: grammarTopic.tips,
    })
  } catch (error) {
    console.error('Error fetching grammar explanation:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
