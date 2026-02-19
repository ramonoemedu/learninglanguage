// app/api/admin/content/vocabulary/[id]/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Prisma } from '@prisma/client'

const updateVocabularySchema = z.object({
  word: z.string().min(1).optional(),
  romanization: z.string().nullable().optional(),
  ipa: z.string().nullable().optional(),
  translation: z.string().min(1).optional(),
  audioUrl: z.string().url().nullable().optional(), // Allow null to remove
  imageUrl: z.string().url().nullable().optional(), // Allow null to remove
  difficulty: z.number().int().min(1).max(5).optional(),
})

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
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

    const { id } = params
    const body = await request.json()
    const parsedFields = updateVocabularySchema.parse(body)

    // Build data object dynamically, only including fields that are explicitly provided (not undefined)
    // For nullable fields, allow null to be passed directly.
    const data: Prisma.VocabularyUpdateInput = {}

    for (const key of Object.keys(parsedFields) as Array<keyof typeof parsedFields>) {
      const value = parsedFields[key];
      // Only include if not undefined. Null is a valid update value for nullable fields.
      if (value !== undefined) {
        // @ts-ignore - Prisma types can be very strict here, but this pattern is generally correct.
        data[key] = value;
      }
    }

    const updatedVocab = await prisma.vocabulary.update({
      where: { id },
      data: data,
    })
    return NextResponse.json(updatedVocab)
  } catch (error) {
    console.error('Error updating vocabulary (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
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

    const { id } = params
    await prisma.vocabulary.delete({
      where: { id },
    })
    return NextResponse.json({ message: 'Vocabulary deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting vocabulary (admin):', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}