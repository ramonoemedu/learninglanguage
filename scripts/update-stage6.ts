import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 6: B1 - Conversationalist
const lessonUpdates = [
  // ===== CHAPTER 1: OPINIONS & EXPRESSIONS =====
  {
    lessonId: 'zh-stage6-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "认为",
          "prompt": "What does this verb mean?",
          "options": ["Think/Believe", "Know", "Understand", "Realize"],
          "translation": "Think/Believe",
          "languageCode": "zh",
          "romanization": "rèn wéi",
          "correctAnswer": "Think/Believe",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "觉得",
          "prompt": "What does this verb mean?",
          "options": ["Feel", "Think", "Sense", "Perceive"],
          "translation": "Feel",
          "languageCode": "zh",
          "romanization": "jiào de",
          "correctAnswer": "Feel",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "意见",
          "prompt": "What does this word mean?",
          "options": ["Opinion", "Idea", "View", "Perspective"],
          "translation": "Opinion",
          "languageCode": "zh",
          "romanization": "yi jiàn",
          "correctAnswer": "Opinion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "看法",
          "prompt": "What does this word mean?",
          "options": ["View/Outlook", "Appearance", "Sight", "Perspective"],
          "translation": "View/Outlook",
          "languageCode": "zh",
          "romanization": "kàn fǎ",
          "correctAnswer": "View/Outlook",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "赞成",
          "prompt": "What does this verb mean?",
          "options": ["Agree", "Support", "Approve", "Endorse"],
          "translation": "Agree",
          "languageCode": "zh",
          "romanization": "zàn chéng",
          "correctAnswer": "Agree",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "反对",
          "prompt": "What does this verb mean?",
          "options": ["Oppose", "Disagree", "Object to", "Be against"],
          "translation": "Oppose",
          "languageCode": "zh",
          "romanization": "fǎn duì",
          "correctAnswer": "Oppose",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "同意",
          "prompt": "What does this verb mean?",
          "options": ["Agree", "Consent", "Approve", "Accept"],
          "translation": "Agree",
          "languageCode": "zh",
          "romanization": "tóng yi",
          "correctAnswer": "Agree",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "不同意",
          "prompt": "What does this verb mean?",
          "options": ["Disagree", "Reject", "Not approve", "Object"],
          "translation": "Disagree",
          "languageCode": "zh",
          "romanization": "bu tóng yi",
          "correctAnswer": "Disagree",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我认为这个计划不太好",
          "prompt": "How do you express an opinion: 'I think this plan isn't very good'?",
          "options": ["我认为这个计划不太好 (wǒ rèn wéi zhè ge jì huà bu tài hǎo)", "这个计划不好 (zhè ge jì huà bu hǎo)", "我不好计划 (wǒ bu hǎo jì huà)", "计划不太 (jì huà bu tài)"],
          "translation": "I think this plan isn't very good",
          "languageCode": "zh",
          "romanization": "wǒ rèn wéi zhè ge jì huà bu tài hǎo",
          "correctAnswer": "我认为这个计划不太好 (wǒ rèn wéi zhè ge jì huà bu tài hǎo)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你觉得怎么样？",
          "prompt": "How do you ask someone's opinion: 'What do you think?'",
          "options": ["你觉得怎么样？(nǐ jiào de zěn me yàng?)", "怎么样？(zěn me yàng?)", "你觉得？(nǐ jiào de?)", "意见怎样 (yi jiàn zěn yàng)"],
          "translation": "What do you think?",
          "languageCode": "zh",
          "romanization": "nǐ jiào de zěn me yàng?",
          "correctAnswer": "你觉得怎么样？(nǐ jiào de zěn me yàng?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "根据我的看法，应该再讨论一下",
          "prompt": "How do you say 'In my view, we should discuss it further'?",
          "options": ["根据我的看法，应该再讨论一下 (gēn jù wǒ de kàn fǎ, yīng gāi zài tǎo lùn yi xià)", "我看法讨论 (wǒ kàn fǎ tǎo lùn)", "应该讨论 (yīng gāi tǎo lùn)", "再讨论 (zài tǎo lùn)"],
          "translation": "In my view, we should discuss it further",
          "languageCode": "zh",
          "romanization": "gēn jù wǒ de kàn fǎ, yīng gāi zài tǎo lùn yi xià",
          "correctAnswer": "根据我的看法，应该再讨论一下 (gēn jù wǒ de kàn fǎ, yīng gāi zài tǎo lùn yi xià)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我赞成你的意见",
          "prompt": "How do you say 'I agree with your opinion'?",
          "options": ["我赞成你的意见 (wǒ zàn chéng nǐ de yi jiàn)", "赞成意见 (zàn chéng yi jiàn)", "我同意 (wǒ tóng yi)", "你的意见好 (nǐ de yi jiàn hǎo)"],
          "translation": "I agree with your opinion",
          "languageCode": "zh",
          "romanization": "wǒ zàn chéng nǐ de yi jiàn",
          "correctAnswer": "我赞成你的意见 (wǒ zàn chéng nǐ de yi jiàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我不太同意这个看法",
          "prompt": "How do you say 'I don't quite agree with this view'?",
          "options": ["我不太同意这个看法 (wǒ bu tài tóng yi zhè ge kàn fǎ)", "不同意看法 (bu tóng yi kàn fǎ)", "这个不好 (zhè ge bu hǎo)", "不太可以 (bu tài kě yi)"],
          "translation": "I don't quite agree with this view",
          "languageCode": "zh",
          "romanization": "wǒ bu tài tóng yi zhè ge kàn fǎ",
          "correctAnswer": "我不太同意这个看法 (wǒ bu tài tóng yi zhè ge kàn fǎ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "认为",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Think/Believe", "Know", "Understand", "Realize"],
          "translation": "Think/Believe",
          "languageCode": "zh",
          "romanization": "rèn wéi",
          "correctAnswer": "Think/Believe",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "觉得",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Feel", "Think", "Sense", "Perceive"],
          "translation": "Feel",
          "languageCode": "zh",
          "romanization": "jiào de",
          "correctAnswer": "Feel",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "意见",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Opinion", "Idea", "View", "Perspective"],
          "translation": "Opinion",
          "languageCode": "zh",
          "romanization": "yi jiàn",
          "correctAnswer": "Opinion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "赞成",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Agree", "Support", "Approve", "Endorse"],
          "translation": "Agree",
          "languageCode": "zh",
          "romanization": "zàn chéng",
          "correctAnswer": "Agree",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "反对",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Oppose", "Disagree", "Object to", "Be against"],
          "translation": "Oppose",
          "languageCode": "zh",
          "romanization": "fǎn duì",
          "correctAnswer": "Oppose",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "同意",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Agree", "Consent", "Approve", "Accept"],
          "translation": "Agree",
          "languageCode": "zh",
          "romanization": "tóng yi",
          "correctAnswer": "Agree",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我认为这个计划不太好",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I think this plan isn't very good", "This plan not good", "I don't like", "Plan bad"],
          "translation": "I think this plan isn't very good",
          "languageCode": "zh",
          "romanization": "wǒ rèn wéi zhè ge jì huà bu tài hǎo",
          "correctAnswer": "I think this plan isn't very good",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你觉得怎么样？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["What do you think?", "How you feel", "Your opinion", "What think"],
          "translation": "What do you think?",
          "languageCode": "zh",
          "romanization": "nǐ jiào de zěn me yàng?",
          "correctAnswer": "What do you think?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我赞成你的意见",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["I agree with your opinion", "I support you", "Your idea good", "Agree with"],
          "translation": "I agree with your opinion",
          "languageCode": "zh",
          "romanization": "wǒ zàn chéng nǐ de yi jiàn",
          "correctAnswer": "I agree with your opinion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "根据我的看法，应该再讨论一下",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["In my view, we should discuss it further", "My view talk more", "Discuss again", "Further discussion"],
          "translation": "In my view, we should discuss it further",
          "languageCode": "zh",
          "romanization": "gēn jù wǒ de kàn fǎ, yīng gāi zài tǎo lùn yi xià",
          "correctAnswer": "In my view, we should discuss it further",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我不太同意这个看法",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["I don't quite agree with this view", "Not quite agree", "Disagree view", "Don't support"],
          "translation": "I don't quite agree with this view",
          "languageCode": "zh",
          "romanization": "wǒ bu tài tóng yi zhè ge kàn fǎ",
          "correctAnswer": "I don't quite agree with this view",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "认为",
          "prompt": "Write the Chinese characters for 'Think/Believe'",
          "options": ["认为", "觉得", "意见", "看法"],
          "translation": "Think/Believe",
          "languageCode": "zh",
          "romanization": "rèn wéi",
          "correctAnswer": "认为",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "意见",
          "prompt": "Write the Chinese characters for 'Opinion'",
          "options": ["意见", "认为", "看法", "看"],
          "translation": "Opinion",
          "languageCode": "zh",
          "romanization": "yi jiàn",
          "correctAnswer": "意见",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "赞成",
          "prompt": "Write the Chinese characters for 'Agree'",
          "options": ["赞成", "同意", "反对", "不同意"],
          "translation": "Agree",
          "languageCode": "zh",
          "romanization": "zàn chéng",
          "correctAnswer": "赞成",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "反对",
          "prompt": "Write the Chinese characters for 'Oppose'",
          "options": ["反对", "赞成", "反国", "反"],
          "translation": "Oppose",
          "languageCode": "zh",
          "romanization": "fǎn duì",
          "correctAnswer": "反对",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "同意",
          "prompt": "Write the Chinese characters for 'Agree'",
          "options": ["同意", "不同意", "意见", "赞成"],
          "translation": "Agree",
          "languageCode": "zh",
          "romanization": "tóng yi",
          "correctAnswer": "同意",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: EMOTIONS =====
  {
    lessonId: 'zh-stage6-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "开心",
          "prompt": "What does this adjective mean?",
          "options": ["Happy", "Joyful", "Cheerful", "Delighted"],
          "translation": "Happy",
          "languageCode": "zh",
          "romanization": "kāi xīn",
          "correctAnswer": "Happy",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "伤心",
          "prompt": "What does this adjective mean?",
          "options": ["Sad", "Grief-stricken", "Sorrowful", "Upset"],
          "translation": "Sad",
          "languageCode": "zh",
          "romanization": "shāng xīn",
          "correctAnswer": "Sad",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "生气",
          "prompt": "What does this verb/adjective mean?",
          "options": ["Angry", "Mad", "Upset", "Furious"],
          "translation": "Angry",
          "languageCode": "zh",
          "romanization": "shēng qì",
          "correctAnswer": "Angry",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "担心",
          "prompt": "What does this verb/adjective mean?",
          "options": ["Worry/Worried", "Anxious", "Concerned", "Troubled"],
          "translation": "Worry/Worried",
          "languageCode": "zh",
          "romanization": "dān xīn",
          "correctAnswer": "Worry/Worried",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "兴奋",
          "prompt": "What does this adjective mean?",
          "options": ["Excited", "Enthusiastic", "Thrilled", "Eager"],
          "translation": "Excited",
          "languageCode": "zh",
          "romanization": "xīng fèn",
          "correctAnswer": "Excited",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "害怕",
          "prompt": "What does this verb/adjective mean?",
          "options": ["Afraid", "Scared", "Frightened", "Fear"],
          "translation": "Afraid",
          "languageCode": "zh",
          "romanization": "hài pà",
          "correctAnswer": "Afraid",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "失望",
          "prompt": "What does this adjective mean?",
          "options": ["Disappointed", "Disheartened", "Disillusioned", "Let down"],
          "translation": "Disappointed",
          "languageCode": "zh",
          "romanization": "shī wàng",
          "correctAnswer": "Disappointed",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "惊讶",
          "prompt": "What does this adjective mean?",
          "options": ["Surprised", "Astonished", "Amazed", "Startled"],
          "translation": "Surprised",
          "languageCode": "zh",
          "romanization": "jīng yà",
          "correctAnswer": "Surprised",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "听到这个消息，我感到很开心",
          "prompt": "How do you say 'Hearing this news, I felt very happy'?",
          "options": ["听到这个消息，我感到很开心 (tīng dào zhè ge xiāo xi, wǒ gǎn dào hěn kāi xīn)", "消息开心 (xiāo xi kāi xīn)", "我开心 (wǒ kāi xīn)", "听到消息快乐 (tīng dào xiāo xi kuài lè)"],
          "translation": "Hearing this news, I felt very happy",
          "languageCode": "zh",
          "romanization": "tīng dào zhè ge xiāo xi, wǒ gǎn dào hěn kāi xīn",
          "correctAnswer": "听到这个消息，我感到很开心 (tīng dào zhè ge xiāo xi, wǒ gǎn dào hěn kāi xīn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他为什么生气了？",
          "prompt": "How do you ask 'Why did he get angry?'",
          "options": ["他为什么生气了？(tā wèi shén me shēng qì le?)", "他生气？(tā shēng qì?)", "为什么生气 (wèi shén me shēng qì)", "他气了 (tā qì le)"],
          "translation": "Why did he get angry?",
          "languageCode": "zh",
          "romanization": "tā wèi shén me shēng qì le?",
          "correctAnswer": "他为什么生气了？(tā wèi shén me shēng qì le?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我很担心她的健康",
          "prompt": "How do you say 'I'm very worried about her health'?",
          "options": ["我很担心她的健康 (wǒ hěn dān xīn tā de jiàn kāng)", "担心健康 (dān xīn jiàn kāng)", "她健康 (tā jiàn kāng)", "我担心 (wǒ dān xīn)"],
          "translation": "I'm very worried about her health",
          "languageCode": "zh",
          "romanization": "wǒ hěn dān xīn tā de jiàn kāng",
          "correctAnswer": "我很担心她的健康 (wǒ hěn dān xīn tā de jiàn kāng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他们对这个结果感到失望",
          "prompt": "How do you say 'They were disappointed with the result'?",
          "options": ["他们对这个结果感到失望 (tā men duì zhè ge jié guǒ gǎn dào shī wàng)", "结果失望 (jié guǒ shī wàng)", "他们失望 (tā men shī wàng)", "对失望 (duì shī wàng)"],
          "translation": "They were disappointed with the result",
          "languageCode": "zh",
          "romanization": "tā men duì zhè ge jié guǒ gǎn dào shī wàng",
          "correctAnswer": "他们对这个结果感到失望 (tā men duì zhè ge jié guǒ gǎn dào shī wàng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个新项目让我非常兴奋",
          "prompt": "How do you say 'This new project makes me very excited'?",
          "options": ["这个新项目让我非常兴奋 (zhè ge xīn xiàng mù ràng wǒ fēi cháng xīng fèn)", "项目兴奋 (xiàng mù xīng fèn)", "我兴奋 (wǒ xīng fèn)", "非常兴奋 (fēi cháng xīng fèn)"],
          "translation": "This new project makes me very excited",
          "languageCode": "zh",
          "romanization": "zhè ge xīn xiàng mù ràng wǒ fēi cháng xīng fèn",
          "correctAnswer": "这个新项目让我非常兴奋 (zhè ge xīn xiàng mù ràng wǒ fēi cháng xīng fèn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "开心",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Happy", "Joyful", "Cheerful", "Delighted"],
          "translation": "Happy",
          "languageCode": "zh",
          "romanization": "kāi xīn",
          "correctAnswer": "Happy",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "伤心",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Sad", "Grief-stricken", "Sorrowful", "Upset"],
          "translation": "Sad",
          "languageCode": "zh",
          "romanization": "shāng xīn",
          "correctAnswer": "Sad",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "生气",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Angry", "Mad", "Upset", "Furious"],
          "translation": "Angry",
          "languageCode": "zh",
          "romanization": "shēng qì",
          "correctAnswer": "Angry",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "兴奋",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Excited", "Enthusiastic", "Thrilled", "Eager"],
          "translation": "Excited",
          "languageCode": "zh",
          "romanization": "xīng fèn",
          "correctAnswer": "Excited",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "害怕",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Afraid", "Scared", "Frightened", "Fear"],
          "translation": "Afraid",
          "languageCode": "zh",
          "romanization": "hài pà",
          "correctAnswer": "Afraid",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "失望",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Disappointed", "Disheartened", "Disillusioned", "Let down"],
          "translation": "Disappointed",
          "languageCode": "zh",
          "romanization": "shī wàng",
          "correctAnswer": "Disappointed",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "听到这个消息，我感到很开心",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Hearing this news, I felt very happy", "News made happy", "Very happy heard", "Happy news"],
          "translation": "Hearing this news, I felt very happy",
          "languageCode": "zh",
          "romanization": "tīng dào zhè ge xiāo xi, wǒ gǎn dào hěn kāi xīn",
          "correctAnswer": "Hearing this news, I felt very happy",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他为什么生气了？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Why did he get angry?", "Why angry", "He angry why", "What made angry"],
          "translation": "Why did he get angry?",
          "languageCode": "zh",
          "romanization": "tā wèi shén me shēng qì le?",
          "correctAnswer": "Why did he get angry?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我很担心她的健康",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["I'm very worried about her health", "Worried health", "Her health concern", "Very concerned"],
          "translation": "I'm very worried about her health",
          "languageCode": "zh",
          "romanization": "wǒ hěn dān xīn tā de jiàn kāng",
          "correctAnswer": "I'm very worried about her health",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个新项目让我非常兴奋",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This new project makes me very excited", "Project excited me", "New project exciting", "Very excited"],
          "translation": "This new project makes me very excited",
          "languageCode": "zh",
          "romanization": "zhè ge xīn xiàng mù ràng wǒ fēi cháng xīng fèn",
          "correctAnswer": "This new project makes me very excited",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他们对这个结果感到失望",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["They were disappointed with the result", "Result disappointed", "They disappointed", "Disappointed result"],
          "translation": "They were disappointed with the result",
          "languageCode": "zh",
          "romanization": "tā men duì zhè ge jié guǒ gǎn dào shī wàng",
          "correctAnswer": "They were disappointed with the result",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "开心",
          "prompt": "Write the Chinese characters for 'Happy'",
          "options": ["开心", "心开", "快乐", "高兴"],
          "translation": "Happy",
          "languageCode": "zh",
          "romanization": "kāi xīn",
          "correctAnswer": "开心",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "伤心",
          "prompt": "Write the Chinese characters for 'Sad'",
          "options": ["伤心", "心伤", "难过", "悲伤"],
          "translation": "Sad",
          "languageCode": "zh",
          "romanization": "shāng xīn",
          "correctAnswer": "伤心",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "生气",
          "prompt": "Write the Chinese characters for 'Angry'",
          "options": ["生气", "气生", "生怒", "怒气"],
          "translation": "Angry",
          "languageCode": "zh",
          "romanization": "shēng qì",
          "correctAnswer": "生气",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "兴奋",
          "prompt": "Write the Chinese characters for 'Excited'",
          "options": ["兴奋", "奋兴", "激动", "兴高"],
          "translation": "Excited",
          "languageCode": "zh",
          "romanization": "xīng fèn",
          "correctAnswer": "兴奋",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "害怕",
          "prompt": "Write the Chinese characters for 'Afraid'",
          "options": ["害怕", "怕害", "恐怖", "害"],
          "translation": "Afraid",
          "languageCode": "zh",
          "romanization": "hài pà",
          "correctAnswer": "害怕",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: WORK CONTEXT =====
  {
    lessonId: 'zh-stage6-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "会议",
          "prompt": "What does this noun mean?",
          "options": ["Meeting", "Conference", "Assembly", "Gathering"],
          "translation": "Meeting",
          "languageCode": "zh",
          "romanization": "huì yi",
          "correctAnswer": "Meeting",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "报告",
          "prompt": "What does this noun mean?",
          "options": ["Report", "Presentation", "Statement", "Briefing"],
          "translation": "Report",
          "languageCode": "zh",
          "romanization": "bào gào",
          "correctAnswer": "Report",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "部门",
          "prompt": "What does this noun mean?",
          "options": ["Department", "Division", "Section", "Branch"],
          "translation": "Department",
          "languageCode": "zh",
          "romanization": "bu mén",
          "correctAnswer": "Department",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "同事",
          "prompt": "What does this noun mean?",
          "options": ["Colleague", "Coworker", "Office mate", "Workmate"],
          "translation": "Colleague",
          "languageCode": "zh",
          "romanization": "tóng shì",
          "correctAnswer": "Colleague",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "领导",
          "prompt": "What does this noun mean?",
          "options": ["Leader", "Boss", "Manager", "Supervisor"],
          "translation": "Leader",
          "languageCode": "zh",
          "romanization": "lǐng dǎo",
          "correctAnswer": "Leader",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "项目",
          "prompt": "What does this noun mean?",
          "options": ["Project", "Scheme", "Program", "Initiative"],
          "translation": "Project",
          "languageCode": "zh",
          "romanization": "xiàng mù",
          "correctAnswer": "Project",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "截止日期",
          "prompt": "What does this phrase mean?",
          "options": ["Deadline", "Due date", "Closing date", "Final date"],
          "translation": "Deadline",
          "languageCode": "zh",
          "romanization": "jiē zhǐ rì qī",
          "correctAnswer": "Deadline",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "预算",
          "prompt": "What does this noun mean?",
          "options": ["Budget", "Estimate", "Allocation", "Funds"],
          "translation": "Budget",
          "languageCode": "zh",
          "romanization": "yù suàn",
          "correctAnswer": "Budget",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我们的部门正在进行一个重要的项目",
          "prompt": "How do you say 'Our department is currently working on an important project'?",
          "options": ["我们的部门正在进行一个重要的项目 (wǒ men de bu mén zhèng zài jìn xíng yi ge zhòng yào de xiàng mù)", "部门项目 (bu mén xiàng mù)", "正进行项目 (zhèng jìn xíng xiàng mù)", "重要项目 (zhòng yào xiàng mù)"],
          "translation": "Our department is currently working on an important project",
          "languageCode": "zh",
          "romanization": "wǒ men de bu mén zhèng zài jìn xíng yi ge zhòng yào de xiàng mù",
          "correctAnswer": "我们的部门正在进行一个重要的项目 (wǒ men de bu mén zhèng zài jìn xíng yi ge zhòng yào de xiàng mù)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "领导要求我们在下周提交报告",
          "prompt": "How do you say 'The leader requires us to submit the report by next week'?",
          "options": ["领导要求我们在下周提交报告 (lǐng dǎo yào qiú wǒ men zài xià zhōu tí jiāo bào gào)", "报告下周 (bào gào xià zhōu)", "提交报告 (tí jiāo bào gào)", "要求报告 (yào qiú bào gào)"],
          "translation": "The leader requires us to submit the report by next week",
          "languageCode": "zh",
          "romanization": "lǐng dǎo yào qiú wǒ men zài xià zhōu tí jiāo bào gào",
          "correctAnswer": "领导要求我们在下周提交报告 (lǐng dǎo yào qiú wǒ men zài xià zhōu tí jiāo bào gào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个项目的截止日期是什么时候？",
          "prompt": "How do you ask 'When is the deadline for this project?'",
          "options": ["这个项目的截止日期是什么时候？(zhè ge xiàng mù de jiē zhǐ rì qī shì shén me shí hou?)", "截止日期？(jiē zhǐ rì qī?)", "项目什么时候 (xiàng mù shén me shí hou)", "什么时候截止 (shén me shí hou jiē zhǐ)"],
          "translation": "When is the deadline for this project?",
          "languageCode": "zh",
          "romanization": "zhè ge xiàng mù de jiē zhǐ rì qī shì shén me shí hou?",
          "correctAnswer": "这个项目的截止日期是什么时候？(zhè ge xiàng mù de jiē zhǐ rì qī shì shén me shí hou?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我很高兴和这些同事一起工作",
          "prompt": "How do you say 'I'm pleased to work with these colleagues'?",
          "options": ["我很高兴和这些同事一起工作 (wǒ hěn gāo xìng he zhè xiē tóng shì yi qǐ gōng zuò)", "同事工作 (tóng shì gōng zuò)", "一起工作 (yi qǐ gōng zuò)", "高兴同事 (gāo xìng tóng shì)"],
          "translation": "I'm pleased to work with these colleagues",
          "languageCode": "zh",
          "romanization": "wǒ hěn gāo xìng he zhè xiē tóng shì yi qǐ gōng zuò",
          "correctAnswer": "我很高兴和这些同事一起工作 (wǒ hěn gāo xìng he zhè xiē tóng shì yi qǐ gōng zuò)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个项目的预算有限制",
          "prompt": "How do you say 'This project's budget is limited'?",
          "options": ["这个项目的预算有限制 (zhè ge xiàng mù de yù suàn yǒu xiàn zhì)", "预算有限 (yù suàn yǒu xiàn)", "项目预算 (xiàng mù yù suàn)", "限制预算 (xiàn zhì yù suàn)"],
          "translation": "This project's budget is limited",
          "languageCode": "zh",
          "romanization": "zhè ge xiàng mù de yù suàn yǒu xiàn zhì",
          "correctAnswer": "这个项目的预算有限制 (zhè ge xiàng mù de yù suàn yǒu xiàn zhì)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "会议",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Meeting", "Conference", "Assembly", "Gathering"],
          "translation": "Meeting",
          "languageCode": "zh",
          "romanization": "huì yi",
          "correctAnswer": "Meeting",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "报告",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Report", "Presentation", "Statement", "Briefing"],
          "translation": "Report",
          "languageCode": "zh",
          "romanization": "bào gào",
          "correctAnswer": "Report",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "部门",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Department", "Division", "Section", "Branch"],
          "translation": "Department",
          "languageCode": "zh",
          "romanization": "bu mén",
          "correctAnswer": "Department",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "同事",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Colleague", "Coworker", "Office mate", "Workmate"],
          "translation": "Colleague",
          "languageCode": "zh",
          "romanization": "tóng shì",
          "correctAnswer": "Colleague",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "领导",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Leader", "Boss", "Manager", "Supervisor"],
          "translation": "Leader",
          "languageCode": "zh",
          "romanization": "lǐng dǎo",
          "correctAnswer": "Leader",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "项目",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Project", "Scheme", "Program", "Initiative"],
          "translation": "Project",
          "languageCode": "zh",
          "romanization": "xiàng mù",
          "correctAnswer": "Project",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我们的部门正在进行一个重要的项目",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["Our department is currently working on an important project", "Department doing project", "Important work project", "Project in progress"],
          "translation": "Our department is currently working on an important project",
          "languageCode": "zh",
          "romanization": "wǒ men de bu mén zhèng zài jìn xíng yi ge zhòng yào de xiàng mù",
          "correctAnswer": "Our department is currently working on an important project",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "领导要求我们在下周提交报告",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The leader requires us to submit the report by next week", "Submit report next week", "Leader wants report", "Report deadline"],
          "translation": "The leader requires us to submit the report by next week",
          "languageCode": "zh",
          "romanization": "lǐng dǎo yào qiú wǒ men zài xià zhōu tí jiāo bào gào",
          "correctAnswer": "The leader requires us to submit the report by next week",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个项目的截止日期是什么时候？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["When is the deadline for this project?", "Project deadline when", "When deadline", "Deadline what time"],
          "translation": "When is the deadline for this project?",
          "languageCode": "zh",
          "romanization": "zhè ge xiàng mù de jiē zhǐ rì qī shì shén me shí hou?",
          "correctAnswer": "When is the deadline for this project?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我很高兴和这些同事一起工作",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["I'm pleased to work with these colleagues", "Happy work colleagues", "Work with colleagues", "Enjoy working"],
          "translation": "I'm pleased to work with these colleagues",
          "languageCode": "zh",
          "romanization": "wǒ hěn gāo xìng he zhè xiē tóng shì yi qǐ gōng zuò",
          "correctAnswer": "I'm pleased to work with these colleagues",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个项目的预算有限制",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This project's budget is limited", "Budget limited", "Project budget small", "Limited funding"],
          "translation": "This project's budget is limited",
          "languageCode": "zh",
          "romanization": "zhè ge xiàng mù de yù suàn yǒu xiàn zhì",
          "correctAnswer": "This project's budget is limited",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "会议",
          "prompt": "Write the Chinese characters for 'Meeting'",
          "options": ["会议", "议会", "会合", "会"],
          "translation": "Meeting",
          "languageCode": "zh",
          "romanization": "huì yi",
          "correctAnswer": "会议",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "报告",
          "prompt": "Write the Chinese characters for 'Report'",
          "options": ["报告", "告报", "报", "告"],
          "translation": "Report",
          "languageCode": "zh",
          "romanization": "bào gào",
          "correctAnswer": "报告",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "部门",
          "prompt": "Write the Chinese characters for 'Department'",
          "options": ["部门", "门部", "部分", "部"],
          "translation": "Department",
          "languageCode": "zh",
          "romanization": "bu mén",
          "correctAnswer": "部门",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "同事",
          "prompt": "Write the Chinese characters for 'Colleague'",
          "options": ["同事", "事同", "同工", "工同"],
          "translation": "Colleague",
          "languageCode": "zh",
          "romanization": "tóng shì",
          "correctAnswer": "同事",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "项目",
          "prompt": "Write the Chinese characters for 'Project'",
          "options": ["项目", "目项", "项", "目"],
          "translation": "Project",
          "languageCode": "zh",
          "romanization": "xiàng mù",
          "correctAnswer": "项目",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: LOGICAL CONNECTORS =====
  {
    lessonId: 'zh-stage6-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "因为",
          "prompt": "What does this connector mean?",
          "options": ["Because", "Since", "As", "Due to"],
          "translation": "Because",
          "languageCode": "zh",
          "romanization": "yīn wèi",
          "correctAnswer": "Because",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "所以",
          "prompt": "What does this connector mean?",
          "options": ["Therefore", "So", "Thus", "As a result"],
          "translation": "Therefore",
          "languageCode": "zh",
          "romanization": "suǒ yi",
          "correctAnswer": "Therefore",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "虽然",
          "prompt": "What does this connector mean?",
          "options": ["Although", "Though", "Even though", "Despite"],
          "translation": "Although",
          "languageCode": "zh",
          "romanization": "suī rán",
          "correctAnswer": "Although",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "但是",
          "prompt": "What does this connector mean?",
          "options": ["But", "However", "Yet", "Still"],
          "translation": "But",
          "languageCode": "zh",
          "romanization": "dàn shì",
          "correctAnswer": "But",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "不过",
          "prompt": "What does this connector mean?",
          "options": ["However", "But", "Yet", "Nevertheless"],
          "translation": "However",
          "languageCode": "zh",
          "romanization": "bu guò",
          "correctAnswer": "However",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "而且",
          "prompt": "What does this connector mean?",
          "options": ["Moreover", "And", "Furthermore", "Besides"],
          "translation": "Moreover",
          "languageCode": "zh",
          "romanization": "ér qiě",
          "correctAnswer": "Moreover",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "或者",
          "prompt": "What does this connector mean?",
          "options": ["Or", "Either", "Otherwise", "Alternatively"],
          "translation": "Or",
          "languageCode": "zh",
          "romanization": "huò zhě",
          "correctAnswer": "Or",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "因此",
          "prompt": "What does this connector mean?",
          "options": ["Therefore", "Thus", "Consequently", "Hence"],
          "translation": "Therefore",
          "languageCode": "zh",
          "romanization": "yīn cǐ",
          "correctAnswer": "Therefore",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "因为下雨了，所以我们取消了这次活动",
          "prompt": "How do you show cause and effect: 'Because it rained, so we cancelled the activity'?",
          "options": ["因为下雨了，所以我们取消了这次活动 (yīn wèi xià yu le, suǒ yi wǒ men qǔ xiāo le zhè cì huó dòng)", "下雨取消 (xià yu qǔ xiāo)", "因为下雨 (yīn wèi xià yu)", "所以取消 (suǒ yi qǔ xiāo)"],
          "translation": "Because it rained, so we cancelled the activity",
          "languageCode": "zh",
          "romanization": "yīn wèi xià yu le, suǒ yi wǒ men qǔ xiāo le zhè cì huó dòng",
          "correctAnswer": "因为下雨了，所以我们取消了这次活动 (yīn wèi xià yu le, suǒ yi wǒ men qǔ xiāo le zhè cì huó dòng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "虽然这个计划很复杂，但是我们能完成它",
          "prompt": "How do you use 'although...but': 'Although the plan is complex, but we can complete it'?",
          "options": ["虽然这个计划很复杂，但是我们能完成它 (suī rán zhè ge jì huà hěn fu zá, dàn shì wǒ men néng wán chéng tā)", "计划复杂完成 (jì huà fu zá wán chéng)", "虽然复杂 (suī rán fu zá)", "但是能完成 (dàn shì néng wán chéng)"],
          "translation": "Although the plan is complex, but we can complete it",
          "languageCode": "zh",
          "romanization": "suī rán zhè ge jì huà hěn fu zá, dàn shì wǒ men néng wán chéng tā",
          "correctAnswer": "虽然这个计划很复杂，但是我们能完成它 (suī rán zhè ge jì huà hěn fu zá, dàn shì wǒ men néng wán chéng tā)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个项目不是很大，不过很重要",
          "prompt": "How do you express 'This project is not very large, however it's very important'?",
          "options": ["这个项目不是很大，不过很重要 (zhè ge xiàng mù bu shì hěn dà, bu guò hěn zhòng yào)", "项目不大重要 (xiàng mù bu dà zhòng yào)", "不过重要 (bu guò zhòng yào)", "项目重要 (xiàng mù zhòng yào)"],
          "translation": "This project is not very large, however it's very important",
          "languageCode": "zh",
          "romanization": "zhè ge xiàng mù bu shì hěn dà, bu guò hěn zhòng yào",
          "correctAnswer": "这个项目不是很大，不过很重要 (zhè ge xiàng mù bu shì hěn dà, bu guò hěn zhòng yào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我们既要高效率，而且要保证质量",
          "prompt": "How do you express 'We need both high efficiency and guarantee quality'?",
          "options": ["我们既要高效率，而且要保证质量 (wǒ men jì yào gāo xiào lǜ, ér qiě yào bǎo zhèng zhì liàng)", "高效率质量 (gāo xiào lǜ zhì liàng)", "要保证 (yào bǎo zhèng)", "效率质量 (xiào lǜ zhì liàng)"],
          "translation": "We need both high efficiency and guarantee quality",
          "languageCode": "zh",
          "romanization": "wǒ men jì yào gāo xiào lǜ, ér qiě yào bǎo zhèng zhì liàng",
          "correctAnswer": "我们既要高效率，而且要保证质量 (wǒ men jì yào gāo xiào lǜ, ér qiě yào bǎo zhèng zhì liàng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你可以选择去北京或者上海",
          "prompt": "How do you express 'You can choose to go to Beijing or Shanghai'?",
          "options": ["你可以选择去北京或者上海 (nǐ kě yi xuǎn zé qù běi jīng huò zhě shàng hǎi)", "北京上海 (běi jīng shàng hǎi)", "选择去 (xuǎn zé qù)", "或者选 (huò zhě xuǎn)"],
          "translation": "You can choose to go to Beijing or Shanghai",
          "languageCode": "zh",
          "romanization": "nǐ kě yi xuǎn zé qù běi jīng huò zhě shàng hǎi",
          "correctAnswer": "你可以选择去北京或者上海 (nǐ kě yi xuǎn zé qù běi jīng huò zhě shàng hǎi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "因为",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Because", "Since", "As", "Due to"],
          "translation": "Because",
          "languageCode": "zh",
          "romanization": "yīn wèi",
          "correctAnswer": "Because",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "所以",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Therefore", "So", "Thus", "As a result"],
          "translation": "Therefore",
          "languageCode": "zh",
          "romanization": "suǒ yi",
          "correctAnswer": "Therefore",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "虽然",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Although", "Though", "Even though", "Despite"],
          "translation": "Although",
          "languageCode": "zh",
          "romanization": "suī rán",
          "correctAnswer": "Although",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "但是",
          "prompt": "Listen and select the correct meaning.",
          "options": ["But", "However", "Yet", "Still"],
          "translation": "But",
          "languageCode": "zh",
          "romanization": "dàn shì",
          "correctAnswer": "But",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "而且",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Moreover", "And", "Furthermore", "Besides"],
          "translation": "Moreover",
          "languageCode": "zh",
          "romanization": "ér qiě",
          "correctAnswer": "Moreover",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "或者",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Or", "Either", "Otherwise", "Alternatively"],
          "translation": "Or",
          "languageCode": "zh",
          "romanization": "huò zhě",
          "correctAnswer": "Or",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "因为下雨了，所以我们取消了这次活动",
          "prompt": "Speak this cause-effect statement aloud. What does it mean?",
          "options": ["Because it rained, so we cancelled the activity", "Rain cancelled", "Activity cancelled", "Because rain"],
          "translation": "Because it rained, so we cancelled the activity",
          "languageCode": "zh",
          "romanization": "yīn wèi xià yu le, suǒ yi wǒ men qǔ xiāo le zhè cì huó dòng",
          "correctAnswer": "Because it rained, so we cancelled the activity",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "虽然这个计划很复杂，但是我们能完成它",
          "prompt": "Speak this concession statement aloud. What does it mean?",
          "options": ["Although the plan is complex, but we can complete it", "Complex plan complete", "Although complex", "Can complete"],
          "translation": "Although the plan is complex, but we can complete it",
          "languageCode": "zh",
          "romanization": "suī rán zhè ge jì huà hěn fu zá, dàn shì wǒ men néng wán chéng tā",
          "correctAnswer": "Although the plan is complex, but we can complete it",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个项目不是很大，不过很重要",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This project is not very large, however it's very important", "Project small important", "Not big however important", "Project importance"],
          "translation": "This project is not very large, however it's very important",
          "languageCode": "zh",
          "romanization": "zhè ge xiàng mù bu shì hěn dà, bu guò hěn zhòng yào",
          "correctAnswer": "This project is not very large, however it's very important",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我们既要高效率，而且要保证质量",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["We need both high efficiency and guarantee quality", "Efficiency and quality", "High efficiency guarantee", "Quality important"],
          "translation": "We need both high efficiency and guarantee quality",
          "languageCode": "zh",
          "romanization": "wǒ men jì yào gāo xiào lǜ, ér qiě yào bǎo zhèng zhì liàng",
          "correctAnswer": "We need both high efficiency and guarantee quality",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你可以选择去北京或者上海",
          "prompt": "Speak this alternative statement aloud. What does it mean?",
          "options": ["You can choose to go to Beijing or Shanghai", "Beijing or Shanghai", "Choose cities", "Go Beijing Shanghai"],
          "translation": "You can choose to go to Beijing or Shanghai",
          "languageCode": "zh",
          "romanization": "nǐ kě yi xuǎn zé qù běi jīng huò zhě shàng hǎi",
          "correctAnswer": "You can choose to go to Beijing or Shanghai",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "因为",
          "prompt": "Write the Chinese characters for 'Because'",
          "options": ["因为", "为因", "因", "为"],
          "translation": "Because",
          "languageCode": "zh",
          "romanization": "yīn wèi",
          "correctAnswer": "因为",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "所以",
          "prompt": "Write the Chinese characters for 'Therefore'",
          "options": ["所以", "以所", "所", "以"],
          "translation": "Therefore",
          "languageCode": "zh",
          "romanization": "suǒ yi",
          "correctAnswer": "所以",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "虽然",
          "prompt": "Write the Chinese characters for 'Although'",
          "options": ["虽然", "然虽", "虽", "然"],
          "translation": "Although",
          "languageCode": "zh",
          "romanization": "suī rán",
          "correctAnswer": "虽然",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "但是",
          "prompt": "Write the Chinese characters for 'But'",
          "options": ["但是", "是但", "但", "是"],
          "translation": "But",
          "languageCode": "zh",
          "romanization": "dàn shì",
          "correctAnswer": "但是",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "而且",
          "prompt": "Write the Chinese characters for 'Moreover'",
          "options": ["而且", "且而", "而", "且"],
          "translation": "Moreover",
          "languageCode": "zh",
          "romanization": "ér qiě",
          "correctAnswer": "而且",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: ADVICE & SUGGESTIONS =====
  {
    lessonId: 'zh-stage6-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "建议",
          "prompt": "What does this noun/verb mean?",
          "options": ["Suggestion", "Advice", "Recommendation", "Proposal"],
          "translation": "Suggestion",
          "languageCode": "zh",
          "romanization": "jiàn yi",
          "correctAnswer": "Suggestion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "应该",
          "prompt": "What does this modal verb mean?",
          "options": ["Should", "Ought to", "Must", "Have to"],
          "translation": "Should",
          "languageCode": "zh",
          "romanization": "yīng gāi",
          "correctAnswer": "Should",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "最好",
          "prompt": "What does this adverb/adjective mean?",
          "options": ["Best/Had better", "Good", "Excellent", "Preferable"],
          "translation": "Best/Had better",
          "languageCode": "zh",
          "romanization": "zuì hǎo",
          "correctAnswer": "Best/Had better",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "不应该",
          "prompt": "What does this phrase mean?",
          "options": ["Should not", "Ought not to", "Must not", "Cannot"],
          "translation": "Should not",
          "languageCode": "zh",
          "romanization": "bu yīng gāi",
          "correctAnswer": "Should not",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "可能",
          "prompt": "What does this word mean?",
          "options": ["Maybe/Possible", "Can", "Probably", "Perhaps"],
          "translation": "Maybe/Possible",
          "languageCode": "zh",
          "romanization": "kě néng",
          "correctAnswer": "Maybe/Possible",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "必须",
          "prompt": "What does this modal verb mean?",
          "options": ["Must", "Have to", "Should", "Ought to"],
          "translation": "Must",
          "languageCode": "zh",
          "romanization": "bì xū",
          "correctAnswer": "Must",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "考虑",
          "prompt": "What does this verb mean?",
          "options": ["Consider", "Think about", "Ponder", "Reflect"],
          "translation": "Consider",
          "languageCode": "zh",
          "romanization": "kǎo lǜ",
          "correctAnswer": "Consider",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "决定",
          "prompt": "What does this verb/noun mean?",
          "options": ["Decide", "Decision", "Determine", "Resolve"],
          "translation": "Decide",
          "languageCode": "zh",
          "romanization": "jué dìng",
          "correctAnswer": "Decide",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我的建议是你应该参加这个会议",
          "prompt": "How do you express 'My suggestion is that you should attend this meeting'?",
          "options": ["我的建议是你应该参加这个会议 (wǒ de jiàn yi shì nǐ yīng gāi cān jiā zhè ge huì yi)", "建议参加会议 (jiàn yi cān jiā huì yi)", "你应该参加 (nǐ yīng gāi cān jiā)", "参加这个会议 (cān jiā zhè ge huì yi)"],
          "translation": "My suggestion is that you should attend this meeting",
          "languageCode": "zh",
          "romanization": "wǒ de jiàn yi shì nǐ yīng gāi cān jiā zhè ge huì yi",
          "correctAnswer": "我的建议是你应该参加这个会议 (wǒ de jiàn yi shì nǐ yīng gāi cān jiā zhè ge huì yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你最好今天就提交你的报告",
          "prompt": "How do you express 'You'd better submit your report today'?",
          "options": ["你最好今天就提交你的报告 (nǐ zuì hǎo jīn tiān jiù tí jiāo nǐ de bào gào)", "最好提交报告 (zuì hǎo tí jiāo bào gào)", "今天提交 (jīn tiān tí jiāo)", "报告今天 (bào gào jīn tiān)"],
          "translation": "You'd better submit your report today",
          "languageCode": "zh",
          "romanization": "nǐ zuì hǎo jīn tiān jiù tí jiāo nǐ de bào gào",
          "correctAnswer": "你最好今天就提交你的报告 (nǐ zuì hǎo jīn tiān jiù tí jiāo nǐ de bào gào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你不应该说这样的话",
          "prompt": "How do you express 'You shouldn't say such things'?",
          "options": ["你不应该说这样的话 (nǐ bu yīng gāi shuō zhè yàng de huà)", "不应该说 (bu yīng gāi shuō)", "这样说 (zhè yàng shuō)", "不说话 (bu shuō huà)"],
          "translation": "You shouldn't say such things",
          "languageCode": "zh",
          "romanization": "nǐ bu yīng gāi shuō zhè yàng de huà",
          "correctAnswer": "你不应该说这样的话 (nǐ bu yīng gāi shuō zhè yàng de huà)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你必须在明天死截止前完成这个项目",
          "prompt": "How do you express 'You must complete this project before tomorrow's deadline'?",
          "options": ["你必须在明天的截止前完成这个项目 (nǐ bì xū zài míng tiān de jiē zhǐ qián wán chéng zhè ge xiàng mù)", "必须完成 (bì xū wán chéng)", "明天完成 (míng tiān wán chéng)", "截止完成 (jiē zhǐ wán chéng)"],
          "translation": "You must complete this project before tomorrow's deadline",
          "languageCode": "zh",
          "romanization": "nǐ bì xū zài míng tiān de jiē zhǐ qián wán chéng zhè ge xiàng mù",
          "correctAnswer": "你必须在明天的截止前完成这个项目 (nǐ bì xū zài míng tiān de jiē zhǐ qián wán chéng zhè ge xiàng mù)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "在做决定之前，你应该多考虑一下",
          "prompt": "How do you express 'Before making a decision, you should think more carefully'?",
          "options": ["在做决定之前，你应该多考虑一下 (zài zuò jué dìng zhī qián, nǐ yīng gāi duō kǎo lǜ yi xià)", "做决定考虑 (zuò jué dìng kǎo lǜ)", "应该考虑 (yīng gāi kǎo lǜ)", "决定前考虑 (jué dìng qián kǎo lǜ)"],
          "translation": "Before making a decision, you should think more carefully",
          "languageCode": "zh",
          "romanization": "zài zuò jué dìng zhī qián, nǐ yīng gāi duō kǎo lǜ yi xià",
          "correctAnswer": "在做决定之前，你应该多考虑一下 (zài zuò jué dìng zhī qián, nǐ yīng gāi duō kǎo lǜ yi xià)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "建议",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Suggestion", "Advice", "Recommendation", "Proposal"],
          "translation": "Suggestion",
          "languageCode": "zh",
          "romanization": "jiàn yi",
          "correctAnswer": "Suggestion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "应该",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Should", "Ought to", "Must", "Have to"],
          "translation": "Should",
          "languageCode": "zh",
          "romanization": "yīng gāi",
          "correctAnswer": "Should",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "最好",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Best/Had better", "Good", "Excellent", "Preferable"],
          "translation": "Best/Had better",
          "languageCode": "zh",
          "romanization": "zuì hǎo",
          "correctAnswer": "Best/Had better",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "必须",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Must", "Have to", "Should", "Ought to"],
          "translation": "Must",
          "languageCode": "zh",
          "romanization": "bì xū",
          "correctAnswer": "Must",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "考虑",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Consider", "Think about", "Ponder", "Reflect"],
          "translation": "Consider",
          "languageCode": "zh",
          "romanization": "kǎo lǜ",
          "correctAnswer": "Consider",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "决定",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Decide", "Decision", "Determine", "Resolve"],
          "translation": "Decide",
          "languageCode": "zh",
          "romanization": "jué dìng",
          "correctAnswer": "Decide",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我的建议是你应该参加这个会议",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["My suggestion is that you should attend this meeting", "Should attend meeting", "My advice", "Attend meeting"],
          "translation": "My suggestion is that you should attend this meeting",
          "languageCode": "zh",
          "romanization": "wǒ de jiàn yi shì nǐ yīng gāi cān jiā zhè ge huì yi",
          "correctAnswer": "My suggestion is that you should attend this meeting",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你最好今天就提交你的报告",
          "prompt": "Speak this advice aloud. What does it mean?",
          "options": ["You'd better submit your report today", "Submit today", "Report today", "Better submit"],
          "translation": "You'd better submit your report today",
          "languageCode": "zh",
          "romanization": "nǐ zuì hǎo jīn tiān jiù tí jiāo nǐ de bào gào",
          "correctAnswer": "You'd better submit your report today",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你不应该说这样的话",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["You shouldn't say such things", "Don't say", "Shouldn't say", "No such words"],
          "translation": "You shouldn't say such things",
          "languageCode": "zh",
          "romanization": "nǐ bu yīng gāi shuō zhè yàng de huà",
          "correctAnswer": "You shouldn't say such things",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你必须在明天的截止前完成这个项目",
          "prompt": "Speak this requirement aloud. What does it mean?",
          "options": ["You must complete this project before tomorrow's deadline", "Must finish", "Project deadline", "Before deadline"],
          "translation": "You must complete this project before tomorrow's deadline",
          "languageCode": "zh",
          "romanization": "nǐ bì xū zài míng tiān de jiē zhǐ qián wán chéng zhè ge xiàng mù",
          "correctAnswer": "You must complete this project before tomorrow's deadline",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "在做决定之前，你应该多考虑一下",
          "prompt": "Speak this advice aloud. What does it mean?",
          "options": ["Before making a decision, you should think more carefully", "Think before deciding", "Consider decision", "Think more"],
          "translation": "Before making a decision, you should think more carefully",
          "languageCode": "zh",
          "romanization": "zài zuò jué dìng zhī qián, nǐ yīng gāi duō kǎo lǜ yi xià",
          "correctAnswer": "Before making a decision, you should think more carefully",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage6-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "建议",
          "prompt": "Write the Chinese characters for 'Suggestion'",
          "options": ["建议", "议建", "建", "议"],
          "translation": "Suggestion",
          "languageCode": "zh",
          "romanization": "jiàn yi",
          "correctAnswer": "建议",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "应该",
          "prompt": "Write the Chinese characters for 'Should'",
          "options": ["应该", "该应", "应", "该"],
          "translation": "Should",
          "languageCode": "zh",
          "romanization": "yīng gāi",
          "correctAnswer": "应该",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "最好",
          "prompt": "Write the Chinese characters for 'Best/Had better'",
          "options": ["最好", "好最", "最", "好"],
          "translation": "Best/Had better",
          "languageCode": "zh",
          "romanization": "zuì hǎo",
          "correctAnswer": "最好",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "必须",
          "prompt": "Write the Chinese characters for 'Must'",
          "options": ["必须", "须必", "必", "须"],
          "translation": "Must",
          "languageCode": "zh",
          "romanization": "bì xū",
          "correctAnswer": "必须",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "决定",
          "prompt": "Write the Chinese characters for 'Decide'",
          "options": ["决定", "定决", "决", "定"],
          "translation": "Decide",
          "languageCode": "zh",
          "romanization": "jué dìng",
          "correctAnswer": "决定",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 6 (B1 - Conversationalist) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Opinions, Emotions, Work, Connectors, Advice)\n');

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
