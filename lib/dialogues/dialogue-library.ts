// lib/dialogues/dialogue-library.ts
// 🎉 FREE Dialogue Scenarios - Pre-written conversational content
// No AI or audio transcription needed!

export interface DialogueExchange {
  speaker: 'person1' | 'person2' | 'narrator'
  text: string
  pinyin?: string
  translation?: string
}

export interface DialogueLesson {
  id: string
  title: string
  language: string
  scenario: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  characters: Array<{
    name: string
    role: string
  }>
  dialogue: DialogueExchange[]
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
  audioFile?: string // Reference to /public/dialogues/[id].mp3
}

export const dialogueLibrary: DialogueLesson[] = [
  // ============================================
  // CHINESE DIALOGUES
  // ============================================
  {
    id: 'zh_d1_greeting',
    title: 'At the Tea House',
    language: 'zh',
    scenario: 'Two friends meet at a tea house',
    difficulty: 'beginner',
    characters: [
      { name: '小美', role: 'Xiaomei' },
      { name: '小王', role: 'Xiaowang' }
    ],
    dialogue: [
      {
        speaker: 'person1',
        text: '你好！好久不见。',
        pinyin: 'Nǐ hǎo! Hǎo jiǔ bu jiàn.',
        translation: 'Hi! Long time no see.'
      },
      {
        speaker: 'person2',
        text: '是啊！你好吗？',
        pinyin: 'Shì a! Nǐ hǎo ma?',
        translation: 'Yes! How are you?'
      },
      {
        speaker: 'person1',
        text: '我很好。你最近在做什么？',
        pinyin: 'Wǒ hěn hǎo. Nǐ zuìjìn zài zuò shénme?',
        translation: 'I\'m doing well. What have you been doing lately?'
      },
      {
        speaker: 'person2',
        text: '我在学中文。这很有趣。',
        pinyin: 'Wǒ zài xué zhōngwén. Zhè hěn yǒuqù.',
        translation: 'I\'ve been studying Chinese. It\'s very interesting.'
      },
      {
        speaker: 'person1',
        text: '太好了！我也可以帮你。',
        pinyin: 'Tài hǎo le! Wǒ yě kěyǐ bāng nǐ.',
        translation: 'That\'s great! I can help you too.'
      },
      {
        speaker: 'person2',
        text: '谢谢你！那太棒了。',
        pinyin: 'Xièxie nǐ! Nà tài bàng le.',
        translation: 'Thank you! That\'s awesome.'
      }
    ],
    vocabularyWords: [
      { word: '好久不见', pinyin: 'hǎo jiǔ bu jiàn', english: 'long time no see' },
      { word: '最近', pinyin: 'zuìjìn', english: 'recently' },
      { word: '学', pinyin: 'xué', english: 'study/learn' },
      { word: '有趣', pinyin: 'yǒuqù', english: 'interesting' },
      { word: '帮', pinyin: 'bāng', english: 'help' },
      { word: '谢谢', pinyin: 'xièxie', english: 'thank you' },
      { word: '棒', pinyin: 'bàng', english: 'great/awesome' },
    ],
    comprehensionQuestions: [
      {
        question: '小美最近在做什么？',
        correctAnswer: '学中文',
        options: ['工作', '学中文', '旅游']
      },
      {
        question: '小王想帮小美什么？',
        correctAnswer: '学中文',
        options: ['做饭', '学中文', '买东西']
      }
    ]
  },

  {
    id: 'zh_d2_restaurant',
    title: 'Ordering at a Restaurant',
    language: 'zh',
    scenario: 'Ordering food at a Chinese restaurant',
    difficulty: 'beginner',
    characters: [
      { name: '服务员', role: 'Server' },
      { name: '顾客', role: 'Customer' }
    ],
    dialogue: [
      {
        speaker: 'person1',
        text: '欢迎光临！请坐。',
        pinyin: 'Huānyíng guānglín! Qǐng zuò.',
        translation: 'Welcome! Please sit down.'
      },
      {
        speaker: 'person2',
        text: '谢谢。我想要一个菜单。',
        pinyin: 'Xièxie. Wǒ xiǎngyào yī gè càidān.',
        translation: 'Thank you. I\'d like a menu.'
      },
      {
        speaker: 'person1',
        text: '好的。这是菜单。请问你想吃什么？',
        pinyin: 'Hǎo de. Zhè shì càidān. Qǐngwèn nǐ xiǎng chī shénme?',
        translation: 'Here\'s the menu. What would you like to eat?'
      },
      {
        speaker: 'person2',
        text: '我想要一份宫保鸡丁和一碗米饭。',
        pinyin: 'Wǒ xiǎngyào yī fèn gōngbǎo jīdīng hé yī wǎn mǐfàn.',
        translation: 'I\'d like kung pao chicken and a bowl of rice.'
      },
      {
        speaker: 'person1',
        text: '好的。要喝什么？',
        pinyin: 'Hǎo de. Yào hē shénme?',
        translation: 'Sure. What would you like to drink?'
      },
      {
        speaker: 'person2',
        text: '请给我一杯茶。',
        pinyin: 'Qǐng gěi wǒ yī bēi chá.',
        translation: 'Please give me a cup of tea.'
      }
    ],
    vocabularyWords: [
      { word: '欢迎光临', pinyin: 'huānyíng guānglín', english: 'welcome' },
      { word: '菜单', pinyin: 'càidān', english: 'menu' },
      { word: '宫保鸡丁', pinyin: 'gōngbǎo jīdīng', english: 'kung pao chicken' },
      { word: '米饭', pinyin: 'mǐfàn', english: 'rice' },
      { word: '喝', pinyin: 'hē', english: 'drink' },
      { word: '杯', pinyin: 'bēi', english: 'cup/glass' },
      { word: '茶', pinyin: 'chá', english: 'tea' },
    ],
    comprehensionQuestions: [
      {
        question: '顾客想要什么饭？',
        correctAnswer: '米饭',
        options: ['面条', '米饭', '馄饨面']
      },
      {
        question: '顾客想喝什么？',
        correctAnswer: '茶',
        options: ['水', '茶', '咖啡']
      }
    ]
  },

  {
    id: 'zh_d3_shopping',
    title: 'Shopping for Clothes',
    language: 'zh',
    scenario: 'Buying clothes at a clothing store',
    difficulty: 'intermediate',
    characters: [
      { name: '店员', role: 'Shop Assistant' },
      { name: '购物者', role: 'Shopper' }
    ],
    dialogue: [
      {
        speaker: 'person1',
        text: '你好！欢迎来我们店。有什么我可以帮你的吗？',
        pinyin: 'Nǐ hǎo! Huānyíng lái wǒmen diàn. Yǒu shénme wǒ kěyǐ bāng nǐ de ma?',
        translation: 'Hello! Welcome to our store. Can I help you with anything?'
      },
      {
        speaker: 'person2',
        text: '谢谢。我在找一件蓝色的T恤。',
        pinyin: 'Xièxie. Wǒ zài zhǎo yī jiàn lánsè de T-shirt.',
        translation: 'Thanks. I\'m looking for a blue T-shirt.'
      },
      {
        speaker: 'person1',
        text: '你穿什么尺码？',
        pinyin: 'Nǐ chuān shénme chǐmǎ?',
        translation: 'What size do you wear?'
      },
      {
        speaker: 'person2',
        text: '我穿中号。',
        pinyin: 'Wǒ chuān zhōnghào.',
        translation: 'I wear medium.'
      },
      {
        speaker: 'person1',
        text: '好的，这件怎么样？',
        pinyin: 'Hǎo de, zhè jiàn zěnyàng?',
        translation: 'How about this one?'
      },
      {
        speaker: 'person2',
        text: '很好！多少钱？',
        pinyin: 'Hěn hǎo! Duōshao qián?',
        translation: 'Very nice! How much is it?'
      },
      {
        speaker: 'person1',
        text: '这件T恤是一百块钱。',
        pinyin: 'Zhè jiàn T-shirt shì yībǎi kuài qián.',
        translation: 'This T-shirt is 100 yuan.'
      }
    ],
    vocabularyWords: [
      { word: '找', pinyin: 'zhǎo', english: 'look for' },
      { word: '蓝色', pinyin: 'lánsè', english: 'blue' },
      { word: 'T恤', pinyin: 'T-shirt', english: 'T-shirt' },
      { word: '穿', pinyin: 'chuān', english: 'wear' },
      { word: '尺码', pinyin: 'chǐmǎ', english: 'size' },
      { word: '中号', pinyin: 'zhōnghào', english: 'medium' },
      { word: '钱', pinyin: 'qián', english: 'money' },
      { word: '块', pinyin: 'kuài', english: 'yuan (currency unit)' },
    ],
    comprehensionQuestions: [
      {
        question: '购物者想买什么颜色的T恤？',
        correctAnswer: '蓝色',
        options: ['红色', '蓝色', '黑色']
      },
      {
        question: 'T恤多少钱？',
        correctAnswer: '一百块钱',
        options: ['五十块钱', '一百块钱', '一百五十块钱']
      }
    ]
  },

  // ============================================
  // ENGLISH DIALOGUES
  // ============================================
  {
    id: 'en_d1_introduction',
    title: 'First Meeting',
    language: 'en',
    scenario: 'Two people meeting for the first time',
    difficulty: 'beginner',
    characters: [
      { name: 'John', role: 'Person A' },
      { name: 'Sarah', role: 'Person B' }
    ],
    dialogue: [
      {
        speaker: 'person1',
        text: 'Hi! I\'m John. What\'s your name?',
        translation: 'Hi! I\'m John. What\'s your name?'
      },
      {
        speaker: 'person2',
        text: 'Hi John! I\'m Sarah. Nice to meet you.',
        translation: 'Hi John! I\'m Sarah. Nice to meet you.'
      },
      {
        speaker: 'person1',
        text: 'Nice to meet you too! Where are you from?',
        translation: 'Nice to meet you too! Where are you from?'
      },
      {
        speaker: 'person2',
        text: 'I\'m from Canada. How about you?',
        translation: 'I\'m from Canada. How about you?'
      },
      {
        speaker: 'person1',
        text: 'I\'m from the United States. What do you do?',
        translation: 'I\'m from the United States. What do you do?'
      },
      {
        speaker: 'person2',
        text: 'I\'m a teacher. I teach English. What about you?',
        translation: 'I\'m a teacher. I teach English. What about you?'
      },
      {
        speaker: 'person1',
        text: 'I work in technology. It\'s interesting work.',
        translation: 'I work in technology. It\'s interesting work.'
      }
    ],
    vocabularyWords: [
      { word: 'name', english: 'personal identifier' },
      { word: 'from', english: 'origin' },
      { word: 'Canada', english: 'North American country' },
      { word: 'United States', english: 'USA' },
      { word: 'teacher', english: 'education professional' },
      { word: 'technology', english: 'computers and software' },
    ],
    comprehensionQuestions: [
      {
        question: 'Where is Sarah from?',
        correctAnswer: 'Canada',
        options: ['USA', 'Canada', 'Mexico']
      },
      {
        question: 'What does John do?',
        correctAnswer: 'works in technology',
        options: ['teaches English', 'works in technology', 'works in business']
      }
    ]
  },

  // ============================================
  // KHMER DIALOGUES
  // ============================================
  {
    id: 'km_d1_greeting',
    title: 'Khmer Greeting',
    language: 'km',
    scenario: 'Two people greeting in Khmer',
    difficulty: 'beginner',
    characters: [
      { name: 'ម៉ារី', role: 'Mary' },
      { name: 'ដេច', role: 'Deth' }
    ],
    dialogue: [
      {
        speaker: 'person1',
        text: 'សួស្ដី! សូមទទួលស្វាគមន៍។',
        translation: 'Hello! Welcome.'
      },
      {
        speaker: 'person2',
        text: 'សូមឥតពិការ។ ខ្ញុំឈ្មោះដេច។',
        translation: 'Thank you. My name is Deth.'
      },
      {
        speaker: 'person1',
        text: 'ឆ្លីង! ខ្ញុំឈ្មោះម៉ារី។',
        translation: 'Great! My name is Mary.'
      },
      {
        speaker: 'person2',
        text: 'រីករាយក្នុងការស្គាល់។',
        translation: 'Nice to meet you.'
      }
    ],
    vocabularyWords: [
      { word: 'សួស្ដី', english: 'hello/greetings' },
      { word: 'ឈ្មោះ', english: 'name' },
      { word: 'រីករាយ', english: 'happy/pleased' },
    ],
    comprehensionQuestions: [
      {
        question: 'តើដេច ឈ្មោះរបស់ដេច',
        correctAnswer: 'ដេច',
        options: ['ម៉ារី', 'ដេច', 'សិដ្ដី']
      }
    ]
  }
]

/**
 * Get a dialogue lesson by ID
 */
export function getDialogue(id: string): DialogueLesson | undefined {
  return dialogueLibrary.find(d => d.id === id)
}

/**
 * Get all dialogues for a language
 */
export function getDialoguesByLanguage(language: string): DialogueLesson[] {
  return dialogueLibrary.filter(d => d.language === language)
}

/**
 * Get dialogues by difficulty
 */
export function getDialoguesByDifficulty(diff: 'beginner' | 'intermediate' | 'advanced'): DialogueLesson[] {
  return dialogueLibrary.filter(d => d.difficulty === diff)
}

/**
 * Get random dialogue for a language
 */
export function getRandomDialogue(language: string): DialogueLesson | undefined {
  const dialogues = getDialoguesByLanguage(language)
  if (dialogues.length === 0) return undefined
  return dialogues[Math.floor(Math.random() * dialogues.length)]
}
