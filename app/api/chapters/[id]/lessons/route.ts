// app/api/chapters/[id]/lessons/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { redis, cacheKeys, cacheTTL } from '@/lib/cache/redis'

export const revalidate = 0 // Disable Next.js static caching
export const dynamic = 'force-dynamic' // Don't run at build time

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id: chapterId } = await params
    const cacheKey = cacheKeys.chapterLessons(chapterId)

    // 1. Check Redis cache first (excluding user-specific completion data)
    const cached = redis ? await redis.get(cacheKey) : null
    
    // 2. Always fetch user progress (user-specific, not cacheable globally)
    const completedLessons = await prisma.userProgress.findMany({
      where: { userId: user.id },
      select: { lessonId: true },
    })
    const completedLessonIds = completedLessons.map(p => p.lessonId)

    if (cached) {
      console.log(`✅ Cache HIT for chapter lessons: ${chapterId}`)
      const chapter = cached as any
      return NextResponse.json({
        ...chapter,
        lessons: chapter.lessons.map((lesson: any) => ({
          ...lesson,
          completed: completedLessonIds.includes(lesson.id),
        }))
      })
    }

    console.log(`❌ Cache MISS for chapter lessons: ${chapterId}`)

    // 3. Fetch from database
    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
      include: {
        lessons: true,
      },
    })

    if (!chapter) {
      return NextResponse.json({ error: 'Chapter not found' }, { status: 404 })
    }

    // 4. Store base chapter data in Redis (without user-specific completion)
    if (redis) await redis.setex(cacheKey, cacheTTL.chapterLessons, chapter)
    console.log(`💾 Cached chapter lessons: ${chapterId}`)

    // 5. Merge with user progress
    return NextResponse.json({
      ...chapter,
      lessons: chapter.lessons.map(lesson => ({
        ...lesson,
        completed: completedLessonIds.includes(lesson.id),
      }))
    })
  } catch (error) {
    console.error('Error fetching lessons:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
