// app/api/progress/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    if (!prisma) return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })

    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch user's enrolled languages and their XP
    const userLanguages = await prisma.userLanguage.findMany({
      where: { userId: authUser.id },
      include: {
        language: {
          select: { code: true, name: true, flag: true },
        },
      },
    })

    // Fetch total lessons completed and average score
    const totalProgress = await prisma.userProgress.aggregate({
      where: { userId: authUser.id },
      _count: { lessonId: true },
      _avg: { score: true },
    })

    // Fetch vocabulary learned count
    const vocabularyLearned = await prisma.userVocabulary.count({
      where: { userId: authUser.id, timesCorrect: { gt: 0 } },
    })

    // Fetch overall user data
    const user = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { xpTotal: true, coins: true, streakDays: true },
    })

    return NextResponse.json({
      overall: {
        xpTotal: user?.xpTotal || 0,
        coins: user?.coins || 0,
        streakDays: user?.streakDays || 0,
        lessonsCompleted: totalProgress._count.lessonId || 0,
        averageScore: totalProgress._avg.score || 0,
        vocabularyLearned: vocabularyLearned,
      },
      languages: userLanguages.map(ul => ({
        code: ul.language.code,
        name: ul.language.name,
        flag: ul.language.flag,
        xpInLanguage: ul.xpInLanguage,
        currentStage: ul.currentStage,
      })),
      // Add more detailed stats here later (e.g., weak words, skill breakdown)
    })
  } catch (error) {
    console.error('Error fetching progress:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
