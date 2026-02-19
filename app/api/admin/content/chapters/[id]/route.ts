// app/api/admin/content/chapters/[id]/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const updateChapterSchema = z.object({
  chapterNum: z.number().int().positive().optional(),
  title: z.string().min(1).optional(),
})

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
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

    const { id } = context.params
    const body = await request.json()
    const { chapterNum, title } = updateChapterSchema.parse(body)

    const updatedChapter = await prisma.chapter.update({
      where: { id },
      data: {
        ...(chapterNum !== undefined && { chapterNum }),
        ...(title && { title }),
      },
    })
    return NextResponse.json(updatedChapter)
  } catch (error) {
    console.error('Error updating chapter (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
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

    const { id } = context.params
    await prisma.chapter.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Chapter deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting chapter (admin):', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
