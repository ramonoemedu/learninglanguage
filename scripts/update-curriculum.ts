import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Data for 10 Stages (Chapter 1 samples)
const curriculumData = [
  {
    stage: 1,
    title: "A0 Baby",
    chapters: [
      {
        num: 1,
        title: "Greetings",
        questions: [
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
        ]
      },
      {
        num: 2,
        title: "Numbers",
        questions: [
          { word: "一", pinyin: "yī", translation: "One", options: ["One", "Two", "Three", "Ten"] },
          { word: "二", pinyin: "èr", translation: "Two", options: ["Two", "One", "Three", "Four"] },
          { word: "三", pinyin: "sān", translation: "Three", options: ["Three", "Two", "One", "Five"] },
          { word: "四", pinyin: "sì", translation: "Four", options: ["Four", "Five", "Six", "Ten"] },
          { word: "五", pinyin: "wǔ", translation: "Five", options: ["Five", "Four", "One", "Two"] },
          { word: "六", pinyin: "liù", translation: "Six", options: ["Six", "Seven", "Five", "Eight"] },
          { word: "七", pinyin: "qī", translation: "Seven", options: ["Seven", "Six", "Eight", "Nine"] },
          { word: "八", pinyin: "bā", translation: "Eight", options: ["Eight", "Nine", "Seven", "Ten"] },
          { word: "九", pinyin: "jiǔ", translation: "Nine", options: ["Nine", "Eight", "Ten", "Zero"] },
          { word: "十", pinyin: "shí", translation: "Ten", options: ["Ten", "One", "Zero", "Hundred"] },
          { word: "零", pinyin: "líng", translation: "Zero", options: ["Zero", "One", "Ten", "None"] },
          { word: "十一", pinyin: "shí yī", translation: "Eleven", options: ["Eleven", "Twelve", "Ten", "One"] },
          { word: "十二", pinyin: "shí èr", translation: "Twelve", options: ["Twelve", "Eleven", "Twenty", "Two"] },
          { word: "二十", pinyin: "èr shí", translation: "Twenty", options: ["Twenty", "Twelve", "Two", "Ten"] }
        ]
      },
      {
        num: 3,
        title: "Colors",
        questions: [
          { word: "红色", pinyin: "hóng sè", translation: "Red", options: ["Red", "Blue", "Green", "Yellow"] },
          { word: "蓝色", pinyin: "lán sè", translation: "Blue", options: ["Blue", "Red", "White", "Black"] },
          { word: "绿色", pinyin: "lǜ sè", translation: "Green", options: ["Green", "Red", "Blue", "Yellow"] },
          { word: "白色", pinyin: "bái sè", translation: "White", options: ["White", "Black", "Red", "Blue"] },
          { word: "黑色", pinyin: "hēi sè", translation: "Black", options: ["Black", "White", "Green", "Red"] },
          { word: "黄色", pinyin: "huáng sè", translation: "Yellow", options: ["Yellow", "Red", "Blue", "Green"] },
          { word: "橙色", pinyin: "chéng sè", translation: "Orange", options: ["Orange", "Red", "Yellow", "Purple"] },
          { word: "紫色", pinyin: "zǐ sè", translation: "Purple", options: ["Purple", "Blue", "Red", "Pink"] },
          { word: "粉色", pinyin: "fěn sè", translation: "Pink", options: ["Pink", "Red", "White", "Purple"] },
          { word: "灰色", pinyin: "huī sè", translation: "Grey", options: ["Grey", "Black", "White", "Blue"] },
          { word: "棕色", pinyin: "zōng sè", translation: "Brown", options: ["Brown", "Black", "Red", "Yellow"] }
        ]
      },
      {
        num: 4,
        title: "Face",
        questions: [
          { word: "头", pinyin: "tóu", translation: "Head", options: ["Head", "Hand", "Foot", "Eye"] },
          { word: "脸", pinyin: "liǎn", translation: "Face", options: ["Face", "Head", "Eye", "Nose"] },
          { word: "眼睛", pinyin: "yǎn jing", translation: "Eye", options: ["Eye", "Mouth", "Ear", "Hand"] },
          { word: "鼻子", pinyin: "bí zi", translation: "Nose", options: ["Nose", "Eye", "Mouth", "Ear"] },
          { word: "嘴巴", pinyin: "zuǐ ba", translation: "Mouth", options: ["Mouth", "Eye", "Ear", "Nose"] },
          { word: "耳朵", pinyin: "ěr duo", translation: "Ear", options: ["Ear", "Eye", "Nose", "Mouth"] },
          { word: "头发", pinyin: "tóu fa", translation: "Hair", options: ["Hair", "Head", "Face", "Hand"] },
          { word: "眉毛", pinyin: "méi mao", translation: "Eyebrow", options: ["Eyebrow", "Eye", "Hair", "Nose"] },
          { word: "牙齿", pinyin: "yá chǐ", translation: "Tooth", options: ["Tooth", "Mouth", "Tongue", "Lip"] },
          { word: "下巴", pinyin: "xià ba", translation: "Chin", options: ["Chin", "Cheek", "Forehead", "Neck"] }
        ]
      },
      {
        num: 5,
        title: "Body",
        questions: [
          { word: "手", pinyin: "shǒu", translation: "Hand", options: ["Hand", "Head", "Leg", "Ear"] },
          { word: "脚", pinyin: "jiǎo", translation: "Foot", options: ["Foot", "Hand", "Head", "Body"] },
          { word: "腿", pinyin: "tuǐ", translation: "Leg", options: ["Leg", "Arm", "Foot", "Hand"] },
          { word: "胳膊", pinyin: "gē bo", translation: "Arm", options: ["Arm", "Leg", "Hand", "Foot"] },
          { word: "肚子", pinyin: "dù zi", translation: "Belly", options: ["Belly", "Back", "Chest", "Head"] },
          { word: "背", pinyin: "bèi", translation: "Back", options: ["Back", "Belly", "Chest", "Leg"] },
          { word: "手指", pinyin: "shǒu zhǐ", translation: "Finger", options: ["Finger", "Hand", "Toe", "Arm"] },
          { word: "脖子", pinyin: "bó zi", translation: "Neck", options: ["Neck", "Head", "Shoulder", "Back"] },
          { word: "肩膀", pinyin: "jiān bǎng", translation: "Shoulder", options: ["Shoulder", "Neck", "Arm", "Back"] },
          { word: "膝盖", pinyin: "xī gài", translation: "Knee", options: ["Knee", "Leg", "Foot", "Ankle"] }
        ]
      }
    ]
  },
  {
    stage: 2,
    title: "A1 Toddler",
    chapters: [
      {
        num: 1,
        title: "Food",
        questions: [
          { word: "米饭", pinyin: "mǐ fàn", translation: "Rice", options: ["Rice", "Noodles", "Bread", "Water"] },
          { word: "面条", pinyin: "miàn tiáo", translation: "Noodles", options: ["Noodles", "Rice", "Dumpling", "Soup"] },
          { word: "包子", pinyin: "bāo zi", translation: "Steamed Bun", options: ["Steamed Bun", "Bread", "Cake", "Pizza"] },
          { word: "吃", pinyin: "chī", translation: "Eat", options: ["Eat", "Drink", "Sleep", "Run"] },
          { word: "喝", pinyin: "hē", translation: "Drink", options: ["Drink", "Eat", "Water", "Tea"] }
        ]
      },
      {
        num: 2,
        title: "Places",
        questions: [
          { word: "家", pinyin: "jiā", translation: "Home", options: ["Home", "School", "Park", "Shop"] },
          { word: "学校", pinyin: "xué xiào", translation: "School", options: ["School", "Home", "Hospital", "Office"] },
          { word: "公园", pinyin: "gōng yuán", translation: "Park", options: ["Park", "Zoo", "Garden", "Forest"] },
          { word: "商店", pinyin: "shāng diàn", translation: "Shop", options: ["Shop", "Bank", "Hotel", "Market"] },
          { word: "医院", pinyin: "yī yuàn", translation: "Hospital", options: ["Hospital", "School", "Police Station", "Fire Station"] },
          { word: "饭馆", pinyin: "fàn guǎn", translation: "Restaurant", options: ["Restaurant", "Kitchen", "Bar", "Cafe"] }
        ]
      },
      {
        num: 3,
        title: "Family",
        questions: [
          { word: "爷爷", pinyin: "yé ye", translation: "Grandpa", options: ["Grandpa", "Grandma", "Dad", "Uncle"] },
          { word: "奶奶", pinyin: "nǎi nai", translation: "Grandma", options: ["Grandma", "Grandpa", "Mom", "Aunt"] },
          { word: "哥哥", pinyin: "gē ge", translation: "Older Brother", options: ["Older Brother", "Younger Brother", "Dad", "Uncle"] },
          { word: "姐姐", pinyin: "jiě jie", translation: "Older Sister", options: ["Older Sister", "Younger Sister", "Mom", "Aunt"] },
          { word: "弟弟", pinyin: "dì di", translation: "Younger Brother", options: ["Younger Brother", "Older Brother", "Son", "Nephew"] },
          { word: "妹妹", pinyin: "mèi mei", translation: "Younger Sister", options: ["Younger Sister", "Older Sister", "Daughter", "Niece"] }
        ]
      },
      {
        num: 4,
        title: "Verbs",
        questions: [
          { word: "看", pinyin: "kàn", translation: "Look/Read", options: ["Look", "Listen", "Speak", "Write"] },
          { word: "听", pinyin: "tīng", translation: "Listen", options: ["Listen", "Look", "Smell", "Taste"] },
          { word: "说", pinyin: "shuō", translation: "Speak", options: ["Speak", "Listen", "Read", "Write"] },
          { word: "写", pinyin: "xiě", translation: "Write", options: ["Write", "Read", "Draw", "Paint"] },
          { word: "坐", pinyin: "zuò", translation: "Sit", options: ["Sit", "Stand", "Walk", "Run"] },
          { word: "走", pinyin: "zǒu", translation: "Walk", options: ["Walk", "Run", "Jump", "Swim"] }
        ]
      },
      {
        num: 5,
        title: "Sentences",
        questions: [
          { word: "我爱你", pinyin: "wǒ ài nǐ", translation: "I love you", options: ["I love you", "I hate you", "I like you", "I miss you"] },
          { word: "你好吗", pinyin: "nǐ hǎo ma", translation: "How are you?", options: ["How are you?", "Who are you?", "Where are you?", "What is this?"] },
          { word: "这是什么", pinyin: "zhè shì shén me", translation: "What is this?", options: ["What is this?", "Who is this?", "Where is this?", "Why is this?"] },
          { word: "我不知道", pinyin: "wǒ bù zhī dào", translation: "I don't know", options: ["I don't know", "I know", "I understand", "I think"] },
          { word: "生日快乐", pinyin: "shēng rì kuài lè", translation: "Happy Birthday", options: ["Happy Birthday", "Happy New Year", "Merry Christmas", "Good Morning"] }
        ]
      }
    ]
  },
  {
    stage: 10,
    title: "C2 Expert",
    chapters: [
      {
        num: 1,
        title: "Idioms",
        questions: [
          { word: "画蛇添足", pinyin: "huà shé tiān zú", translation: "Superfluous", options: ["Superfluous", "Necessary", "Important", "Useful"] },
          { word: "入乡随俗", pinyin: "rù xiāng suí sú", translation: "When in Rome", options: ["When in Rome", "Be yourself", "Change", "Stay"] },
          { word: "辩证", pinyin: "biàn zhèng", translation: "Dialectical", options: ["Dialectical", "Logical", "Emotional", "Physical"] },
          { word: "潜移默化", pinyin: "qián yí mò huà", translation: "Imperceptible influence", options: ["Imperceptible influence", "Direct impact", "Sudden change", "No effect"] },
          { word: "博大精深", pinyin: "bó dà jīng shēn", translation: "Broad and profound", options: ["Broad and profound", "Simple and shallow", "Small and weak", "Short and brief"] }
        ]
      }
    ]
  }
];

