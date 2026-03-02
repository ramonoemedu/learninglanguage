// app/api/auth/register/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
})

export async function POST(request: Request) {
  try {
    // Check if Prisma is available
    if (!prisma) {
      console.error('Database not available')
      return NextResponse.json({ error: 'Database connection unavailable' }, { status: 503 })
    }

    const body = await request.json()
    const { email, password, name } = registerSchema.parse(body)

    const supabase = await createClient()

    // 1. Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role: 'learner',
        },
      },
    })

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    if (!authData.user) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 400 })
    }

    // 2. Create user in PostgreSQL via Prisma
    const user = await prisma.user.create({
      data: {
        id: authData.user.id,
        email,
        name,
        role: 'learner',
        plan: 'free',
      },
    })

    return NextResponse.json({ user }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
