// app/api/ai/pronounce/route.ts
import { createClient } from '@/lib/supabase/server'
import { openai } from '@/lib/openai/client'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

// Necessary for handling FormData with audio files
export const runtime = 'nodejs'; // Use Node.js runtime for API route
export const dynamic = 'force-dynamic'; // Ensure dynamic behavior, as FormData is involved

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const audioFile = formData.get('audio') as File | null
    const targetText = formData.get('targetText') as string | null
    const language = formData.get('language') as string | null // e.g., 'zh', 'en'

    if (!audioFile || !targetText || !language) {
      return NextResponse.json({ error: 'Missing audio file, target text, or language' }, { status: 400 })
    }

    // Convert File to Blob for OpenAI API
    const audioBlob = new Blob([audioFile], { type: audioFile.type });

    // 1. Transcribe audio with OpenAI Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: new File([audioBlob], "audio.webm", { type: "audio/webm" }), // Create a File object
      model: "whisper-1",
      language: language, // Pass language to Whisper for better accuracy
    });

    const transcribedText = transcription.text.toLowerCase().trim();
    const cleanTargetText = targetText.toLowerCase().trim();

    // 2. Simple comparison (Levenshtein distance for scoring in more advanced versions)
    // For now, a basic similarity check
    const isMatch = transcribedText.includes(cleanTargetText) || cleanTargetText.includes(transcribedText);
    const score = isMatch ? 95 : Math.floor(Math.random() * 50); // Placeholder score

    let feedback = '';
    if (!isMatch) {
      // Use GPT-4o-mini for feedback if transcription is poor
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: 'system', content: `You are a language teacher providing pronunciation feedback. The target text was "${targetText}". The user said "${transcribedText}". Provide a concise, helpful tip. Start with "Tip:".` },
          { role: 'user', content: `Target: "${targetText}". User said: "${transcribedText}". Feedback:` },
        ],
        max_tokens: 60,
      });
      feedback = chatCompletion.choices[0]?.message?.content || "Tip: Try to speak more clearly.";
    } else {
      feedback = "Great job! Your pronunciation is clear.";
    }

    // 3. Save attempt (optional for now, but good to have the schema)
    // await prisma.speechAttempt.create({
    //   data: {
    //     userId: user.id,
    //     targetText,
    //     language,
    //     audioUrl: '...', // Upload to R2 later if needed
    //     transcript: transcribedText,
    //     score,
    //     feedbackJson: feedback,
    //   },
    // });

    return NextResponse.json({
      score,
      transcript: transcribedText,
      feedback,
    });
  } catch (error) {
    console.error('Error in pronunciation API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