async function main() {
  console.log('--- Updating Curriculum for All 10 Stages ---');

  const lessonTypes = ['vocab', 'grammar', 'listen', 'speak', 'writing'];
  const questionTypeMap: Record<string, string> = {
    'vocab': 'flashcard',
    'grammar': 'multiple-choice',
    'listen': 'listening',
    'speak': 'speaking',
    'writing': 'writing'
  };

  for (const stageData of curriculumData) {
    console.log(`Processing Stage ${stageData.stage}: ${stageData.title}...`);
    
    for (const chapter of stageData.chapters) {
      const stageId = `zh-stage${stageData.stage}`;
      const chapterId = `${stageId}-ch${chapter.num}`;

      for (const type of lessonTypes) {
        const lesson = await prisma.lesson.findFirst({
          where: {
            id: { contains: `${chapterId}` },
            type: type
          }
        });

        if (lesson) {
          // Map questions to include the correct internal type
          const updatedQuestions = chapter.questions.map(q => {
            // Determine correct answer based on lesson type
            // Speak/Write/Vocab -> Answer is the Chinese word
            // Listen/Grammar -> Answer is the English translation (selected from options)
            const correctAnswer = ['speak', 'writing'].includes(type) ? q.word : q.translation;

            return {
              ...q,
              type: questionTypeMap[type],
              targetLanguage: 'zh',
              nativeLanguage: 'en',
              languageCode: 'zh',
              correctAnswer: correctAnswer
            };
          });

          const newContent = {
            questions: updatedQuestions
          };

          await prisma.lesson.update({
            where: { id: lesson.id },
            data: {
              contentJson: newContent
            }
          });
          console.log(`  ✅ Updated ${type} content for ${lesson.id} (${chapter.title})`);
        } else {
          console.log(`  ⚠️ No ${type} lesson found for ${chapterId}`);
        }
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());