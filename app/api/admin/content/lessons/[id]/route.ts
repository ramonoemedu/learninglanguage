import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'
import { redis, cacheKeys } from '@/lib/cache/redis'

// Force dynamic rendering - don't run at build time
export const dynamic = 'force-dynamic'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!prisma) return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })

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

    const { id } = await params
    const body = await request.json()
    const { chapterId, type, contentJson, xpReward, coinReward } = body

    // Update in database
    const lesson = await prisma.lesson.update({
      where: { id },
      data: {
        chapterId,
        type,
        contentJson,
        xpReward: Number(xpReward),
        coinReward: Number(coinReward)
      }
    })

    // 🔴 CRITICAL: Cache invalidation
    if (redis) {
      await Promise.all([
        redis.del(cacheKeys.lesson(id)),
        redis.del(cacheKeys.chapterLessons(chapterId)),
        redis.del(cacheKeys.allLessons()),
      ])
      console.log(`🗑️  Invalidated caches for lesson: ${id}`)
    }

    // Revalidate Next.js cache
    revalidatePath('/admin/content/lessons')
    revalidatePath(`/lesson/${id}`)
    revalidatePath(`/(dashboard)/learn/[langCode]/chapter/[id]`, 'page')

    return NextResponse.json(lesson)
  } catch (error) {
    console.error('Error updating lesson:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!prisma) return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })

    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userData = await prisma.user.findUnique({ where: { id: authUser.id }, select: { role: true } })

    if (userData?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { id } = await params

    // Get lesson details before deletion for cache invalidation
    const lesson = await prisma.lesson.findUnique({
      where: { id },
      select: { chapterId: true }
    })

    await prisma.lesson.delete({ where: { id } })

    // 🔴 CRITICAL: Cache invalidation
    if (lesson && redis) {
      await Promise.all([
        redis.del(cacheKeys.lesson(id)),
        redis.del(cacheKeys.chapterLessons(lesson.chapterId)),
        redis.del(cacheKeys.allLessons()),
      ])
      console.log(`🗑️  Invalidated caches after lesson deletion: ${id}`)
    }

    // Revalidate Next.js cache
    revalidatePath('/admin/content/lessons')
    revalidatePath(`/lesson/${id}`)
    revalidatePath(`/(dashboard)/learn/[langCode]/chapter/[id]`, 'page')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting lesson:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}