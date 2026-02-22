// scripts/admin-unlock-all.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ADMIN_USER_ID = '13347f46-7557-4dee-a1f9-fa4d0bff030e';

async function unlockAll() {
  console.log('🚀 UNLOCKING ALL 10 STAGES FOR ADMIN...');

  try {
    const allLanguages = await prisma.language.findMany();
    const allLessons = await prisma.lesson.findMany();

    console.log(`Found ${allLanguages.length} languages and ${allLessons.length} total modules.`);

    // 1. Reset Admin Progress to Expert (C2)
    for (const lang of allLanguages) {
      await prisma.userLanguage.upsert({
        where: { userId_languageCode: { userId: ADMIN_USER_ID, languageCode: lang.code } },
        update: { currentStage: 10, currentChapter: 5, xpInLanguage: 200000 },
        create: { userId: ADMIN_USER_ID, languageCode: lang.code, currentStage: 10, currentChapter: 5, xpInLanguage: 200000 }
      });
      console.log(`- Unlocked ${lang.code.toUpperCase()} to Level C2.`);
    }

    // 2. Mark all lessons as completed
    console.log('🔄 Syncing all module completions...');
    await prisma.userProgress.deleteMany({ where: { userId: ADMIN_USER_ID } });

    const chunkSize = 100;
    for (let i = 0; i < allLessons.length; i += chunkSize) {
      const chunk = allLessons.slice(i, i + chunkSize).map(l => ({
        userId: ADMIN_USER_ID,
        lessonId: l.id,
        score: 100,
        xpEarned: l.xpReward,
      }));
      await prisma.userProgress.createMany({ data: chunk, skipDuplicates: true });
    }

    console.log(`✅ SUCCESS: ${allLessons.length} modules marked as completed.`);
  } catch (error) {
    console.error('Unlock failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

unlockAll();
