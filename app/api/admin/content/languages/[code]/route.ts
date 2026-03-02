import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { redis, cacheKeys } from '@/lib/cache/redis'
import { revalidatePath } from 'next/cache'

// Force dynamic rendering - don't run at build time
export const dynamic = 'force-dynamic'

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

    const userData = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { role: true }
    })

    if (userData?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { code } = await params
    const body = await request.json()
    const { name, flag, active } = body

    const language = await prisma.language.update({
      where: { code },
      data: {
        name,
        flag,
        active
      }
    })

    // Invalidate language cache
    await redis.del(cacheKeys.language(code))
    console.log(`🗑️ Invalidated language cache: ${code}`)
    
    revalidatePath('/admin/content/languages')
    revalidatePath(`/learn/${code}`)

    return NextResponse.json(language)
  } catch (error) {
    console.error('Error updating language:', error)
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

    const userData = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { role: true }
    })

    if (userData?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { code } = await params

    await prisma.language.delete({
      where: { code }
    })

    // Invalidate language cache
    await redis.del(cacheKeys.language(code))
    console.log(`🗑️ Invalidated language cache: ${code}`)
    
    revalidatePath('/admin/content/languages')
    revalidatePath(`/learn/${code}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting language:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}