// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting optimized database seeding...')

  // 1. Languages
  const languagesData = [
    { code: 'zh', name: 'Chinese (Mandarin)', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'km', name: 'Khmer', flag: '🇰🇭' },
  ]
  await prisma.language.createMany({
    data: languagesData,
    skipDuplicates: true,
  })
  console.log('✅ Languages seeded.')

  const allLanguages = await prisma.language.findMany() // Fetch created languages with their IDs

  // 2. Stages (10 stages per language)
  const stagesToCreate: any[] = []
  const rawStagesData = [
    { stageNumber: 1, title: 'Baby', unlockXp: 0, vocabTarget: 80 },
    { stageNumber: 2, title: 'Toddler', unlockXp: 100, vocabTarget: 120 },
    { stageNumber: 3, title: 'Child', unlockXp: 250, vocabTarget: 150 },
    { stageNumber: 4, title: 'Student', unlockXp: 600, vocabTarget: 180 },
    { stageNumber: 5, title: 'Traveler', unlockXp: 1500, vocabTarget: 200 },
    { stageNumber: 6, title: 'Conversationalist', unlockXp: 3500, vocabTarget: 220 },
    { stageNumber: 7, title: 'Reader', unlockXp: 7500, vocabTarget: 250 },
    { stageNumber: 8, title: 'Professional', unlockXp: 20000, vocabTarget: 280 },
    { stageNumber: 9, title: 'Advanced', unlockXp: 50000, vocabTarget: 300 },
    { stageNumber: 10, title: 'Expert', unlockXp: 100000, vocabTarget: 300 },
  ]

  for (const lang of allLanguages) {
    for (const stage of rawStagesData) {
      stagesToCreate.push({
        id: `${lang.code}-stage-${stage.stageNumber}`, // Deterministic ID for upsert
        languageId: lang.id,
        stageNumber: stage.stageNumber,
        title: stage.title,
        unlockXp: stage.unlockXp,
      })
    }
  }
  await prisma.stage.createMany({
    data: stagesToCreate,
    skipDuplicates: true,
  })
  console.log('✅ 30 Stages seeded (10 per language).')

  // 3. Chapters (5 chapters for Stage 1 & 2 of each language)
  const chaptersToCreate: any[] = []
  const chapterTitlesMap: { [key: number]: string[] } = {
    1: ['Greetings', 'Numbers 1-10', 'Colors', 'Family', 'Basic Verbs'],
    2: ['Food & Drink', 'Daily Routine', 'Places', 'Adjectives', 'Making Plans'],
  };

  for (const lang of allLanguages) {
    for (let stageNum = 1; stageNum <= 2; stageNum++) {
      const stage = await prisma.stage.findUnique({
        where: { id: `${lang.code}-stage-${stageNum}` } // Fetch stage by its ID
      });

      if (stage && chapterTitlesMap[stageNum]) {
        for (let i = 0; i < chapterTitlesMap[stageNum].length; i++) {
          const title = chapterTitlesMap[stageNum][i];
          const chapterNum = i + 1;
          chaptersToCreate.push({
            id: `${lang.code}-stage${stageNum}-ch${chapterNum}`,
            stageId: stage.id,
            chapterNum: chapterNum,
            title: title,
          })
        }
      }
    }
  }
  await prisma.chapter.createMany({
    data: chaptersToCreate,
    skipDuplicates: true,
  })
  console.log('✅ Initial Chapters seeded for Stage 1 & 2.')

  // 4. Vocabulary (Expanded)
  const vocabToCreate: any[] = []
  const vocabData = {
    zh: [
      { word: '你好', romanization: 'nǐ hǎo', translation: 'Hello' },
      { word: '谢谢', romanization: 'xiè xie', translation: 'Thank you' },
      { word: '再见', romanization: 'zài jiàn', translation: 'Goodbye' },
      { word: '我', romanization: 'wǒ', translation: 'I/me' },
      { word: '是', romanization: 'shì', translation: 'am/is/are' },
      { word: '学生', romanization: 'xué sheng', translation: 'student' },
      { word: '爱', romanization: 'ài', translation: 'love' },
      { word: '吃', romanization: 'chī', translation: 'eat' },
      { word: '米饭', romanization: 'mǐ fàn', translation: 'rice' },
      { word: '水', romanization: 'shuǐ', translation: 'water' },
      { word: '茶', romanization: 'chá', translation: 'tea' },
      { word: '咖啡', romanization: 'kā fēi', translation: 'coffee' },
    ],
    en: [
      { word: 'Hello', romanization: 'Hello', translation: '你好' },
      { word: 'Thank you', romanization: 'Thank you', translation: '谢谢' },
      { word: 'Goodbye', romanization: 'Goodbye', translation: '再见' },
      { word: 'I', romanization: 'I', translation: '我' },
      { word: 'am', romanization: 'am', translation: '是' },
      { word: 'student', romanization: 'student', translation: '学生' },
      { word: 'love', romanization: 'love', translation: '爱' },
      { word: 'eat', romanization: 'eat', translation: '吃' },
      { word: 'rice', romanization: 'rice', translation: '米饭' },
      { word: 'water', romanization: 'water', translation: '水' },
      { word: 'tea', romanization: 'tea', translation: '茶' },
      { word: 'coffee', romanization: 'coffee', translation: '咖啡' },
    ],
    km: [
      { word: 'សួស្តី', romanization: 'suo sdei', translation: 'Hello' },
      { word: 'អរគុណ', romanization: 'ar kun', translation: 'Thank you' },
      { word: 'លាហើយ', romanization: 'liau haey', translation: 'Goodbye' },
      { word: 'ខ្ញុំ', romanization: 'khnom', translation: 'I/me' },
      { word: 'ជា', romanization: 'chea', translation: 'am/is/are' },
      { word: 'សិស្ស', romanization: 'ses', translation: 'student' },
      { word: 'ស្រឡាញ់', romanization: 'srolanh', translation: 'love' },
      { word: 'ញ៉ាំ', romanization: 'nham', translation: 'eat' },
      { word: 'បាយ', romanization: 'bay', translation: 'rice' },
      { word: 'ទឹក', romanization: 'tuk', translation: 'water' },
      { word: 'តែ', romanization: 'tae', translation: 'tea' },
      { word: 'កាហ្វេ', romanization: 'kafe', translation: 'coffee' },
    ],
  };

  for (const lang of allLanguages) {
    for (const vocab of vocabData[lang.code as keyof typeof vocabData]) {
      vocabToCreate.push({
        id: `${lang.code}-vocab-${vocab.word}`,
        languageId: lang.id,
        word: vocab.word,
        romanization: vocab.romanization,
        translation: vocab.translation,
        difficulty: 1,
      })
    }
  }
  await prisma.vocabulary.createMany({
    data: vocabToCreate,
    skipDuplicates: true,
  })
  console.log('✅ Expanded Vocabulary seeded.')


  // 5. Lessons (Expanded for Stage 1 & 2)
  const lessonsToCreate: any[] = []
  const lessonDefinitions = [
    { type: 'vocab', count: 2 },
    { type: 'grammar', count: 1 },
    { type: 'listen', count: 1 },
    { type: 'speak', count: 1 },
    { type: 'write', count: 1 },
    { type: 'read', count: 1 },
    { type: 'dialogue', count: 1 },
  ];

  for (const lang of allLanguages) {
    for (let stageNum = 1; stageNum <= 2; stageNum++) {
      const chapters = await prisma.chapter.findMany({
        where: { stageId: `${lang.code}-stage-${stageNum}` },
        orderBy: { chapterNum: 'asc' }
      });

      for (const chapter of chapters) {
        for (const lessonDef of lessonDefinitions) {
          for (let i = 1; i <= lessonDef.count; i++) {
            const lessonId = `${lang.code}-stage${stageNum}-ch${chapter.chapterNum}-${lessonDef.type}-${i}`;
            let contentJson: any = {};

            const sampleVocab = vocabData[lang.code as keyof typeof vocabData];
            const sampleVocabItem = sampleVocab[(i - 1) % sampleVocab.length];

            switch (lessonDef.type) {
              case 'vocab':
                contentJson = {
                  questions: [
                    {
                      type: 'flashcard',
                      word: sampleVocabItem.word,
                      romanization: sampleVocabItem.romanization,
                      translation: sampleVocabItem.translation,
                      options: (sampleVocab.map(v => v.translation).filter(t => t !== sampleVocabItem.translation).sort(() => 0.5 - Math.random()) as string[]).slice(0, 3).concat(sampleVocabItem.translation).sort(() => 0.5 - Math.random()),
                      correctAnswer: sampleVocabItem.translation,
                      audioUrl: '', // To be filled by R2/TTS later
                    },
                  ]
                };
                break;
              case 'grammar':
                contentJson = {
                  questions: [
                    {
                      type: 'multiple-choice',
                      prompt: lang.code === 'zh' ? "Choose the correct verb for 'I am a student'." : "Choose the correct verb for 'I eat rice'.",
                      options: lang.code === 'zh' ? ["是", "吃", "喝", "去"] : ["eat", "drink", "go", "sleep"],
                      correctAnswer: lang.code === 'zh' ? "是" : "eat",
                      grammarTopic: lang.code === 'zh' ? "Basic Sentence Structure" : "Simple present tense",
                    },
                  ]
                };
                break;
              case 'listen':
                contentJson = {
                  questions: [
                    {
                      type: 'listening',
                      audioUrl: '', // Will be dynamically generated or filled via admin
                      prompt: lang.code === 'zh' ? `What is the meaning of "${sampleVocabItem.word}"?` : `What is the meaning of "${sampleVocabItem.word}"?`,
                      correctAnswer: sampleVocabItem.translation,
                      options: (sampleVocab.map(v => v.translation).filter(t => t !== sampleVocabItem.translation).sort(() => 0.5 - Math.random()) as string[]).slice(0, 3).concat(sampleVocabItem.translation).sort(() => 0.5 - Math.random()),
                    },
                  ]
                };
                break;
              case 'speak':
                contentJson = {
                  questions: [
                    {
                      type: 'speaking',
                      prompt: lang.code === 'zh' ? `Say "${sampleVocabItem.word}".` : `Say "${sampleVocabItem.word}".`,
                      correctAnswer: sampleVocabItem.word,
                      romanization: sampleVocabItem.romanization,
                      languageCode: lang.code,
                    },
                  ]
                };
                break;
              case 'write':
                contentJson = {
                  questions: [
                    {
                      type: 'writing',
                      prompt: lang.code === 'zh' ? `Translate "${sampleVocabItem.translation}".` : `Translate "${sampleVocabItem.translation}".`,
                      correctAnswer: sampleVocabItem.word,
                      targetLanguage: lang.code,
                      nativeLanguage: 'en',
                    },
                  ]
                };
                break;
              case 'read':
                contentJson = {
                  questions: [
                    {
                      type: 'reading',
                      passage: lang.code === 'zh' ? `这是${sampleVocabItem.word}。` : `This is ${sampleVocabItem.translation}.`,
                      prompt: "Read the passage and answer the question.",
                      comprehensionQuestions: [
                        {
                          question: lang.code === 'zh' ? `文章中提到了什么词？` : `What word was mentioned in the passage?`,
                          options: [sampleVocabItem.word, "不是", "没有", "什么"],
                          correctAnswer: sampleVocabItem.word,
                        },
                      ],
                      languageCode: lang.code,
                    },
                  ]
                };
                break;
              case 'dialogue':
                contentJson = {
                  questions: [
                    {
                      type: 'dialogue',
                      prompt: lang.code === 'zh' ? `Use "${sampleVocabItem.word}" in a conversation.` : `Use "${sampleVocabItem.word}" in a conversation.`,
                      scenario: `You are discussing ${sampleVocabItem.translation} with a friend.`,
                      initialDialogue: [
                        { role: 'assistant', content: lang.code === 'zh' ? `你好，你喜欢${sampleVocabItem.word}吗？` : `Hi, do you like ${sampleVocabItem.translation}?` },
                      ],
                      targetLanguage: lang.code,
                      nativeLanguage: 'en',
                    },
                  ]
                };
                break;
            }

            lessonsToCreate.push({
              id: lessonId,
              chapterId: chapter.id,
              type: lessonDef.type,
              xpReward: 10 + (stageNum * 5),
              coinReward: 5 + stageNum,
              contentJson: contentJson,
            })
          }
        }
      }
    }
  }
  await prisma.lesson.createMany({
    data: lessonsToCreate,
    skipDuplicates: true,
  })
  console.log('✅ Expanded Lessons seeded for Stage 1 & 2.')

  // 6. Achievements (Updated with more conditions)
  const achievementsData = [
    {
      id: 'first_word',
      title: 'First Word',
      description: 'Complete your first vocabulary lesson.',
      icon: '🏆',
      category: 'First Steps',
      xpReward: 10,
      coinReward: 5,
      condition: { lessonTypeCompleted: { vocab: 1 } },
    },
    {
      id: 'hello_world',
      title: 'Hello World',
      description: 'Complete your first lesson in any language.',
      icon: '🌍',
      category: 'First Steps',
      xpReward: 10,
      coinReward: 5,
      condition: { totalLessonsCompleted: 1 },
    },
    {
      id: 'polyglot_start',
      title: 'Polyglot Start',
      description: 'Start learning a second language.',
      icon: '🌐',
      category: 'First Steps',
      xpReward: 25,
      coinReward: 15,
      condition: { languagesLearned: 2 },
    },
    {
      id: 'on_fire_7',
      title: 'On Fire',
      description: 'Reach a 7-day streak.',
      icon: '🔥',
      category: 'Streak',
      xpReward: 25,
      coinReward: 25,
      condition: { streakDays: 7 },
    },
    {
      id: 'habit_builder_30',
      title: 'Habit Builder',
      description: 'Reach a 30-day streak.',
      icon: '🗓️',
      category: 'Streak',
      xpReward: 100,
      coinReward: 100,
      condition: { streakDays: 30 },
    },
    {
      id: 'word_collector_50',
      title: 'Word Collector',
      description: 'Learn 50 vocabulary words.',
      icon: '📚',
      category: 'Vocabulary',
      xpReward: 20,
      coinReward: 10,
      condition: { totalVocabularyLearned: 50 },
    },
    {
      id: 'word_master_200',
      title: 'Vocabulary Master',
      description: 'Learn 200 vocabulary words.',
      icon: '🧠',
      category: 'Vocabulary',
      xpReward: 50,
      coinReward: 25,
      condition: { totalVocabularyLearned: 200 },
    },
    {
      id: 'first_speak',
      title: 'First Words',
      description: 'Complete your first speaking lesson.',
      icon: '🗣️',
      category: 'Speaking',
      xpReward: 15,
      coinReward: 10,
      condition: { lessonTypeCompleted: { speak: 1 } },
    },
    {
      id: 'clear_voice_5',
      title: 'Clear Voice',
      description: 'Score 90%+ on 5 speaking lessons.',
      icon: '🎤',
      category: 'Speaking',
      xpReward: 30,
      coinReward: 20,
      condition: { speakingLessonsHighScore: 5 }, // Needs custom logic
    },
    {
      id: 'chapter_hero',
      title: 'Chapter Hero',
      description: 'Complete a full chapter.',
      icon: '📖',
      category: 'Lessons',
      xpReward: 30,
      coinReward: 15,
      condition: { chaptersCompleted: 1 },
    },
    {
      id: 'stage_master',
      title: 'Stage Master',
      description: 'Complete all chapters in a stage.',
      icon: '🌟',
      category: 'Lessons',
      xpReward: 100,
      coinReward: 50,
      condition: { stagesCompleted: 1 },
    },
    {
      id: 'social_ambassador',
      title: 'Social Ambassador',
      description: 'Refer a friend who registers.',
      icon: '🤝',
      category: 'Social',
      xpReward: 30,
      coinReward: 30,
      condition: { referredFriends: 1 }, // Needs external tracking
    },
  ];

  await prisma.achievement.createMany({
    data: achievementsData,
    skipDuplicates: true,
  });
  console.log('✅ Expanded Achievements seeded.')

  console.log('🌿 Seeding complete!')
}

// Helper function definitions
async function getChapterTitle(langCode: string, stageNum: number, chapterNum: number) {
  const chapterTitles: { [key: number]: string[] } = {
    1: ['Greetings & Basics', 'Numbers & Counting', 'Colors & Objects', 'Family & People', 'Simple Verbs'],
    2: ['Food & Drink', 'Daily Activities', 'Places & Directions', 'Adjectives & Describing', 'Planning & Time'],
  };
  
  if (chapterTitles[stageNum] && chapterTitles[stageNum][chapterNum - 1]) {
    return chapterTitles[stageNum][chapterNum - 1];
  }
  return `Chapter ${chapterNum}`;
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
