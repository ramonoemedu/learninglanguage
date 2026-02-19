// app/api/users/onboarding/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const onboardingSchema = z.object({
  nativeLanguage: z.string().length(2),
  targetLanguage: z.string().length(2),
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { nativeLanguage, targetLanguage } = onboardingSchema.parse(body)

    // 1. Update user's native language
    await prisma.user.update({
      where: { id: user.id },
      data: { nativeLanguage },
    })

    // 2. Add target language to UserLanguage table
    await prisma.userLanguage.upsert({
      where: {
        userId_languageCode: {
          userId: user.id,
          languageCode: targetLanguage,
        },
      },
      update: {}, // No change needed if already exists
      create: {
        userId: user.id,
        languageCode: targetLanguage,
        currentStage: 1,
        currentChapter: 1,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('Onboarding error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
