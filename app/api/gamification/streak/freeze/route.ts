// app/api/gamification/streak/freeze/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

// No body schema needed for this, but keeping for consistency
const freezeStreakSchema = z.object({})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: authUser.id },
      select: { coins: true, streakFreezeActive: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (user.streakFreezeActive) {
      return NextResponse.json({ error: 'Streak freeze already active' }, { status: 400 })
    }

    const FREEZE_COST = 15 // As per spec
    if (user.coins < FREEZE_COST) {
      return NextResponse.json({ error: 'Not enough coins to activate streak freeze' }, { status: 400 })
    }

    // Deduct coins and activate freeze
    await prisma.user.update({
      where: { id: authUser.id },
      data: {
        coins: { decrement: FREEZE_COST },
        streakFreezeActive: true,
      },
    })

    // Record transaction
    await prisma.coinTransaction.create({
      data: {
        userId: authUser.id,
        amount: -FREEZE_COST,
        type: 'spend',
        reason: 'Activated streak freeze',
      },
    })

    return NextResponse.json({ success: true, newCoinBalance: user.coins - FREEZE_COST, streakFreezeActive: true })
  } catch (error) {
    console.error('Error activating streak freeze:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
