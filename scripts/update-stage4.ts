import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 4: A2 - Student
const lessonUpdates = [
  // ===== CHAPTER 1: PAST TENSE =====
  {
    lessonId: 'zh-stage4-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "昨天",
          "prompt": "What does this word mean?",
          "options": ["Yesterday", "Today", "Tomorrow", "Last week"],
          "translation": "Yesterday",
          "languageCode": "zh",
          "romanization": "zuó tiān",
          "correctAnswer": "Yesterday",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "上周",
          "prompt": "What does this word mean?",
          "options": ["Last week", "This week", "Next week", "Last month"],
          "translation": "Last week",
          "languageCode": "zh",
          "romanization": "shàng zhōu",
          "correctAnswer": "Last week",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "上个月",
          "prompt": "What does this phrase mean?",
          "options": ["Last month", "This month", "Next month", "Last year"],
          "translation": "Last month",
          "languageCode": "zh",
          "romanization": "shàng ge yuè",
          "correctAnswer": "Last month",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "去年",
          "prompt": "What does this word mean?",
          "options": ["Last year", "This year", "Next year", "Two years ago"],
          "translation": "Last year",
          "languageCode": "zh",
          "romanization": "qù nián",
          "correctAnswer": "Last year",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "吃",
          "prompt": "What does this verb mean?",
          "options": ["Eat", "Drink", "Cook", "Taste"],
          "translation": "Eat",
          "languageCode": "zh",
          "romanization": "chī",
          "correctAnswer": "Eat",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "喝",
          "prompt": "What does this verb mean?",
          "options": ["Drink", "Eat", "Eat food", "Sip"],
          "translation": "Drink",
          "languageCode": "zh",
          "romanization": "hē",
          "correctAnswer": "Drink",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "看",
          "prompt": "What does this verb mean?",
          "options": ["Look/Watch", "See", "Read", "Observe"],
          "translation": "Look/Watch",
          "languageCode": "zh",
          "romanization": "kàn",
          "correctAnswer": "Look/Watch",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "买",
          "prompt": "What does this verb mean?",
          "options": ["Buy", "Sell", "Give", "Take"],
          "translation": "Buy",
          "languageCode": "zh",
          "romanization": "mǎi",
          "correctAnswer": "Buy",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我昨天吃了米饭",
          "prompt": "How do you say 'I ate rice yesterday' (past tense)?",
          "options": ["我昨天吃了米饭 (wǒ zuó tiān chī le mǐ fàn)", "我吃米饭 (wǒ chī mǐ fàn)", "昨天吃米饭 (zuó tiān chī mǐ fàn)", "我会吃米饭 (wǒ huì chī mǐ fàn)"],
          "translation": "I ate rice yesterday",
          "languageCode": "zh",
          "romanization": "wǒ zuó tiān chī le mǐ fàn",
          "correctAnswer": "我昨天吃了米饭 (wǒ zuó tiān chī le mǐ fàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他上周看了电影",
          "prompt": "How do you say 'He watched a movie last week'?",
          "options": ["他上周看了电影 (tā shàng zhōu kàn le diàn yǐng)", "他看电影 (tā kàn diàn yǐng)", "上周看电影 (shàng zhōu kàn diàn yǐng)", "他会看电影 (tā huì kàn diàn yǐng)"],
          "translation": "He watched a movie last week",
          "languageCode": "zh",
          "romanization": "tā shàng zhōu kàn le diàn yǐng",
          "correctAnswer": "他上周看了电影 (tā shàng zhōu kàn le diàn yǐng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我们去年去了中国",
          "prompt": "How do you say 'We went to China last year'?",
          "options": ["我们去年去了中国 (wǒ men qù nián qù le zhōng guó)", "我们去中国 (wǒ men qù zhōng guó)", "去年去中国 (qù nián qù zhōng guó)", "我们会去中国 (wǒ men huì qù zhōng guó)"],
          "translation": "We went to China last year",
          "languageCode": "zh",
          "romanization": "wǒ men qù nián qù le zhōng guó",
          "correctAnswer": "我们去年去了中国 (wǒ men qù nián qù le zhōng guó)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你喝了茶吗？",
          "prompt": "How do you ask 'Did you drink tea?' (past tense question)?",
          "options": ["你喝了茶吗？(nǐ hē le chá ma?)", "你喝茶吗？(nǐ hē chá ma?)", "喝了茶吗？(hē le chá ma?)", "你会喝茶吗？(nǐ huì hē chá ma?)"],
          "translation": "Did you drink tea?",
          "languageCode": "zh",
          "romanization": "nǐ hē le chá ma?",
          "correctAnswer": "你喝了茶吗？(nǐ hē le chá ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我没有买那本书",
          "prompt": "How do you say 'I didn't buy that book'?",
          "options": ["我没有买那本书 (wǒ méi yǒu mǎi nà běn shū)", "我没买书 (wǒ méi mǎi shū)", "我不买书 (wǒ bu mǎi shū)", "我买书了 (wǒ mǎi shū le)"],
          "translation": "I didn't buy that book",
          "languageCode": "zh",
          "romanization": "wǒ méi yǒu mǎi nà běn shū",
          "correctAnswer": "我没有买那本书 (wǒ méi yǒu mǎi nà běn shū)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "昨天",
          "prompt": "Listen and select the correct time reference.",
          "options": ["Yesterday", "Today", "Tomorrow", "Last week"],
          "translation": "Yesterday",
          "languageCode": "zh",
          "romanization": "zuó tiān",
          "correctAnswer": "Yesterday",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "上周",
          "prompt": "Listen and select the correct time reference.",
          "options": ["Last week", "This week", "Next week", "Last month"],
          "translation": "Last week",
          "languageCode": "zh",
          "romanization": "shàng zhōu",
          "correctAnswer": "Last week",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "去年",
          "prompt": "Listen and select the correct time reference.",
          "options": ["Last year", "This year", "Next year", "Two years ago"],
          "translation": "Last year",
          "languageCode": "zh",
          "romanization": "qù nián",
          "correctAnswer": "Last year",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "吃",
          "prompt": "Listen and select the correct verb.",
          "options": ["Eat", "Drink", "Cook", "Buy"],
          "translation": "Eat",
          "languageCode": "zh",
          "romanization": "chī",
          "correctAnswer": "Eat",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "了",
          "prompt": "Listen to this particle. What does it mark?",
          "options": ["Past tense", "Future tense", "Present tense", "Continuous"],
          "translation": "Past tense marker",
          "languageCode": "zh",
          "romanization": "le",
          "correctAnswer": "Past tense",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "看",
          "prompt": "Listen and select the correct verb.",
          "options": ["Look/Watch", "See", "Read", "View"],
          "translation": "Look/Watch",
          "languageCode": "zh",
          "romanization": "kàn",
          "correctAnswer": "Look/Watch",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我昨天吃了米饭",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I ate rice yesterday", "I eat rice", "I like rice", "I will eat rice"],
          "translation": "I ate rice yesterday",
          "languageCode": "zh",
          "romanization": "wǒ zuó tiān chī le mǐ fàn",
          "correctAnswer": "I ate rice yesterday",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他上周看了电影",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["He watched a movie last week", "He watches movies", "He will watch a movie", "He likes movies"],
          "translation": "He watched a movie last week",
          "languageCode": "zh",
          "romanization": "tā shàng zhōu kàn le diàn yǐng",
          "correctAnswer": "He watched a movie last week",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我们去年去了中国",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["We went to China last year", "We go to China", "We will go to China", "We live in China"],
          "translation": "We went to China last year",
          "languageCode": "zh",
          "romanization": "wǒ men qù nián qù le zhōng guó",
          "correctAnswer": "We went to China last year",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你喝了茶吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Did you drink tea?", "Do you drink tea?", "Will you drink tea?", "Do you like tea?"],
          "translation": "Did you drink tea?",
          "languageCode": "zh",
          "romanization": "nǐ hē le chá ma?",
          "correctAnswer": "Did you drink tea?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我没有买那本书",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I didn't buy that book", "I bought that book", "I will buy that book", "I want that book"],
          "translation": "I didn't buy that book",
          "languageCode": "zh",
          "romanization": "wǒ méi yǒu mǎi nà běn shū",
          "correctAnswer": "I didn't buy that book",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "昨天",
          "prompt": "Write the Chinese characters for 'Yesterday'",
          "options": ["昨天", "明天", "今天", "每天"],
          "translation": "Yesterday",
          "languageCode": "zh",
          "romanization": "zuó tiān",
          "correctAnswer": "昨天",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "去年",
          "prompt": "Write the Chinese characters for 'Last year'",
          "options": ["去年", "今年", "明年", "每年"],
          "translation": "Last year",
          "languageCode": "zh",
          "romanization": "qù nián",
          "correctAnswer": "去年",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "吃",
          "prompt": "Write the Chinese character for 'Eat'",
          "options": ["吃", "喝", "看", "买"],
          "translation": "Eat",
          "languageCode": "zh",
          "romanization": "chī",
          "correctAnswer": "吃",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "了",
          "prompt": "Write the Chinese character for the past tense marker",
          "options": ["了", "着", "过", "才"],
          "translation": "Past marker",
          "languageCode": "zh",
          "romanization": "le",
          "correctAnswer": "了",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "买",
          "prompt": "Write the Chinese character for 'Buy'",
          "options": ["买", "卖", "给", "拿"],
          "translation": "Buy",
          "languageCode": "zh",
          "romanization": "mǎi",
          "correctAnswer": "买",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: FUTURE TENSE =====
  {
    lessonId: 'zh-stage4-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "明天",
          "prompt": "What does this word mean?",
          "options": ["Tomorrow", "Today", "Yesterday", "Next week"],
          "translation": "Tomorrow",
          "languageCode": "zh",
          "romanization": "míng tiān",
          "correctAnswer": "Tomorrow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "下周",
          "prompt": "What does this word mean?",
          "options": ["Next week", "Last week", "This week", "Next month"],
          "translation": "Next week",
          "languageCode": "zh",
          "romanization": "xià zhōu",
          "correctAnswer": "Next week",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "明年",
          "prompt": "What does this word mean?",
          "options": ["Next year", "This year", "Last year", "Two years from now"],
          "translation": "Next year",
          "languageCode": "zh",
          "romanization": "míng nián",
          "correctAnswer": "Next year",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "要",
          "prompt": "What does this modal verb mean (for future)?",
          "options": ["Will/To be going to", "Want", "Need", "Have to"],
          "translation": "Will/Going to",
          "languageCode": "zh",
          "romanization": "yào",
          "correctAnswer": "Will/To be going to",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "会",
          "prompt": "What does this modal verb mean (for future)?",
          "options": ["Will", "Can", "Would", "Should"],
          "translation": "Will",
          "languageCode": "zh",
          "romanization": "huì",
          "correctAnswer": "Will",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "可能",
          "prompt": "What does this word mean?",
          "options": ["Possible/Maybe", "Probable", "Likely", "Perhaps"],
          "translation": "Possible/Maybe",
          "languageCode": "zh",
          "romanization": "kě néng",
          "correctAnswer": "Possible/Maybe",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "打算",
          "prompt": "What does this word mean?",
          "options": ["To plan", "To calculate", "To intend", "To arrange"],
          "translation": "To plan",
          "languageCode": "zh",
          "romanization": "dǎ suàn",
          "correctAnswer": "To plan",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "想",
          "prompt": "What does this verb mean (in future context)?",
          "options": ["Want/Plan to", "Think", "Miss", "Remember"],
          "translation": "Want/Plan to",
          "languageCode": "zh",
          "romanization": "xiǎng",
          "correctAnswer": "Want/Plan to",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我明天要去上班",
          "prompt": "How do you say 'I'm going to go to work tomorrow'?",
          "options": ["我明天要去上班 (wǒ míng tiān yào qù shàng bān)", "我去上班 (wǒ qù shàng bān)", "明天要上班 (míng tiān yào shàng bān)", "我会上班 (wǒ huì shàng bān)"],
          "translation": "I'm going to go to work tomorrow",
          "languageCode": "zh",
          "romanization": "wǒ míng tiān yào qù shàng bān",
          "correctAnswer": "我明天要去上班 (wǒ míng tiān yào qù shàng bān)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "她下周会来吗？",
          "prompt": "How do you ask 'Will she come next week?'",
          "options": ["她下周会来吗？(tā xià zhōu huì lái ma?)", "她会来吗？(tā huì lái ma?)", "下周来吗？(xià zhōu lái ma?)", "她来吗？(tā lái ma?)"],
          "translation": "Will she come next week?",
          "languageCode": "zh",
          "romanization": "tā xià zhōu huì lái ma?",
          "correctAnswer": "她下周会来吗？(tā xià zhōu huì lái ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我们打算明年去日本",
          "prompt": "How do you say 'We plan to go to Japan next year'?",
          "options": ["我们打算明年去日本 (wǒ men dǎ suàn míng nián qù rì běn)", "我们要去日本 (wǒ men yào qù rì běn)", "明年去日本 (míng nián qù rì běn)", "我们去日本 (wǒ men qù rì běn)"],
          "translation": "We plan to go to Japan next year",
          "languageCode": "zh",
          "romanization": "wǒ men dǎ suàn míng nián qù rì běn",
          "correctAnswer": "我们打算明年去日本 (wǒ men dǎ suàn míng nián qù rì běn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你想喝什么？",
          "prompt": "How do you ask 'What would you like to drink?'",
          "options": ["你想喝什么？(nǐ xiǎng hē shén me?)", "你喝什么？(nǐ hē shén me?)", "想喝什么？(xiǎng hē shén me?)", "你要什么？(nǐ yào shén me?)"],
          "translation": "What would you like to drink?",
          "languageCode": "zh",
          "romanization": "nǐ xiǎng hē shén me?",
          "correctAnswer": "你想喝什么？(nǐ xiǎng hē shén me?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这可能会很难",
          "prompt": "How do you say 'This might be very difficult'?",
          "options": ["这可能会很难 (zhè kě néng huì hěn nán)", "这会很难 (zhè huì hěn nán)", "可能很难 (kě néng hěn nán)", "这很难 (zhè hěn nán)"],
          "translation": "This might be very difficult",
          "languageCode": "zh",
          "romanization": "zhè kě néng huì hěn nán",
          "correctAnswer": "这可能会很难 (zhè kě néng huì hěn nán)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "明天",
          "prompt": "Listen and select the correct time reference.",
          "options": ["Tomorrow", "Today", "Yesterday", "Next week"],
          "translation": "Tomorrow",
          "languageCode": "zh",
          "romanization": "míng tiān",
          "correctAnswer": "Tomorrow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "下周",
          "prompt": "Listen and select the correct time reference.",
          "options": ["Next week", "Last week", "This week", "Next month"],
          "translation": "Next week",
          "languageCode": "zh",
          "romanization": "xià zhōu",
          "correctAnswer": "Next week",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "要",
          "prompt": "Listen to this modal. What does it indicate?",
          "options": ["Will/Going to", "Can", "Want", "Have to"],
          "translation": "Will/Going to",
          "languageCode": "zh",
          "romanization": "yào",
          "correctAnswer": "Will/Going to",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "会",
          "prompt": "Listen to this modal. What does it indicate?",
          "options": ["Will", "Can", "Could", "Might"],
          "translation": "Will",
          "languageCode": "zh",
          "romanization": "huì",
          "correctAnswer": "Will",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "打算",
          "prompt": "Listen and select the correct meaning.",
          "options": ["To plan", "To arrange", "To prepare", "To decide"],
          "translation": "To plan",
          "languageCode": "zh",
          "romanization": "dǎ suàn",
          "correctAnswer": "To plan",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "想",
          "prompt": "Listen and select the correct meaning (future context).",
          "options": ["Want/Plan to", "Think", "Miss", "Remember"],
          "translation": "Want/Plan to",
          "languageCode": "zh",
          "romanization": "xiǎng",
          "correctAnswer": "Want/Plan to",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我明天要去上班",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I'm going to go to work tomorrow", "I go to work", "I will work tomorrow", "I work every day"],
          "translation": "I'm going to go to work tomorrow",
          "languageCode": "zh",
          "romanization": "wǒ míng tiān yào qù shàng bān",
          "correctAnswer": "I'm going to go to work tomorrow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "她下周会来吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Will she come next week?", "Does she come?", "Did she come?", "She will come"],
          "translation": "Will she come next week?",
          "languageCode": "zh",
          "romanization": "tā xià zhōu huì lái ma?",
          "correctAnswer": "Will she come next week?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我们打算明年去日本",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["We plan to go to Japan next year", "We will go to Japan", "We went to Japan", "We want Japan"],
          "translation": "We plan to go to Japan next year",
          "languageCode": "zh",
          "romanization": "wǒ men dǎ suàn míng nián qù rì běn",
          "correctAnswer": "We plan to go to Japan next year",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你想喝什么？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["What would you like to drink?", "What do you drink?", "What did you drink?", "Do you drink?"],
          "translation": "What would you like to drink?",
          "languageCode": "zh",
          "romanization": "nǐ xiǎng hē shén me?",
          "correctAnswer": "What would you like to drink?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这可能会很难",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["This might be very difficult", "This is difficult", "This will be hard", "This is very hard"],
          "translation": "This might be very difficult",
          "languageCode": "zh",
          "romanization": "zhè kě néng huì hěn nán",
          "correctAnswer": "This might be very difficult",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "明天",
          "prompt": "Write the Chinese characters for 'Tomorrow'",
          "options": ["明天", "昨天", "今天", "每天"],
          "translation": "Tomorrow",
          "languageCode": "zh",
          "romanization": "míng tiān",
          "correctAnswer": "明天",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "明年",
          "prompt": "Write the Chinese characters for 'Next year'",
          "options": ["明年", "去年", "今年", "每年"],
          "translation": "Next year",
          "languageCode": "zh",
          "romanization": "míng nián",
          "correctAnswer": "明年",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "要",
          "prompt": "Write the Chinese character for 'Will/Going to'",
          "options": ["要", "会", "想", "能"],
          "translation": "Will/Going to",
          "languageCode": "zh",
          "romanization": "yào",
          "correctAnswer": "要",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "会",
          "prompt": "Write the Chinese character for 'Will'",
          "options": ["会", "要", "能", "想"],
          "translation": "Will",
          "languageCode": "zh",
          "romanization": "huì",
          "correctAnswer": "会",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "想",
          "prompt": "Write the Chinese character for 'Want/Plan to'",
          "options": ["想", "要", "会", "打"],
          "translation": "Want/Plan to",
          "languageCode": "zh",
          "romanization": "xiǎng",
          "correctAnswer": "想",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: ADJECTIVES =====
  {
    lessonId: 'zh-stage4-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "大",
          "prompt": "What does this adjective mean?",
          "options": ["Big", "Small", "Long", "Wide"],
          "translation": "Big",
          "languageCode": "zh",
          "romanization": "dà",
          "correctAnswer": "Big",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "小",
          "prompt": "What does this adjective mean?",
          "options": ["Small", "Big", "Short", "Narrow"],
          "translation": "Small",
          "languageCode": "zh",
          "romanization": "xiǎo",
          "correctAnswer": "Small",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "漂亮",
          "prompt": "What does this adjective mean?",
          "options": ["Beautiful", "Ugly", "Nice", "Pretty"],
          "translation": "Beautiful",
          "languageCode": "zh",
          "romanization": "piào liang",
          "correctAnswer": "Beautiful",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "丑",
          "prompt": "What does this adjective mean?",
          "options": ["Ugly", "Beautiful", "Sad", "Broken"],
          "translation": "Ugly",
          "languageCode": "zh",
          "romanization": "chǒu",
          "correctAnswer": "Ugly",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "快",
          "prompt": "What does this adjective mean?",
          "options": ["Fast", "Slow", "Quiet", "Loud"],
          "translation": "Fast",
          "languageCode": "zh",
          "romanization": "kuài",
          "correctAnswer": "Fast",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "慢",
          "prompt": "What does this adjective mean?",
          "options": ["Slow", "Fast", "Quick", "Rapid"],
          "translation": "Slow",
          "languageCode": "zh",
          "romanization": "màn",
          "correctAnswer": "Slow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "热",
          "prompt": "What does this adjective mean?",
          "options": ["Hot", "Cold", "Warm", "Cool"],
          "translation": "Hot",
          "languageCode": "zh",
          "romanization": "rè",
          "correctAnswer": "Hot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "冷",
          "prompt": "What does this adjective mean?",
          "options": ["Cold", "Hot", "Cool", "Warm"],
          "translation": "Cold",
          "languageCode": "zh",
          "romanization": "lěng",
          "correctAnswer": "Cold",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这个红色很漂亮",
          "prompt": "How do you say 'This red one is very beautiful'?",
          "options": ["这个红色很漂亮 (zhè ge hóng sè hěn piào liang)", "这红色漂亮 (zhè hóng sè piào liang)", "红色漂亮 (hóng sè piào liang)", "这个漂亮 (zhè ge piào liang)"],
          "translation": "This red one is very beautiful",
          "languageCode": "zh",
          "romanization": "zhè ge hóng sè hěn piào liang",
          "correctAnswer": "这个红色很漂亮 (zhè ge hóng sè hěn piào liang)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他比我更高",
          "prompt": "How do you say 'He is taller than me'?",
          "options": ["他比我更高 (tā bǐ wǒ gèng gāo)", "他很高 (tā hěn gāo)", "他高我 (tā gāo wǒ)", "比较高 (bǐ jiào gāo)"],
          "translation": "He is taller than me",
          "languageCode": "zh",
          "romanization": "tā bǐ wǒ gèng gāo",
          "correctAnswer": "他比我更高 (tā bǐ wǒ gèng gāo)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这辆车最快",
          "prompt": "How do you say 'This car is the fastest'?",
          "options": ["这辆车最快 (zhè liàng chē zuì kuài)", "这个车快 (zhè ge chē kuài)", "车最快 (chē zuì kuài)", "这个最快 (zhè ge zuì kuài)"],
          "translation": "This car is the fastest",
          "languageCode": "zh",
          "romanization": "zhè liàng chē zuì kuài",
          "correctAnswer": "这辆车最快 (zhè liàng chē zuì kuài)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "天气太热了",
          "prompt": "How do you say 'The weather is too hot'?",
          "options": ["天气太热了 (tiān qì tài rè le)", "天气热 (tiān qì rè)", "太热 (tài rè)", "很热 (hěn rè)"],
          "translation": "The weather is too hot",
          "languageCode": "zh",
          "romanization": "tiān qì tài rè le",
          "correctAnswer": "天气太热了 (tiān qì tài rè le)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个比那个便宜",
          "prompt": "How do you say 'This one is cheaper than that one'?",
          "options": ["这个比那个便宜 (zhè ge bǐ nà ge pián yi)", "这个便宜 (zhè ge pián yi)", "比那个便宜 (bǐ nà ge pián yi)", "这个很便宜 (zhè ge hěn pián yi)"],
          "translation": "This one is cheaper than that one",
          "languageCode": "zh",
          "romanization": "zhè ge bǐ nà ge pián yi",
          "correctAnswer": "这个比那个便宜 (zhè ge bǐ nà ge pián yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "大",
          "prompt": "Listen and select the correct adjective.",
          "options": ["Big", "Small", "Long", "Short"],
          "translation": "Big",
          "languageCode": "zh",
          "romanization": "dà",
          "correctAnswer": "Big",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "小",
          "prompt": "Listen and select the correct adjective.",
          "options": ["Small", "Big", "Tall", "Short"],
          "translation": "Small",
          "languageCode": "zh",
          "romanization": "xiǎo",
          "correctAnswer": "Small",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "漂亮",
          "prompt": "Listen and select the correct adjective.",
          "options": ["Beautiful", "Ugly", "Nice", "Good"],
          "translation": "Beautiful",
          "languageCode": "zh",
          "romanization": "piào liang",
          "correctAnswer": "Beautiful",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "快",
          "prompt": "Listen and select the correct adjective.",
          "options": ["Fast", "Slow", "Quiet", "Loud"],
          "translation": "Fast",
          "languageCode": "zh",
          "romanization": "kuài",
          "correctAnswer": "Fast",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "热",
          "prompt": "Listen and select the correct adjective.",
          "options": ["Hot", "Cold", "Warm", "Cool"],
          "translation": "Hot",
          "languageCode": "zh",
          "romanization": "rè",
          "correctAnswer": "Hot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "冷",
          "prompt": "Listen and select the correct adjective.",
          "options": ["Cold", "Hot", "Cool", "Warm"],
          "translation": "Cold",
          "languageCode": "zh",
          "romanization": "lěng",
          "correctAnswer": "Cold",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这个红色很漂亮",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["This red one is very beautiful", "This is red", "Red is beautiful", "This color is nice"],
          "translation": "This red one is very beautiful",
          "languageCode": "zh",
          "romanization": "zhè ge hóng sè hěn piào liang",
          "correctAnswer": "This red one is very beautiful",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他比我更高",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["He is taller than me", "He is tall", "He is very high", "Compared to tall"],
          "translation": "He is taller than me",
          "languageCode": "zh",
          "romanization": "tā bǐ wǒ gèng gāo",
          "correctAnswer": "He is taller than me",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这辆车最快",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["This car is the fastest", "This car is fast", "The fastest car", "The car is fastest"],
          "translation": "This car is the fastest",
          "languageCode": "zh",
          "romanization": "zhè liàng chē zuì kuài",
          "correctAnswer": "This car is the fastest",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "天气太热了",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["The weather is too hot", "The weather is hot", "It's hot outside", "Very hot weather"],
          "translation": "The weather is too hot",
          "languageCode": "zh",
          "romanization": "tiān qì tài rè le",
          "correctAnswer": "The weather is too hot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个比那个便宜",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["This one is cheaper than that one", "This is cheap", "That is expensive", "Cheaper things"],
          "translation": "This one is cheaper than that one",
          "languageCode": "zh",
          "romanization": "zhè ge bǐ nà ge pián yi",
          "correctAnswer": "This one is cheaper than that one",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "大",
          "prompt": "Write the Chinese character for 'Big'",
          "options": ["大", "小", "长", "宽"],
          "translation": "Big",
          "languageCode": "zh",
          "romanization": "dà",
          "correctAnswer": "大",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "小",
          "prompt": "Write the Chinese character for 'Small'",
          "options": ["小", "大", "短", "窄"],
          "translation": "Small",
          "languageCode": "zh",
          "romanization": "xiǎo",
          "correctAnswer": "小",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "快",
          "prompt": "Write the Chinese character for 'Fast'",
          "options": ["快", "慢", "静", "吵"],
          "translation": "Fast",
          "languageCode": "zh",
          "romanization": "kuài",
          "correctAnswer": "快",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "热",
          "prompt": "Write the Chinese character for 'Hot'",
          "options": ["热", "冷", "暖", "凉"],
          "translation": "Hot",
          "languageCode": "zh",
          "romanization": "rè",
          "correctAnswer": "热",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "冷",
          "prompt": "Write the Chinese character for 'Cold'",
          "options": ["冷", "热", "凉", "暖"],
          "translation": "Cold",
          "languageCode": "zh",
          "romanization": "lěng",
          "correctAnswer": "冷",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: SHOPPING =====
  {
    lessonId: 'zh-stage4-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "价格",
          "prompt": "What does this word mean?",
          "options": ["Price", "Cost", "Money", "Value"],
          "translation": "Price",
          "languageCode": "zh",
          "romanization": "jià gé",
          "correctAnswer": "Price",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "便宜",
          "prompt": "What does this adjective mean?",
          "options": ["Cheap", "Expensive", "Good deal", "Affordable"],
          "translation": "Cheap",
          "languageCode": "zh",
          "romanization": "pián yi",
          "correctAnswer": "Cheap",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "贵",
          "prompt": "What does this adjective mean?",
          "options": ["Expensive", "Cheap", "Valuable", "Precious"],
          "translation": "Expensive",
          "languageCode": "zh",
          "romanization": "guì",
          "correctAnswer": "Expensive",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "数量",
          "prompt": "What does this word mean?",
          "options": ["Quantity", "Amount", "Size", "Weight"],
          "translation": "Quantity",
          "languageCode": "zh",
          "romanization": "shù liàng",
          "correctAnswer": "Quantity",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "付款",
          "prompt": "What does this verb mean?",
          "options": ["Pay", "Charge", "Bill", "Cost"],
          "translation": "Pay",
          "languageCode": "zh",
          "romanization": "fù kuǎn",
          "correctAnswer": "Pay",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "折扣",
          "prompt": "What does this noun mean?",
          "options": ["Discount", "Sale", "Offer", "Deal"],
          "translation": "Discount",
          "languageCode": "zh",
          "romanization": "zhé kòu",
          "correctAnswer": "Discount",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "销售员",
          "prompt": "What does this word mean?",
          "options": ["Salesperson", "Cashier", "Seller", "Vendor"],
          "translation": "Salesperson",
          "languageCode": "zh",
          "romanization": "xiāo shòu yuán",
          "correctAnswer": "Salesperson",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "发票",
          "prompt": "What does this word mean?",
          "options": ["Receipt", "Invoice", "Bill", "Ticket"],
          "translation": "Receipt",
          "languageCode": "zh",
          "romanization": "fā piào",
          "correctAnswer": "Receipt",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这件衣服多少钱？",
          "prompt": "How do you ask 'How much is this shirt?'",
          "options": ["这件衣服多少钱？(zhè jiàn yī fu duō shao qián?)", "衣服多少钱？(yī fu duō shao qián?)", "这个多少钱？(zhè ge duō shao qián?)", "多少钱？(duō shao qián?)"],
          "translation": "How much is this shirt?",
          "languageCode": "zh",
          "romanization": "zhè jiàn yī fu duō shao qián?",
          "correctAnswer": "这件衣服多少钱？(zhè jiàn yī fu duō shao qián?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我要买三个",
          "prompt": "How do you say 'I want to buy three'?",
          "options": ["我要买三个 (wǒ yào mǎi sān ge)", "我买三个 (wǒ mǎi sān ge)", "要买三个 (yào mǎi sān ge)", "买三个 (mǎi sān ge)"],
          "translation": "I want to buy three",
          "languageCode": "zh",
          "romanization": "wǒ yào mǎi sān ge",
          "correctAnswer": "我要买三个 (wǒ yào mǎi sān ge)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "有折扣吗？",
          "prompt": "How do you ask 'Is there a discount?'",
          "options": ["有折扣吗？(yǒu zhé kòu ma?)", "折扣吗？(zhé kòu ma?)", "什么折扣？(shén me zhé kòu?)", "折扣多少？(zhé kòu duō shao?)"],
          "translation": "Is there a discount?",
          "languageCode": "zh",
          "romanization": "yǒu zhé kòu ma?",
          "correctAnswer": "有折扣吗？(yǒu zhé kòu ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个太贵了",
          "prompt": "How do you say 'This is too expensive'?",
          "options": ["这个太贵了 (zhè ge tài guì le)", "这个贵 (zhè ge guì)", "太贵 (tài guì)", "很贵 (hěn guì)"],
          "translation": "This is too expensive",
          "languageCode": "zh",
          "romanization": "zhè ge tài guì le",
          "correctAnswer": "这个太贵了 (zhè ge tài guì le)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "一共多少钱？",
          "prompt": "How do you ask 'What is the total?'",
          "options": ["一共多少钱？(yī gòng duō shao qián?)", "多少钱？(duō shao qián?)", "一共多少？(yī gòng duō shao?)", "总共多少？(zǒng gòng duō shao?)"],
          "translation": "What is the total?",
          "languageCode": "zh",
          "romanization": "yī gòng duō shao qián?",
          "correctAnswer": "一共多少钱？(yī gòng duō shao qián?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "价格",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Price", "Cost", "Money", "Value"],
          "translation": "Price",
          "languageCode": "zh",
          "romanization": "jià gé",
          "correctAnswer": "Price",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "便宜",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Cheap", "Expensive", "Good", "Affordable"],
          "translation": "Cheap",
          "languageCode": "zh",
          "romanization": "pián yi",
          "correctAnswer": "Cheap",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "贵",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Expensive", "Cheap", "Great", "Precious"],
          "translation": "Expensive",
          "languageCode": "zh",
          "romanization": "guì",
          "correctAnswer": "Expensive",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "折扣",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Discount", "Sale", "Offer", "Promotion"],
          "translation": "Discount",
          "languageCode": "zh",
          "romanization": "zhé kòu",
          "correctAnswer": "Discount",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "付款",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Pay", "Charge", "Bill", "Cost"],
          "translation": "Pay",
          "languageCode": "zh",
          "romanization": "fù kuǎn",
          "correctAnswer": "Pay",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "发票",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Receipt", "Invoice", "Bill", "Ticket"],
          "translation": "Receipt",
          "languageCode": "zh",
          "romanization": "fā piào",
          "correctAnswer": "Receipt",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这件衣服多少钱？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["How much is this shirt?", "This shirt price", "What's the shirt", "Shirt cost"],
          "translation": "How much is this shirt?",
          "languageCode": "zh",
          "romanization": "zhè jiàn yī fu duō shao qián?",
          "correctAnswer": "How much is this shirt?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我要买三个",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["I want to buy three", "I buy three", "Three pieces", "Buy me three"],
          "translation": "I want to buy three",
          "languageCode": "zh",
          "romanization": "wǒ yào mǎi sān ge",
          "correctAnswer": "I want to buy three",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "有折扣吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Is there a discount?", "What discount", "Have discount", "Discount available"],
          "translation": "Is there a discount?",
          "languageCode": "zh",
          "romanization": "yǒu zhé kòu ma?",
          "correctAnswer": "Is there a discount?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个太贵了",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["This is too expensive", "This is expensive", "Very costly", "Too much money"],
          "translation": "This is too expensive",
          "languageCode": "zh",
          "romanization": "zhè ge tài guì le",
          "correctAnswer": "This is too expensive",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "一共多少钱？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["What is the total?", "How much total", "How much money", "Total cost"],
          "translation": "What is the total?",
          "languageCode": "zh",
          "romanization": "yī gòng duō shao qián?",
          "correctAnswer": "What is the total?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "便宜",
          "prompt": "Write the Chinese characters for 'Cheap'",
          "options": ["便宜", "贵", "价格", "钱"],
          "translation": "Cheap",
          "languageCode": "zh",
          "romanization": "pián yi",
          "correctAnswer": "便宜",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "贵",
          "prompt": "Write the Chinese character for 'Expensive'",
          "options": ["贵", "便", "便宜", "价"],
          "translation": "Expensive",
          "languageCode": "zh",
          "romanization": "guì",
          "correctAnswer": "贵",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "折扣",
          "prompt": "Write the Chinese characters for 'Discount'",
          "options": ["折扣", "折", "扣", "减价"],
          "translation": "Discount",
          "languageCode": "zh",
          "romanization": "zhé kòu",
          "correctAnswer": "折扣",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "付款",
          "prompt": "Write the Chinese characters for 'Pay'",
          "options": ["付款", "付钱", "交", "给钱"],
          "translation": "Pay",
          "languageCode": "zh",
          "romanization": "fù kuǎn",
          "correctAnswer": "付款",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "发票",
          "prompt": "Write the Chinese characters for 'Receipt'",
          "options": ["发票", "票据", "单据", "收据"],
          "translation": "Receipt",
          "languageCode": "zh",
          "romanization": "fā piào",
          "correctAnswer": "发票",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: NUMBERS 1000+ =====
  {
    lessonId: 'zh-stage4-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "千",
          "prompt": "What does this number word mean?",
          "options": ["Thousand", "Hundred", "Million", "Ten"],
          "translation": "Thousand",
          "languageCode": "zh",
          "romanization": "qiān",
          "correctAnswer": "Thousand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "万",
          "prompt": "What does this number word mean?",
          "options": ["Ten thousand", "Thousand", "Hundred", "Million"],
          "translation": "Ten thousand",
          "languageCode": "zh",
          "romanization": "wàn",
          "correctAnswer": "Ten thousand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "百万",
          "prompt": "What does this number word mean?",
          "options": ["Million", "Thousand", "Hundred", "Ten million"],
          "translation": "Million",
          "languageCode": "zh",
          "romanization": "bǎi wàn",
          "correctAnswer": "Million",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "1000",
          "prompt": "How do you count this number in Chinese?",
          "options": ["一千 (yī qiān)", "一万 (yī wàn)", "一百 (yī bǎi)", "十 (shí)"],
          "translation": "One thousand",
          "languageCode": "zh",
          "romanization": "yī qiān",
          "correctAnswer": "一千 (yī qiān)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "10000",
          "prompt": "How do you count this number in Chinese?",
          "options": ["一万 (yī wàn)", "一千 (yī qiān)", "十万 (shí wàn)", "一百 (yī bǎi)"],
          "translation": "Ten thousand",
          "languageCode": "zh",
          "romanization": "yī wàn",
          "correctAnswer": "一万 (yī wàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "五千块",
          "prompt": "What does this phrase mean?",
          "options": ["Five thousand yuan", "Five hundred", "Fifty thousand", "Five pieces"],
          "translation": "Five thousand yuan",
          "languageCode": "zh",
          "romanization": "wǔ qiān kuài",
          "correctAnswer": "Five thousand yuan",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "数字",
          "prompt": "What does this word mean?",
          "options": ["Number/Digits", "Count", "Number", "Figure"],
          "translation": "Number/Digits",
          "languageCode": "zh",
          "romanization": "shù zì",
          "correctAnswer": "Number/Digits",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "块",
          "prompt": "What does this word mean (in currency)?",
          "options": ["Yuan (currency)", "Piece", "Block", "Component"],
          "translation": "Yuan (currency)",
          "languageCode": "zh",
          "romanization": "kuài",
          "correctAnswer": "Yuan (currency)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这辆车值十万块",
          "prompt": "How do you say 'This car is worth 100,000 yuan'?",
          "options": ["这辆车值十万块 (zhè liàng chē zhí shí wàn kuài)", "这个车十万 (zhè ge chē shí wàn)", "十万块车 (shí wàn kuài chē)", "车值十万 (chē zhí shí wàn)"],
          "translation": "This car is worth 100,000 yuan",
          "languageCode": "zh",
          "romanization": "zhè liàng chē zhí shí wàn kuài",
          "correctAnswer": "这辆车值十万块 (zhè liàng chē zhí shí wàn kuài)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "房子花了二百万",
          "prompt": "How do you say 'The house cost 2 million'?",
          "options": ["房子花了二百万 (fáng zi huā le èr bǎi wàn)", "房子二百万 (fáng zi èr bǎi wàn)", "二百万房子 (èr bǎi wàn fáng zi)", "花二百万 (huā èr bǎi wàn)"],
          "translation": "The house cost 2 million",
          "languageCode": "zh",
          "romanization": "fáng zi huā le èr bǎi wàn",
          "correctAnswer": "房子花了二百万 (fáng zi huā le èr bǎi wàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我有五千块钱",
          "prompt": "How do you say 'I have 5,000 yuan'?",
          "options": ["我有五千块钱 (wǒ yǒu wǔ qiān kuài qián)", "我有五千 (wǒ yǒu wǔ qiān)", "五千块钱 (wǔ qiān kuài qián)", "我有钱 (wǒ yǒu qián)"],
          "translation": "I have 5,000 yuan",
          "languageCode": "zh",
          "romanization": "wǒ yǒu wǔ qiān kuài qián",
          "correctAnswer": "我有五千块钱 (wǒ yǒu wǔ qiān kuài qián)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这笔生意值一百万",
          "prompt": "How do you say 'This business deal is worth 1 million'?",
          "options": ["这笔生意值一百万 (zhè bǐ shēng yi zhí yī bǎi wàn)", "这生意一百万 (zhè shēng yi yī bǎi wàn)", "一百万生意 (yī bǎi wàn shēng yi)", "生意值百万 (shēng yi zhí bǎi wàn)"],
          "translation": "This business deal is worth 1 million",
          "languageCode": "zh",
          "romanization": "zhè bǐ shēng yi zhí yī bǎi wàn",
          "correctAnswer": "这笔生意值一百万 (zhè bǐ shēng yi zhí yī bǎi wàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "一千加五百等于一千五",
          "prompt": "How do you say 'One thousand plus five hundred equals fifteen hundred'?",
          "options": ["一千加五百等于一千五 (yī qiān jiā wǔ bǎi děng yu yī qiān wǔ)", "一千五百 (yī qiān wǔ bǎi)", "千加百等千五 (qiān jiā bǎi děng qiān wǔ)", "一千五百等于 (yī qiān wǔ bǎi děng yu)"],
          "translation": "One thousand plus five hundred equals fifteen hundred",
          "languageCode": "zh",
          "romanization": "yī qiān jiā wǔ bǎi děng yu yī qiān wǔ",
          "correctAnswer": "一千加五百等于一千五 (yī qiān jiā wǔ bǎi děng yu yī qiān wǔ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "千",
          "prompt": "Listen and select the correct number magnitude.",
          "options": ["Thousand", "Hundred", "Million", "Ten"],
          "translation": "Thousand",
          "languageCode": "zh",
          "romanization": "qiān",
          "correctAnswer": "Thousand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "万",
          "prompt": "Listen and select the correct number magnitude.",
          "options": ["Ten thousand", "Thousand", "Hundred", "Million"],
          "translation": "Ten thousand",
          "languageCode": "zh",
          "romanization": "wàn",
          "correctAnswer": "Ten thousand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "一千",
          "prompt": "Listen and select what this represents.",
          "options": ["1,000", "100", "10,000", "10"],
          "translation": "One thousand",
          "languageCode": "zh",
          "romanization": "yī qiān",
          "correctAnswer": "1,000",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "一万",
          "prompt": "Listen and select what this represents.",
          "options": ["10,000", "1,000", "100,000", "100"],
          "translation": "Ten thousand",
          "languageCode": "zh",
          "romanization": "yī wàn",
          "correctAnswer": "10,000",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "五千块",
          "prompt": "Listen and select what this represents.",
          "options": ["5,000 yuan", "500 yuan", "50,000 yuan", "50 yuan"],
          "translation": "Five thousand yuan",
          "languageCode": "zh",
          "romanization": "wǔ qiān kuài",
          "correctAnswer": "5,000 yuan",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "百万",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Million", "Hundred thousand", "Thousand", "Ten million"],
          "translation": "Million",
          "languageCode": "zh",
          "romanization": "bǎi wàn",
          "correctAnswer": "Million",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这辆车值十万块",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["This car is worth 100,000 yuan", "This car costs money", "The car is expensive", "Worth ten thousand"],
          "translation": "This car is worth 100,000 yuan",
          "languageCode": "zh",
          "romanization": "zhè liàng chē zhí shí wàn kuài",
          "correctAnswer": "This car is worth 100,000 yuan",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "房子花了二百万",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["The house cost 2 million", "The house is 2 million", "Cost of house", "2 million yuan spent"],
          "translation": "The house cost 2 million",
          "languageCode": "zh",
          "romanization": "fáng zi huā le èr bǎi wàn",
          "correctAnswer": "The house cost 2 million",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我有五千块钱",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I have 5,000 yuan", "I have money", "Five thousand", "Money I have"],
          "translation": "I have 5,000 yuan",
          "languageCode": "zh",
          "romanization": "wǒ yǒu wǔ qiān kuài qián",
          "correctAnswer": "I have 5,000 yuan",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这笔生意值一百万",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["This business deal is worth 1 million", "This business costs", "Million yuan deal", "Worth million"],
          "translation": "This business deal is worth 1 million",
          "languageCode": "zh",
          "romanization": "zhè bǐ shēng yi zhí yī bǎi wàn",
          "correctAnswer": "This business deal is worth 1 million",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "一千加五百等于一千五",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["One thousand plus five hundred equals fifteen hundred", "1000 plus 500", "Calculate 1000 and 500", "One thousand five hundred"],
          "translation": "One thousand plus five hundred equals fifteen hundred",
          "languageCode": "zh",
          "romanization": "yī qiān jiā wǔ bǎi děng yu yī qiān wǔ",
          "correctAnswer": "One thousand plus five hundred equals fifteen hundred",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage4-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "千",
          "prompt": "Write the Chinese character for 'Thousand'",
          "options": ["千", "万", "百", "十"],
          "translation": "Thousand",
          "languageCode": "zh",
          "romanization": "qiān",
          "correctAnswer": "千",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "万",
          "prompt": "Write the Chinese character for 'Ten thousand'",
          "options": ["万", "千", "百", "十"],
          "translation": "Ten thousand",
          "languageCode": "zh",
          "romanization": "wàn",
          "correctAnswer": "万",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "块",
          "prompt": "Write the Chinese character for 'Yuan' (currency measure word)",
          "options": ["块", "钱", "元", "分"],
          "translation": "Yuan",
          "languageCode": "zh",
          "romanization": "kuài",
          "correctAnswer": "块",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "一千",
          "prompt": "Write the Chinese characters for '1,000'",
          "options": ["一千", "一万", "一百", "十"],
          "translation": "One thousand",
          "languageCode": "zh",
          "romanization": "yī qiān",
          "correctAnswer": "一千",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "一万",
          "prompt": "Write the Chinese characters for '10,000'",
          "options": ["一万", "一千", "十万", "一百"],
          "translation": "Ten thousand",
          "languageCode": "zh",
          "romanization": "yī wàn",
          "correctAnswer": "一万",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 4 (A2 - Student) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Past Tense, Future Tense, Adjectives, Shopping, Numbers 1000+)\n');

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
