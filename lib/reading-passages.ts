// lib/reading-passages.ts
// 🎉 FREE Reading Passages Library - Pre-written curated content
// Organized by language and stage for progressive difficulty

export interface ReadingPassage {
  id: string
  title: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  passage: string
  wordCount: number
  vocabularyWords: Array<{
    word: string
    pinyin?: string
    english: string
  }>
  comprehensionQuestions: Array<{
    question: string
    correctAnswer: string
    options: string[]
  }>
}

export const readingPassages: {
  [language: string]: {
    [stage: string]: ReadingPassage[]
  }
} = {
  zh: {
    // ============================================
    // CHINESE STAGE 1-3 (Beginner - Pinyin)
    // ============================================
    stage1: [
      {
        id: 'zh_s1_p1',
        title: '你好',
        difficulty: 'beginner',
        passage: `我叫王明。我是一个学生。我喜欢学中文。
今天天气很好。我去公园。我在公园看书。
我的朋友也在公园。我们一起玩。
晚上，我回家了。我吃饭。然后我做功课。
我很开心。`,
        wordCount: 65,
        vocabularyWords: [
          { word: '叫', pinyin: 'jiào', english: 'called/name' },
          { word: '学生', pinyin: 'xuésheng', english: 'student' },
          { word: '喜欢', pinyin: 'xǐhuān', english: 'like/enjoy' },
          { word: '天气', pinyin: 'tiānqì', english: 'weather' },
          { word: '公园', pinyin: 'gōngyuán', english: 'park' },
          { word: '朋友', pinyin: 'péngyou', english: 'friend' },
          { word: '一起', pinyin: 'yīqǐ', english: 'together' },
          { word: '晚上', pinyin: 'wǎnshang', english: 'evening' },
          { word: '回家', pinyin: 'huíjiā', english: 'go home' },
          { word: '功课', pinyin: 'gōngkè', english: 'homework' },
        ],
        comprehensionQuestions: [
          {
            question: '王明叫什么名字？',
            correctAnswer: '王明',
            options: ['王明', '小王', '明明']
          },
          {
            question: '他在哪里看书？',
            correctAnswer: '公园',
            options: ['公园', '家里', '学校']
          },
          {
            question: '晚上他做什么？',
            correctAnswer: '做功课',
            options: ['做功课', '看书', '玩']
          },
        ]
      },
      {
        id: 'zh_s1_p2',
        title: '我的家',
        difficulty: 'beginner',
        passage: `我家在北京。我家有四个房间。
房间里有一张床、一张桌子、一把椅子。
厨房里有冰箱和炉子。
客厅很大。客厅里有沙发和电视。
我喜欢在客厅看电视。`,
        wordCount: 50,
        vocabularyWords: [
          { word: '家', pinyin: 'jiā', english: 'home/house' },
          { word: '北京', pinyin: 'běijīng', english: 'Beijing' },
          { word: '房间', pinyin: 'fángjiān', english: 'room' },
          { word: '床', pinyin: 'chuáng', english: 'bed' },
          { word: '桌子', pinyin: 'zhuōzi', english: 'table' },
          { word: '椅子', pinyin: 'yǐzi', english: 'chair' },
          { word: '厨房', pinyin: 'chúfáng', english: 'kitchen' },
          { word: '冰箱', pinyin: 'bīngxiāng', english: 'refrigerator' },
          { word: '客厅', pinyin: 'kètīng', english: 'living room' },
          { word: '沙发', pinyin: 'shāfā', english: 'sofa' },
        ],
        comprehensionQuestions: [
          {
            question: '他的家在哪里？',
            correctAnswer: '北京',
            options: ['北京', '上海', '广州']
          },
          {
            question: '家里有多少个房间？',
            correctAnswer: '四个',
            options: ['两个', '三个', '四个']
          },
        ]
      }
    ],
    stage2: [
      {
        id: 'zh_s2_p1',
        title: '学校的一天',
        difficulty: 'beginner',
        passage: `早上七点半，我起床了。我洗脸、刷牙、吃早饭。
八点，我去学校。上午我有三节课：数学、英语和中文。
我最喜欢中文课。中文老师很好。
中午，我在食堂吃饭。饭很好吃。
下午两点，我们有体育课。我们在操场踢足球。
下午五点，学校放学。我回家做功课。`,
        wordCount: 80,
        vocabularyWords: [
          { word: '起床', pinyin: 'qǐchuáng', english: 'get up/wake up' },
          { word: '洗脸', pinyin: 'xǐliǎn', english: 'wash face' },
          { word: '刷牙', pinyin: 'shuāyá', english: 'brush teeth' },
          { word: '早饭', pinyin: 'zǎofàn', english: 'breakfast' },
          { word: '上午', pinyin: 'shàngwǔ', english: 'morning' },
          { word: '课', pinyin: 'kè', english: 'class/lesson' },
          { word: '数学', pinyin: 'shùxué', english: 'mathematics' },
          { word: '最', pinyin: 'zuì', english: 'most' },
          { word: '食堂', pinyin: 'shítáng', english: 'cafeteria' },
          { word: '体育', pinyin: 'tǐyù', english: 'physical education' },
        ],
        comprehensionQuestions: [
          {
            question: '他最喜欢哪个课？',
            correctAnswer: '中文课',
            options: ['数学课', '中文课', '英语课']
          },
          {
            question: '下午几点放学？',
            correctAnswer: '五点',
            options: ['三点', '四点', '五点']
          },
        ]
      }
    ],
    stage3: [
      {
        id: 'zh_s3_p1',
        title: '周末活动',
        difficulty: 'intermediate',
        passage: `上个星期六，我和家人一起去了动物园。
那天天气很晴朗。我们坐地铁去的。
在动物园里，我们看到了老虎、熊猫和长颈鹿。
最有意思的是看猴子。那些猴子很聪明，会做很多有趣的动作。
妈妈给我买了一个冰淇淋。
下午四点，我们回家了。虽然很累，但是我们都很高兴。`,
        wordCount: 100,
        vocabularyWords: [
          { word: '星期六', pinyin: 'xīngqīliù', english: 'Saturday' },
          { word: '家人', pinyin: 'jiārén', english: 'family' },
          { word: '动物园', pinyin: 'dòngwùyuán', english: 'zoo' },
          { word: '天气', pinyin: 'tiānqì', english: 'weather' },
          { word: '晴朗', pinyin: 'qīngláng', english: 'sunny/clear' },
          { word: '地铁', pinyin: 'dìtiě', english: 'metro/subway' },
          { word: '老虎', pinyin: 'lǎohǔ', english: 'tiger' },
          { word: '熊猫', pinyin: 'xiónɡmāo', english: 'panda' },
          { word: '有趣', pinyin: 'yǒuqù', english: 'interesting/fun' },
          { word: '虽然', pinyin: 'suīrán', english: 'although' },
        ],
        comprehensionQuestions: [
          {
            question: '他们去了哪里？',
            correctAnswer: '动物园',
            options: ['公园', '动物园', '电影院']
          },
          {
            question: '他最喜欢看什么动物？',
            correctAnswer: '猴子',
            options: ['老虎', '猴子', '熊猫']
          },
        ]
      }
    ],
  },

  // ============================================
  // ENGLISH PASSAGES
  // ============================================
  en: {
    stage1: [
      {
        id: 'en_s1_p1',
        title: 'My Best Friend',
        difficulty: 'beginner',
        passage: `My name is Tom. I have a best friend. His name is Mike.
Mike is ten years old. We go to the same school.
We like to play soccer together. We also like to read books.
Mike's favorite color is blue. My favorite color is red.
We have fun every day. I like Mike very much.`,
        wordCount: 60,
        vocabularyWords: [
          { word: 'best friend', english: 'closest friend' },
          { word: 'same', english: 'identical' },
          { word: 'favorite', english: 'preferred most' },
          { word: 'color', english: 'shade/hue' },
          { word: 'together', english: 'with each other' },
        ],
        comprehensionQuestions: [
          {
            question: 'What is Tom\'s favorite color?',
            correctAnswer: 'red',
            options: ['blue', 'red', 'green']
          },
        ]
      }
    ],
  },

  // ============================================
  // KHMER PASSAGES
  // ============================================
  km: {
    stage1: [
      {
        id: 'km_s1_p1',
        title: 'សួលស្វាគមន៍មកកម្ពុជា',
        difficulty: 'beginner',
        passage: `ខ្ញុំឈ្មោះលី។ ខ្ញុំមកពីសាលាលេខ១។
ខ្ញុំចូលរៀនរៀងរាល់ថ្ងៃពីម៉ោង៧ដល់ម៉ោង១១។
ខ្ញុំចូលចិត្តរៀនគណិតវិទ្យា និងភាសាខ្មែរ។
ខ្ញុំមាននិស្ស័យល្អក្នុងការសិក្សា។`,
        wordCount: 50,
        vocabularyWords: [
          { word: 'ឈ្មោះ', english: 'name' },
          { word: 'រៀន', english: 'study/learn' },
          { word: 'សាលា', english: 'school' },
          { word: 'ចូលចិត្ត', english: 'like/enjoy' },
          { word: 'គណិតវិទ្យា', english: 'mathematics' },
        ],
        comprehensionQuestions: [
          {
            question: 'តើលី​ឈ្មោះរបស់លីមច្ឆាយ?',
            correctAnswer: 'លី',
            options: ['លី', 'សដ', 'ម័ត្ថ']
          },
        ]
      }
    ],
  }
}

/**
 * Get a passage by ID
 */
export function getReadingPassage(id: string): ReadingPassage | undefined {
  for (const lang in readingPassages) {
    for (const stage in readingPassages[lang]) {
      const passage = readingPassages[lang][stage].find(p => p.id === id)
      if (passage) return passage
    }
  }
  return undefined
}

/**
 * Get all passages for a language and stage
 */
export function getPassagesByStage(language: string, stage: string): ReadingPassage[] {
  return readingPassages[language]?.[stage] || []
}

/**
 * Get all passages for a language
 */
export function getPassagesByLanguage(language: string): ReadingPassage[] {
  const passages: ReadingPassage[] = []
  for (const stage in readingPassages[language] || {}) {
    passages.push(...readingPassages[language][stage])
  }
  return passages
}

/**
 * Get passages by difficulty
 */
export function getPassagesByDifficulty(diff: 'beginner' | 'intermediate' | 'advanced'): ReadingPassage[] {
  const passages: ReadingPassage[] = []
  for (const lang in readingPassages) {
    for (const stage in readingPassages[lang]) {
      passages.push(...readingPassages[lang][stage].filter(p => p.difficulty === diff))
    }
  }
  return passages
}
