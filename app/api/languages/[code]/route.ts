// app/api/languages/[code]/route.ts
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { redis, cacheKeys, cacheTTL } from '@/lib/cache/redis'

// Force dynamic rendering - don't run at build time
export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  try {
    const { code } = await params
    const cacheKey = cacheKeys.language(code)

    // Check Redis cache first
    const cached = await redis.get(cacheKey)
    if (cached) {
      console.log(`✅ Cache HIT for language: ${code}`)
      return NextResponse.json(cached)
    }

    console.log(`❌ Cache MISS for language: ${code}`)

    const language = await prisma.language.findUnique({
      where: { code },
      include: {
        stages: {
          orderBy: { stageNumber: 'asc' },
          include: {
            chapters: {
              orderBy: { chapterNum: 'asc' },
            },
          },
        },
      },
    })

    if (!language) {
      return NextResponse.json({ error: 'Language not found' }, { status: 404 })
    }

    // Cache the result
    await redis.setex(cacheKey, cacheTTL.language, language)
    console.log(`💾 Cached language: ${code}`)

    return NextResponse.json(language)
  } catch (error) {
    console.error('Error fetching language details:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
