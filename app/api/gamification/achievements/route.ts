// app/api/gamification/achievements/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const allAchievements = await prisma.achievement.findMany()
    const userAchievements = await prisma.userAchievement.findMany({
      where: { userId: authUser.id },
      select: { achievementId: true },
    })

    const unlockedAchievementIds = new Set(userAchievements.map(ua => ua.achievementId))

    const achievementsWithStatus = allAchievements.map(ach => ({
      ...ach,
      isUnlocked: unlockedAchievementIds.has(ach.id),
    }))

    return NextResponse.json(achievementsWithStatus)
  } catch (error) {
    console.error('Error fetching achievements:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
