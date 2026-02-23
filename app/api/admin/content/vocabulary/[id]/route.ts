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

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  if (!await checkAdmin()) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  try {
    const body = await request.json()
    const updated = await prisma.vocabulary.update({
      where: { id: params.id },
      data: body
    })
    return NextResponse.json(updated)
  } catch (e) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  if (!await checkAdmin()) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  try {
    await prisma.vocabulary.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}