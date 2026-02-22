// scripts/verify-seed.ts
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verify() {
  console.log('--- Database Verification ---');
  
  const vocabCount = await prisma.vocabulary.count();
  console.log(`Total Vocabulary Items: ${vocabCount}`);

  // 1. Verify Greetings (Stage 1, Chapter 1)
  const greetingsLesson = await prisma.lesson.findFirst({
    where: { id: { contains: 'stage1-ch1' } },
    include: { chapter: true }
  });
  console.log('
[Stage 1, Chapter 1 (Greetings)]');
  if (greetingsLesson) {
    const questions = greetingsLesson.contentJson.questions;
    console.log(`- Sample Words: ${questions.map(q => q.word).join(', ')}`);
  } else {
    console.log('- No lesson found for Stage 1, Chapter 1.');
  }

  // 2. Verify Food (Stage 2, Chapter 1)
  const foodLesson = await prisma.lesson.findFirst({
    where: { id: { contains: 'stage2-ch1' } },
    include: { chapter: true }
  });
  console.log('
[Stage 2, Chapter 1 (Food)]');
  if (foodLesson) {
    const questions = foodLesson.contentJson.questions;
    console.log(`- Sample Words: ${questions.map(q => q.word).join(', ')}`);
  } else {
    console.log('- No lesson found for Stage 2, Chapter 1.');
  }

  console.log('
--- Verification Complete ---');
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
