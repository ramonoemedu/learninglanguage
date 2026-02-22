// app/api/practice/phrases/route.ts
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const level = searchParams.get('level')
    const lang = searchParams.get('lang') || 'zh'

    if (!level) {
      return NextResponse.json({ error: 'Level parameter is required' }, { status: 400 })
    }

    const difficulty = parseInt(level, 10)
    if (isNaN(difficulty) || difficulty < 1 || difficulty > 10) {
      return NextResponse.json({ error: 'Invalid level parameter' }, { status: 400 })
    }

    const content = await prisma.vocabulary.findMany({
      where: {
        difficulty: difficulty,
        language: { code: lang },
        word: {
          contains: ' '
        }
      },
      take: 30,
      select: {
        word: true,
        romanization: true,
        translation: true,
      }
    })

    if (content.length < 5) {
      const fallbackContent = await prisma.vocabulary.findMany({
        where: {
          difficulty: difficulty,
          language: { code: lang },
        },
        take: 30,
        select: {
          word: true,
          romanization: true,
          translation: true,
        }
      })
      return NextResponse.json({ phrases: fallbackContent })
    }

    return NextResponse.json({ phrases: content })

  } catch (error) {
    console.error('Failed to fetch practice phrases:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
