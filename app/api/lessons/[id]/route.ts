// app/api/lessons/[id]/route.ts
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

    const { id } = await params
    const cacheKey = cacheKeys.lesson(id)

    // 1. Check Redis cache first
    const cached: any = redis ? await redis.get(cacheKey) : null
    if (cached) {
      console.log(`✅ Cache HIT for lesson: ${id}`)
      return NextResponse.json(cached)
    }

    console.log(`❌ Cache MISS for lesson: ${id}`)

    // 2. Fetch from database
    const lesson = await prisma.lesson.findUnique({
      where: { id },
      include: {
        chapter: {
          include: {
            lessons: { 
              select: { id: true }
            },
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

    // Ensure contentJson is parsed as object, not string
    let contentJson = lesson.contentJson
    if (typeof contentJson === 'string') {
      contentJson = JSON.parse(contentJson as any)
    }

    const response = {
      ...lesson,
      contentJson
    }

    // 3. Store in Redis with expiration
    if (redis) await redis.setex(cacheKey, cacheTTL.lesson, response)
    console.log(`💾 Cached lesson: ${id}`)

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching lesson:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
