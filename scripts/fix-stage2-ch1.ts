import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Fixing Stage 2 - Chapter 1 (Food) ---');

  const lessonTypes = ['vocab', 'grammar', 'listen', 'speak', 'writing'];
  const questionTypeMap: Record<string, string> = {
    'vocab': 'flashcard',
    'grammar': 'multiple-choice',
    'listen': 'listening',
    'speak': 'speaking',
    'writing': 'writing'
  };

  const questions = [
    { word: "米饭", pinyin: "mǐ fàn", translation: "Rice", options: ["Rice", "Noodles", "Bread", "Water"] },
    { word: "面条", pinyin: "miàn tiáo", translation: "Noodles", options: ["Noodles", "Rice", "Dumpling", "Soup"] },
    { word: "包子", pinyin: "bāo zi", translation: "Steamed Bun", options: ["Steamed Bun", "Bread", "Cake", "Pizza"] },
    { word: "吃", pinyin: "chī", translation: "Eat", options: ["Eat", "Drink", "Sleep", "Run"] },
    { word: "喝", pinyin: "hē", translation: "Drink", options: ["Drink", "Eat", "Water", "Tea"] }
  ];

  for (const type of lessonTypes) {
    const lesson = await prisma.lesson.findFirst({
      where: {
        id: { contains: 'zh-stage2-ch1' },
        type: type
      }
    });

    if (lesson) {
      const updatedQuestions = questions.map(q => {
        const correctAnswer = ['speak', 'writing'].includes(type) ? q.word : q.translation;
        return {
          ...q,
          type: questionTypeMap[type],
          targetLanguage: 'zh',
          nativeLanguage: 'en',
          languageCode: 'zh',
          correctAnswer
        };
      });

      await prisma.lesson.update({
        where: { id: lesson.id },
        data: { contentJson: { questions: updatedQuestions } }
      });
      console.log(`✅ Updated ${type} lesson for Stage 2 Chapter 1`);
    } else {
      console.log(`⚠️ Could not find ${type} lesson for Stage 2 Chapter 1`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());