import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function debugLesson() {
  try {
    // Get one of your stage 10 lessons
    const lesson = await prisma.lesson.findFirst({
      where: {
        id: {
          contains: 'zh-stage10'
        }
      },
      include: {
        chapter: {
          include: {
            stage: {
              include: {
                language: true
              }
            }
          }
        }
      }
    });

    if (!lesson) {
      console.log('❌ No lesson found with zh-stage10');
      return;
    }

    console.log('✅ Lesson found:', lesson.id);
    console.log('\n📊 Lesson Structure:');
    console.log('- ID:', lesson.id);
    console.log('- Type:', lesson.type);
    console.log('- contentJson type:', typeof lesson.contentJson);
    console.log('- contentJson is object:', lesson.contentJson instanceof Object);
    
    const content = lesson.contentJson as any;
    console.log('- Has questions array:', Array.isArray(content?.questions));
    console.log('- Questions count:', content?.questions?.length || 0);
    
    if (content?.questions?.length > 0) {
      const firstQ = content.questions[0];
      console.log('\n🔍 First Question:');
      console.log('  - Type:', firstQ.type);
      console.log('  - Word:', firstQ.word);
      console.log('  - Prompt:', firstQ.prompt);
      console.log('  - Options:', firstQ.options);
      console.log('  - CorrectAnswer:', firstQ.correctAnswer);
    }

    console.log('\n✨ Data looks valid!');
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugLesson();
