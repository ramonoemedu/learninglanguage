// app/api/admin/content/lessons/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const lessonSchema = z.object({
  chapterId: z.string().min(1),
  type: z.enum(['vocab', 'grammar', 'listen', 'speak', 'write', 'read', 'dialogue']),
  contentJson: z.any(), // Flexible JSON content for lessons
  xpReward: z.number().int().min(0).default(10),
  coinReward: z.number().int().min(0).default(5),
})

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: userData } = await supabase.from('users').select('role').eq('id', authUser.id).single()

    if (userData?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const lessons = await prisma.lesson.findMany({
      include: {
        chapter: {
          include: {
            stage: {
              include: {
                language: true,
              },
            },
          },
        },
      },
      orderBy: [
        { chapter: { stage: { language: { name: 'asc' } } } },
        { chapter: { stage: { stageNumber: 'asc' } } },
        { chapter: { chapterNum: 'asc' } },
        { type: 'asc' },
      ],
    })
    return NextResponse.json(lessons)
  } catch (error) {
    console.error('Error fetching lessons (admin):', error)
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

    const { data: userData } = await supabase.from('users').select('role').eq('id', authUser.id).single()

    if (userData?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const newLesson = lessonSchema.parse(body)

    const createdLesson = await prisma.lesson.create({
      data: {
        ...newLesson,
        contentJson: newLesson.contentJson || {}, // Ensure contentJson is always an object
      },
    })
    return NextResponse.json(createdLesson, { status: 201 })
  } catch (error) {
    console.error('Error creating lesson (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
