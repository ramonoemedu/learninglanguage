// app/api/admin/content/chapters/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const chapterSchema = z.object({
  stageId: z.string().min(1),
  chapterNum: z.number().int().positive(),
  title: z.string().min(1),
})

export async function GET() {
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

    const chapters = await prisma.chapter.findMany({
      include: {
        stage: {
          include: {
            language: true,
          },
        },
      },
      orderBy: [{ stage: { language: { name: 'asc' } } }, { stage: { stageNumber: 'asc' } }, { chapterNum: 'asc' }],
    })
    return NextResponse.json(chapters)
  } catch (error) {
    console.error('Error fetching chapters (admin):', error)
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
    const { stageId, chapterNum, title } = chapterSchema.parse(body)

    const newChapter = await prisma.chapter.create({
      data: { stageId, chapterNum, title },
    })
    return NextResponse.json(newChapter, { status: 201 })
  } catch (error) {
    console.error('Error creating chapter (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
