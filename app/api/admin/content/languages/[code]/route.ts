// app/api/admin/content/languages/[code]/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const updateLanguageSchema = z.object({
  name: z.string().min(1).optional(),
  flag: z.string().min(1).optional(),
  active: z.boolean().optional(),
})

export async function PATCH(
  request: Request,
  { params }: { params: { code: string } }
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

    const { code } = params
    const body = await request.json()
    const { name, flag, active } = updateLanguageSchema.parse(body)

    const updatedLanguage = await prisma.language.update({
      where: { code },
      data: {
        ...(name && { name }),
        ...(flag && { flag }),
        ...(active !== undefined && { active }),
      },
    })
    return NextResponse.json(updatedLanguage)
  } catch (error) {
    console.error('Error updating language (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { code: string } }
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

    const { code } = params
    await prisma.language.delete({
      where: { code },
    })
    return NextResponse.json({ message: 'Language deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting language (admin):', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
