// app/api/ai/tts/route.ts
// 🎉 NOW 100% FREE - Uses browser Web Speech API (speechSynthesis)
// Cost: $0 (was ~$45/month)
// Note: This route is DEPRECATED. Use client-side Web Speech API instead:
// window.speechSynthesis.speak(utterance) in the browser

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  return NextResponse.json(
    {
      error: 'TTS API is deprecated. Use browser Web Speech API instead.',
      message: 'Client-side implementation: window.speechSynthesis.speak(utterance)',
      docs: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
    },
    { status: 410 }
  )
}
