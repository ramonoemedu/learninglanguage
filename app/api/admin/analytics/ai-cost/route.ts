// app/api/admin/analytics/ai-cost/route.ts
import { prisma } from '@/lib/db/prisma'
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const aiCostQuerySchema = z.object({
  // You might want to add date range, model filter etc. later
})

export async function GET(request: Request) {
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

    // For now, we don't have a specific AI cost tracking table.
    // This would typically involve:
    // 1. Storing token usage per request in a database table.
    // 2. Aggregating those records.
    // As a placeholder, we'll return mock data.

    const mockAICostData = {
      totalCostThisMonth: 14.20, // Example value
      totalTokensUsed: 1500000,
      costPerUser: [
        { userId: 'user1', userName: 'Alice', cost: 5.50 },
        { userId: 'user2', userName: 'Bob', cost: 3.20 },
      ],
      usageByService: [
        { service: 'GPT-4o-mini Chat', cost: 8.00 },
        { service: 'Whisper (Speech-to-Text)', cost: 4.00 },
        { service: 'TTS (Text-to-Speech)', cost: 2.20 },
      ],
    }

    return NextResponse.json(mockAICostData)
  } catch (error) {
    console.error('Error fetching AI cost analytics (admin):', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
