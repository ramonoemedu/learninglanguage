// app/api/chapters/[id]/lessons/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

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

    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
      include: {
        lessons: true,
      },
    })

    if (!chapter) {
      return NextResponse.json({ error: 'Chapter not found' }, { status: 404 })
    }

    // Get list of completed lesson IDs for this user
    const completedLessons = await prisma.userProgress.findMany({
      where: { userId: user.id },
      select: { lessonId: true },
    })

    const completedLessonIds = completedLessons.map(p => p.lessonId)

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
