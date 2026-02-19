// app/api/languages/[code]/route.ts
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  try {
    const { code } = await params

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

    return NextResponse.json(language)
  } catch (error) {
    console.error('Error fetching language details:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
