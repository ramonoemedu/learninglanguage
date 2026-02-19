// app/api/leaderboard/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const leaderboardQuerySchema = z.object({
  langCode: z.string().length(2).optional(), // Optional: filter by language
})

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const langCode = searchParams.get('langCode')

    const { langCode: validatedLangCode } = leaderboardQuerySchema.parse({ langCode })

    const startOfWeek = new Date()
    startOfWeek.setUTCHours(0, 0, 0, 0)
    startOfWeek.setUTCDate(startOfWeek.getUTCDate() - (startOfWeek.getUTCDay() + 6) % 7) // Monday start of week

    const whereClause: any = {
      weekStart: startOfWeek,
    }

    if (validatedLangCode) {
      whereClause.languageCode = validatedLangCode
    }

    const leaderboardEntries = await prisma.leaderboardEntry.findMany({
      where: whereClause,
      orderBy: { xpEarned: 'desc' },
      take: 100, // Top 100 as per spec
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
            xpTotal: true,
          },
        },
        language: {
          select: {
            name: true,
            flag: true,
          },
        },
      },
    })

    // Add rank
    const rankedEntries = leaderboardEntries.map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }))

    return NextResponse.json(rankedEntries)
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
