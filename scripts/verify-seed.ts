// scripts/verify-seed.ts
import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface QuestionItem {
  word?: string;
  pinyin?: string;
  translation?: string;
  targetLanguage?: string;
  nativeLanguage?: string;
  correctAnswer?: string;
}

async function verify() {
  console.log('--- Database Verification ---');
  
  const vocabCount = await prisma.vocabulary.count();
  console.log(`Total Vocabulary Items: ${vocabCount}`);

  const stages = [1, 2, 10];

  for (const stage of stages) {
    console.log(`\n--- Verifying Stage ${stage} Lessons ---`);
    for (let i = 1; i <= 5; i++) {
      const chapterId = `zh-stage${stage}-ch${i}`;
      
      const lessons = await prisma.lesson.findMany({
        where: { id: { contains: chapterId } },
        orderBy: { type: 'asc' }
      });

      if (lessons.length > 0) {
        console.log(`\n[Chapter ${i}] Checking lessons for ${chapterId}...`);
        lessons.forEach(lesson => {
          const content = lesson.contentJson as any;
          const questions = content.questions as QuestionItem[];
          const sample = questions?.[0];
          console.log(`  • ${lesson.type.padEnd(10)} | ${questions?.length || 0} items | Ans: ${sample?.correctAnswer || 'MISSING'} | Sample: ${sample?.word || 'N/A'}`);
        });
      } else if (stage === 1 || (stage === 2 && i === 1)) {
        // Only log missing for expected chapters
        console.log(`\n[Chapter ${i}] ❌ No lessons found for ${chapterId}`);
      }
    }
  }

  console.log('\n--- Verification Complete ---');
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
