// scripts/verify-seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verify() {
  console.log('--- Final Curriculum Verification ---');
  
  try {
    // 1. Check Chinese Stage 1 Chapter 1
    const chapterId = 'zh-stage1-ch1';
    const lessons = await prisma.lesson.findMany({
      where: { chapterId: chapterId },
      select: { type: true, id: true }
    });

    console.log(`\n[Chapter: ${chapterId}]`);
    console.log(`Total Lessons: ${lessons.length} (Expected: 5)`);
    console.log('Modules:', lessons.map(l => l.type).join(', '));

    const hasWriting = lessons.some(l => l.type === 'writing');
    console.log('Writing Module Present:', hasWriting ? '✅ YES' : '❌ NO');

    // 2. Check a Stage 3 Chapter to ensure expansion
    const s3Count = await prisma.lesson.count({
      where: { id: { contains: 'stage3' } }
    });
    console.log(`\n[Stage 3 Expansion]`);
    console.log(`Total Lessons in Stage 3: ${s3Count} (Expected: > 0)`);

  } catch (error) {
    console.error('Verification failed:', error);
  }

  console.log('\n--- Verification Complete ---');
}

verify()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
