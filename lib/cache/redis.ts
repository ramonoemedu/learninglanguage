import { Redis } from '@upstash/redis'

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  throw new Error('Missing Upstash Redis environment variables')
}

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

// Cache key generators
export const cacheKeys = {
  lesson: (id: string) => `lesson:${id}`,
  chapterLessons: (chapterId: string) => `chapter:${chapterId}:lessons`,
  allLessons: () => 'lessons:all',
  chapter: (id: string) => `chapter:${id}`,
  language: (code: string) => `language:${code}`,
  userProgress: (userId: string, langCode: string) => `user:${userId}:progress:${langCode}`,
}

// Cache TTLs (in seconds)
export const cacheTTL = {
  lesson: 3600, // 1 hour
  chapterLessons: 1800, // 30 minutes
  allLessons: 600, // 10 minutes
  language: 3600, // 1 hour
  userProgress: 300, // 5 minutes
}
