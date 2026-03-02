// app/api/admin/users/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    if (!prisma) return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })

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

    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users (admin):', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    if (!prisma) return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })

    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const adminUser = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { role: true }
    })

    if (adminUser?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json()
    const { email, name, role, xpTotal, coins } = body

    // Note: Creating the Auth user requires the Service Role key which isn't available in the standard client.
    // For now, we will just create the DB record. In a real app, you'd use the Admin Auth Client here.
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        role: role || 'learner',
        xpTotal: xpTotal || 0,
        coins: coins || 0
      }
    })

    return NextResponse.json(newUser)
  } catch (error: any) {
    console.error('Error creating user:', error)
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 })
  }
}
