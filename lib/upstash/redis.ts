// lib/upstash/redis.ts
import { Redis } from '@upstash/redis'

// Only instantiate Redis if environment variables are available (runtime, not build time)
if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('⚠️  Upstash Redis environment variables not set. Redis features will be unavailable.')
  }
}

export const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : undefined as any as Redis // Type cast to avoid type errors, will be available at runtime
