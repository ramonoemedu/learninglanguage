// app/api/lessons/[id]/route.ts
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

    const { id } = params

    const lesson = await prisma.lesson.findUnique({
      where: { id },
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
    
    return NextResponse.json({
      ...lesson,
      contentJson
    })
  } catch (error) {
    console.error('Error fetching lesson:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
