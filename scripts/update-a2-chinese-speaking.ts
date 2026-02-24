import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Update objects containing lesson IDs and new content
const lessonUpdates = [
  {
    lessonId: 'zh-stage2-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "你吃饭了吗？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "Did you eat?",
            "Are you hungry?",
            "Do you like food?",
            "What are you eating?"
          ],
          "translation": "Did you eat?",
          "languageCode": "zh",
          "romanization": "nǐ chī fàn le ma?",
          "correctAnswer": "Did you eat?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你去哪儿了？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "Where are you going?",
            "Where did you go?",
            "Where do you live?",
            "Where is it?"
          ],
          "translation": "Where did you go?",
          "languageCode": "zh",
          "romanization": "nǐ qù nǎr le?",
          "correctAnswer": "Where did you go?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "昨天你做什么了？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "What are you doing today?",
            "What did you do yesterday?",
            "What will you do tomorrow?",
            "What do you want to do?"
          ],
          "translation": "What did you do yesterday?",
          "languageCode": "zh",
          "romanization": "zuótiān nǐ zuò shénme le?",
          "correctAnswer": "What did you do yesterday?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你学过中文吗？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "Are you studying Chinese?",
            "Have you studied Chinese before?",
            "Do you like Chinese?",
            "Can you speak Chinese?"
          ],
          "translation": "Have you studied Chinese before?",
          "languageCode": "zh",
          "romanization": "nǐ xué guo zhōngwén ma?",
          "correctAnswer": "Have you studied Chinese before?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个多少钱？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "How much is this?",
            "Is this expensive?",
            "Can I buy this?",
            "Do you want this?"
          ],
          "translation": "How much is this?",
          "languageCode": "zh",
          "romanization": "zhège duōshao qián?",
          "correctAnswer": "How much is this?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你叫什么名字？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "What's your name?",
            "How old are you?",
            "Where are you from?",
            "What do you do?"
          ],
          "translation": "What's your name?",
          "languageCode": "zh",
          "romanization": "nǐ jiào shénme míngzi?",
          "correctAnswer": "What's your name?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你住在哪儿？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "Where do you live?",
            "Where did you go?",
            "Where is your house?",
            "Do you live here?"
          ],
          "translation": "Where do you live?",
          "languageCode": "zh",
          "romanization": "nǐ zhù zài nǎr?",
          "correctAnswer": "Where do you live?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你几点起床了？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "What time do you wake up?",
            "What time did you wake up?",
            "Are you awake?",
            "Did you sleep well?"
          ],
          "translation": "What time did you wake up?",
          "languageCode": "zh",
          "romanization": "nǐ jǐ diǎn qǐchuáng le?",
          "correctAnswer": "What time did you wake up?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你看过这个电影吗？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "Do you like this movie?",
            "Have you seen this movie?",
            "Are you watching this movie?",
            "Is this a good movie?"
          ],
          "translation": "Have you seen this movie?",
          "languageCode": "zh",
          "romanization": "nǐ kàn guo zhège diànyǐng ma?",
          "correctAnswer": "Have you seen this movie?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "昨天天气怎么样？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "How is the weather today?",
            "How was the weather yesterday?",
            "Will it rain tomorrow?",
            "Is it cold outside?"
          ],
          "translation": "How was the weather yesterday?",
          "languageCode": "zh",
          "romanization": "zuótiān tiānqì zěnmeyàng?",
          "correctAnswer": "How was the weather yesterday?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你买了什么？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "What do you want to buy?",
            "What did you buy?",
            "Are you shopping?",
            "How much did you spend?"
          ],
          "translation": "What did you buy?",
          "languageCode": "zh",
          "romanization": "nǐ mǎi le shénme?",
          "correctAnswer": "What did you buy?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你喝了咖啡吗？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "Did you drink coffee?",
            "Do you like coffee?",
            "Do you want coffee?",
            "Is this coffee?"
          ],
          "translation": "Did you drink coffee?",
          "languageCode": "zh",
          "romanization": "nǐ hē le kāfēi ma?",
          "correctAnswer": "Did you drink coffee?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你上周末做了什么？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "What are you doing this weekend?",
            "What did you do last weekend?",
            "Do you have plans this weekend?",
            "What do you usually do on weekends?"
          ],
          "translation": "What did you do last weekend?",
          "languageCode": "zh",
          "romanization": "nǐ shàng zhōumò zuò le shénme?",
          "correctAnswer": "What did you do last weekend?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你来过这里吗？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "Have you been here before?",
            "Are you coming here?",
            "Do you like this place?",
            "Where is this place?"
          ],
          "translation": "Have you been here before?",
          "languageCode": "zh",
          "romanization": "nǐ lái guo zhèlǐ ma?",
          "correctAnswer": "Have you been here before?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你今天几点下班？",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": [
            "What time do you finish work today?",
            "What time did you start work?",
            "Are you working today?",
            "Do you like your job?"
          ],
          "translation": "What time do you finish work today?",
          "languageCode": "zh",
          "romanization": "nǐ jīntiān jǐ diǎn xiàbān?",
          "correctAnswer": "What time do you finish work today?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
  // Add more lesson updates here if needed
];

async function updateLessons() {
  try {
    console.log('Starting lesson content updates...\n');

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

        console.log(`✅ Successfully updated lesson: ${update.lessonId}`);
      } catch (error) {
        console.error(`❌ Failed to update lesson: ${update.lessonId}`);
        console.error(`   Error: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    console.log('\n✨ Lesson update process completed!');
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
