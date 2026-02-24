import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkStage1() {
  try {
    // Get Stage 1 for Chinese
    const stage1 = await prisma.stage.findFirst({
      where: {
        stageNumber: 1,
        language: {
          code: 'zh'
        }
      },
      include: {
        chapters: {
          include: {
            lessons: true
          },
          orderBy: {
            chapterNum: 'asc'
          }
        }
      }
    });

    if (!stage1) {
      console.log('❌ Stage 1 not found!');
      return;
    }

    console.log(`\n📚 Stage 1: ${stage1.title}`);
    console.log(`Total Chapters: ${stage1.chapters.length}\n`);

    stage1.chapters.forEach((chapter) => {
      console.log(`Chapter ${chapter.chapterNum}: ${chapter.title}`);
      console.log(`  Lessons: ${chapter.lessons.length}`);
      chapter.lessons.forEach((lesson) => {
        console.log(`    - ${lesson.id} (${lesson.type})`);
      });
      console.log('');
    });

    // Summary
    const totalLessons = stage1.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
    console.log(`\n✨ Total: ${stage1.chapters.length} chapters, ${totalLessons} lessons\n`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkStage1();
