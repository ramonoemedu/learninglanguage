import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { redis, cacheKeys, cacheTTL } from '@/lib/cache/redis'

export const revalidate = 0 // Disable Next.js static caching
export const dynamic = 'force-dynamic' // Don't run at build time

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userData = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { role: true }
    })

    if (userData?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const cacheKey = cacheKeys.allLessons()

    // 1. Check Redis cache
    const cached = await redis.get(cacheKey)
    if (cached) {
      console.log('✅ Cache HIT for all lessons (admin)')
      return NextResponse.json(cached)
    }

    console.log('❌ Cache MISS for all lessons (admin)')

    // 2. Fetch from database
    const lessons = await prisma.lesson.findMany({
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
      },
      orderBy: [
        { chapter: { stage: { language: { name: 'asc' } } } },
        { chapter: { stage: { stageNumber: 'asc' } } },
        { chapter: { chapterNum: 'asc' } }
      ]
    })

    // 3. Store in Redis
    await redis.setex(cacheKey, cacheTTL.allLessons, lessons)
    console.log('💾 Cached all lessons (admin)')

    return NextResponse.json(lessons)
  } catch (error) {
    console.error('Error fetching lessons:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userData = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { role: true }
    })

    if (userData?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { chapterId, type, contentJson, xpReward, coinReward } = body

    const lesson = await prisma.lesson.create({
      data: {
        chapterId,
        type,
        contentJson,
        xpReward: Number(xpReward) || 10,
        coinReward: Number(coinReward) || 5
      }
    })

    // Invalidate relevant caches
    await Promise.all([
      redis.del(cacheKeys.allLessons()),
      redis.del(cacheKeys.chapterLessons(chapterId)),
    ])
    console.log('🗑️  Invalidated caches after lesson creation')

    return NextResponse.json(lesson)
  } catch (error) {
    console.error('Error creating lesson:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}