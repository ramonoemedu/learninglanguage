// app/api/users/me/progress/[langCode]/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { redis, cacheKeys, cacheTTL } from '@/lib/cache/redis'

// Force dynamic rendering - don't run at build time
export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { langCode: string } }
) {
  try {
    // Check if Prisma is available
    if (!prisma) {
      console.error('Database not available')
      return NextResponse.json({ error: 'Database connection unavailable' }, { status: 503 })
    }

    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { langCode } = await params
    const cacheKey = cacheKeys.userProgress(user.id, langCode)

    // Check Redis cache first
    const cached = redis ? await redis.get(cacheKey) : null
    if (cached) {
      console.log(`✅ Cache HIT for user progress: ${user.id}:${langCode}`)
      return NextResponse.json(cached)
    }

    console.log(`❌ Cache MISS for user progress: ${user.id}:${langCode}`)

    const userLanguage = await prisma.userLanguage.findUnique({
      where: {
        userId_languageCode: {
          userId: user.id,
          languageCode: langCode,
        },
      },
    })

    if (!userLanguage) {
      return NextResponse.json({ error: 'Progress not found for this language' }, { status: 404 })
    }

    // Get list of completed lesson IDs for this user
    const completedLessons = await prisma.userProgress.findMany({
      where: { userId: user.id },
      select: { lessonId: true },
    })

    const response = {
      ...userLanguage,
      completedLessonIds: completedLessons.map(p => p.lessonId),
    }

    // Cache the result
    if (redis) await redis.setex(cacheKey, cacheTTL.userProgress, response)
    console.log(`💾 Cached user progress: ${user.id}:${langCode}`)

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching progress:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
