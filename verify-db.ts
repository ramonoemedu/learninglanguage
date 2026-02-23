import { config } from 'dotenv'
config({ path: '.env.local' })
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Connecting to database...')
    await prisma.$connect()
    console.log('Successfully connected to the database.')

    // Verify Users
    const userCount = await prisma.user.count()
    console.log(`Found ${userCount} users in the database.`)

    if (userCount > 0) {
      const firstUser = await prisma.user.findFirst({
        include: {
          userLanguages: true,
        }
      })
      console.log('First user sample:', JSON.stringify(firstUser, null, 2))
    }

    // Verify Languages
    const languages = await prisma.language.findMany()
    console.log(`Found ${languages.length} languages:`, languages.map(l => l.name).join(', '))

  } catch (error) {
    console.error('Error connecting to database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()