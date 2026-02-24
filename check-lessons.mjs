import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'

config({ path: '.env.local' })

const prisma = new PrismaClient()

async function main() {
  try {
    const lessons = await prisma.lesson.findMany({
      where: {
        chapterId: {
          startsWith: 'zh-stage',
        },
        id: {
          contains: '-speak',
        },
      },
      orderBy: { chapterId: 'asc' },
      select: {
        id: true,
        chapterId: true,
        type: true,
        contentJson: true,
      },
    })

    const filtered = lessons.filter((lesson) => {
      const match = lesson.chapterId.match(/^zh-stage(\d+)-ch/)
      if (!match) return false
      const stageNum = Number(match[1])
      return stageNum >= 4 && stageNum <= 9
    })

    console.log('=== zh-stage4 to zh-stage9 speak lessons ===')
    console.log(`Found ${filtered.length} lessons\n`)

    for (const lesson of filtered) {
      const questions = lesson.contentJson?.questions || []
      const first = questions[0]
      console.log(`ID: ${lesson.id}`)
      console.log(`Chapter: ${lesson.chapterId}`)
      console.log(`Type: ${lesson.type}`)
      if (first) {
        console.log(`First Question Type: ${first.type}`)
        console.log(`First Word: ${first.word || first.prompt || 'N/A'}`)
        console.log(`First Correct: ${first.correctAnswer || 'N/A'}`)
      }
      console.log('---')
    }
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
