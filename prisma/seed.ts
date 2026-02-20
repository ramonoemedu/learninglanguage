// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting massive database expansion...')

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

  const allLanguages = await prisma.language.findMany()

  // 2. Stages (10 stages per language)
  const stagesToCreate: any[] = []
  const rawStagesData = [
    { stageNumber: 1, title: 'Baby', unlockXp: 0 },
    { stageNumber: 2, title: 'Toddler', unlockXp: 150 },
    { stageNumber: 3, title: 'Child', unlockXp: 500 },
    { stageNumber: 4, title: 'Student', unlockXp: 1200 },
    { stageNumber: 5, title: 'Traveler', unlockXp: 3000 },
    { stageNumber: 6, title: 'Conversationalist', unlockXp: 7000 },
    { stageNumber: 7, title: 'Reader', unlockXp: 15000 },
    { stageNumber: 8, title: 'Professional', unlockXp: 35000 },
    { stageNumber: 9, title: 'Advanced', unlockXp: 75000 },
    { stageNumber: 10, title: 'Expert', unlockXp: 150000 },
  ]

  for (const lang of allLanguages) {
    for (const stage of rawStagesData) {
      stagesToCreate.push({
        id: `${lang.code}-stage-${stage.stageNumber}`,
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
  console.log('✅ 30 Stages seeded.')

  // 3. Chapters Expansion
  const chaptersToCreate: any[] = []
  const chapterTitlesMap: { [key: number]: string[] } = {
    1: ['Greetings & Basics', 'Numbers 1-10', 'Colors & Sight', 'Family Core', 'Essential Actions'],
    2: ['Food & Sustenance', 'Daily Protocols', 'Places & Navigation', 'Common Adjectives', 'Future Intentions'],
    3: ['Body & Health', 'Weather Systems', 'Work & Industry', 'Time & Schedules', 'Emotions & Logic'],
    4: ['Travel Protocols', 'Technology & Tools', 'Nature & Environments', 'Social Dynamics', 'Creative Expression'],
    5: ['Complex Grammar', 'Cultural Context', 'Abstract Concepts', 'Professional Speech', 'Philosophical Matrix'],
  };

  for (const lang of allLanguages) {
    for (let stageNum = 1; stageNum <= 5; stageNum++) {
      const stageId = `${lang.code}-stage-${stageNum}`;
      if (chapterTitlesMap[stageNum]) {
        for (let i = 0; i < chapterTitlesMap[stageNum].length; i++) {
          const title = chapterTitlesMap[stageNum][i];
          const chapterNum = i + 1;
          chaptersToCreate.push({
            id: `${lang.code}-stage${stageNum}-ch${chapterNum}`,
            stageId: stageId,
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
  console.log('✅ Chapters seeded through Stage 5.')

  // 4. Massive Vocabulary (Universal Pool)
  const vocabData = {
    zh: [
      { word: '你好', romanization: 'nǐ hǎo', translation: 'Hello', diff: 1 },
      { word: '谢谢', romanization: 'xiè xie', translation: 'Thank you', diff: 1 },
      { word: '再见', romanization: 'zài jiàn', translation: 'Goodbye', diff: 1 },
      { word: '我', romanization: 'wǒ', translation: 'I/me', diff: 1 },
      { word: '你', romanization: 'nǐ', translation: 'You', diff: 1 },
      { word: '是', romanization: 'shì', translation: 'am/is/are', diff: 1 },
      { word: '一', romanization: 'yī', translation: 'One', diff: 1 },
      { word: '二', romanization: 'èr', translation: 'Two', diff: 1 },
      { word: '三', romanization: 'sān', translation: 'Three', diff: 1 },
      { word: '红', romanization: 'hóng', translation: 'Red', diff: 1 },
      { word: '蓝', romanization: 'lán', translation: 'Blue', diff: 1 },
      { word: '绿', romanization: 'lǜ', translation: 'Green', diff: 1 },
      { word: '爸爸', romanization: 'bà ba', translation: 'Father', diff: 1 },
      { word: '妈妈', romanization: 'mā ma', translation: 'Mother', diff: 1 },
      { word: '吃', romanization: 'chī', translation: 'Eat', diff: 1 },
      { word: '喝', romanization: 'hē', translation: 'Drink', diff: 1 },
      { word: '米饭', romanization: 'mǐ fàn', translation: 'Rice', diff: 2 },
      { word: '苹果', romanization: 'píng guǒ', translation: 'Apple', diff: 2 },
      { word: '漂亮', romanization: 'piào liang', translation: 'Beautiful', diff: 2 },
      { word: '高兴', romanization: 'gāo xìng', translation: 'Happy', diff: 2 },
      { word: '这里', romanization: 'zhè lǐ', translation: 'Here', diff: 2 },
      { word: '那里', romanization: 'nà lǐ', translation: 'There', diff: 2 },
      { word: '谁', romanization: 'shuí', translation: 'Who', diff: 2 },
      { word: '什么', romanization: 'shén me', translation: 'What', diff: 2 },
      { word: '学习', romanization: 'xué xí', translation: 'To study', diff: 3 },
      { word: '工作', romanization: 'gōng zuò', translation: 'Work', diff: 3 },
      { word: '医生', romanization: 'yī shēng', translation: 'Doctor', diff: 3 },
      { word: '医院', romanization: 'yī yuàn', translation: 'Hospital', diff: 3 },
      { word: '现在', romanization: 'xiàn zài', translation: 'Now', diff: 3 },
      { word: '明天', romanization: 'míng tiān', translation: 'Tomorrow', diff: 3 },
      { word: '准备', romanization: 'zhǔn bèi', translation: 'Prepare', diff: 4 },
      { word: '环境', romanization: 'huán jìng', translation: 'Environment', diff: 4 },
      { word: '重要', romanization: 'zhòng yào', translation: 'Important', diff: 4 },
      { word: '解决', romanization: 'jiě jué', translation: 'Resolve', diff: 4 },
      { word: '哲学', romanization: 'zhé xué', translation: 'Philosophy', diff: 5 },
      { word: '人工智能', romanization: 'rén gōng zhì néng', translation: 'AI', diff: 5 },
    ],
    en: [
      { word: 'Hello', romanization: 'Hello', translation: '你好', diff: 1 },
      { word: 'Thank you', romanization: 'Thank you', translation: '谢谢', diff: 1 },
      { word: 'Goodbye', romanization: 'Goodbye', translation: '再见', diff: 1 },
      { word: 'I', romanization: 'I', translation: '我', diff: 1 },
      { word: 'You', romanization: 'You', translation: '你', diff: 1 },
      { word: 'One', romanization: 'One', translation: '一', diff: 1 },
      { word: 'Red', romanization: 'Red', translation: '红', diff: 1 },
      { word: 'Father', romanization: 'Father', translation: '爸爸', diff: 1 },
      { word: 'Mother', romanization: 'Mother', translation: '妈妈', diff: 1 },
      { word: 'Eat', romanization: 'Eat', translation: '吃', diff: 1 },
      { word: 'Drink', romanization: 'Drink', translation: '喝', diff: 1 },
      { word: 'Apple', romanization: 'Apple', translation: '苹果', diff: 2 },
      { word: 'Water', romanization: 'Water', translation: '水', diff: 2 },
      { word: 'Happy', romanization: 'Happy', translation: '高兴', diff: 2 },
      { word: 'What', romanization: 'What', translation: '什么', diff: 2 },
      { word: 'Study', romanization: 'Study', translation: '学习', diff: 3 },
      { word: 'Tomorrow', romanization: 'Tomorrow', translation: '明天', diff: 3 },
      { word: 'Environment', romanization: 'Environment', translation: '环境', diff: 4 },
      { word: 'Philosophy', romanization: 'Philosophy', translation: '哲学', diff: 5 },
    ],
    km: [
      { word: 'សួស្តី', romanization: 'suo sdei', translation: 'Hello', diff: 1 },
      { word: 'អរគុណ', romanization: 'ar kun', translation: 'Thank you', diff: 1 },
      { word: 'លាហើយ', romanization: 'liau haey', translation: 'Goodbye', diff: 1 },
      { word: 'ខ្ញុំ', romanization: 'khnom', translation: 'I/me', diff: 1 },
      { word: 'បាយ', romanization: 'bay', translation: 'Rice', diff: 1 },
      { word: 'ញ៉ាំ', romanization: 'nham', translation: 'Eat', diff: 1 },
      { word: 'ទឹក', romanization: 'tuk', translation: 'Water', diff: 1 },
      { word: 'រីករាយ', romanization: 'rik reay', translation: 'Happy', diff: 2 },
      { word: 'ស្រឡាញ់', romanization: 'srolanh', translation: 'Love', diff: 2 },
      { word: 'កាហ្វេ', romanization: 'kafe', translation: 'Coffee', diff: 2 },
      { word: 'រៀន', romanization: 'rien', translation: 'Study', diff: 3 },
      { word: 'មន្ទីរពេទ្យ', romanization: 'munti pet', translation: 'Hospital', diff: 3 },
      { word: 'ស្អែក', romanization: 'saek', translation: 'Tomorrow', diff: 3 },
      { word: 'បច្ចេកវិទ្យា', romanization: 'pacheak vitchea', translation: 'Technology', diff: 4 },
      { word: 'បញ្ញាសិប្បនិម្មិត', romanization: 'panhhea sapanimmit', translation: 'AI', diff: 5 },
    ],
  };

  const vocabToCreate: any[] = []
  for (const lang of allLanguages) {
    const data = vocabData[lang.code as keyof typeof vocabData] || [];
    for (const vocab of data) {
      vocabToCreate.push({
        id: `${lang.code}-vocab-${vocab.word}`,
        languageId: lang.id,
        word: vocab.word,
        romanization: vocab.romanization,
        translation: vocab.translation,
        difficulty: vocab.diff,
      })
    }
  }
  await prisma.vocabulary.createMany({
    data: vocabToCreate,
    skipDuplicates: true,
  })
  console.log('✅ Extensive Vocabulary seeded.')

  // 5. Lessons Generation (Stages 1-5)
  const lessonsToCreate: any[] = []
  const lessonDefinitions = [
    { type: 'vocab', count: 4 },
    { type: 'grammar', count: 2 },
    { type: 'listen', count: 2 },
    { type: 'speak', count: 2 },
    { type: 'write', count: 1 },
    { type: 'read', count: 1 },
    { type: 'dialogue', count: 1 },
  ];

  for (const lang of allLanguages) {
    const langVocabPool = vocabData[lang.code as keyof typeof vocabData] || [];
    
    for (let stageNum = 1; stageNum <= 5; stageNum++) {
      const chapters = await prisma.chapter.findMany({
        where: { id: { startsWith: `${lang.code}-stage${stageNum}` } },
        orderBy: { chapterNum: 'asc' }
      });

      // Filter vocab by difficulty for this stage
      const stageVocab = langVocabPool.filter(v => v.diff === stageNum || v.diff === stageNum - 1 || v.diff === stageNum + 1);
      const pool = stageVocab.length > 0 ? stageVocab : langVocabPool;

      for (const chapter of chapters) {
        for (const lessonDef of lessonDefinitions) {
          for (let i = 1; i <= lessonDef.count; i++) {
            const lessonId = `${lang.code}-stage${stageNum}-ch${chapter.chapterNum}-${lessonDef.type}-${i}`;
            let questions: any[] = [];

            // Generate 5-8 questions per lesson
            const qTarget = 6;
            for (let q = 0; q < qTarget; q++) {
              const vocabIdx = (q + i) % pool.length;
              const item = pool[vocabIdx];
              const distractors = pool.filter(v => v.word !== item.word).sort(() => 0.5 - Math.random()).slice(0, 3);

              switch (lessonDef.type) {
                case 'vocab':
                  questions.push({
                    type: 'flashcard',
                    word: item.word,
                    romanization: item.romanization,
                    translation: item.translation,
                    options: [...distractors.map(d => d.translation), item.translation].sort(() => 0.5 - Math.random()),
                    correctAnswer: item.translation,
                  });
                  break;
                case 'listen':
                  questions.push({
                    type: 'listening',
                    prompt: `Select the meaning of "${item.word}"`,
                    word: item.word, // FIX: Added target word for audio
                    correctAnswer: item.translation,
                    options: [...distractors.map(d => d.translation), item.translation].sort(() => 0.5 - Math.random()),
                  });
                  break;
                case 'speak':
                  questions.push({
                    type: 'speaking',
                    prompt: `Pronounce "${item.word}"`,
                    correctAnswer: item.word,
                    romanization: item.romanization,
                    languageCode: lang.code,
                  });
                  break;
                case 'grammar':
                  questions.push({
                    type: 'multiple-choice',
                    prompt: `Which word means "${item.translation}"?`,
                    options: [...distractors.map(d => d.word), item.word].sort(() => 0.5 - Math.random()),
                    correctAnswer: item.word,
                    word: item.word, // FIX: Added target word for audio
                  });
                  break;
                default:
                  // For others just add one specialized question
                  if (q === 0) {
                    questions.push({
                      type: lessonDef.type === 'dialogue' ? 'dialogue' : 'writing',
                      prompt: `Exercise involving "${item.word}"`,
                      correctAnswer: item.word,
                      word: item.word, // FIX: Added target word for audio
                      scenario: `Topic: ${chapter.title}`,
                      targetLanguage: lang.code,
                      nativeLanguage: 'en',
                      initialDialogue: [{ role: 'assistant', content: `Hello, can you use ${item.word}?` }]
                    });
                  }
              }
            }

            lessonsToCreate.push({
              id: lessonId,
              chapterId: chapter.id,
              type: lessonDef.type,
              xpReward: 15 + (stageNum * 5),
              coinReward: 6 + stageNum,
              contentJson: { questions },
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
  console.log('✅ Enhanced Lessons seeded through Stage 5.')

  // 6. Achievements
  const achievementsData = [
    { id: 'first_word', title: 'Neural Spark', description: 'Complete your first vocab module.', icon: '🧠', category: 'General', xpReward: 10, coinReward: 5, condition: {} },
    { id: 'stage_1', title: 'Base Level', description: 'Complete Stage 1.', icon: '👶', category: 'General', xpReward: 100, coinReward: 50, condition: {} },
  ];
  await prisma.achievement.createMany({
    data: achievementsData,
    skipDuplicates: true,
  });

  console.log('🌿 High-density seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
