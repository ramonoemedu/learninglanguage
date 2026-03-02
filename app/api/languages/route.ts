// app/api/languages/route.ts
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    if (!prisma) return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })
    const languages = await prisma.language.findMany({
      where: { active: true },
      orderBy: { name: 'asc' },
    })
    return NextResponse.json(languages)
  } catch (error) {
    console.error('Error fetching languages:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
