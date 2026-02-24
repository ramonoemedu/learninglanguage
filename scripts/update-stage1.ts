import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 1: A0 - Baby
const lessonUpdates = [
  // ===== CHAPTER 1: GREETINGS =====
  {
    lessonId: 'zh-stage1-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "你好",
          "prompt": "What does this word mean?",
          "options": ["Hello", "Goodbye", "Thank you", "Sorry"],
          "translation": "Hello",
          "languageCode": "zh",
          "romanization": "nǐ hǎo",
          "correctAnswer": "Hello",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "再见",
          "prompt": "What does this word mean?",
          "options": ["Goodbye", "Hello", "Yes", "No"],
          "translation": "Goodbye",
          "languageCode": "zh",
          "romanization": "zài jiàn",
          "correctAnswer": "Goodbye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "谢谢",
          "prompt": "What does this word mean?",
          "options": ["Thank you", "Sorry", "Please", "Welcome"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie",
          "correctAnswer": "Thank you",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "对不起",
          "prompt": "What does this word mean?",
          "options": ["Sorry", "Thank you", "Hello", "Goodbye"],
          "translation": "Sorry",
          "languageCode": "zh",
          "romanization": "duì bu qǐ",
          "correctAnswer": "Sorry",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "请",
          "prompt": "What does this word mean?",
          "options": ["Please", "Thank you", "Sorry", "Yes"],
          "translation": "Please",
          "languageCode": "zh",
          "romanization": "qǐng",
          "correctAnswer": "Please",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "早上好",
          "prompt": "What does this phrase mean?",
          "options": ["Good morning", "Good night", "Good afternoon", "Good evening"],
          "translation": "Good morning",
          "languageCode": "zh",
          "romanization": "zǎo shang hǎo",
          "correctAnswer": "Good morning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "晚安",
          "prompt": "What does this word mean?",
          "options": ["Good night", "Good morning", "Hello", "Goodbye"],
          "translation": "Good night",
          "languageCode": "zh",
          "romanization": "wǎn ān",
          "correctAnswer": "Good night",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "欢迎",
          "prompt": "What does this word mean?",
          "options": ["Welcome", "Thank you", "Sorry", "Please"],
          "translation": "Welcome",
          "languageCode": "zh",
          "romanization": "huān yíng",
          "correctAnswer": "Welcome",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "你好",
          "prompt": "How do you greet someone in Chinese?",
          "options": ["你好 (nǐ hǎo)", "再见 (zài jiàn)", "谢谢 (xiè xie)", "对不起 (duì bu qǐ)"],
          "translation": "Hello",
          "languageCode": "zh",
          "romanization": "nǐ hǎo",
          "correctAnswer": "你好 (nǐ hǎo)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "谢谢你",
          "prompt": "How do you say 'Thank you' politely?",
          "options": ["谢谢你 (xiè xie nǐ)", "对不起 (duì bu qǐ)", "你好 (nǐ hǎo)", "再见 (zài jiàn)"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie nǐ",
          "correctAnswer": "谢谢你 (xiè xie nǐ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "不客气",
          "prompt": "How do you respond to 'Thank you'?",
          "options": ["不客气 (bú kè qi)", "对不起 (duì bu qǐ)", "请 (qǐng)", "是 (shì)"],
          "translation": "You're welcome",
          "languageCode": "zh",
          "romanization": "bú kè qi",
          "correctAnswer": "不客气 (bú kè qi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "没关系",
          "prompt": "How do you say 'It's okay' in response to an apology?",
          "options": ["没关系 (méi guān xi)", "谢谢 (xiè xie)", "你好 (nǐ hǎo)", "再见 (zài jiàn)"],
          "translation": "It's okay / No problem",
          "languageCode": "zh",
          "romanization": "méi guān xi",
          "correctAnswer": "没关系 (méi guān xi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "明天见",
          "prompt": "How do you say 'See you tomorrow'?",
          "options": ["明天见 (míng tiān jiàn)", "早上好 (zǎo shang hǎo)", "晚安 (wǎn ān)", "你好 (nǐ hǎo)"],
          "translation": "See you tomorrow",
          "languageCode": "zh",
          "romanization": "míng tiān jiàn",
          "correctAnswer": "明天见 (míng tiān jiàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "你好",
          "prompt": "Listen and select the correct translation.",
          "options": ["Hello", "Goodbye", "Thank you", "Sorry"],
          "translation": "Hello",
          "languageCode": "zh",
          "romanization": "nǐ hǎo",
          "correctAnswer": "Hello",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "再见",
          "prompt": "Listen and select the correct translation.",
          "options": ["Goodbye", "Hello", "Please", "Welcome"],
          "translation": "Goodbye",
          "languageCode": "zh",
          "romanization": "zài jiàn",
          "correctAnswer": "Goodbye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "谢谢",
          "prompt": "Listen and select the correct translation.",
          "options": ["Thank you", "Sorry", "Please", "Yes"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie",
          "correctAnswer": "Thank you",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "对不起",
          "prompt": "Listen and select the correct translation.",
          "options": ["Sorry", "Thank you", "Hello", "No"],
          "translation": "Sorry",
          "languageCode": "zh",
          "romanization": "duì bu qǐ",
          "correctAnswer": "Sorry",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "早上好",
          "prompt": "Listen and select the correct translation.",
          "options": ["Good morning", "Good night", "Hello", "Goodbye"],
          "translation": "Good morning",
          "languageCode": "zh",
          "romanization": "zǎo shang hǎo",
          "correctAnswer": "Good morning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "晚安",
          "prompt": "Listen and select the correct translation.",
          "options": ["Good night", "Good morning", "Thank you", "Goodbye"],
          "translation": "Good night",
          "languageCode": "zh",
          "romanization": "wǎn ān",
          "correctAnswer": "Good night",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "你好",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Hello", "Goodbye", "Thank you", "Sorry"],
          "translation": "Hello",
          "languageCode": "zh",
          "romanization": "nǐ hǎo",
          "correctAnswer": "Hello",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "再见",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Goodbye", "Hello", "Yes", "No"],
          "translation": "Goodbye",
          "languageCode": "zh",
          "romanization": "zài jiàn",
          "correctAnswer": "Goodbye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "谢谢",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Thank you", "Sorry", "Please", "Welcome"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie",
          "correctAnswer": "Thank you",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "对不起",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Sorry", "Thank you", "Hello", "Goodbye"],
          "translation": "Sorry",
          "languageCode": "zh",
          "romanization": "duì bu qǐ",
          "correctAnswer": "Sorry",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "请",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Please", "Thank you", "Sorry", "Yes"],
          "translation": "Please",
          "languageCode": "zh",
          "romanization": "qǐng",
          "correctAnswer": "Please",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "早上好",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Good morning", "Good night", "Good afternoon", "Hello"],
          "translation": "Good morning",
          "languageCode": "zh",
          "romanization": "zǎo shang hǎo",
          "correctAnswer": "Good morning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "你好",
          "prompt": "Write the Chinese characters for 'Hello'",
          "options": ["你好", "再见", "谢谢", "对不起"],
          "translation": "Hello",
          "languageCode": "zh",
          "romanization": "nǐ hǎo",
          "correctAnswer": "你好",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "再见",
          "prompt": "Write the Chinese characters for 'Goodbye'",
          "options": ["再见", "你好", "谢谢", "请"],
          "translation": "Goodbye",
          "languageCode": "zh",
          "romanization": "zài jiàn",
          "correctAnswer": "再见",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "谢谢",
          "prompt": "Write the Chinese characters for 'Thank you'",
          "options": ["谢谢", "对不起", "你好", "再见"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie",
          "correctAnswer": "谢谢",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "对不起",
          "prompt": "Write the Chinese characters for 'Sorry'",
          "options": ["对不起", "谢谢", "请", "你好"],
          "translation": "Sorry",
          "languageCode": "zh",
          "romanization": "duì bu qǐ",
          "correctAnswer": "对不起",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "请",
          "prompt": "Write the Chinese character for 'Please'",
          "options": ["请", "谢谢", "对不起", "是"],
          "translation": "Please",
          "languageCode": "zh",
          "romanization": "qǐng",
          "correctAnswer": "请",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: NUMBERS =====
  {
    lessonId: 'zh-stage1-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "一",
          "prompt": "What number is this?",
          "options": ["One", "Two", "Three", "Four"],
          "translation": "One",
          "languageCode": "zh",
          "romanization": "yī",
          "correctAnswer": "One",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "二",
          "prompt": "What number is this?",
          "options": ["Two", "One", "Three", "Five"],
          "translation": "Two",
          "languageCode": "zh",
          "romanization": "èr",
          "correctAnswer": "Two",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "三",
          "prompt": "What number is this?",
          "options": ["Three", "Two", "Four", "Five"],
          "translation": "Three",
          "languageCode": "zh",
          "romanization": "sān",
          "correctAnswer": "Three",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "四",
          "prompt": "What number is this?",
          "options": ["Four", "Three", "Five", "Six"],
          "translation": "Four",
          "languageCode": "zh",
          "romanization": "sì",
          "correctAnswer": "Four",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "五",
          "prompt": "What number is this?",
          "options": ["Five", "Four", "Six", "Seven"],
          "translation": "Five",
          "languageCode": "zh",
          "romanization": "wǔ",
          "correctAnswer": "Five",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "六",
          "prompt": "What number is this?",
          "options": ["Six", "Five", "Seven", "Eight"],
          "translation": "Six",
          "languageCode": "zh",
          "romanization": "liù",
          "correctAnswer": "Six",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "七",
          "prompt": "What number is this?",
          "options": ["Seven", "Six", "Eight", "Nine"],
          "translation": "Seven",
          "languageCode": "zh",
          "romanization": "qī",
          "correctAnswer": "Seven",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "八",
          "prompt": "What number is this?",
          "options": ["Eight", "Seven", "Nine", "Ten"],
          "translation": "Eight",
          "languageCode": "zh",
          "romanization": "bā",
          "correctAnswer": "Eight",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "九",
          "prompt": "What number is this?",
          "options": ["Nine", "Eight", "Ten", "Seven"],
          "translation": "Nine",
          "languageCode": "zh",
          "romanization": "jiǔ",
          "correctAnswer": "Nine",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "十",
          "prompt": "What number is this?",
          "options": ["Ten", "Nine", "Eight", "Eleven"],
          "translation": "Ten",
          "languageCode": "zh",
          "romanization": "shí",
          "correctAnswer": "Ten",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "零",
          "prompt": "What is the Chinese word for 'zero'?",
          "options": ["零 (líng)", "一 (yī)", "十 (shí)", "百 (bǎi)"],
          "translation": "Zero",
          "languageCode": "zh",
          "romanization": "líng",
          "correctAnswer": "零 (líng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "十一",
          "prompt": "How do you say 'eleven' in Chinese?",
          "options": ["十一 (shí yī)", "一十 (yī shí)", "二十 (èr shí)", "十二 (shí èr)"],
          "translation": "Eleven",
          "languageCode": "zh",
          "romanization": "shí yī",
          "correctAnswer": "十一 (shí yī)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "二十",
          "prompt": "How do you say 'twenty' in Chinese?",
          "options": ["二十 (èr shí)", "十二 (shí èr)", "二 (èr)", "十 (shí)"],
          "translation": "Twenty",
          "languageCode": "zh",
          "romanization": "èr shí",
          "correctAnswer": "二十 (èr shí)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "一百",
          "prompt": "How do you say 'one hundred' in Chinese?",
          "options": ["一百 (yī bǎi)", "十 (shí)", "千 (qiān)", "百 (bǎi)"],
          "translation": "One hundred",
          "languageCode": "zh",
          "romanization": "yī bǎi",
          "correctAnswer": "一百 (yī bǎi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "三十五",
          "prompt": "How do you say 'thirty-five' in Chinese?",
          "options": ["三十五 (sān shí wǔ)", "五十三 (wǔ shí sān)", "三五 (sān wǔ)", "十五 (shí wǔ)"],
          "translation": "Thirty-five",
          "languageCode": "zh",
          "romanization": "sān shí wǔ",
          "correctAnswer": "三十五 (sān shí wǔ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "一",
          "prompt": "Listen and select the correct number.",
          "options": ["One", "Two", "Ten", "Five"],
          "translation": "One",
          "languageCode": "zh",
          "romanization": "yī",
          "correctAnswer": "One",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "三",
          "prompt": "Listen and select the correct number.",
          "options": ["Three", "Two", "Four", "Five"],
          "translation": "Three",
          "languageCode": "zh",
          "romanization": "sān",
          "correctAnswer": "Three",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "五",
          "prompt": "Listen and select the correct number.",
          "options": ["Five", "Four", "Six", "Three"],
          "translation": "Five",
          "languageCode": "zh",
          "romanization": "wǔ",
          "correctAnswer": "Five",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "七",
          "prompt": "Listen and select the correct number.",
          "options": ["Seven", "Six", "Eight", "Nine"],
          "translation": "Seven",
          "languageCode": "zh",
          "romanization": "qī",
          "correctAnswer": "Seven",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "十",
          "prompt": "Listen and select the correct number.",
          "options": ["Ten", "One", "Two", "Eight"],
          "translation": "Ten",
          "languageCode": "zh",
          "romanization": "shí",
          "correctAnswer": "Ten",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "九",
          "prompt": "Listen and select the correct number.",
          "options": ["Nine", "Eight", "Seven", "Six"],
          "translation": "Nine",
          "languageCode": "zh",
          "romanization": "jiǔ",
          "correctAnswer": "Nine",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "二",
          "prompt": "Speak this number aloud. What does it mean?",
          "options": ["Two", "One", "Three", "Five"],
          "translation": "Two",
          "languageCode": "zh",
          "romanization": "èr",
          "correctAnswer": "Two",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "四",
          "prompt": "Speak this number aloud. What does it mean?",
          "options": ["Four", "Five", "Three", "Six"],
          "translation": "Four",
          "languageCode": "zh",
          "romanization": "sì",
          "correctAnswer": "Four",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "六",
          "prompt": "Speak this number aloud. What does it mean?",
          "options": ["Six", "Seven", "Five", "Eight"],
          "translation": "Six",
          "languageCode": "zh",
          "romanization": "liù",
          "correctAnswer": "Six",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "八",
          "prompt": "Speak this number aloud. What does it mean?",
          "options": ["Eight", "Seven", "Nine", "Six"],
          "translation": "Eight",
          "languageCode": "zh",
          "romanization": "bā",
          "correctAnswer": "Eight",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "十",
          "prompt": "Speak this number aloud. What does it mean?",
          "options": ["Ten", "Nine", "Eight", "Eleven"],
          "translation": "Ten",
          "languageCode": "zh",
          "romanization": "shí",
          "correctAnswer": "Ten",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "一",
          "prompt": "Write the Chinese character for 'One'",
          "options": ["一", "二", "三", "十"],
          "translation": "One",
          "languageCode": "zh",
          "romanization": "yī",
          "correctAnswer": "一",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "二",
          "prompt": "Write the Chinese character for 'Two'",
          "options": ["二", "一", "三", "四"],
          "translation": "Two",
          "languageCode": "zh",
          "romanization": "èr",
          "correctAnswer": "二",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "三",
          "prompt": "Write the Chinese character for 'Three'",
          "options": ["三", "二", "四", "五"],
          "translation": "Three",
          "languageCode": "zh",
          "romanization": "sān",
          "correctAnswer": "三",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "五",
          "prompt": "Write the Chinese character for 'Five'",
          "options": ["五", "四", "六", "七"],
          "translation": "Five",
          "languageCode": "zh",
          "romanization": "wǔ",
          "correctAnswer": "五",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "十",
          "prompt": "Write the Chinese character for 'Ten'",
          "options": ["十", "一", "九", "八"],
          "translation": "Ten",
          "languageCode": "zh",
          "romanization": "shí",
          "correctAnswer": "十",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: COLORS =====
  {
    lessonId: 'zh-stage1-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "红色",
          "prompt": "What color is this?",
          "options": ["Red", "Blue", "Yellow", "Green"],
          "translation": "Red",
          "languageCode": "zh",
          "romanization": "hóng sè",
          "correctAnswer": "Red",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "蓝色",
          "prompt": "What color is this?",
          "options": ["Blue", "Red", "Green", "Yellow"],
          "translation": "Blue",
          "languageCode": "zh",
          "romanization": "lán sè",
          "correctAnswer": "Blue",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "黄色",
          "prompt": "What color is this?",
          "options": ["Yellow", "Blue", "Green", "Orange"],
          "translation": "Yellow",
          "languageCode": "zh",
          "romanization": "huáng sè",
          "correctAnswer": "Yellow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "绿色",
          "prompt": "What color is this?",
          "options": ["Green", "Blue", "Red", "Yellow"],
          "translation": "Green",
          "languageCode": "zh",
          "romanization": "lǜ sè",
          "correctAnswer": "Green",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "黑色",
          "prompt": "What color is this?",
          "options": ["Black", "White", "Gray", "Brown"],
          "translation": "Black",
          "languageCode": "zh",
          "romanization": "hēi sè",
          "correctAnswer": "Black",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "白色",
          "prompt": "What color is this?",
          "options": ["White", "Black", "Gray", "Pink"],
          "translation": "White",
          "languageCode": "zh",
          "romanization": "bái sè",
          "correctAnswer": "White",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "粉色",
          "prompt": "What color is this?",
          "options": ["Pink", "Red", "Purple", "Orange"],
          "translation": "Pink",
          "languageCode": "zh",
          "romanization": "fěn sè",
          "correctAnswer": "Pink",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "橙色",
          "prompt": "What color is this?",
          "options": ["Orange", "Yellow", "Red", "Pink"],
          "translation": "Orange",
          "languageCode": "zh",
          "romanization": "chéng sè",
          "correctAnswer": "Orange",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "灰色",
          "prompt": "What is the Chinese word for 'gray'?",
          "options": ["灰色 (huī sè)", "黑色 (hēi sè)", "白色 (bái sè)", "棕色 (zōng sè)"],
          "translation": "Gray",
          "languageCode": "zh",
          "romanization": "huī sè",
          "correctAnswer": "灰色 (huī sè)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "紫色",
          "prompt": "What is the Chinese word for 'purple'?",
          "options": ["紫色 (zǐ sè)", "粉色 (fěn sè)", "蓝色 (lán sè)", "红色 (hóng sè)"],
          "translation": "Purple",
          "languageCode": "zh",
          "romanization": "zǐ sè",
          "correctAnswer": "紫色 (zǐ sè)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "棕色",
          "prompt": "What is the Chinese word for 'brown'?",
          "options": ["棕色 (zōng sè)", "黑色 (hēi sè)", "灰色 (huī sè)", "橙色 (chéng sè)"],
          "translation": "Brown",
          "languageCode": "zh",
          "romanization": "zōng sè",
          "correctAnswer": "棕色 (zōng sè)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "什么颜色",
          "prompt": "How do you ask 'What color?' in Chinese?",
          "options": ["什么颜色 (shén me yán sè)", "多少 (duō shao)", "哪里 (nǎ lǐ)", "怎么样 (zěn me yàng)"],
          "translation": "What color",
          "languageCode": "zh",
          "romanization": "shén me yán sè",
          "correctAnswer": "什么颜色 (shén me yán sè)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这是红色的",
          "prompt": "How do you say 'This is red' in Chinese?",
          "options": ["这是红色的 (zhè shì hóng sè de)", "红色 (hóng sè)", "是红色 (shì hóng sè)", "红的 (hóng de)"],
          "translation": "This is red",
          "languageCode": "zh",
          "romanization": "zhè shì hóng sè de",
          "correctAnswer": "这是红色的 (zhè shì hóng sè de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "红色",
          "prompt": "Listen and select the correct color.",
          "options": ["Red", "Blue", "Yellow", "Green"],
          "translation": "Red",
          "languageCode": "zh",
          "romanization": "hóng sè",
          "correctAnswer": "Red",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "蓝色",
          "prompt": "Listen and select the correct color.",
          "options": ["Blue", "Red", "Green", "Purple"],
          "translation": "Blue",
          "languageCode": "zh",
          "romanization": "lán sè",
          "correctAnswer": "Blue",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "黄色",
          "prompt": "Listen and select the correct color.",
          "options": ["Yellow", "Orange", "Green", "White"],
          "translation": "Yellow",
          "languageCode": "zh",
          "romanization": "huáng sè",
          "correctAnswer": "Yellow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "绿色",
          "prompt": "Listen and select the correct color.",
          "options": ["Green", "Blue", "Yellow", "Brown"],
          "translation": "Green",
          "languageCode": "zh",
          "romanization": "lǜ sè",
          "correctAnswer": "Green",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "黑色",
          "prompt": "Listen and select the correct color.",
          "options": ["Black", "White", "Gray", "Brown"],
          "translation": "Black",
          "languageCode": "zh",
          "romanization": "hēi sè",
          "correctAnswer": "Black",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "白色",
          "prompt": "Listen and select the correct color.",
          "options": ["White", "Black", "Gray", "Pink"],
          "translation": "White",
          "languageCode": "zh",
          "romanization": "bái sè",
          "correctAnswer": "White",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "红色",
          "prompt": "Speak this word aloud. What color is it?",
          "options": ["Red", "Blue", "Yellow", "Green"],
          "translation": "Red",
          "languageCode": "zh",
          "romanization": "hóng sè",
          "correctAnswer": "Red",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "黄色",
          "prompt": "Speak this word aloud. What color is it?",
          "options": ["Yellow", "Orange", "Green", "Blue"],
          "translation": "Yellow",
          "languageCode": "zh",
          "romanization": "huáng sè",
          "correctAnswer": "Yellow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "绿色",
          "prompt": "Speak this word aloud. What color is it?",
          "options": ["Green", "Blue", "Yellow", "Red"],
          "translation": "Green",
          "languageCode": "zh",
          "romanization": "lǜ sè",
          "correctAnswer": "Green",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "粉色",
          "prompt": "Speak this word aloud. What color is it?",
          "options": ["Pink", "Red", "Purple", "White"],
          "translation": "Pink",
          "languageCode": "zh",
          "romanization": "fěn sè",
          "correctAnswer": "Pink",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "黑色",
          "prompt": "Speak this word aloud. What color is it?",
          "options": ["Black", "White", "Gray", "Brown"],
          "translation": "Black",
          "languageCode": "zh",
          "romanization": "hēi sè",
          "correctAnswer": "Black",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "红色",
          "prompt": "Write the Chinese characters for 'Red'",
          "options": ["红色", "蓝色", "黄色", "绿色"],
          "translation": "Red",
          "languageCode": "zh",
          "romanization": "hóng sè",
          "correctAnswer": "红色",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "蓝色",
          "prompt": "Write the Chinese characters for 'Blue'",
          "options": ["蓝色", "红色", "绿色", "紫色"],
          "translation": "Blue",
          "languageCode": "zh",
          "romanization": "lán sè",
          "correctAnswer": "蓝色",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "黄色",
          "prompt": "Write the Chinese characters for 'Yellow'",
          "options": ["黄色", "橙色", "绿色", "白色"],
          "translation": "Yellow",
          "languageCode": "zh",
          "romanization": "huáng sè",
          "correctAnswer": "黄色",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "绿色",
          "prompt": "Write the Chinese characters for 'Green'",
          "options": ["绿色", "蓝色", "黄色", "黑色"],
          "translation": "Green",
          "languageCode": "zh",
          "romanization": "lǜ sè",
          "correctAnswer": "绿色",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "白色",
          "prompt": "Write the Chinese characters for 'White'",
          "options": ["白色", "黑色", "灰色", "粉色"],
          "translation": "White",
          "languageCode": "zh",
          "romanization": "bái sè",
          "correctAnswer": "白色",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: FACE =====
  {
    lessonId: 'zh-stage1-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "眼睛",
          "prompt": "What body part is this?",
          "options": ["Eye", "Nose", "Mouth", "Ear"],
          "translation": "Eye",
          "languageCode": "zh",
          "romanization": "yǎn jing",
          "correctAnswer": "Eye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "鼻子",
          "prompt": "What body part is this?",
          "options": ["Nose", "Eye", "Mouth", "Ear"],
          "translation": "Nose",
          "languageCode": "zh",
          "romanization": "bí zi",
          "correctAnswer": "Nose",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "嘴巴",
          "prompt": "What body part is this?",
          "options": ["Mouth", "Nose", "Eye", "Tongue"],
          "translation": "Mouth",
          "languageCode": "zh",
          "romanization": "zuǐ ba",
          "correctAnswer": "Mouth",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "耳朵",
          "prompt": "What body part is this?",
          "options": ["Ear", "Eye", "Nose", "Mouth"],
          "translation": "Ear",
          "languageCode": "zh",
          "romanization": "ěr duo",
          "correctAnswer": "Ear",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "脸",
          "prompt": "What body part is this?",
          "options": ["Face", "Head", "Neck", "Hair"],
          "translation": "Face",
          "languageCode": "zh",
          "romanization": "liǎn",
          "correctAnswer": "Face",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "头",
          "prompt": "What body part is this?",
          "options": ["Head", "Face", "Neck", "Hair"],
          "translation": "Head",
          "languageCode": "zh",
          "romanization": "tóu",
          "correctAnswer": "Head",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "头发",
          "prompt": "What is this?",
          "options": ["Hair", "Head", "Face", "Eye"],
          "translation": "Hair",
          "languageCode": "zh",
          "romanization": "tóu fa",
          "correctAnswer": "Hair",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "牙齿",
          "prompt": "What body part is this?",
          "options": ["Tooth/Teeth", "Tongue", "Mouth", "Lip"],
          "translation": "Tooth/Teeth",
          "languageCode": "zh",
          "romanization": "yá chǐ",
          "correctAnswer": "Tooth/Teeth",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "舌头",
          "prompt": "What is the Chinese word for 'tongue'?",
          "options": ["舌头 (shé tou)", "嘴巴 (zuǐ ba)", "牙齿 (yá chǐ)", "鼻子 (bí zi)"],
          "translation": "Tongue",
          "languageCode": "zh",
          "romanization": "shé tou",
          "correctAnswer": "舌头 (shé tou)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "眉毛",
          "prompt": "What is the Chinese word for 'eyebrow'?",
          "options": ["眉毛 (méi mao)", "眼睛 (yǎn jing)", "头发 (tóu fa)", "睫毛 (jié máo)"],
          "translation": "Eyebrow",
          "languageCode": "zh",
          "romanization": "méi mao",
          "correctAnswer": "眉毛 (méi mao)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "下巴",
          "prompt": "What is the Chinese word for 'chin'?",
          "options": ["下巴 (xià ba)", "脸 (liǎn)", "嘴巴 (zuǐ ba)", "脖子 (bó zi)"],
          "translation": "Chin",
          "languageCode": "zh",
          "romanization": "xià ba",
          "correctAnswer": "下巴 (xià ba)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我的眼睛",
          "prompt": "How do you say 'my eyes' in Chinese?",
          "options": ["我的眼睛 (wǒ de yǎn jing)", "眼睛 (yǎn jing)", "你的眼睛 (nǐ de yǎn jing)", "他的眼睛 (tā de yǎn jing)"],
          "translation": "My eyes",
          "languageCode": "zh",
          "romanization": "wǒ de yǎn jing",
          "correctAnswer": "我的眼睛 (wǒ de yǎn jing)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你的鼻子",
          "prompt": "How do you say 'your nose' in Chinese?",
          "options": ["你的鼻子 (nǐ de bí zi)", "我的鼻子 (wǒ de bí zi)", "鼻子 (bí zi)", "他的鼻子 (tā de bí zi)"],
          "translation": "Your nose",
          "languageCode": "zh",
          "romanization": "nǐ de bí zi",
          "correctAnswer": "你的鼻子 (nǐ de bí zi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "眼睛",
          "prompt": "Listen and select the correct body part.",
          "options": ["Eye", "Ear", "Nose", "Mouth"],
          "translation": "Eye",
          "languageCode": "zh",
          "romanization": "yǎn jing",
          "correctAnswer": "Eye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "鼻子",
          "prompt": "Listen and select the correct body part.",
          "options": ["Nose", "Eye", "Mouth", "Ear"],
          "translation": "Nose",
          "languageCode": "zh",
          "romanization": "bí zi",
          "correctAnswer": "Nose",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "嘴巴",
          "prompt": "Listen and select the correct body part.",
          "options": ["Mouth", "Nose", "Ear", "Tongue"],
          "translation": "Mouth",
          "languageCode": "zh",
          "romanization": "zuǐ ba",
          "correctAnswer": "Mouth",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "耳朵",
          "prompt": "Listen and select the correct body part.",
          "options": ["Ear", "Eye", "Nose", "Mouth"],
          "translation": "Ear",
          "languageCode": "zh",
          "romanization": "ěr duo",
          "correctAnswer": "Ear",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "脸",
          "prompt": "Listen and select the correct body part.",
          "options": ["Face", "Head", "Neck", "Hair"],
          "translation": "Face",
          "languageCode": "zh",
          "romanization": "liǎn",
          "correctAnswer": "Face",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "头发",
          "prompt": "Listen and select the correct answer.",
          "options": ["Hair", "Head", "Face", "Ear"],
          "translation": "Hair",
          "languageCode": "zh",
          "romanization": "tóu fa",
          "correctAnswer": "Hair",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "眼睛",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Eye", "Ear", "Nose", "Mouth"],
          "translation": "Eye",
          "languageCode": "zh",
          "romanization": "yǎn jing",
          "correctAnswer": "Eye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "鼻子",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Nose", "Eye", "Ear", "Mouth"],
          "translation": "Nose",
          "languageCode": "zh",
          "romanization": "bí zi",
          "correctAnswer": "Nose",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "嘴巴",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Mouth", "Nose", "Tongue", "Tooth"],
          "translation": "Mouth",
          "languageCode": "zh",
          "romanization": "zuǐ ba",
          "correctAnswer": "Mouth",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "耳朵",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Ear", "Eye", "Nose", "Head"],
          "translation": "Ear",
          "languageCode": "zh",
          "romanization": "ěr duo",
          "correctAnswer": "Ear",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "头",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Head", "Face", "Hair", "Neck"],
          "translation": "Head",
          "languageCode": "zh",
          "romanization": "tóu",
          "correctAnswer": "Head",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "眼睛",
          "prompt": "Write the Chinese characters for 'Eye'",
          "options": ["眼睛", "鼻子", "嘴巴", "耳朵"],
          "translation": "Eye",
          "languageCode": "zh",
          "romanization": "yǎn jing",
          "correctAnswer": "眼睛",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "鼻子",
          "prompt": "Write the Chinese characters for 'Nose'",
          "options": ["鼻子", "眼睛", "嘴巴", "耳朵"],
          "translation": "Nose",
          "languageCode": "zh",
          "romanization": "bí zi",
          "correctAnswer": "鼻子",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "嘴巴",
          "prompt": "Write the Chinese characters for 'Mouth'",
          "options": ["嘴巴", "鼻子", "眼睛", "舌头"],
          "translation": "Mouth",
          "languageCode": "zh",
          "romanization": "zuǐ ba",
          "correctAnswer": "嘴巴",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "耳朵",
          "prompt": "Write the Chinese characters for 'Ear'",
          "options": ["耳朵", "眼睛", "鼻子", "头"],
          "translation": "Ear",
          "languageCode": "zh",
          "romanization": "ěr duo",
          "correctAnswer": "耳朵",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "脸",
          "prompt": "Write the Chinese character for 'Face'",
          "options": ["脸", "头", "头发", "下巴"],
          "translation": "Face",
          "languageCode": "zh",
          "romanization": "liǎn",
          "correctAnswer": "脸",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: BODY =====
  {
    lessonId: 'zh-stage1-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "手",
          "prompt": "What body part is this?",
          "options": ["Hand", "Foot", "Arm", "Leg"],
          "translation": "Hand",
          "languageCode": "zh",
          "romanization": "shǒu",
          "correctAnswer": "Hand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "脚",
          "prompt": "What body part is this?",
          "options": ["Foot", "Hand", "Leg", "Arm"],
          "translation": "Foot",
          "languageCode": "zh",
          "romanization": "jiǎo",
          "correctAnswer": "Foot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "腿",
          "prompt": "What body part is this?",
          "options": ["Leg", "Arm", "Foot", "Hand"],
          "translation": "Leg",
          "languageCode": "zh",
          "romanization": "tuǐ",
          "correctAnswer": "Leg",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "胳膊",
          "prompt": "What body part is this?",
          "options": ["Arm", "Leg", "Hand", "Shoulder"],
          "translation": "Arm",
          "languageCode": "zh",
          "romanization": "gē bo",
          "correctAnswer": "Arm",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "身体",
          "prompt": "What does this word mean?",
          "options": ["Body", "Head", "Arm", "Leg"],
          "translation": "Body",
          "languageCode": "zh",
          "romanization": "shēn tǐ",
          "correctAnswer": "Body",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "肚子",
          "prompt": "What body part is this?",
          "options": ["Belly/Stomach", "Back", "Chest", "Shoulder"],
          "translation": "Belly/Stomach",
          "languageCode": "zh",
          "romanization": "dù zi",
          "correctAnswer": "Belly/Stomach",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "背",
          "prompt": "What body part is this?",
          "options": ["Back", "Chest", "Stomach", "Shoulder"],
          "translation": "Back",
          "languageCode": "zh",
          "romanization": "bèi",
          "correctAnswer": "Back",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "心脏",
          "prompt": "What body part is this?",
          "options": ["Heart", "Stomach", "Lung", "Chest"],
          "translation": "Heart",
          "languageCode": "zh",
          "romanization": "xīn zàng",
          "correctAnswer": "Heart",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "手指",
          "prompt": "What is the Chinese word for 'finger'?",
          "options": ["手指 (shǒu zhǐ)", "手 (shǒu)", "脚趾 (jiǎo zhǐ)", "胳膊 (gē bo)"],
          "translation": "Finger",
          "languageCode": "zh",
          "romanization": "shǒu zhǐ",
          "correctAnswer": "手指 (shǒu zhǐ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "脚趾",
          "prompt": "What is the Chinese word for 'toe'?",
          "options": ["脚趾 (jiǎo zhǐ)", "脚 (jiǎo)", "手指 (shǒu zhǐ)", "腿 (tuǐ)"],
          "translation": "Toe",
          "languageCode": "zh",
          "romanization": "jiǎo zhǐ",
          "correctAnswer": "脚趾 (jiǎo zhǐ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "肩膀",
          "prompt": "What is the Chinese word for 'shoulder'?",
          "options": ["肩膀 (jiān bǎng)", "胳膊 (gē bo)", "背 (bèi)", "手 (shǒu)"],
          "translation": "Shoulder",
          "languageCode": "zh",
          "romanization": "jiān bǎng",
          "correctAnswer": "肩膀 (jiān bǎng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "脖子",
          "prompt": "What is the Chinese word for 'neck'?",
          "options": ["脖子 (bó zi)", "头 (tóu)", "肩膀 (jiān bǎng)", "下巴 (xià ba)"],
          "translation": "Neck",
          "languageCode": "zh",
          "romanization": "bó zi",
          "correctAnswer": "脖子 (bó zi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我的手",
          "prompt": "How do you say 'my hand' in Chinese?",
          "options": ["我的手 (wǒ de shǒu)", "手 (shǒu)", "你的手 (nǐ de shǒu)", "他的手 (tā de shǒu)"],
          "translation": "My hand",
          "languageCode": "zh",
          "romanization": "wǒ de shǒu",
          "correctAnswer": "我的手 (wǒ de shǒu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "手",
          "prompt": "Listen and select the correct body part.",
          "options": ["Hand", "Foot", "Arm", "Leg"],
          "translation": "Hand",
          "languageCode": "zh",
          "romanization": "shǒu",
          "correctAnswer": "Hand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "脚",
          "prompt": "Listen and select the correct body part.",
          "options": ["Foot", "Hand", "Leg", "Toe"],
          "translation": "Foot",
          "languageCode": "zh",
          "romanization": "jiǎo",
          "correctAnswer": "Foot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "腿",
          "prompt": "Listen and select the correct body part.",
          "options": ["Leg", "Arm", "Foot", "Hand"],
          "translation": "Leg",
          "languageCode": "zh",
          "romanization": "tuǐ",
          "correctAnswer": "Leg",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "胳膊",
          "prompt": "Listen and select the correct body part.",
          "options": ["Arm", "Leg", "Hand", "Shoulder"],
          "translation": "Arm",
          "languageCode": "zh",
          "romanization": "gē bo",
          "correctAnswer": "Arm",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "身体",
          "prompt": "Listen and select the correct translation.",
          "options": ["Body", "Head", "Hand", "Foot"],
          "translation": "Body",
          "languageCode": "zh",
          "romanization": "shēn tǐ",
          "correctAnswer": "Body",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "肚子",
          "prompt": "Listen and select the correct body part.",
          "options": ["Belly/Stomach", "Back", "Chest", "Heart"],
          "translation": "Belly/Stomach",
          "languageCode": "zh",
          "romanization": "dù zi",
          "correctAnswer": "Belly/Stomach",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "手",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Hand", "Foot", "Arm", "Leg"],
          "translation": "Hand",
          "languageCode": "zh",
          "romanization": "shǒu",
          "correctAnswer": "Hand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "脚",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Foot", "Hand", "Leg", "Arm"],
          "translation": "Foot",
          "languageCode": "zh",
          "romanization": "jiǎo",
          "correctAnswer": "Foot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "腿",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Leg", "Arm", "Foot", "Hand"],
          "translation": "Leg",
          "languageCode": "zh",
          "romanization": "tuǐ",
          "correctAnswer": "Leg",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "胳膊",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Arm", "Leg", "Shoulder", "Hand"],
          "translation": "Arm",
          "languageCode": "zh",
          "romanization": "gē bo",
          "correctAnswer": "Arm",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "身体",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Body", "Head", "Chest", "Back"],
          "translation": "Body",
          "languageCode": "zh",
          "romanization": "shēn tǐ",
          "correctAnswer": "Body",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage1-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "手",
          "prompt": "Write the Chinese character for 'Hand'",
          "options": ["手", "脚", "腿", "胳膊"],
          "translation": "Hand",
          "languageCode": "zh",
          "romanization": "shǒu",
          "correctAnswer": "手",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "脚",
          "prompt": "Write the Chinese character for 'Foot'",
          "options": ["脚", "手", "腿", "头"],
          "translation": "Foot",
          "languageCode": "zh",
          "romanization": "jiǎo",
          "correctAnswer": "脚",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "腿",
          "prompt": "Write the Chinese character for 'Leg'",
          "options": ["腿", "胳膊", "脚", "手"],
          "translation": "Leg",
          "languageCode": "zh",
          "romanization": "tuǐ",
          "correctAnswer": "腿",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "胳膊",
          "prompt": "Write the Chinese characters for 'Arm'",
          "options": ["胳膊", "腿", "手", "肩膀"],
          "translation": "Arm",
          "languageCode": "zh",
          "romanization": "gē bo",
          "correctAnswer": "胳膊",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "身体",
          "prompt": "Write the Chinese characters for 'Body'",
          "options": ["身体", "头", "脸", "背"],
          "translation": "Body",
          "languageCode": "zh",
          "romanization": "shēn tǐ",
          "correctAnswer": "身体",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 1 (A0 - Baby) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Greetings, Numbers, Colors, Face, Body)\n');

    let successCount = 0;
    let failCount = 0;

    for (const update of lessonUpdates) {
      try {
        const result = await prisma.lesson.update({
          where: {
            id: update.lessonId
          },
          data: {
            contentJson: update.contentJson
          }
        });

        console.log(`✅ Successfully updated: ${update.lessonId}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to update: ${update.lessonId}`);
        console.error(`   Error: ${error instanceof Error ? error.message : String(error)}`);
        failCount++;
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log(`\n✨ Update process completed!`);
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log(`   📊 Total: ${lessonUpdates.length}\n`);
  } catch (error) {
    console.error('❌ Fatal error during update process:');
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('🔌 Database connection closed.');
  }
}

// Run the update function
updateLessons();
