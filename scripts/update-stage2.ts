import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 2: A1 - Toddler
const lessonUpdates = [
  // ===== CHAPTER 1: FOOD =====
  {
    lessonId: 'zh-stage2-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "米饭",
          "prompt": "What food is this?",
          "options": ["Rice", "Noodles", "Bread", "Soup"],
          "translation": "Rice",
          "languageCode": "zh",
          "romanization": "mǐ fàn",
          "correctAnswer": "Rice",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "面条",
          "prompt": "What food is this?",
          "options": ["Noodles", "Rice", "Dumplings", "Bread"],
          "translation": "Noodles",
          "languageCode": "zh",
          "romanization": "miàn tiáo",
          "correctAnswer": "Noodles",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "饺子",
          "prompt": "What food is this?",
          "options": ["Dumplings", "Rice", "Noodles", "Bread"],
          "translation": "Dumplings",
          "languageCode": "zh",
          "romanization": "jiǎo zi",
          "correctAnswer": "Dumplings",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "汤",
          "prompt": "What is this?",
          "options": ["Soup", "Tea", "Water", "Juice"],
          "translation": "Soup",
          "languageCode": "zh",
          "romanization": "tāng",
          "correctAnswer": "Soup",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "鸡蛋",
          "prompt": "What food is this?",
          "options": ["Egg", "Chicken", "Fish", "Meat"],
          "translation": "Egg",
          "languageCode": "zh",
          "romanization": "jī dàn",
          "correctAnswer": "Egg",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "肉",
          "prompt": "What food is this?",
          "options": ["Meat", "Fish", "Chicken", "Pork"],
          "translation": "Meat",
          "languageCode": "zh",
          "romanization": "ròu",
          "correctAnswer": "Meat",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "蔬菜",
          "prompt": "What is this?",
          "options": ["Vegetable", "Fruit", "Meat", "Grain"],
          "translation": "Vegetable",
          "languageCode": "zh",
          "romanization": "shū cài",
          "correctAnswer": "Vegetable",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "水果",
          "prompt": "What is this?",
          "options": ["Fruit", "Vegetable", "Meat", "Bread"],
          "translation": "Fruit",
          "languageCode": "zh",
          "romanization": "shuǐ guǒ",
          "correctAnswer": "Fruit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "苹果",
          "prompt": "What fruit is this?",
          "options": ["Apple", "Orange", "Banana", "Grape"],
          "translation": "Apple",
          "languageCode": "zh",
          "romanization": "píng guǒ",
          "correctAnswer": "Apple",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "茶",
          "prompt": "What beverage is this?",
          "options": ["Tea", "Coffee", "Water", "Juice"],
          "translation": "Tea",
          "languageCode": "zh",
          "romanization": "chá",
          "correctAnswer": "Tea",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我喜欢吃米饭",
          "prompt": "How do you say 'I like to eat rice'?",
          "options": ["我喜欢吃米饭 (wǒ xǐ huān chī mǐ fàn)", "我吃米饭 (wǒ chī mǐ fàn)", "米饭 (mǐ fàn)", "我要吃米饭 (wǒ yào chī mǐ fàn)"],
          "translation": "I like to eat rice",
          "languageCode": "zh",
          "romanization": "wǒ xǐ huān chī mǐ fàn",
          "correctAnswer": "我喜欢吃米饭 (wǒ xǐ huān chī mǐ fàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你好吗？",
          "prompt": "How do you ask 'How are you?'",
          "options": ["你好吗？(nǐ hǎo ma?)", "你好 (nǐ hǎo)", "怎么样？(zěn me yàng?)", "你呢？(nǐ ne?)"],
          "translation": "How are you?",
          "languageCode": "zh",
          "romanization": "nǐ hǎo ma?",
          "correctAnswer": "你好吗？(nǐ hǎo ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我很好",
          "prompt": "How do you say 'I am well'?",
          "options": ["我很好 (wǒ hěn hǎo)", "我好 (wǒ hǎo)", "很好 (hěn hǎo)", "我不好 (wǒ bu hǎo)"],
          "translation": "I am well",
          "languageCode": "zh",
          "romanization": "wǒ hěn hǎo",
          "correctAnswer": "我很好 (wǒ hěn hǎo)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "请给我水",
          "prompt": "How do you say 'Please give me water'?",
          "options": ["请给我水 (qǐng gěi wǒ shuǐ)", "给我水 (gěi wǒ shuǐ)", "我要水 (wǒ yào shuǐ)", "水 (shuǐ)"],
          "translation": "Please give me water",
          "languageCode": "zh",
          "romanization": "qǐng gěi wǒ shuǐ",
          "correctAnswer": "请给我水 (qǐng gěi wǒ shuǐ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这很好吃",
          "prompt": "How do you say 'This is delicious'?",
          "options": ["这很好吃 (zhè hěn hǎo chī)", "这好 (zhè hǎo)", "好吃 (hǎo chī)", "这是好 (zhè shì hǎo)"],
          "translation": "This is delicious",
          "languageCode": "zh",
          "romanization": "zhè hěn hǎo chī",
          "correctAnswer": "这很好吃 (zhè hěn hǎo chī)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "米饭",
          "prompt": "Listen and select the correct food.",
          "options": ["Rice", "Noodles", "Bread", "Soup"],
          "translation": "Rice",
          "languageCode": "zh",
          "romanization": "mǐ fàn",
          "correctAnswer": "Rice",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "面条",
          "prompt": "Listen and select the correct food.",
          "options": ["Noodles", "Rice", "Dumplings", "Soup"],
          "translation": "Noodles",
          "languageCode": "zh",
          "romanization": "miàn tiáo",
          "correctAnswer": "Noodles",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "汤",
          "prompt": "Listen and select the correct answer.",
          "options": ["Soup", "Tea", "Water", "Rice"],
          "translation": "Soup",
          "languageCode": "zh",
          "romanization": "tāng",
          "correctAnswer": "Soup",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "鸡蛋",
          "prompt": "Listen and select the correct food.",
          "options": ["Egg", "Chicken", "Fish", "Meat"],
          "translation": "Egg",
          "languageCode": "zh",
          "romanization": "jī dàn",
          "correctAnswer": "Egg",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "蔬菜",
          "prompt": "Listen and select the correct answer.",
          "options": ["Vegetable", "Fruit", "Meat", "Grain"],
          "translation": "Vegetable",
          "languageCode": "zh",
          "romanization": "shū cài",
          "correctAnswer": "Vegetable",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "水果",
          "prompt": "Listen and select the correct answer.",
          "options": ["Fruit", "Vegetable", "Meat", "Bread"],
          "translation": "Fruit",
          "languageCode": "zh",
          "romanization": "shuǐ guǒ",
          "correctAnswer": "Fruit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我喜欢吃米饭",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I like to eat rice", "I like rice", "Do you like rice?", "This is rice"],
          "translation": "I like to eat rice",
          "languageCode": "zh",
          "romanization": "wǒ xǐ huān chī mǐ fàn",
          "correctAnswer": "I like to eat rice",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这很好吃",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["This is delicious", "This is good", "I like this", "Do you like this?"],
          "translation": "This is delicious",
          "languageCode": "zh",
          "romanization": "zhè hěn hǎo chī",
          "correctAnswer": "This is delicious",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "请给我水",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["Please give me water", "Please water", "Give me water", "I want water"],
          "translation": "Please give me water",
          "languageCode": "zh",
          "romanization": "qǐng gěi wǒ shuǐ",
          "correctAnswer": "Please give me water",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我很饿",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["I am very hungry", "I am hungry", "I am tired", "I am thirsty"],
          "translation": "I am very hungry",
          "languageCode": "zh",
          "romanization": "wǒ hěn è",
          "correctAnswer": "I am very hungry",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我要吃饭",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["I want to eat", "I am eating", "Let's eat", "Eat rice"],
          "translation": "I want to eat",
          "languageCode": "zh",
          "romanization": "wǒ yào chī fàn",
          "correctAnswer": "I want to eat",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "米饭",
          "prompt": "Write the Chinese characters for 'Rice'",
          "options": ["米饭", "面条", "汤", "肉"],
          "translation": "Rice",
          "languageCode": "zh",
          "romanization": "mǐ fàn",
          "correctAnswer": "米饭",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "面条",
          "prompt": "Write the Chinese characters for 'Noodles'",
          "options": ["面条", "米饭", "饺子", "汤"],
          "translation": "Noodles",
          "languageCode": "zh",
          "romanization": "miàn tiáo",
          "correctAnswer": "面条",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "汤",
          "prompt": "Write the Chinese character for 'Soup'",
          "options": ["汤", "茶", "水", "果汁"],
          "translation": "Soup",
          "languageCode": "zh",
          "romanization": "tāng",
          "correctAnswer": "汤",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "蔬菜",
          "prompt": "Write the Chinese characters for 'Vegetable'",
          "options": ["蔬菜", "水果", "肉", "鸡蛋"],
          "translation": "Vegetable",
          "languageCode": "zh",
          "romanization": "shū cài",
          "correctAnswer": "蔬菜",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "水果",
          "prompt": "Write the Chinese characters for 'Fruit'",
          "options": ["水果", "蔬菜", "苹果", "西瓜"],
          "translation": "Fruit",
          "languageCode": "zh",
          "romanization": "shuǐ guǒ",
          "correctAnswer": "水果",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: PLACES =====
  {
    lessonId: 'zh-stage2-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "学校",
          "prompt": "What place is this?",
          "options": ["School", "Hospital", "Library", "Park"],
          "translation": "School",
          "languageCode": "zh",
          "romanization": "xué xiào",
          "correctAnswer": "School",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "医院",
          "prompt": "What place is this?",
          "options": ["Hospital", "School", "Library", "Store"],
          "translation": "Hospital",
          "languageCode": "zh",
          "romanization": "yī yuàn",
          "correctAnswer": "Hospital",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "图书馆",
          "prompt": "What place is this?",
          "options": ["Library", "School", "Hospital", "Museum"],
          "translation": "Library",
          "languageCode": "zh",
          "romanization": "tú shū guǎn",
          "correctAnswer": "Library",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "公园",
          "prompt": "What place is this?",
          "options": ["Park", "Garden", "Zoo", "Forest"],
          "translation": "Park",
          "languageCode": "zh",
          "romanization": "gōng yuán",
          "correctAnswer": "Park",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "家",
          "prompt": "What place is this?",
          "options": ["Home", "House", "Family", "Room"],
          "translation": "Home",
          "languageCode": "zh",
          "romanization": "jiā",
          "correctAnswer": "Home",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "商店",
          "prompt": "What place is this?",
          "options": ["Store", "Market", "Mall", "Shop"],
          "translation": "Store",
          "languageCode": "zh",
          "romanization": "shāng diàn",
          "correctAnswer": "Store",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "餐厅",
          "prompt": "What place is this?",
          "options": ["Restaurant", "Cafe", "Kitchen", "Dining room"],
          "translation": "Restaurant",
          "languageCode": "zh",
          "romanization": "cān tīng",
          "correctAnswer": "Restaurant",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "电影院",
          "prompt": "What place is this?",
          "options": ["Movie theater", "Cinema", "Theater", "Hall"],
          "translation": "Movie theater",
          "languageCode": "zh",
          "romanization": "diàn yǐng yuàn",
          "correctAnswer": "Movie theater",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我在学校",
          "prompt": "How do you say 'I am at school'?",
          "options": ["我在学校 (wǒ zài xué xiào)", "我是学校 (wǒ shì xué xiào)", "学校 (xué xiào)", "在学校 (zài xué xiào)"],
          "translation": "I am at school",
          "languageCode": "zh",
          "romanization": "wǒ zài xué xiào",
          "correctAnswer": "我在学校 (wǒ zài xué xiào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你去哪儿？",
          "prompt": "How do you ask 'Where are you going?'",
          "options": ["你去哪儿？(nǐ qù nǎ er?)", "你在哪儿？(nǐ zài nǎ er?)", "哪儿？(nǎ er?)", "你哪儿？(nǐ nǎ er?)"],
          "translation": "Where are you going?",
          "languageCode": "zh",
          "romanization": "nǐ qù nǎ er?",
          "correctAnswer": "你去哪儿？(nǐ qù nǎ er?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我去公园",
          "prompt": "How do you say 'I am going to the park'?",
          "options": ["我去公园 (wǒ qù gōng yuán)", "我在公园 (wǒ zài gōng yuán)", "公园 (gōng yuán)", "去公园 (qù gōng yuán)"],
          "translation": "I am going to the park",
          "languageCode": "zh",
          "romanization": "wǒ qù gōng yuán",
          "correctAnswer": "我去公园 (wǒ qù gōng yuán)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这是医院",
          "prompt": "How do you say 'This is a hospital'?",
          "options": ["这是医院 (zhè shì yī yuàn)", "这医院 (zhè yī yuàn)", "是医院 (shì yī yuàn)", "医院 (yī yuàn)"],
          "translation": "This is a hospital",
          "languageCode": "zh",
          "romanization": "zhè shì yī yuàn",
          "correctAnswer": "这是医院 (zhè shì yī yuàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我在家里",
          "prompt": "How do you say 'I am at home'?",
          "options": ["我在家里 (wǒ zài jiā li)", "我在家 (wǒ zài jiā)", "我家 (wǒ jiā)", "在家 (zài jiā)"],
          "translation": "I am at home",
          "languageCode": "zh",
          "romanization": "wǒ zài jiā li",
          "correctAnswer": "我在家里 (wǒ zài jiā li)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "学校",
          "prompt": "Listen and select the correct place.",
          "options": ["School", "Hospital", "Library", "Park"],
          "translation": "School",
          "languageCode": "zh",
          "romanization": "xué xiào",
          "correctAnswer": "School",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "医院",
          "prompt": "Listen and select the correct place.",
          "options": ["Hospital", "School", "Library", "Store"],
          "translation": "Hospital",
          "languageCode": "zh",
          "romanization": "yī yuàn",
          "correctAnswer": "Hospital",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "公园",
          "prompt": "Listen and select the correct place.",
          "options": ["Park", "School", "Home", "Store"],
          "translation": "Park",
          "languageCode": "zh",
          "romanization": "gōng yuán",
          "correctAnswer": "Park",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "家",
          "prompt": "Listen and select the correct answer.",
          "options": ["Home", "House", "Family", "Room"],
          "translation": "Home",
          "languageCode": "zh",
          "romanization": "jiā",
          "correctAnswer": "Home",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "商店",
          "prompt": "Listen and select the correct place.",
          "options": ["Store", "Market", "Mall", "Shop"],
          "translation": "Store",
          "languageCode": "zh",
          "romanization": "shāng diàn",
          "correctAnswer": "Store",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "餐厅",
          "prompt": "Listen and select the correct place.",
          "options": ["Restaurant", "Cafe", "Kitchen", "Dining room"],
          "translation": "Restaurant",
          "languageCode": "zh",
          "romanization": "cān tīng",
          "correctAnswer": "Restaurant",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我在学校",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I am at school", "I go to school", "I like school", "This is school"],
          "translation": "I am at school",
          "languageCode": "zh",
          "romanization": "wǒ zài xué xiào",
          "correctAnswer": "I am at school",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你去哪儿？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Where are you going?", "Where are you?", "Do you go there?", "You go where"],
          "translation": "Where are you going?",
          "languageCode": "zh",
          "romanization": "nǐ qù nǎ er?",
          "correctAnswer": "Where are you going?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我去公园",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I am going to the park", "I in the park", "I like the park", "The park is nice"],
          "translation": "I am going to the park",
          "languageCode": "zh",
          "romanization": "wǒ qù gōng yuán",
          "correctAnswer": "I am going to the park",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这是医院",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["This is a hospital", "This is the hospital", "It's hospital", "Hospital here"],
          "translation": "This is a hospital",
          "languageCode": "zh",
          "romanization": "zhè shì yī yuàn",
          "correctAnswer": "This is a hospital",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我在家里",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I am at home", "I go home", "I like home", "This is home"],
          "translation": "I am at home",
          "languageCode": "zh",
          "romanization": "wǒ zài jiā li",
          "correctAnswer": "I am at home",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "学校",
          "prompt": "Write the Chinese characters for 'School'",
          "options": ["学校", "医院", "公园", "家"],
          "translation": "School",
          "languageCode": "zh",
          "romanization": "xué xiào",
          "correctAnswer": "学校",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "医院",
          "prompt": "Write the Chinese characters for 'Hospital'",
          "options": ["医院", "学校", "图书馆", "公园"],
          "translation": "Hospital",
          "languageCode": "zh",
          "romanization": "yī yuàn",
          "correctAnswer": "医院",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "公园",
          "prompt": "Write the Chinese characters for 'Park'",
          "options": ["公园", "家", "学校", "商店"],
          "translation": "Park",
          "languageCode": "zh",
          "romanization": "gōng yuán",
          "correctAnswer": "公园",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "家",
          "prompt": "Write the Chinese character for 'Home'",
          "options": ["家", "学", "医", "公"],
          "translation": "Home",
          "languageCode": "zh",
          "romanization": "jiā",
          "correctAnswer": "家",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "商店",
          "prompt": "Write the Chinese characters for 'Store'",
          "options": ["商店", "学校", "餐厅", "电影院"],
          "translation": "Store",
          "languageCode": "zh",
          "romanization": "shāng diàn",
          "correctAnswer": "商店",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: FAMILY =====
  {
    lessonId: 'zh-stage2-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "父亲",
          "prompt": "What family member is this?",
          "options": ["Father", "Mother", "Brother", "Sister"],
          "translation": "Father",
          "languageCode": "zh",
          "romanization": "fù qīn",
          "correctAnswer": "Father",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "母亲",
          "prompt": "What family member is this?",
          "options": ["Mother", "Father", "Sister", "Grandmother"],
          "translation": "Mother",
          "languageCode": "zh",
          "romanization": "mǔ qīn",
          "correctAnswer": "Mother",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "哥哥",
          "prompt": "What family member is this?",
          "options": ["Older brother", "Younger brother", "Brother", "Cousin"],
          "translation": "Older brother",
          "languageCode": "zh",
          "romanization": "gē ge",
          "correctAnswer": "Older brother",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "妹妹",
          "prompt": "What family member is this?",
          "options": ["Younger sister", "Older sister", "Sister", "Cousin"],
          "translation": "Younger sister",
          "languageCode": "zh",
          "romanization": "mèi mei",
          "correctAnswer": "Younger sister",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "祖父",
          "prompt": "What family member is this?",
          "options": ["Grandfather", "Grandmother", "Father", "Uncle"],
          "translation": "Grandfather",
          "languageCode": "zh",
          "romanization": "zǔ fu",
          "correctAnswer": "Grandfather",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "祖母",
          "prompt": "What family member is this?",
          "options": ["Grandmother", "Grandfather", "Mother", "Aunt"],
          "translation": "Grandmother",
          "languageCode": "zh",
          "romanization": "zǔ mǔ",
          "correctAnswer": "Grandmother",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "叔叔",
          "prompt": "What family member is this?",
          "options": ["Uncle", "Aunt", "Cousin", "Father"],
          "translation": "Uncle",
          "languageCode": "zh",
          "romanization": "shū shu",
          "correctAnswer": "Uncle",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "阿姨",
          "prompt": "What family member is this?",
          "options": ["Aunt", "Uncle", "Grandmother", "Mother"],
          "translation": "Aunt",
          "languageCode": "zh",
          "romanization": "ā yí",
          "correctAnswer": "Aunt",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我的父亲",
          "prompt": "How do you say 'My father'?",
          "options": ["我的父亲 (wǒ de fù qīn)", "我父亲 (wǒ fù qīn)", "父亲 (fù qīn)", "我爸爸 (wǒ bà ba)"],
          "translation": "My father",
          "languageCode": "zh",
          "romanization": "wǒ de fù qīn",
          "correctAnswer": "我的父亲 (wǒ de fù qīn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他是我的哥哥",
          "prompt": "How do you say 'He is my older brother'?",
          "options": ["他是我的哥哥 (tā shì wǒ de gē ge)", "他是哥哥 (tā shì gē ge)", "我的哥哥 (wǒ de gē ge)", "哥哥 (gē ge)"],
          "translation": "He is my older brother",
          "languageCode": "zh",
          "romanization": "tā shì wǒ de gē ge",
          "correctAnswer": "他是我的哥哥 (tā shì wǒ de gē ge)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你有兄弟姐妹吗？",
          "prompt": "How do you ask 'Do you have siblings?'",
          "options": ["你有兄弟姐妹吗？(nǐ yǒu xiōng di jiě mei ma?)", "你有吗？(nǐ yǒu ma?)", "兄弟姐妹 (xiōng di jiě mei)", "你兄弟姐妹？(nǐ xiōng di jiě mei?)"],
          "translation": "Do you have siblings?",
          "languageCode": "zh",
          "romanization": "nǐ yǒu xiōng di jiě mei ma?",
          "correctAnswer": "你有兄弟姐妹吗？(nǐ yǒu xiōng di jiě mei ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这是我的家人",
          "prompt": "How do you say 'These are my family members'?",
          "options": ["这是我的家人 (zhè shì wǒ de jiā ren)", "这家人 (zhè jiā ren)", "我的家人 (wǒ de jiā ren)", "家人 (jiā ren)"],
          "translation": "These are my family members",
          "languageCode": "zh",
          "romanization": "zhè shì wǒ de jiā ren",
          "correctAnswer": "这是我的家人 (zhè shì wǒ de jiā ren)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "妹妹叫什么名字？",
          "prompt": "How do you ask 'What is your younger sister's name?'",
          "options": ["妹妹叫什么名字？(mèi mei jiào shén me míng zi?)", "妹妹名字？(mèi mei míng zi?)", "什么名字？(shén me míng zi?)", "妹妹？(mèi mei?)"],
          "translation": "What is your younger sister's name?",
          "languageCode": "zh",
          "romanization": "mèi mei jiào shén me míng zi?",
          "correctAnswer": "妹妹叫什么名字？(mèi mei jiào shén me míng zi?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "父亲",
          "prompt": "Listen and select the correct family member.",
          "options": ["Father", "Mother", "Brother", "Sister"],
          "translation": "Father",
          "languageCode": "zh",
          "romanization": "fù qīn",
          "correctAnswer": "Father",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "母亲",
          "prompt": "Listen and select the correct family member.",
          "options": ["Mother", "Father", "Sister", "Aunt"],
          "translation": "Mother",
          "languageCode": "zh",
          "romanization": "mǔ qīn",
          "correctAnswer": "Mother",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "哥哥",
          "prompt": "Listen and select the correct family member.",
          "options": ["Older brother", "Younger brother", "Cousin", "Uncle"],
          "translation": "Older brother",
          "languageCode": "zh",
          "romanization": "gē ge",
          "correctAnswer": "Older brother",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "妹妹",
          "prompt": "Listen and select the correct family member.",
          "options": ["Younger sister", "Older sister", "Aunt", "Cousin"],
          "translation": "Younger sister",
          "languageCode": "zh",
          "romanization": "mèi mei",
          "correctAnswer": "Younger sister",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "祖父",
          "prompt": "Listen and select the correct family member.",
          "options": ["Grandfather", "Grandmother", "Father", "Uncle"],
          "translation": "Grandfather",
          "languageCode": "zh",
          "romanization": "zǔ fu",
          "correctAnswer": "Grandfather",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "祖母",
          "prompt": "Listen and select the correct family member.",
          "options": ["Grandmother", "Grandfather", "Mother", "Aunt"],
          "translation": "Grandmother",
          "languageCode": "zh",
          "romanization": "zǔ mǔ",
          "correctAnswer": "Grandmother",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这是我的家人",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["These are my family members", "This is my family", "My family is here", "I like my family"],
          "translation": "These are my family members",
          "languageCode": "zh",
          "romanization": "zhè shì wǒ de jiā ren",
          "correctAnswer": "These are my family members",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我有一个哥哥",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I have one older brother", "I have a brother", "My brother", "Do you have a brother?"],
          "translation": "I have one older brother",
          "languageCode": "zh",
          "romanization": "wǒ yǒu yī ge gē ge",
          "correctAnswer": "I have one older brother",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我的父亲是医生",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["My father is a doctor", "My father is a teacher", "My father works", "Is your father a doctor?"],
          "translation": "My father is a doctor",
          "languageCode": "zh",
          "romanization": "wǒ de fù qīn shì yī shēng",
          "correctAnswer": "My father is a doctor",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "妹妹叫小红",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["My younger sister is called Xiaohong", "Sister's name is red", "My sister name", "What is sister's name?"],
          "translation": "My younger sister is called Xiaohong",
          "languageCode": "zh",
          "romanization": "mèi mei jiào xiǎo hóng",
          "correctAnswer": "My younger sister is called Xiaohong",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我的家很大",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["My family is very big", "My home is big", "My house is large", "Our family"],
          "translation": "My family is very big",
          "languageCode": "zh",
          "romanization": "wǒ de jiā hěn dà",
          "correctAnswer": "My family is very big",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "父亲",
          "prompt": "Write the Chinese characters for 'Father'",
          "options": ["父亲", "母亲", "哥哥", "妹妹"],
          "translation": "Father",
          "languageCode": "zh",
          "romanization": "fù qīn",
          "correctAnswer": "父亲",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "母亲",
          "prompt": "Write the Chinese characters for 'Mother'",
          "options": ["母亲", "父亲", "妹妹", "姐姐"],
          "translation": "Mother",
          "languageCode": "zh",
          "romanization": "mǔ qīn",
          "correctAnswer": "母亲",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "哥哥",
          "prompt": "Write the Chinese characters for 'Older brother'",
          "options": ["哥哥", "弟弟", "哥", "兄弟"],
          "translation": "Older brother",
          "languageCode": "zh",
          "romanization": "gē ge",
          "correctAnswer": "哥哥",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "妹妹",
          "prompt": "Write the Chinese characters for 'Younger sister'",
          "options": ["妹妹", "姐姐", "妹", "姐"],
          "translation": "Younger sister",
          "languageCode": "zh",
          "romanization": "mèi mei",
          "correctAnswer": "妹妹",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "祖父",
          "prompt": "Write the Chinese characters for 'Grandfather'",
          "options": ["祖父", "祖母", "外公", "爷爷"],
          "translation": "Grandfather",
          "languageCode": "zh",
          "romanization": "zǔ fu",
          "correctAnswer": "祖父",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: VERBS =====
  {
    lessonId: 'zh-stage2-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "走",
          "prompt": "What does this verb mean?",
          "options": ["Walk", "Run", "Jump", "Stand"],
          "translation": "Walk",
          "languageCode": "zh",
          "romanization": "zǒu",
          "correctAnswer": "Walk",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "跑",
          "prompt": "What does this verb mean?",
          "options": ["Run", "Walk", "Jump", "Sit"],
          "translation": "Run",
          "languageCode": "zh",
          "romanization": "pǎo",
          "correctAnswer": "Run",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "坐",
          "prompt": "What does this verb mean?",
          "options": ["Sit", "Stand", "Walk", "Run"],
          "translation": "Sit",
          "languageCode": "zh",
          "romanization": "zuò",
          "correctAnswer": "Sit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "站",
          "prompt": "What does this verb mean?",
          "options": ["Stand", "Sit", "Walk", "Run"],
          "translation": "Stand",
          "languageCode": "zh",
          "romanization": "zhàn",
          "correctAnswer": "Stand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "看",
          "prompt": "What does this verb mean?",
          "options": ["Look/Watch", "Listen", "Read", "Write"],
          "translation": "Look/Watch",
          "languageCode": "zh",
          "romanization": "kàn",
          "correctAnswer": "Look/Watch",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "听",
          "prompt": "What does this verb mean?",
          "options": ["Listen", "Look", "Write", "Read"],
          "translation": "Listen",
          "languageCode": "zh",
          "romanization": "tīng",
          "correctAnswer": "Listen",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "读",
          "prompt": "What does this verb mean?",
          "options": ["Read", "Write", "Listen", "Look"],
          "translation": "Read",
          "languageCode": "zh",
          "romanization": "dú",
          "correctAnswer": "Read",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "写",
          "prompt": "What does this verb mean?",
          "options": ["Write", "Read", "Draw", "Paint"],
          "translation": "Write",
          "languageCode": "zh",
          "romanization": "xiě",
          "correctAnswer": "Write",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我走",
          "prompt": "How do you say 'I walk'?",
          "options": ["我走 (wǒ zǒu)", "我是走 (wǒ shì zǒu)", "走 (zǒu)", "我要走 (wǒ yào zǒu)"],
          "translation": "I walk",
          "languageCode": "zh",
          "romanization": "wǒ zǒu",
          "correctAnswer": "我走 (wǒ zǒu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他跑得很快",
          "prompt": "How do you say 'He runs very fast'?",
          "options": ["他跑得很快 (tā pǎo de hěn kuài)", "他跑快 (tā pǎo kuài)", "他很快跑 (tā hěn kuài pǎo)", "跑得快 (pǎo de kuài)"],
          "translation": "He runs very fast",
          "languageCode": "zh",
          "romanization": "tā pǎo de hěn kuài",
          "correctAnswer": "他跑得很快 (tā pǎo de hěn kuài)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "请坐下",
          "prompt": "How do you say 'Please sit down'?",
          "options": ["请坐下 (qǐng zuò xia)", "请坐 (qǐng zuò)", "坐下 (zuò xia)", "坐 (zuò)"],
          "translation": "Please sit down",
          "languageCode": "zh",
          "romanization": "qǐng zuò xia",
          "correctAnswer": "请坐下 (qǐng zuò xia)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我在看书",
          "prompt": "How do you say 'I am reading a book'?",
          "options": ["我在看书 (wǒ zài kàn shū)", "我看书 (wǒ kàn shū)", "看书 (kàn shū)", "我要看书 (wǒ yào kàn shū)"],
          "translation": "I am reading a book",
          "languageCode": "zh",
          "romanization": "wǒ zài kàn shū",
          "correctAnswer": "我在看书 (wǒ zài kàn shū)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你听我说",
          "prompt": "How do you say 'Listen to me'?",
          "options": ["你听我说 (nǐ tīng wǒ shuō)", "听我 (tīng wǒ)", "你听 (nǐ tīng)", "听说 (tīng shuō)"],
          "translation": "Listen to me",
          "languageCode": "zh",
          "romanization": "nǐ tīng wǒ shuō",
          "correctAnswer": "你听我说 (nǐ tīng wǒ shuō)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "走",
          "prompt": "Listen and select the correct verb.",
          "options": ["Walk", "Run", "Sit", "Stand"],
          "translation": "Walk",
          "languageCode": "zh",
          "romanization": "zǒu",
          "correctAnswer": "Walk",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "跑",
          "prompt": "Listen and select the correct verb.",
          "options": ["Run", "Walk", "Jump", "Play"],
          "translation": "Run",
          "languageCode": "zh",
          "romanization": "pǎo",
          "correctAnswer": "Run",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "坐",
          "prompt": "Listen and select the correct verb.",
          "options": ["Sit", "Stand", "Walk", "Lie"],
          "translation": "Sit",
          "languageCode": "zh",
          "romanization": "zuò",
          "correctAnswer": "Sit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "看",
          "prompt": "Listen and select the correct verb.",
          "options": ["Look/Watch", "Listen", "Read", "Write"],
          "translation": "Look/Watch",
          "languageCode": "zh",
          "romanization": "kàn",
          "correctAnswer": "Look/Watch",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "听",
          "prompt": "Listen and select the correct verb.",
          "options": ["Listen", "Look", "Write", "Read"],
          "translation": "Listen",
          "languageCode": "zh",
          "romanization": "tīng",
          "correctAnswer": "Listen",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "写",
          "prompt": "Listen and select the correct verb.",
          "options": ["Write", "Read", "Draw", "Think"],
          "translation": "Write",
          "languageCode": "zh",
          "romanization": "xiě",
          "correctAnswer": "Write",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我走",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I walk", "I am walking", "I will walk", "I like walking"],
          "translation": "I walk",
          "languageCode": "zh",
          "romanization": "wǒ zǒu",
          "correctAnswer": "I walk",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "请坐下",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Please sit down", "Please sit", "Sit down", "Sit here"],
          "translation": "Please sit down",
          "languageCode": "zh",
          "romanization": "qǐng zuò xia",
          "correctAnswer": "Please sit down",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我在看书",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I am reading a book", "I read books", "I like books", "I want to read"],
          "translation": "I am reading a book",
          "languageCode": "zh",
          "romanization": "wǒ zài kàn shū",
          "correctAnswer": "I am reading a book",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他跑得很快",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["He runs very fast", "He is fast", "He can run fast", "He runs quickly"],
          "translation": "He runs very fast",
          "languageCode": "zh",
          "romanization": "tā pǎo de hěn kuài",
          "correctAnswer": "He runs very fast",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你听我说",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Listen to me", "Hear me", "Listen me", "Do you hear me?"],
          "translation": "Listen to me",
          "languageCode": "zh",
          "romanization": "nǐ tīng wǒ shuō",
          "correctAnswer": "Listen to me",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "走",
          "prompt": "Write the Chinese character for 'Walk'",
          "options": ["走", "跑", "坐", "站"],
          "translation": "Walk",
          "languageCode": "zh",
          "romanization": "zǒu",
          "correctAnswer": "走",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "跑",
          "prompt": "Write the Chinese character for 'Run'",
          "options": ["跑", "走", "坐", "跳"],
          "translation": "Run",
          "languageCode": "zh",
          "romanization": "pǎo",
          "correctAnswer": "跑",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "坐",
          "prompt": "Write the Chinese character for 'Sit'",
          "options": ["坐", "站", "走", "躺"],
          "translation": "Sit",
          "languageCode": "zh",
          "romanization": "zuò",
          "correctAnswer": "坐",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "听",
          "prompt": "Write the Chinese character for 'Listen'",
          "options": ["听", "看", "读", "写"],
          "translation": "Listen",
          "languageCode": "zh",
          "romanization": "tīng",
          "correctAnswer": "听",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "读",
          "prompt": "Write the Chinese character for 'Read'",
          "options": ["读", "写", "看", "听"],
          "translation": "Read",
          "languageCode": "zh",
          "romanization": "dú",
          "correctAnswer": "读",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: SENTENCES =====
  {
    lessonId: 'zh-stage2-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "是",
          "prompt": "What does this word mean?",
          "options": ["Is/To be", "Have", "Can", "Like"],
          "translation": "Is/To be",
          "languageCode": "zh",
          "romanization": "shì",
          "correctAnswer": "Is/To be",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "有",
          "prompt": "What does this word mean?",
          "options": ["Have", "Is", "Want", "Need"],
          "translation": "Have",
          "languageCode": "zh",
          "romanization": "yǒu",
          "correctAnswer": "Have",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "能",
          "prompt": "What does this word mean?",
          "options": ["Can", "Want", "Like", "Need"],
          "translation": "Can",
          "languageCode": "zh",
          "romanization": "néng",
          "correctAnswer": "Can",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "要",
          "prompt": "What does this word mean?",
          "options": ["Want", "Have", "Can", "Need"],
          "translation": "Want",
          "languageCode": "zh",
          "romanization": "yào",
          "correctAnswer": "Want",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "喜欢",
          "prompt": "What does this word mean?",
          "options": ["Like", "Love", "Want", "Need"],
          "translation": "Like",
          "languageCode": "zh",
          "romanization": "xǐ huān",
          "correctAnswer": "Like",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "爱",
          "prompt": "What does this word mean?",
          "options": ["Love", "Like", "Want", "Care"],
          "translation": "Love",
          "languageCode": "zh",
          "romanization": "ài",
          "correctAnswer": "Love",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "知道",
          "prompt": "What does this word mean?",
          "options": ["Know", "Understand", "Believe", "Think"],
          "translation": "Know",
          "languageCode": "zh",
          "romanization": "zhī dao",
          "correctAnswer": "Know",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "说",
          "prompt": "What does this word mean?",
          "options": ["Say/Speak", "Tell", "Talk", "Discuss"],
          "translation": "Say/Speak",
          "languageCode": "zh",
          "romanization": "shuō",
          "correctAnswer": "Say/Speak",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我是学生",
          "prompt": "How do you say 'I am a student'?",
          "options": ["我是学生 (wǒ shì xué sheng)", "我是学 (wǒ shì xué)", "学生 (xué sheng)", "我学生 (wǒ xué sheng)"],
          "translation": "I am a student",
          "languageCode": "zh",
          "romanization": "wǒ shì xué sheng",
          "correctAnswer": "我是学生 (wǒ shì xué sheng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你有笔吗？",
          "prompt": "How do you ask 'Do you have a pen?'",
          "options": ["你有笔吗？(nǐ yǒu bǐ ma?)", "你笔吗？(nǐ bǐ ma?)", "笔？(bǐ?)", "你有吗？(nǐ yǒu ma?)"],
          "translation": "Do you have a pen?",
          "languageCode": "zh",
          "romanization": "nǐ yǒu bǐ ma?",
          "correctAnswer": "你有笔吗？(nǐ yǒu bǐ ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我能说中文",
          "prompt": "How do you say 'I can speak Chinese'?",
          "options": ["我能说中文 (wǒ néng shuō zhōng wén)", "我说中文 (wǒ shuō zhōng wén)", "能说中文 (néng shuō zhōng wén)", "中文 (zhōng wén)"],
          "translation": "I can speak Chinese",
          "languageCode": "zh",
          "romanization": "wǒ néng shuō zhōng wén",
          "correctAnswer": "我能说中文 (wǒ néng shuō zhōng wén)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我喜欢这个",
          "prompt": "How do you say 'I like this'?",
          "options": ["我喜欢这个 (wǒ xǐ huān zhè ge)", "我这个 (wǒ zhè ge)", "喜欢这个 (xǐ huān zhè ge)", "这个 (zhè ge)"],
          "translation": "I like this",
          "languageCode": "zh",
          "romanization": "wǒ xǐ huān zhè ge",
          "correctAnswer": "我喜欢这个 (wǒ xǐ huān zhè ge)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你知道吗？",
          "prompt": "How do you ask 'Do you know?'",
          "options": ["你知道吗？(nǐ zhī dao ma?)", "知道吗？(zhī dao ma?)", "你知道？(nǐ zhī dao?)", "知道？(zhī dao?)"],
          "translation": "Do you know?",
          "languageCode": "zh",
          "romanization": "nǐ zhī dao ma?",
          "correctAnswer": "你知道吗？(nǐ zhī dao ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "我是学生",
          "prompt": "Listen and select the correct meaning.",
          "options": ["I am a student", "I am a teacher", "I study", "I go to school"],
          "translation": "I am a student",
          "languageCode": "zh",
          "romanization": "wǒ shì xué sheng",
          "correctAnswer": "I am a student",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "你有笔吗？",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Do you have a pen?", "I have a pen", "Where is the pen?", "Do you like pen?"],
          "translation": "Do you have a pen?",
          "languageCode": "zh",
          "romanization": "nǐ yǒu bǐ ma?",
          "correctAnswer": "Do you have a pen?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "我能说中文",
          "prompt": "Listen and select the correct meaning.",
          "options": ["I can speak Chinese", "I speak at school", "I study Chinese", "Chinese is good"],
          "translation": "I can speak Chinese",
          "languageCode": "zh",
          "romanization": "wǒ néng shuō zhōng wén",
          "correctAnswer": "I can speak Chinese",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "我喜欢这个",
          "prompt": "Listen and select the correct meaning.",
          "options": ["I like this", "I want this", "This is good", "Do you like this?"],
          "translation": "I like this",
          "languageCode": "zh",
          "romanization": "wǒ xǐ huān zhè ge",
          "correctAnswer": "I like this",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "你知道吗？",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Do you know?", "I know", "You know", "Do you understand?"],
          "translation": "Do you know?",
          "languageCode": "zh",
          "romanization": "nǐ zhī dao ma?",
          "correctAnswer": "Do you know?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "我能帮你吗？",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Can I help you?", "Do you help me?", "I can help", "Help me please"],
          "translation": "Can I help you?",
          "languageCode": "zh",
          "romanization": "wǒ néng bāng nǐ ma?",
          "correctAnswer": "Can I help you?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我是学生",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I am a student", "I am a teacher", "I study hard", "I go to school"],
          "translation": "I am a student",
          "languageCode": "zh",
          "romanization": "wǒ shì xué sheng",
          "correctAnswer": "I am a student",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我能说中文",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I can speak Chinese", "I speak Chinese", "I study Chinese", "I like Chinese"],
          "translation": "I can speak Chinese",
          "languageCode": "zh",
          "romanization": "wǒ néng shuō zhōng wén",
          "correctAnswer": "I can speak Chinese",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我喜欢这个",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I like this", "I want this", "I need this", "This is good"],
          "translation": "I like this",
          "languageCode": "zh",
          "romanization": "wǒ xǐ huān zhè ge",
          "correctAnswer": "I like this",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你知道吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Do you know?", "I know", "You know", "Knowledge"],
          "translation": "Do you know?",
          "languageCode": "zh",
          "romanization": "nǐ zhī dao ma?",
          "correctAnswer": "Do you know?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我能帮你吗？",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["Can I help you?", "I can help", "Do you need help?", "Help me please"],
          "translation": "Can I help you?",
          "languageCode": "zh",
          "romanization": "wǒ néng bāng nǐ ma?",
          "correctAnswer": "Can I help you?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage2-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "是",
          "prompt": "Write the Chinese character for 'Is/To be'",
          "options": ["是", "有", "能", "要"],
          "translation": "Is/To be",
          "languageCode": "zh",
          "romanization": "shì",
          "correctAnswer": "是",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "有",
          "prompt": "Write the Chinese character for 'Have'",
          "options": ["有", "是", "要", "能"],
          "translation": "Have",
          "languageCode": "zh",
          "romanization": "yǒu",
          "correctAnswer": "有",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "能",
          "prompt": "Write the Chinese character for 'Can'",
          "options": ["能", "要", "有", "可"],
          "translation": "Can",
          "languageCode": "zh",
          "romanization": "néng",
          "correctAnswer": "能",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "喜欢",
          "prompt": "Write the Chinese characters for 'Like'",
          "options": ["喜欢", "爱", "想", "要"],
          "translation": "Like",
          "languageCode": "zh",
          "romanization": "xǐ huān",
          "correctAnswer": "喜欢",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "知道",
          "prompt": "Write the Chinese characters for 'Know'",
          "options": ["知道", "明白", "理解", "懂"],
          "translation": "Know",
          "languageCode": "zh",
          "romanization": "zhī dao",
          "correctAnswer": "知道",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 2 (A1 - Toddler) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Food, Places, Family, Verbs, Sentences)\n');

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
