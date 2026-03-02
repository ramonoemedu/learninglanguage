import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

const checkAdmin = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const dbUser = await prisma.user.findUnique({ where: { id: user.id }, select: { role: true } })
  return dbUser?.role === 'admin' ? user : null
}

// Force dynamic rendering - don't run at build time
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  if (!await checkAdmin()) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang')

  const where = lang ? { language: { code: lang } } : {}

  const vocab = await prisma.vocabulary.findMany({
    where,
    include: { language: true },
    orderBy: { word: 'asc' },
  })
  return NextResponse.json(vocab)
}

export async function POST(request: Request) {
  if (!await checkAdmin()) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  try {
    const body = await request.json()
    const { word, romanization, translation, languageId, difficulty } = body

    const newItem = await prisma.vocabulary.create({
      data: {
        word,
        romanization,
        translation,
        languageId,
        difficulty: Number(difficulty) || 1
      }
    })
    return NextResponse.json(newItem)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 })
  }
}