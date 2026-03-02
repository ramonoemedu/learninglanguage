// app/api/ai/chat/route.ts
// 🎉 DISABLED - Not needed for this platform
// Cost: $0 (was ~$10/month)
// Note: Chat AI feature has been explicitly disabled per user request

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  return NextResponse.json(
    {
      error: 'AI Chat feature has been disabled',
      message: 'This feature is not part of your FREE platform',
    },
    { status: 410 }
  )
}
