import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 3: A1+ - Child
const lessonUpdates = [
  // ===== CHAPTER 1: PRONOUNS =====
  {
    lessonId: 'zh-stage3-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "我",
          "prompt": "What pronoun is this?",
          "options": ["I/Me", "You", "He/She", "We"],
          "translation": "I/Me",
          "languageCode": "zh",
          "romanization": "wǒ",
          "correctAnswer": "I/Me",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "你",
          "prompt": "What pronoun is this?",
          "options": ["You", "I", "He", "She"],
          "translation": "You",
          "languageCode": "zh",
          "romanization": "nǐ",
          "correctAnswer": "You",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "他",
          "prompt": "What pronoun is this?",
          "options": ["He", "She", "I", "You"],
          "translation": "He",
          "languageCode": "zh",
          "romanization": "tā",
          "correctAnswer": "He",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "她",
          "prompt": "What pronoun is this?",
          "options": ["She", "He", "I", "You"],
          "translation": "She",
          "languageCode": "zh",
          "romanization": "tā",
          "correctAnswer": "She",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "我们",
          "prompt": "What pronoun is this?",
          "options": ["We/Us", "I", "You", "They"],
          "translation": "We/Us",
          "languageCode": "zh",
          "romanization": "wǒ men",
          "correctAnswer": "We/Us",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "你们",
          "prompt": "What pronoun is this?",
          "options": ["You all", "We", "I", "They"],
          "translation": "You all",
          "languageCode": "zh",
          "romanization": "nǐ men",
          "correctAnswer": "You all",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "他们",
          "prompt": "What pronoun is this?",
          "options": ["They", "We", "You", "I"],
          "translation": "They",
          "languageCode": "zh",
          "romanization": "tā men",
          "correctAnswer": "They",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "她们",
          "prompt": "What pronoun is this?",
          "options": ["They (feminine)", "They", "We", "You"],
          "translation": "They (feminine)",
          "languageCode": "zh",
          "romanization": "tā men",
          "correctAnswer": "They (feminine)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我的",
          "prompt": "How do you say 'my/mine'?",
          "options": ["我的 (wǒ de)", "我 (wǒ)", "我们的 (wǒ men de)", "你的 (nǐ de)"],
          "translation": "My/Mine",
          "languageCode": "zh",
          "romanization": "wǒ de",
          "correctAnswer": "我的 (wǒ de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你的",
          "prompt": "How do you say 'your/yours'?",
          "options": ["你的 (nǐ de)", "你 (nǐ)", "你们的 (nǐ men de)", "我的 (wǒ de)"],
          "translation": "Your/Yours",
          "languageCode": "zh",
          "romanization": "nǐ de",
          "correctAnswer": "你的 (nǐ de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他的",
          "prompt": "How do you say 'his'?",
          "options": ["他的 (tā de)", "她的 (tā de)", "他 (tā)", "他们的 (tā men de)"],
          "translation": "His",
          "languageCode": "zh",
          "romanization": "tā de",
          "correctAnswer": "他的 (tā de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我们的",
          "prompt": "How do you say 'our/ours'?",
          "options": ["我们的 (wǒ men de)", "我的 (wǒ de)", "你们的 (nǐ men de)", "他们的 (tā men de)"],
          "translation": "Our/Ours",
          "languageCode": "zh",
          "romanization": "wǒ men de",
          "correctAnswer": "我们的 (wǒ men de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这是谁的？",
          "prompt": "How do you ask 'Whose is this?'",
          "options": ["这是谁的？(zhè shì shuo de?)", "这是谁？(zhè shì shuo?)", "谁的？(shuo de?)", "谁？(shuo?)"],
          "translation": "Whose is this?",
          "languageCode": "zh",
          "romanization": "zhè shì shuo de?",
          "correctAnswer": "这是谁的？(zhè shì shuo de?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "我",
          "prompt": "Listen and select the correct pronoun.",
          "options": ["I/Me", "You", "He", "She"],
          "translation": "I/Me",
          "languageCode": "zh",
          "romanization": "wǒ",
          "correctAnswer": "I/Me",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "你",
          "prompt": "Listen and select the correct pronoun.",
          "options": ["You", "I", "He", "We"],
          "translation": "You",
          "languageCode": "zh",
          "romanization": "nǐ",
          "correctAnswer": "You",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "他",
          "prompt": "Listen and select the correct pronoun.",
          "options": ["He", "She", "I", "You"],
          "translation": "He",
          "languageCode": "zh",
          "romanization": "tā",
          "correctAnswer": "He",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "我们",
          "prompt": "Listen and select the correct pronoun.",
          "options": ["We/Us", "I", "They", "You"],
          "translation": "We/Us",
          "languageCode": "zh",
          "romanization": "wǒ men",
          "correctAnswer": "We/Us",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "他们",
          "prompt": "Listen and select the correct pronoun.",
          "options": ["They", "We", "You", "I"],
          "translation": "They",
          "languageCode": "zh",
          "romanization": "tā men",
          "correctAnswer": "They",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "你们",
          "prompt": "Listen and select the correct pronoun.",
          "options": ["You all", "We", "They", "I"],
          "translation": "You all",
          "languageCode": "zh",
          "romanization": "nǐ men",
          "correctAnswer": "You all",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我的",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["My/Mine", "I", "Me", "My own"],
          "translation": "My/Mine",
          "languageCode": "zh",
          "romanization": "wǒ de",
          "correctAnswer": "My/Mine",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你的",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Your/Yours", "You", "Your own", "Your self"],
          "translation": "Your/Yours",
          "languageCode": "zh",
          "romanization": "nǐ de",
          "correctAnswer": "Your/Yours",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他的",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["His", "He", "His own", "Him"],
          "translation": "His",
          "languageCode": "zh",
          "romanization": "tā de",
          "correctAnswer": "His",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我们的",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Our/Ours", "We", "Our own", "Us"],
          "translation": "Our/Ours",
          "languageCode": "zh",
          "romanization": "wǒ men de",
          "correctAnswer": "Our/Ours",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他们的",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Their/Theirs", "They", "Their own", "Them"],
          "translation": "Their/Theirs",
          "languageCode": "zh",
          "romanization": "tā men de",
          "correctAnswer": "Their/Theirs",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "我",
          "prompt": "Write the Chinese character for 'I/Me'",
          "options": ["我", "你", "他", "她"],
          "translation": "I/Me",
          "languageCode": "zh",
          "romanization": "wǒ",
          "correctAnswer": "我",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "你",
          "prompt": "Write the Chinese character for 'You'",
          "options": ["你", "我", "他", "她"],
          "translation": "You",
          "languageCode": "zh",
          "romanization": "nǐ",
          "correctAnswer": "你",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "他",
          "prompt": "Write the Chinese character for 'He'",
          "options": ["他", "她", "我", "你"],
          "translation": "He",
          "languageCode": "zh",
          "romanization": "tā",
          "correctAnswer": "他",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "她",
          "prompt": "Write the Chinese character for 'She'",
          "options": ["她", "他", "我", "你"],
          "translation": "She",
          "languageCode": "zh",
          "romanization": "tā",
          "correctAnswer": "她",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "我们",
          "prompt": "Write the Chinese characters for 'We/Us'",
          "options": ["我们", "你们", "他们", "她们"],
          "translation": "We/Us",
          "languageCode": "zh",
          "romanization": "wǒ men",
          "correctAnswer": "我们",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: ROUTINE =====
  {
    lessonId: 'zh-stage3-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "早上",
          "prompt": "What time of day is this?",
          "options": ["Morning", "Afternoon", "Evening", "Night"],
          "translation": "Morning",
          "languageCode": "zh",
          "romanization": "zǎo shang",
          "correctAnswer": "Morning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "中午",
          "prompt": "What time of day is this?",
          "options": ["Noon/Midday", "Morning", "Evening", "Night"],
          "translation": "Noon/Midday",
          "languageCode": "zh",
          "romanization": "zhōng wu",
          "correctAnswer": "Noon/Midday",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "下午",
          "prompt": "What time of day is this?",
          "options": ["Afternoon", "Morning", "Evening", "Night"],
          "translation": "Afternoon",
          "languageCode": "zh",
          "romanization": "xià wu",
          "correctAnswer": "Afternoon",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "晚上",
          "prompt": "What time of day is this?",
          "options": ["Evening", "Morning", "Afternoon", "Night"],
          "translation": "Evening",
          "languageCode": "zh",
          "romanization": "wǎn shang",
          "correctAnswer": "Evening",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "起床",
          "prompt": "What does this verb mean?",
          "options": ["Wake up/Get up", "Go to bed", "Sleep", "Rest"],
          "translation": "Wake up/Get up",
          "languageCode": "zh",
          "romanization": "qǐ chuáng",
          "correctAnswer": "Wake up/Get up",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "睡觉",
          "prompt": "What does this verb mean?",
          "options": ["Sleep", "Wake up", "Rest", "Lie down"],
          "translation": "Sleep",
          "languageCode": "zh",
          "romanization": "shuì jiào",
          "correctAnswer": "Sleep",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "工作",
          "prompt": "What does this verb mean?",
          "options": ["Work", "Study", "Play", "Rest"],
          "translation": "Work",
          "languageCode": "zh",
          "romanization": "gōng zuò",
          "correctAnswer": "Work",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "学习",
          "prompt": "What does this verb mean?",
          "options": ["Study", "Work", "Read", "Learn"],
          "translation": "Study",
          "languageCode": "zh",
          "romanization": "xué xí",
          "correctAnswer": "Study",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我每天起床",
          "prompt": "How do you say 'I wake up every day'?",
          "options": ["我每天起床 (wǒ měi tiān qǐ chuáng)", "我起床 (wǒ qǐ chuáng)", "每天起床 (měi tiān qǐ chuáng)", "我每天 (wǒ měi tiān)"],
          "translation": "I wake up every day",
          "languageCode": "zh",
          "romanization": "wǒ měi tiān qǐ chuáng",
          "correctAnswer": "我每天起床 (wǒ měi tiān qǐ chuáng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我在早上学习",
          "prompt": "How do you say 'I study in the morning'?",
          "options": ["我在早上学习 (wǒ zài zǎo shang xué xí)", "我在学习 (wǒ zài xué xí)", "早上学习 (zǎo shang xué xí)", "我学习 (wǒ xué xí)"],
          "translation": "I study in the morning",
          "languageCode": "zh",
          "romanization": "wǒ zài zǎo shang xué xí",
          "correctAnswer": "我在早上学习 (wǒ zài zǎo shang xué xí)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他在工作",
          "prompt": "How do you say 'He is working'?",
          "options": ["他在工作 (tā zài gōng zuò)", "他工作 (tā gōng zuò)", "在工作 (zài gōng zuò)", "他要工作 (tā yào gōng zuò)"],
          "translation": "He is working",
          "languageCode": "zh",
          "romanization": "tā zài gōng zuò",
          "correctAnswer": "他在工作 (tā zài gōng zuò)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我每晚睡觉",
          "prompt": "How do you say 'I sleep every night'?",
          "options": ["我每晚睡觉 (wǒ měi wǎn shuì jiào)", "我睡觉 (wǒ shuì jiào)", "每晚睡觉 (měi wǎn shuì jiào)", "我每晚 (wǒ měi wǎn)"],
          "translation": "I sleep every night",
          "languageCode": "zh",
          "romanization": "wǒ měi wǎn shuì jiào",
          "correctAnswer": "我每晚睡觉 (wǒ měi wǎn shuì jiào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你下午做什么？",
          "prompt": "How do you ask 'What do you do in the afternoon?'",
          "options": ["你下午做什么？(nǐ xià wu zuò shén me?)", "你做什么？(nǐ zuò shén me?)", "下午做什么？(xià wu zuò shén me?)", "你下午？(nǐ xià wu?)"],
          "translation": "What do you do in the afternoon?",
          "languageCode": "zh",
          "romanization": "nǐ xià wu zuò shén me?",
          "correctAnswer": "你下午做什么？(nǐ xià wu zuò shén me?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "早上",
          "prompt": "Listen and select the correct time.",
          "options": ["Morning", "Afternoon", "Evening", "Night"],
          "translation": "Morning",
          "languageCode": "zh",
          "romanization": "zǎo shang",
          "correctAnswer": "Morning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "中午",
          "prompt": "Listen and select the correct time.",
          "options": ["Noon/Midday", "Morning", "Afternoon", "Night"],
          "translation": "Noon/Midday",
          "languageCode": "zh",
          "romanization": "zhōng wu",
          "correctAnswer": "Noon/Midday",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "下午",
          "prompt": "Listen and select the correct time.",
          "options": ["Afternoon", "Morning", "Night", "Evening"],
          "translation": "Afternoon",
          "languageCode": "zh",
          "romanization": "xià wu",
          "correctAnswer": "Afternoon",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "起床",
          "prompt": "Listen and select the correct verb.",
          "options": ["Wake up/Get up", "Go to bed", "Sleep", "Rest"],
          "translation": "Wake up/Get up",
          "languageCode": "zh",
          "romanization": "qǐ chuáng",
          "correctAnswer": "Wake up/Get up",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "工作",
          "prompt": "Listen and select the correct verb.",
          "options": ["Work", "Study", "Play", "Rest"],
          "translation": "Work",
          "languageCode": "zh",
          "romanization": "gōng zuò",
          "correctAnswer": "Work",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "学习",
          "prompt": "Listen and select the correct verb.",
          "options": ["Study", "Work", "Read", "Learn"],
          "translation": "Study",
          "languageCode": "zh",
          "romanization": "xué xí",
          "correctAnswer": "Study",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我每天起床",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I wake up every day", "I get up", "Every day I wake", "I should wake up"],
          "translation": "I wake up every day",
          "languageCode": "zh",
          "romanization": "wǒ měi tiān qǐ chuáng",
          "correctAnswer": "I wake up every day",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我在早上学习",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I study in the morning", "I study", "In the morning I learn", "I am studying"],
          "translation": "I study in the morning",
          "languageCode": "zh",
          "romanization": "wǒ zài zǎo shang xué xí",
          "correctAnswer": "I study in the morning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他在工作",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["He is working", "He works", "He will work", "He works hard"],
          "translation": "He is working",
          "languageCode": "zh",
          "romanization": "tā zài gōng zuò",
          "correctAnswer": "He is working",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我每晚睡觉",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I sleep every night", "I go to bed", "I sleep", "Every night I rest"],
          "translation": "I sleep every night",
          "languageCode": "zh",
          "romanization": "wǒ měi wǎn shuì jiào",
          "correctAnswer": "I sleep every night",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "晚上我看电视",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I watch TV in the evening", "I watch TV", "In the evening TV", "Television evening"],
          "translation": "I watch TV in the evening",
          "languageCode": "zh",
          "romanization": "wǎn shang wǒ kàn diàn shì",
          "correctAnswer": "I watch TV in the evening",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "早上",
          "prompt": "Write the Chinese characters for 'Morning'",
          "options": ["早上", "中午", "下午", "晚上"],
          "translation": "Morning",
          "languageCode": "zh",
          "romanization": "zǎo shang",
          "correctAnswer": "早上",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "下午",
          "prompt": "Write the Chinese characters for 'Afternoon'",
          "options": ["下午", "早上", "中午", "晚上"],
          "translation": "Afternoon",
          "languageCode": "zh",
          "romanization": "xià wu",
          "correctAnswer": "下午",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "起床",
          "prompt": "Write the Chinese characters for 'Wake up/Get up'",
          "options": ["起床", "睡觉", "工作", "学习"],
          "translation": "Wake up/Get up",
          "languageCode": "zh",
          "romanization": "qǐ chuáng",
          "correctAnswer": "起床",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "工作",
          "prompt": "Write the Chinese characters for 'Work'",
          "options": ["工作", "学习", "起床", "睡觉"],
          "translation": "Work",
          "languageCode": "zh",
          "romanization": "gōng zuò",
          "correctAnswer": "工作",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "学习",
          "prompt": "Write the Chinese characters for 'Study'",
          "options": ["学习", "工作", "学", "读"],
          "translation": "Study",
          "languageCode": "zh",
          "romanization": "xué xí",
          "correctAnswer": "学习",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: QUESTIONS 1 =====
  {
    lessonId: 'zh-stage3-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "什么",
          "prompt": "What does this question word mean?",
          "options": ["What", "Where", "When", "Who"],
          "translation": "What",
          "languageCode": "zh",
          "romanization": "shén me",
          "correctAnswer": "What",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "哪里",
          "prompt": "What does this question word mean?",
          "options": ["Where", "What", "When", "Why"],
          "translation": "Where",
          "languageCode": "zh",
          "romanization": "nǎ li",
          "correctAnswer": "Where",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "谁",
          "prompt": "What does this question word mean?",
          "options": ["Who", "What", "Where", "When"],
          "translation": "Who",
          "languageCode": "zh",
          "romanization": "shuo",
          "correctAnswer": "Who",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "几点",
          "prompt": "What does this question word mean?",
          "options": ["What time", "Where", "What", "When"],
          "translation": "What time",
          "languageCode": "zh",
          "romanization": "jǐ diǎn",
          "correctAnswer": "What time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "怎么样",
          "prompt": "What does this question phrase mean?",
          "options": ["How/How about", "Where", "What", "When"],
          "translation": "How/How about",
          "languageCode": "zh",
          "romanization": "zěn me yàng",
          "correctAnswer": "How/How about",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "为什么",
          "prompt": "What does this question phrase mean?",
          "options": ["Why", "What", "Where", "How"],
          "translation": "Why",
          "languageCode": "zh",
          "romanization": "wèi shén me",
          "correctAnswer": "Why",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "多少",
          "prompt": "What does this question word mean?",
          "options": ["How much/How many", "What", "Where", "When"],
          "translation": "How much/How many",
          "languageCode": "zh",
          "romanization": "duō shao",
          "correctAnswer": "How much/How many",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "哪个",
          "prompt": "What does this question word mean?",
          "options": ["Which", "What", "Where", "Who"],
          "translation": "Which",
          "languageCode": "zh",
          "romanization": "nǎ ge",
          "correctAnswer": "Which",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这是什么？",
          "prompt": "How do you ask 'What is this?'",
          "options": ["这是什么？(zhè shì shén me?)", "什么？(shén me?)", "这什么？(zhè shén me?)", "是什么？(shì shén me?)"],
          "translation": "What is this?",
          "languageCode": "zh",
          "romanization": "zhè shì shén me?",
          "correctAnswer": "这是什么？(zhè shì shén me?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你在哪里？",
          "prompt": "How do you ask 'Where are you?'",
          "options": ["你在哪里？(nǐ zài nǎ li?)", "在哪里？(zài nǎ li?)", "你哪里？(nǐ nǎ li?)", "哪里？(nǎ li?)"],
          "translation": "Where are you?",
          "languageCode": "zh",
          "romanization": "nǐ zài nǎ li?",
          "correctAnswer": "你在哪里？(nǐ zài nǎ li?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这是谁？",
          "prompt": "How do you ask 'Who is this?'",
          "options": ["这是谁？(zhè shì shuo?)", "谁？(shuo?)", "这谁？(zhè shuo?)", "是谁？(shì shuo?)"],
          "translation": "Who is this?",
          "languageCode": "zh",
          "romanization": "zhè shì shuo?",
          "correctAnswer": "这是谁？(zhè shì shuo?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你几点上班？",
          "prompt": "How do you ask 'What time do you go to work?'",
          "options": ["你几点上班？(nǐ jǐ diǎn shàng bān?)", "几点上班？(jǐ diǎn shàng bān?)", "你上班？(nǐ shàng bān?)", "几点？(jǐ diǎn?)"],
          "translation": "What time do you go to work?",
          "languageCode": "zh",
          "romanization": "nǐ jǐ diǎn shàng bān?",
          "correctAnswer": "你几点上班？(nǐ jǐ diǎn shàng bān?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你怎么样？",
          "prompt": "How do you ask 'How are you?'",
          "options": ["你怎么样？(nǐ zěn me yàng?)", "怎么样？(zěn me yàng?)", "你好吗？(nǐ hǎo ma?)", "你？(nǐ?)"],
          "translation": "How are you?",
          "languageCode": "zh",
          "romanization": "nǐ zěn me yàng?",
          "correctAnswer": "你怎么样？(nǐ zěn me yàng?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "什么",
          "prompt": "Listen and select the correct meaning.",
          "options": ["What", "Where", "When", "Who"],
          "translation": "What",
          "languageCode": "zh",
          "romanization": "shén me",
          "correctAnswer": "What",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "哪里",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Where", "What", "Who", "When"],
          "translation": "Where",
          "languageCode": "zh",
          "romanization": "nǎ li",
          "correctAnswer": "Where",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "谁",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Who", "What", "Where", "Which"],
          "translation": "Who",
          "languageCode": "zh",
          "romanization": "shuo",
          "correctAnswer": "Who",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "几点",
          "prompt": "Listen and select the correct meaning.",
          "options": ["What time", "Where", "When", "How"],
          "translation": "What time",
          "languageCode": "zh",
          "romanization": "jǐ diǎn",
          "correctAnswer": "What time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "怎么样",
          "prompt": "Listen and select the correct meaning.",
          "options": ["How/How about", "What", "Why", "Which"],
          "translation": "How/How about",
          "languageCode": "zh",
          "romanization": "zěn me yàng",
          "correctAnswer": "How/How about",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "为什么",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Why", "What", "Where", "When"],
          "translation": "Why",
          "languageCode": "zh",
          "romanization": "wèi shén me",
          "correctAnswer": "Why",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这是什么？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["What is this?", "Is this what?", "This is what", "What is it?"],
          "translation": "What is this?",
          "languageCode": "zh",
          "romanization": "zhè shì shén me?",
          "correctAnswer": "What is this?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你在哪里？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Where are you?", "You are where", "Where you", "Are you there?"],
          "translation": "Where are you?",
          "languageCode": "zh",
          "romanization": "nǐ zài nǎ li?",
          "correctAnswer": "Where are you?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这是谁？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Who is this?", "Is this who", "This is who", "Who are they?"],
          "translation": "Who is this?",
          "languageCode": "zh",
          "romanization": "zhè shì shuo?",
          "correctAnswer": "Who is this?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你怎么样？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["How are you?", "How do you do", "You how", "Are you OK?"],
          "translation": "How are you?",
          "languageCode": "zh",
          "romanization": "nǐ zěn me yàng?",
          "correctAnswer": "How are you?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "为什么？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Why?", "What why", "For what", "How come?"],
          "translation": "Why?",
          "languageCode": "zh",
          "romanization": "wèi shén me?",
          "correctAnswer": "Why?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "什么",
          "prompt": "Write the Chinese characters for 'What'",
          "options": ["什么", "哪里", "谁", "几点"],
          "translation": "What",
          "languageCode": "zh",
          "romanization": "shén me",
          "correctAnswer": "什么",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "哪里",
          "prompt": "Write the Chinese characters for 'Where'",
          "options": ["哪里", "什么", "谁", "多少"],
          "translation": "Where",
          "languageCode": "zh",
          "romanization": "nǎ li",
          "correctAnswer": "哪里",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "谁",
          "prompt": "Write the Chinese character for 'Who'",
          "options": ["谁", "什么", "哪里", "几点"],
          "translation": "Who",
          "languageCode": "zh",
          "romanization": "shuo",
          "correctAnswer": "谁",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "为什么",
          "prompt": "Write the Chinese characters for 'Why'",
          "options": ["为什么", "怎么样", "为什", "什么"],
          "translation": "Why",
          "languageCode": "zh",
          "romanization": "wèi shén me",
          "correctAnswer": "为什么",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "怎么样",
          "prompt": "Write the Chinese characters for 'How'",
          "options": ["怎么样", "怎么", "为什么", "什么"],
          "translation": "How/How about",
          "languageCode": "zh",
          "romanization": "zěn me yàng",
          "correctAnswer": "怎么样",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: QUESTIONS 2 =====
  {
    lessonId: 'zh-stage3-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "对吗？",
          "prompt": "What does this question phrase mean?",
          "options": ["Is that right?", "Correct", "Yes", "Really?"],
          "translation": "Is that right?",
          "languageCode": "zh",
          "romanization": "duì ma?",
          "correctAnswer": "Is that right?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "可以吗？",
          "prompt": "What does this question phrase mean?",
          "options": ["May I/Can I?", "Is it possible?", "Do you agree?", "Is it OK?"],
          "translation": "May I/Can I?",
          "languageCode": "zh",
          "romanization": "kě yi ma?",
          "correctAnswer": "May I/Can I?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "好吗？",
          "prompt": "What does this question phrase mean?",
          "options": ["OK?/Alright?", "Is it good?", "How are you?", "Are you well?"],
          "translation": "OK?/Alright?",
          "languageCode": "zh",
          "romanization": "hǎo ma?",
          "correctAnswer": "OK?/Alright?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "没有",
          "prompt": "What does this word mean?",
          "options": ["No/Don't have", "Yes", "Have", "Maybe"],
          "translation": "No/Don't have",
          "languageCode": "zh",
          "romanization": "méi yǒu",
          "correctAnswer": "No/Don't have",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "是的",
          "prompt": "What does this phrase mean?",
          "options": ["Yes", "No", "Maybe", "I agree"],
          "translation": "Yes",
          "languageCode": "zh",
          "romanization": "shì de",
          "correctAnswer": "Yes",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "不是",
          "prompt": "What does this phrase mean?",
          "options": ["No/It's not", "Yes", "Maybe", "I don't know"],
          "translation": "No/It's not",
          "languageCode": "zh",
          "romanization": "bu shì",
          "correctAnswer": "No/It's not",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "或者",
          "prompt": "What does this word mean?",
          "options": ["Or", "And", "But", "So"],
          "translation": "Or",
          "languageCode": "zh",
          "romanization": "huò zhě",
          "correctAnswer": "Or",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "但是",
          "prompt": "What does this word mean?",
          "options": ["But", "Or", "And", "So"],
          "translation": "But",
          "languageCode": "zh",
          "romanization": "dàn shì",
          "correctAnswer": "But",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "你同意吗？",
          "prompt": "How do you ask 'Do you agree?'",
          "options": ["你同意吗？(nǐ tóng yi ma?)", "同意吗？(tóng yi ma?)", "你同意？(nǐ tóng yi?)", "同意？(tóng yi?)"],
          "translation": "Do you agree?",
          "languageCode": "zh",
          "romanization": "nǐ tóng yi ma?",
          "correctAnswer": "你同意吗？(nǐ tóng yi ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我喜欢红色或者蓝色",
          "prompt": "How do you say 'I like red or blue'?",
          "options": ["我喜欢红色或者蓝色 (wǒ xǐ huān hóng sè huò zhě lán sè)", "我喜欢红色蓝色 (wǒ xǐ huān hóng sè lán sè)", "红色或者蓝色 (hóng sè huò zhě lán sè)", "喜欢红色蓝色 (xǐ huān hóng sè lán sè)"],
          "translation": "I like red or blue",
          "languageCode": "zh",
          "romanization": "wǒ xǐ huān hóng sè huò zhě lán sè",
          "correctAnswer": "我喜欢红色或者蓝色 (wǒ xǐ huān hóng sè huò zhě lán sè)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我想去，但是我很忙",
          "prompt": "How do you say 'I want to go, but I'm very busy'?",
          "options": ["我想去，但是我很忙 (wǒ xiǎng qù, dàn shì wǒ hěn máng)", "我想去但是忙 (wǒ xiǎng qù dàn shì máng)", "想去但是忙 (xiǎng qù dàn shì máng)", "我想去我忙 (wǒ xiǎng qù wǒ máng)"],
          "translation": "I want to go, but I'm very busy",
          "languageCode": "zh",
          "romanization": "wǒ xiǎng qù, dàn shì wǒ hěn máng",
          "correctAnswer": "我想去，但是我很忙 (wǒ xiǎng qù, dàn shì wǒ hěn máng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我没有时间",
          "prompt": "How do you say 'I don't have time'?",
          "options": ["我没有时间 (wǒ méi yǒu shí jiān)", "我没时间 (wǒ méi shí jiān)", "没有时间 (méi yǒu shí jiān)", "我没有 (wǒ méi yǒu)"],
          "translation": "I don't have time",
          "languageCode": "zh",
          "romanization": "wǒ méi yǒu shí jiān",
          "correctAnswer": "我没有时间 (wǒ méi yǒu shí jiān)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这不是对的",
          "prompt": "How do you say 'This is not right'?",
          "options": ["这不是对的 (zhè bu shì duì de)", "这不对 (zhè bu duì)", "不是对 (bu shì duì)", "这是对 (zhè shì duì)"],
          "translation": "This is not right",
          "languageCode": "zh",
          "romanization": "zhè bu shì duì de",
          "correctAnswer": "这不是对的 (zhè bu shì duì de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "是的",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Yes", "No", "Maybe", "I agree"],
          "translation": "Yes",
          "languageCode": "zh",
          "romanization": "shì de",
          "correctAnswer": "Yes",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "不是",
          "prompt": "Listen and select the correct meaning.",
          "options": ["No/It's not", "Yes", "Maybe", "I don't know"],
          "translation": "No/It's not",
          "languageCode": "zh",
          "romanization": "bu shì",
          "correctAnswer": "No/It's not",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "没有",
          "prompt": "Listen and select the correct meaning.",
          "options": ["No/Don't have", "Yes", "Have", "Maybe"],
          "translation": "No/Don't have",
          "languageCode": "zh",
          "romanization": "méi yǒu",
          "correctAnswer": "No/Don't have",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "好吗？",
          "prompt": "Listen and select the correct meaning.",
          "options": ["OK?/Alright?", "Is it good?", "How are you?", "Are you well?"],
          "translation": "OK?/Alright?",
          "languageCode": "zh",
          "romanization": "hǎo ma?",
          "correctAnswer": "OK?/Alright?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "或者",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Or", "And", "But", "So"],
          "translation": "Or",
          "languageCode": "zh",
          "romanization": "huò zhě",
          "correctAnswer": "Or",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "但是",
          "prompt": "Listen and select the correct meaning.",
          "options": ["But", "Or", "And", "Because"],
          "translation": "But",
          "languageCode": "zh",
          "romanization": "dàn shì",
          "correctAnswer": "But",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "是的",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Yes", "No", "OK", "I agree"],
          "translation": "Yes",
          "languageCode": "zh",
          "romanization": "shì de",
          "correctAnswer": "Yes",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "不是",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["No/It's not", "Yes", "I don't know", "Maybe"],
          "translation": "No/It's not",
          "languageCode": "zh",
          "romanization": "bu shì",
          "correctAnswer": "No/It's not",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我想去，但是我很忙",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I want to go, but I'm very busy", "I want to go", "But I'm busy", "I'm very busy"],
          "translation": "I want to go, but I'm very busy",
          "languageCode": "zh",
          "romanization": "wǒ xiǎng qù, dàn shì wǒ hěn máng",
          "correctAnswer": "I want to go, but I'm very busy",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我没有时间",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["I don't have time", "I have time", "I have no time left", "No time"],
          "translation": "I don't have time",
          "languageCode": "zh",
          "romanization": "wǒ méi yǒu shí jiān",
          "correctAnswer": "I don't have time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "可以吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["May I/Can I?", "Is it good?", "Is it OK?", "Can you?"],
          "translation": "May I/Can I?",
          "languageCode": "zh",
          "romanization": "kě yi ma?",
          "correctAnswer": "May I/Can I?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "是的",
          "prompt": "Write the Chinese characters for 'Yes'",
          "options": ["是的", "不是", "对", "可以"],
          "translation": "Yes",
          "languageCode": "zh",
          "romanization": "shì de",
          "correctAnswer": "是的",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "不是",
          "prompt": "Write the Chinese characters for 'No/It's not'",
          "options": ["不是", "是的", "没有", "不"],
          "translation": "No/It's not",
          "languageCode": "zh",
          "romanization": "bu shì",
          "correctAnswer": "不是",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "但是",
          "prompt": "Write the Chinese characters for 'But'",
          "options": ["但是", "或者", "因为", "所以"],
          "translation": "But",
          "languageCode": "zh",
          "romanization": "dàn shì",
          "correctAnswer": "但是",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "或者",
          "prompt": "Write the Chinese characters for 'Or'",
          "options": ["或者", "但是", "和", "或"],
          "translation": "Or",
          "languageCode": "zh",
          "romanization": "huò zhě",
          "correctAnswer": "或者",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "没有",
          "prompt": "Write the Chinese characters for 'No/Don't have'",
          "options": ["没有", "没", "有", "两个"],
          "translation": "No/Don't have",
          "languageCode": "zh",
          "romanization": "méi yǒu",
          "correctAnswer": "没有",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: SEQUENCES =====
  {
    lessonId: 'zh-stage3-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "然后",
          "prompt": "What does this word mean?",
          "options": ["Then/After that", "Before", "During", "Finally"],
          "translation": "Then/After that",
          "languageCode": "zh",
          "romanization": "rán hòu",
          "correctAnswer": "Then/After that",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "最后",
          "prompt": "What does this word mean?",
          "options": ["Finally", "First", "Then", "Last time"],
          "translation": "Finally",
          "languageCode": "zh",
          "romanization": "zuì hòu",
          "correctAnswer": "Finally",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "首先",
          "prompt": "What does this word mean?",
          "options": ["First/Firstly", "Finally", "Then", "Second"],
          "translation": "First/Firstly",
          "languageCode": "zh",
          "romanization": "shǒu xiān",
          "correctAnswer": "First/Firstly",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "以前",
          "prompt": "What does this word mean?",
          "options": ["Before", "After", "Later", "Soon"],
          "translation": "Before",
          "languageCode": "zh",
          "romanization": "yǐ qiān",
          "correctAnswer": "Before",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "以后",
          "prompt": "What does this word mean?",
          "options": ["After/Later", "Before", "During", "Now"],
          "translation": "After/Later",
          "languageCode": "zh",
          "romanization": "yǐ hòu",
          "correctAnswer": "After/Later",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "同时",
          "prompt": "What does this word mean?",
          "options": ["At the same time", "Later", "Before", "Next"],
          "translation": "At the same time",
          "languageCode": "zh",
          "romanization": "tóng shí",
          "correctAnswer": "At the same time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "才",
          "prompt": "What does this word mean (in sequence context)?",
          "options": ["Only then", "Finally", "Just", "Only"],
          "translation": "Only then",
          "languageCode": "zh",
          "romanization": "cái",
          "correctAnswer": "Only then",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "就",
          "prompt": "What does this word mean (in sequence context)?",
          "options": ["Then/Right away", "Finally", "Before", "Only"],
          "translation": "Then/Right away",
          "languageCode": "zh",
          "romanization": "jiù",
          "correctAnswer": "Then/Right away",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "首先我起床，然后我吃饭",
          "prompt": "How do you say 'First I wake up, then I eat'?",
          "options": ["首先我起床，然后我吃饭 (shǒu xiān wǒ qǐ chuáng, rán hòu wǒ chī fàn)", "我起床吃饭 (wǒ qǐ chuáng chī fàn)", "首先然后起床吃饭 (shǒu xiān rán hòu qǐ chuáng chī fàn)", "我先起床后吃饭 (wǒ xiān qǐ chuáng hòu chī fàn)"],
          "translation": "First I wake up, then I eat",
          "languageCode": "zh",
          "romanization": "shǒu xiān wǒ qǐ chuáng, rán hòu wǒ chī fàn",
          "correctAnswer": "首先我起床，然后我吃饭 (shǒu xiān wǒ qǐ chuáng, rán hòu wǒ chī fàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我以前不知道",
          "prompt": "How do you say 'I didn't know before'?",
          "options": ["我以前不知道 (wǒ yǐ qiān bu zhī dao)", "以前不知道 (yǐ qiān bu zhī dao)", "我不知道 (wǒ bu zhī dao)", "以前我不知道 (yǐ qiān wǒ bu zhī dao)"],
          "translation": "I didn't know before",
          "languageCode": "zh",
          "romanization": "wǒ yǐ qiān bu zhī dao",
          "correctAnswer": "我以前不知道 (wǒ yǐ qiān bu zhī dao)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我以后会更好",
          "prompt": "How do you say 'I will be better later'?",
          "options": ["我以后会更好 (wǒ yǐ hòu huì gèng hǎo)", "我会更好 (wǒ huì gèng hǎo)", "以后更好 (yǐ hòu gèng hǎo)", "我以后好 (wǒ yǐ hòu hǎo)"],
          "translation": "I will be better later",
          "languageCode": "zh",
          "romanization": "wǒ yǐ hòu huì gèng hǎo",
          "correctAnswer": "我以后会更好 (wǒ yǐ hòu huì gèng hǎo)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "最后，我要说再见",
          "prompt": "How do you say 'Finally, I have to say goodbye'?",
          "options": ["最后，我要说再见 (zuì hòu, wǒ yào shuō zài jiàn)", "最后我说再见 (zuì hòu wǒ shuō zài jiàn)", "我要说再见 (wǒ yào shuō zài jiàn)", "最后说再见 (zuì hòu shuō zài jiàn)"],
          "translation": "Finally, I have to say goodbye",
          "languageCode": "zh",
          "romanization": "zuì hòu, wǒ yào shuō zài jiàn",
          "correctAnswer": "最后，我要说再见 (zuì hòu, wǒ yào shuō zài jiàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我做完功课才去玩",
          "prompt": "How do you say 'Only after I finish homework do I go play'?",
          "options": ["我做完功课才去玩 (wǒ zuò wán gōng kè cái qù wán)", "我做功课去玩 (wǒ zuò gōng kè qù wán)", "做完功课玩 (zuò wán gōng kè wán)", "我才去玩 (wǒ cái qù wán)"],
          "translation": "Only after I finish homework do I go play",
          "languageCode": "zh",
          "romanization": "wǒ zuò wán gōng kè cái qù wán",
          "correctAnswer": "我做完功课才去玩 (wǒ zuò wán gōng kè cái qù wán)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "然后",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Then/After that", "Before", "Finally", "First"],
          "translation": "Then/After that",
          "languageCode": "zh",
          "romanization": "rán hòu",
          "correctAnswer": "Then/After that",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "最后",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Finally", "First", "Then", "Before"],
          "translation": "Finally",
          "languageCode": "zh",
          "romanization": "zuì hòu",
          "correctAnswer": "Finally",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "首先",
          "prompt": "Listen and select the correct meaning.",
          "options": ["First/Firstly", "Finally", "Then", "Before"],
          "translation": "First/Firstly",
          "languageCode": "zh",
          "romanization": "shǒu xiān",
          "correctAnswer": "First/Firstly",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "以前",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Before", "After", "Ago", "Now"],
          "translation": "Before",
          "languageCode": "zh",
          "romanization": "yǐ qiān",
          "correctAnswer": "Before",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "以后",
          "prompt": "Listen and select the correct meaning.",
          "options": ["After/Later", "Before", "Now", "Soon"],
          "translation": "After/Later",
          "languageCode": "zh",
          "romanization": "yǐ hòu",
          "correctAnswer": "After/Later",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "同时",
          "prompt": "Listen and select the correct meaning.",
          "options": ["At the same time", "Later", "Before", "Finally"],
          "translation": "At the same time",
          "languageCode": "zh",
          "romanization": "tóng shí",
          "correctAnswer": "At the same time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "然后",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Then/After that", "Before", "Finally", "Next"],
          "translation": "Then/After that",
          "languageCode": "zh",
          "romanization": "rán hòu",
          "correctAnswer": "Then/After that",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "最后",
          "prompt": "Speak this word aloud. What does it mean?",
          "options": ["Finally", "First", "Then", "At last"],
          "translation": "Finally",
          "languageCode": "zh",
          "romanization": "zuì hòu",
          "correctAnswer": "Finally",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "首先我起床，然后我吃饭",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["First I wake up, then I eat", "I wake up and eat", "First eat then wake up", "Wake up to eat"],
          "translation": "First I wake up, then I eat",
          "languageCode": "zh",
          "romanization": "shǒu xiān wǒ qǐ chuáng, rán hòu wǒ chī fàn",
          "correctAnswer": "First I wake up, then I eat",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我以前不知道",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I didn't know before", "I don't know", "Before I didn't know", "I still don't know"],
          "translation": "I didn't know before",
          "languageCode": "zh",
          "romanization": "wǒ yǐ qiān bu zhī dao",
          "correctAnswer": "I didn't know before",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "最后，我要说谢谢",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["Finally, I want to say thank you", "I say thank you", "Finally thank you.", "I need to thank"],
          "translation": "Finally, I want to say thank you",
          "languageCode": "zh",
          "romanization": "zuì hòu, wǒ yào shuō xiè xie",
          "correctAnswer": "Finally, I want to say thank you",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage3-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "然后",
          "prompt": "Write the Chinese characters for 'Then/After that'",
          "options": ["然后", "最后", "以后", "首先"],
          "translation": "Then/After that",
          "languageCode": "zh",
          "romanization": "rán hòu",
          "correctAnswer": "然后",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "最后",
          "prompt": "Write the Chinese characters for 'Finally'",
          "options": ["最后", "然后", "首先", "以后"],
          "translation": "Finally",
          "languageCode": "zh",
          "romanization": "zuì hòu",
          "correctAnswer": "最后",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "首先",
          "prompt": "Write the Chinese characters for 'First/Firstly'",
          "options": ["首先", "最后", "然后", "最初"],
          "translation": "First/Firstly",
          "languageCode": "zh",
          "romanization": "shǒu xiān",
          "correctAnswer": "首先",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "以前",
          "prompt": "Write the Chinese characters for 'Before'",
          "options": ["以前", "以后", "以前", "从前"],
          "translation": "Before",
          "languageCode": "zh",
          "romanization": "yǐ qiān",
          "correctAnswer": "以前",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "同时",
          "prompt": "Write the Chinese characters for 'At the same time'",
          "options": ["同时", "同时", "时间", "同样"],
          "translation": "At the same time",
          "languageCode": "zh",
          "romanization": "tóng shí",
          "correctAnswer": "同时",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 3 (A1+ - Child) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Pronouns, Routine, Questions 1, Questions 2, Sequences)\n');

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
