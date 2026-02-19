// app/api/admin/content/languages/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const languageSchema = z.object({
  code: z.string().length(2),
  name: z.string().min(1),
  flag: z.string().min(1), // Assuming emoji or URL
  active: z.boolean().optional().default(true),
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

    const languages = await prisma.language.findMany({
      orderBy: { name: 'asc' },
    })
    return NextResponse.json(languages)
  } catch (error) {
    console.error('Error fetching languages (admin):', error)
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
    const { code, name, flag, active } = languageSchema.parse(body)

    const newLanguage = await prisma.language.create({
      data: { code, name, flag, active },
    })
    return NextResponse.json(newLanguage, { status: 201 })
  } catch (error) {
    console.error('Error creating language (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}