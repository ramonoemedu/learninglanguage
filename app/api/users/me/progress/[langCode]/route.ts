// app/api/users/me/progress/[langCode]/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { langCode: string } }
) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { langCode } = await params

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

    return NextResponse.json({
      ...userLanguage,
      completedLessonIds: completedLessons.map(p => p.lessonId),
    })
  } catch (error) {
    console.error('Error fetching progress:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
