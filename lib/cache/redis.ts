import { Redis } from '@upstash/redis'

// Only instantiate Redis if environment variables are available (runtime, not build time)
export const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : undefined

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
