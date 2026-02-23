// lib/openai/client.ts
import OpenAI from 'openai'

// Use a placeholder during build time if the key is missing
// This prevents build failures while still requiring the key at runtime
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'sk-placeholder-key-for-build',
})

export const OPENAI_TTS_MODEL = 'tts-1'
export const OPENAI_CHAT_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini'

// Helper function to check if OpenAI is properly configured
export function isOpenAIConfigured(): boolean {
  return !!process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'sk-placeholder-key-for-build'
}

// Helper function to ensure OpenAI is configured, throw error if not
export function ensureOpenAIConfigured(): void {
  if (!isOpenAIConfigured()) {
    throw new Error('OpenAI API key is not configured. Please set the OPENAI_API_KEY environment variable.')
  }
}
