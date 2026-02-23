import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Fixing Stage 1 - Chapter 1 (Greetings) ---');

  const lessonTypes = ['vocab', 'grammar', 'listen', 'speak', 'writing'];
  const questionTypeMap: Record<string, string> = {
    'vocab': 'flashcard',
    'grammar': 'multiple-choice',
    'listen': 'listening',
    'speak': 'speaking',
    'writing': 'writing'
  };

  const questions = [
    { word: "你好", pinyin: "nǐ hǎo", translation: "Hello", options: ["Hello", "Goodbye", "Thanks", "Sorry"] },
    { word: "再见", pinyin: "zài jiàn", translation: "Goodbye", options: ["Goodbye", "Hello", "Yes", "No"] },
    { word: "谢谢", pinyin: "xiè xie", translation: "Thank you", options: ["Thank you", "Sorry", "Please", "Good"] },
    { word: "对不起", pinyin: "duì bu qǐ", translation: "Sorry", options: ["Sorry", "Thanks", "Hello", "Bye"] },
    { word: "是", pinyin: "shì", translation: "Yes/Is", options: ["Yes/Is", "No", "Good", "Bad"] },
    { word: "不", pinyin: "bù", translation: "No", options: ["No", "Yes", "Good", "Bad"] },
    { word: "早上好", pinyin: "zǎo shang hǎo", translation: "Good morning", options: ["Good morning", "Good night", "Hello", "Goodbye"] },
    { word: "晚安", pinyin: "wǎn ān", translation: "Good night", options: ["Good night", "Good morning", "Hello", "Goodbye"] },
    { word: "请", pinyin: "qǐng", translation: "Please", options: ["Please", "Thanks", "Sorry", "No"] },
    { word: "没关系", pinyin: "méi guān xi", translation: "It's okay", options: ["It's okay", "Sorry", "Thank you", "Yes"] },
    { word: "明天见", pinyin: "míng tiān jiàn", translation: "See you tomorrow", options: ["See you tomorrow", "Good morning", "Hello", "Goodbye"] },
    { word: "很高兴见到你", pinyin: "hěn gāo xìng jiàn dào nǐ", translation: "Nice to meet you", options: ["Nice to meet you", "See you tomorrow", "Sorry", "Thank you"] }
  ];

  for (const type of lessonTypes) {
    const lesson = await prisma.lesson.findFirst({
      where: {
        id: { contains: 'zh-stage1-ch1' },
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
      console.log(`✅ Updated ${type} lesson for Stage 1 Chapter 1`);
    } else {
      console.log(`⚠️ Could not find ${type} lesson for Stage 1 Chapter 1`);
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());