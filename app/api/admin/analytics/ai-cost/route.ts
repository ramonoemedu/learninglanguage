import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

// Force dynamic rendering - don't run at build time
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
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

    // Mock data for analytics visualization
    const aiCostData = {
      totalCostThisMonth: 12.50,
      totalTokensUsed: 450000,
      costPerUser: [],
      usageByService: [
        { service: 'TTS (OpenAI)', cost: 8.20 },
        { service: 'Grammar (GPT-4)', cost: 4.30 }
      ]
    }

    return NextResponse.json(aiCostData)
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}