// app/api/gamification/coins/spend/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const spendCoinsSchema = z.object({
  amount: z.number().int().positive(),
  reason: z.string().min(1),
  sourceType: z.string().min(1),
  sourceId: z.string().min(1),
})

export async function POST(request: Request) {
  try {
    if (!prisma) return NextResponse.json({ error: 'Database unavailable' }, { status: 503 })

    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { amount, reason, sourceType, sourceId } = spendCoinsSchema.parse(body)

    const user = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { coins: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (user.coins < amount) {
      return NextResponse.json({ error: 'Not enough coins' }, { status: 400 })
    }

    // Deduct coins from user
    await prisma.user.update({
      where: { id: authUser.id },
      data: {
        coins: { decrement: amount },
      },
    })

    // Record transaction
    await prisma.coinTransaction.create({
      data: {
        userId: authUser.id,
        amount: -amount, // Negative for spending
        type: 'spend',
        reason,
      },
    })

    return NextResponse.json({ success: true, newCoinBalance: user.coins - amount })
  } catch (error) {
    console.error('Error spending coins:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
