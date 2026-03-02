import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

// Only instantiate Prisma if DATABASE_URL is available (runtime, not build time)
if (!globalForPrisma.prisma) {
  if (process.env.DATABASE_URL) {
    globalForPrisma.prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    })
  } else {
    console.warn('⚠️ DATABASE_URL not set - database connections will fail. Please configure DATABASE_URL in your environment variables.')
  }
}

export const prisma = globalForPrisma.prisma
