// app/api/practice/phrases/route.ts
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const level = searchParams.get('level') // e.g., '1' for A0, '10' for C2
    const lang = searchParams.get('lang') || 'zh' // Default to Chinese

    if (!level) {
      return NextResponse.json({ error: 'Level parameter is required' }, { status: 400 })
    }

    const difficulty = parseInt(level, 10)
    if (isNaN(difficulty) || difficulty < 1 || difficulty > 10) {
      return NextResponse.json({ error: 'Invalid level parameter' }, { status: 400 })
    }

    // Fetch phrases and their romanization
    const content = await prisma.vocabulary.findMany({
      where: {
        difficulty: difficulty,
        language: { code: lang },
        word: {
          contains: ' ' // Heuristic for sentences/phrases
        }
      },
      take: 30,
      select: {
        word: true,
        romanization: true, // Include Pinyin
      }
    })

    // Fallback if no sentences are found
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
