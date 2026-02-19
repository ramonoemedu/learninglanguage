// app/api/admin/content/vocabulary/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Prisma } from '@prisma/client' // Import Prisma for types

const vocabularySchema = z.object({
  languageId: z.string().min(1),
  word: z.string().min(1),
  romanization: z.string().nullable().optional(),
  ipa: z.string().nullable().optional(),
  translation: z.string().min(1),
  audioUrl: z.string().url().nullable().optional(),
  imageUrl: z.string().url().nullable().optional(),
  difficulty: z.number().int().min(1).max(5).default(1),
})

export async function GET() {
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

    const vocabulary = await prisma.vocabulary.findMany({
      include: {
        language: true,
      },
      orderBy: [{ language: { name: 'asc' } }, { word: 'asc' }],
    })
    return NextResponse.json(vocabulary)
  } catch (error) {
    console.error('Error fetching vocabulary (admin):', error)
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

    const { data: userData } = await supabase.from('users').select('role').eq('id', authUser.id).single()

    if (userData?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const newVocabInput = vocabularySchema.parse(body)

    const createdVocab = await prisma.vocabulary.create({
      data: newVocabInput as any, // Bypass strict type checking for now
    })
    return NextResponse.json(createdVocab, { status: 201 })
  } catch (error) {
    console.error('Error creating vocabulary (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}