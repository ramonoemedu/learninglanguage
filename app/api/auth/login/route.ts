// app/api/auth/login/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export async function POST(request: Request) {
  try {
    // Check if Prisma is available
    if (!prisma) {
      console.error('❌ Prisma database client not initialized - DATABASE_URL may not be configured')
      return NextResponse.json(
        { error: 'Database service unavailable. Please ensure DATABASE_URL is set in your Vercel environment variables.' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { email, password } = loginSchema.parse(body)

    const supabase = await createClient()

    // 1. Authenticate with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: 'Failed to login' }, { status: 400 })
    }

    // 2. Fetch user from PostgreSQL to ensure they exist in our DB
    const user = await prisma.user.findUnique({
      where: { id: authData.user.id },
    })

    if (!user) {
      // If user exists in Auth but not in DB, create it (fallback)
      const newUser = await prisma.user.create({
        data: {
          id: authData.user.id,
          email: authData.user.email!,
          name: authData.user.user_metadata?.name || 'User',
          role: authData.user.user_metadata?.role || 'learner',
          plan: 'free',
        },
      })
      return NextResponse.json({ user: newUser }, { status: 200 })
    }

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
