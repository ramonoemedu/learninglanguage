import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkAllStages() {
  try {
    // Get all stages for Chinese
    const stages = await prisma.stage.findMany({
      where: {
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
      },
      orderBy: {
        stageNumber: 'asc'
      }
    });

    if (stages.length === 0) {
      console.log('❌ No stages found!');
      return;
    }

    console.log('\n🎓 CHINESE LANGUAGE CURRICULUM SUMMARY\n');
    console.log('='.repeat(60));

    let totalChapters = 0;
    let totalLessons = 0;

    stages.forEach((stage) => {
      const chapterCount = stage.chapters.length;
      const lessonCount = stage.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0);
      
      totalChapters += chapterCount;
      totalLessons += lessonCount;

      console.log(`\n📚 Stage ${stage.stageNumber}: ${stage.title}`);
      console.log(`   Chapters: ${chapterCount} | Lessons: ${lessonCount}`);
      
      if (chapterCount > 0) {
        stage.chapters.forEach((chapter) => {
          const lessonTypes = chapter.lessons.map(l => l.type).join(', ');
          console.log(`   └─ Ch${chapter.chapterNum}: ${chapter.title} (${chapter.lessons.length} lessons: ${lessonTypes})`);
        });
      } else {
        console.log(`   └─ No chapters`);
      }
    });

    console.log('\n' + '='.repeat(60));
    console.log(`\n✨ TOTAL: ${stages.length} stages | ${totalChapters} chapters | ${totalLessons} lessons\n`);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAllStages();
