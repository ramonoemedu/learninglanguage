// app/api/gamification/achievements/unlock/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

// This endpoint could be called after a user action (e.g., lesson completion, streak update)
// or triggered by a background job checking conditions.
// For now, it directly checks a specific achievement's condition.

const unlockAchievementSchema = z.object({
  achievementId: z.string(),
  // Potentially include current user stats to avoid re-fetching in a single request
  // Example: userStats: z.object({ totalLessonsCompleted: z.number(), streakDays: z.number() }).optional(),
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { achievementId } = unlockAchievementSchema.parse(body)

    const achievement = await prisma.achievement.findUnique({
      where: { id: achievementId },
    })

    if (!achievement) {
      return NextResponse.json({ error: 'Achievement not found' }, { status: 404 })
    }

    // Check if user already has this achievement
    const existingUserAchievement = await prisma.userAchievement.findUnique({
      where: {
        userId_achievementId: {
          userId: authUser.id,
          achievementId: achievement.id,
        },
      },
    })

    if (existingUserAchievement) {
      return NextResponse.json({ message: 'Achievement already unlocked' }, { status: 200 })
    }

    // Fetch user's current stats to evaluate condition (simplified for now)
    const user = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { xpTotal: true, coins: true, streakDays: true },
    })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    let isUnlocked = false
    // Example: Evaluate condition (this logic would be more complex/flexible in a full system)
    const condition = achievement.condition as any // Cast Json to any for dynamic access
    if (condition.totalLessonsCompleted !== undefined) {
      // This would require fetching actual total lessons completed from userProgress
      // For now, let's assume it's related to some external trigger.
      // We need to implement a proper way to count completed lessons
      // For demonstration, let's say lessonId 'first_lesson_id' unlocks 'hello_world'
      // This is highly simplified and needs robust implementation later
      isUnlocked = true // Placeholder for condition met
    }
    if (condition.streakDays !== undefined) {
      isUnlocked = user.streakDays >= condition.streakDays
    }
    // ... more complex conditions based on achievement.condition ...

    if (isUnlocked) {
      // Unlock achievement
      await prisma.userAchievement.create({
        data: {
          userId: authUser.id,
          achievementId: achievement.id,
        },
      })

      // Award XP and Coins
      await prisma.user.update({
        where: { id: authUser.id },
        data: {
          xpTotal: { increment: achievement.xpReward },
          coins: { increment: achievement.coinReward },
        },
      })

      // Record XP and Coin transactions
      if (achievement.xpReward > 0) {
        await prisma.xPTransaction.create({
          data: {
            userId: authUser.id,
            amount: achievement.xpReward,
            reason: `Achievement: ${achievement.title}`,
            sourceType: 'ACHIEVEMENT',
            sourceId: achievement.id,
          },
        })
      }
      if (achievement.coinReward > 0) {
        await prisma.coinTransaction.create({
          data: {
            userId: authUser.id,
            amount: achievement.coinReward,
            type: 'earn',
            reason: `Achievement: ${achievement.title}`,
          },
        })
      }

      return NextResponse.json({ success: true, achievement, xpAwarded: achievement.xpReward, coinsAwarded: achievement.coinReward })
    }

    return NextResponse.json({ message: 'Achievement condition not met' }, { status: 200 })
  } catch (error) {
    console.error('Error unlocking achievement:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
