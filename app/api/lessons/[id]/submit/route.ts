// app/api/lessons/[id]/submit/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const submitSchema = z.object({
  score: z.number().min(0).max(100),
  timeSpent: z.number().min(0),
})

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id: lessonId } = await params
    const body = await request.json()
    const { score, timeSpent } = submitSchema.parse(body)

    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        chapter: {
          include: {
            stage: {
              include: {
                language: true
              }
            }
          }
        }
      }
    })

    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
    }

    const isPassed = score >= 60
    const xpEarned = isPassed ? (lesson.xpReward + (score === 100 ? 5 : 0)) : 0
    const coinsEarned = isPassed ? (lesson.coinReward + (score === 100 ? 3 : 0)) : 0

    // 1. Update User global stats
    const user = await prisma.user.findUnique({ where: { id: authUser.id } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    // Streak Logic
    let streakDays = user.streakDays
    const now = new Date()
    const lastDate = user.streakLastDate ? new Date(user.streakLastDate) : null
    const isToday = lastDate?.toDateString() === now.toDateString()
    const isYesterday = lastDate ? (new Date(now.setDate(now.getDate() - 1)).toDateString() === lastDate.toDateString()) : false
    
    // Reset now back to current for further use
    const today = new Date()

    if (!isToday) {
      if (isYesterday || !lastDate) {
        streakDays += 1
      } else {
        streakDays = 1
      }
    }

    await prisma.user.update({
      where: { id: authUser.id },
      data: {
        xpTotal: { increment: xpEarned },
        coins: { increment: coinsEarned },
        streakDays: streakDays,
        streakLastDate: today,
      }
    })

    // 2. Create XPTransaction
    if (xpEarned > 0) {
      await prisma.xPTransaction.create({
        data: {
          userId: authUser.id,
          amount: xpEarned,
          reason: `Lesson Completion: ${lesson.chapter.title} - ${lesson.type}`,
          sourceType: 'LESSON_COMPLETION',
          sourceId: lesson.id,
        },
      })
    }

    // 3. Create CoinTransaction
    if (coinsEarned > 0) {
      await prisma.coinTransaction.create({
        data: {
          userId: authUser.id,
          amount: coinsEarned,
          type: 'earn',
          reason: `Lesson Completion: ${lesson.chapter.title} - ${lesson.type}`,
        },
      })
    }


    // 4. Update UserLanguage progress (Stage/Chapter advancement)
    const langCode = lesson.chapter.stage.language.code // Directly use language code from the nested relation
    
    if (lesson.chapter.stage.language) {
      await prisma.userLanguage.upsert({
        where: { userId_languageCode: { userId: authUser.id, languageCode: langCode } },
        update: {
          xpInLanguage: { increment: xpEarned }
        },
        create: {
          userId: authUser.id,
          languageCode: langCode,
          xpInLanguage: xpEarned,
          // Other default values for currentStage, currentChapter etc. if it's a new entry
        }
      })

      // 5. Update weekly leaderboard entry
      const startOfWeek = new Date()
      startOfWeek.setUTCHours(0, 0, 0, 0)
      startOfWeek.setUTCDate(startOfWeek.getUTCDate() - (startOfWeek.getUTCDay() + 6) % 7) // Monday start of week

      await prisma.leaderboardEntry.upsert({
        where: {
          userId_languageCode_weekStart: {
            userId: authUser.id,
            languageCode: langCode,
            weekStart: startOfWeek,
          },
        },
        update: {
          xpEarned: { increment: xpEarned },
        },
        create: {
          userId: authUser.id,
          languageCode: langCode,
          weekStart: startOfWeek,
          xpEarned: xpEarned,
        },
      })
    }

    // 6. Record individual lesson progress
    const progress = await prisma.userProgress.create({
      data: {
        userId: authUser.id,
        lessonId: lesson.id,
        score,
        xpEarned,
      }
    })


    return NextResponse.json({
      success: true,
      xpEarned,
      coinsEarned,
      streakDays,
      isNewStreak: !isToday,
      score
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('Submit error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
