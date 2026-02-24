import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 9: C1 - Advanced
const lessonUpdates = [
  // ===== CHAPTER 1: LITERARY LANGUAGE & EXPRESSIONS =====
  {
    lessonId: 'zh-stage9-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "隐喻",
          "prompt": "What does this word mean?",
          "options": ["Metaphor", "Allegory", "Symbolism", "Imagery"],
          "translation": "Metaphor",
          "languageCode": "zh",
          "romanization": "yin yu",
          "correctAnswer": "Metaphor",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "拟人",
          "prompt": "What does this word mean?",
          "options": ["Personification", "Anthropomorphism", "Animation", "Embodiment"],
          "translation": "Personification",
          "languageCode": "zh",
          "romanization": "ni ren",
          "correctAnswer": "Personification",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "意境",
          "prompt": "What does this word mean?",
          "options": ["Artistic conception", "Aesthetic mood", "Poetic atmosphere", "Realm"],
          "translation": "Artistic conception",
          "languageCode": "zh",
          "romanization": "yi jing",
          "correctAnswer": "Artistic conception",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "意蕴",
          "prompt": "What does this word mean?",
          "options": ["Profound meaning", "Implied sense", "Deep meaning", "Significance"],
          "translation": "Profound meaning",
          "languageCode": "zh",
          "romanization": "yi yun",
          "correctAnswer": "Profound meaning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "修辞",
          "prompt": "What does this word mean?",
          "options": ["Rhetoric", "Oratory", "Eloquence", "Figure of speech"],
          "translation": "Rhetoric",
          "languageCode": "zh",
          "romanization": "xiu ci",
          "correctAnswer": "Rhetoric",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "排比",
          "prompt": "What does this word mean?",
          "options": ["Parallelism", "Anaphora", "Parallel structure", "Repetition"],
          "translation": "Parallelism",
          "languageCode": "zh",
          "romanization": "pai bi",
          "correctAnswer": "Parallelism",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "暗示",
          "prompt": "What does this word mean?",
          "options": ["Hint", "Insinuation", "Suggestion", "Implication"],
          "translation": "Hint",
          "languageCode": "zh",
          "romanization": "an shi",
          "correctAnswer": "Hint",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "文采",
          "prompt": "What does this word mean?",
          "options": ["Literary grace", "Elegant writing", "Stylistic polish", "Beauty of language"],
          "translation": "Literary grace",
          "languageCode": "zh",
          "romanization": "wen cai",
          "correctAnswer": "Literary grace",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这部作品中的隐喻和象征手法相结合，创造出了独特而深刻的意境",
          "prompt": "How do you analyze literary techniques: 'The combination of metaphor and symbolism in this work creates a unique and profound artistic conception'?",
          "options": ["这部作品中的隐喻和象征手法相结合，创造出了独特而深刻的意境 (zhè bu zuo pin zhong de yin yu he xiang zheng shou fa xiāng jie he, chuang zao chu le du te er shen ke de yi jing)", "隐喻象征 (yin yu xiang zheng)", "创造意境 (chuang zao yi jing)", "手法结合 (shou fa jie he)"],
          "translation": "The combination of metaphor and symbolism in this work creates a unique and profound artistic conception",
          "languageCode": "zh",
          "romanization": "zhè bu zuo pin zhong de yin yu he xiang zheng shou fa xiāng jie he, chuang zao chu le du te er shen ke de yi jing",
          "correctAnswer": "这部作品中的隐喻和象征手法相结合，创造出了独特而深刻的意境 (zhè bu zuo pin zhong de yin yu he xiang zheng shou fa xiāng jie he, chuang zao chu le du te er shen ke de yi jing)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "通过拟人的手法，作者将自然界的现象赋予了人性特征和情感",
          "prompt": "How do you describe personification: 'Through personification, the author endows natural phenomena with human characteristics and emotions'?",
          "options": ["通过拟人的手法，作者将自然界的现象赋予了人性特征和情感 (tong guo ni ren de shou fa, zuo zhe jiang zi ran jie de xian xiang fu yu le ren xing te zheng he qing gan)", "拟人手法 (ni ren shou fa)", "人性特征 (ren xing te zheng)", "赋予情感 (fu yu qing gan)"],
          "translation": "Through personification, the author endows natural phenomena with human characteristics and emotions",
          "languageCode": "zh",
          "romanization": "tong guo ni ren de shou fa, zuo zhe jiang zi ran jie de xian xiang fu yu le ren xing te zheng he qing gan",
          "correctAnswer": "通过拟人的手法，作者将自然界的现象赋予了人性特征和情感 (tong guo ni ren de shou fa, zuo zhe jiang zi ran jie de xian xiang fu yu le ren xing te zheng he qing gan)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这句话中的酸言酸语暗示了说话者对某事的不满和讽刺",
          "prompt": "How do you analyze sarcasm: 'The sarcastc tone in this sentence hints at the speaker's dissatisfaction and irony toward something'?",
          "options": ["这句话中的酸言酸语暗示了说话者对某事的不满和讽刺 (zhè ju hua zhong de suan yan suan yu an shi le shuo hua zhe dui mou shi de bu man he feng ci)", "酸言酸语 (suan yan suan yu)", "暗示不满 (an shi bu man)", "讽刺表达 (feng ci biao da)"],
          "translation": "The sarcastic tone in this sentence hints at the speaker's dissatisfaction and irony toward something",
          "languageCode": "zh",
          "romanization": "zhè ju hua zhong de suan yan suan yu an shi le shuo hua zhe dui mou shi de bu man he feng ci",
          "correctAnswer": "这句话中的酸言酸语暗示了说话者对某事的不满和讽刺 (zhè ju hua zhong de suan yan suan yu an shi le shuo hua zhe dui mou shi de bu man he feng ci)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "采用排比的修辞手法，作者有力地强调了重复出现的主题",
          "prompt": "How do you use parallelism rhetorically: 'Using parallelism as a rhetorical device, the author powerfully emphasizes the recurring theme'?",
          "options": ["采用排比的修辞手法，作者有力地强调了重复出现的主题 (cai yong pai bi de xiu ci shou fa, zuo zhe you li de qiang diao le zhong fu chu xian de zhu ti)", "排比修辞 (pai bi xiu ci)", "强调主题 (qiang diao zhu ti)", "重复出现 (zhong fu chu xian)"],
          "translation": "Using parallelism as a rhetorical device, the author powerfully emphasizes the recurring theme",
          "languageCode": "zh",
          "romanization": "cai yong pai bi de xiu ci shou fa, zuo zhe you li de qiang diao le zhong fu chu xian de zhu ti",
          "correctAnswer": "采用排比的修辞手法，作者有力地强调了重复出现的主题 (cai yong pai bi de xiu ci shou fa, zuo zhe you li de qiang diao le zhong fu chu xian de zhu ti)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这段文字充满了文采，通过精妙的词汇选择和结构安排展现了意蕴深远的思想",
          "prompt": "How do you assess literary quality: 'This passage is rich in literary grace, revealing profound thoughts through exquisite word choice and structural arrangement'?",
          "options": ["这段文字充满了文采，通过精妙的词汇选择和结构安排展现了意蕴深远的思想 (zhè duan wen zi chong man le wen cai, tong guo jing miao de ci hui xuan ze he jie gou an pai zhan xian le yi yun shen yuan de si xiang)", "文采词汇 (wen cai ci hui)", "精妙安排 (jing miao an pai)", "意蕴思想 (yi yun si xiang)"],
          "translation": "This passage is rich in literary grace, revealing profound thoughts through exquisite word choice and structural arrangement",
          "languageCode": "zh",
          "romanization": "zhè duan wen zi chong man le wen cai, tong guo jing miao de ci hui xuan ze he jie gou an pai zhan xian le yi yun shen yuan de si xiang",
          "correctAnswer": "这段文字充满了文采，通过精妙的词汇选择和结构安排展现了意蕴深远的思想 (zhè duan wen zi chong man le wen cai, tong guo jing miao de ci hui xuan ze he jie gou an pai zhan xian le yi yun shen yuan de si xiang)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "隐喻",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Metaphor", "Allegory", "Symbolism", "Imagery"],
          "translation": "Metaphor",
          "languageCode": "zh",
          "romanization": "yin yu",
          "correctAnswer": "Metaphor",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "拟人",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Personification", "Anthropomorphism", "Animation", "Embodiment"],
          "translation": "Personification",
          "languageCode": "zh",
          "romanization": "ni ren",
          "correctAnswer": "Personification",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "意境",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Artistic conception", "Aesthetic mood", "Poetic atmosphere", "Realm"],
          "translation": "Artistic conception",
          "languageCode": "zh",
          "romanization": "yi jing",
          "correctAnswer": "Artistic conception",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "修辞",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Rhetoric", "Oratory", "Eloquence", "Figure of speech"],
          "translation": "Rhetoric",
          "languageCode": "zh",
          "romanization": "xiu ci",
          "correctAnswer": "Rhetoric",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "排比",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Parallelism", "Anaphora", "Parallel structure", "Repetition"],
          "translation": "Parallelism",
          "languageCode": "zh",
          "romanization": "pai bi",
          "correctAnswer": "Parallelism",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "文采",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Literary grace", "Elegant writing", "Stylistic polish", "Beauty of language"],
          "translation": "Literary grace",
          "languageCode": "zh",
          "romanization": "wen cai",
          "correctAnswer": "Literary grace",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这部作品中的隐喻和象征手法相结合，创造出了独特而深刻的意境",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Metaphor and symbolism combine to create profound artistic conception", "Literary techniques", "Unique atmosphere", "Symbolic meaning"],
          "translation": "Metaphor and symbolism combine to create profound artistic conception",
          "languageCode": "zh",
          "romanization": "zhè bu zuo pin zhong de yin yu he xiang zheng shou fa xiāng jie he, chuang zao chu le du te er shen ke de yi jing",
          "correctAnswer": "Metaphor and symbolism combine to create profound artistic conception",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "通过拟人的手法，作者将自然界的现象赋予了人性特征和情感",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Through personification, nature is given human qualities and emotion", "Personification technique", "Human characteristics", "Natural imagery"],
          "translation": "Through personification, nature is given human qualities and emotion",
          "languageCode": "zh",
          "romanization": "tong guo ni ren de shou fa, zuo zhe jiang zi ran jie de xian xiang fu yu le ren xing te zheng he qing gan",
          "correctAnswer": "Through personification, nature is given human qualities and emotion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这句话中的酸言酸语暗示了说话者对某事的不满和讽刺",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The sarcasm hints at the speaker's dissatisfaction and irony", "Sarcastic tone", "Hidden meaning", "Critical attitude"],
          "translation": "The sarcasm hints at the speaker's dissatisfaction and irony",
          "languageCode": "zh",
          "romanization": "zhè ju hua zhong de suan yan suan yu an shi le shuo hua zhe dui mou shi de bu man he feng ci",
          "correctAnswer": "The sarcasm hints at the speaker's dissatisfaction and irony",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "采用排比的修辞手法，作者有力地强调了重复出现的主题",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Parallelism powerfully emphasizes the recurring theme", "Rhetorical device", "Strong emphasis", "Structural technique"],
          "translation": "Parallelism powerfully emphasizes the recurring theme",
          "languageCode": "zh",
          "romanization": "cai yong pai bi de xiu ci shou fa, zuo zhe you li de qiang diao le zhong fu chu xian de zhu ti",
          "correctAnswer": "Parallelism powerfully emphasizes the recurring theme",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这段文字充满了文采，通过精妙的词汇选择和结构安排展现了意蕴深远的思想",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This passage shows literary grace with exquisite style and profound thoughts", "Literary quality", "Elegant writing", "Deep meaning"],
          "translation": "This passage shows literary grace with exquisite style and profound thoughts",
          "languageCode": "zh",
          "romanization": "zhè duan wen zi chong man le wen cai, tong guo jing miao de ci hui xuan ze he jie gou an pai zhan xian le yi yun shen yuan de si xiang",
          "correctAnswer": "This passage shows literary grace with exquisite style and profound thoughts",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "隐喻",
          "prompt": "Write the Chinese characters for 'Metaphor'",
          "options": ["隐喻", "喻隐", "隐", "喻"],
          "translation": "Metaphor",
          "languageCode": "zh",
          "romanization": "yin yu",
          "correctAnswer": "隐喻",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "拟人",
          "prompt": "Write the Chinese characters for 'Personification'",
          "options": ["拟人", "人拟", "拟", "人"],
          "translation": "Personification",
          "languageCode": "zh",
          "romanization": "ni ren",
          "correctAnswer": "拟人",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "意境",
          "prompt": "Write the Chinese characters for 'Artistic conception'",
          "options": ["意境", "境意", "意", "境"],
          "translation": "Artistic conception",
          "languageCode": "zh",
          "romanization": "yi jing",
          "correctAnswer": "意境",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "修辞",
          "prompt": "Write the Chinese characters for 'Rhetoric'",
          "options": ["修辞", "辞修", "修", "辞"],
          "translation": "Rhetoric",
          "languageCode": "zh",
          "romanization": "xiu ci",
          "correctAnswer": "修辞",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "文采",
          "prompt": "Write the Chinese characters for 'Literary grace'",
          "options": ["文采", "采文", "文", "采"],
          "translation": "Literary grace",
          "languageCode": "zh",
          "romanization": "wen cai",
          "correctAnswer": "文采",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: SLANG, COLLOQUIALISMS & HUMOR =====
  {
    lessonId: 'zh-stage9-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "神坤",
          "prompt": "What does this slang term mean?",
          "options": ["Cool/awesome (internet slang)", "Skilled", "Powerful", "Extraordinary"],
          "translation": "Cool/awesome (internet slang)",
          "languageCode": "zh",
          "romanization": "shen kun",
          "correctAnswer": "Cool/awesome (internet slang)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "绝了",
          "prompt": "What does this colloquialism mean?",
          "options": ["Amazing", "Incredible", "Unbelievable", "Ridiculous"],
          "translation": "Amazing",
          "languageCode": "zh",
          "romanization": "jue le",
          "correctAnswer": "Amazing",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "有点意思",
          "prompt": "What does this phrase mean?",
          "options": ["Interesting/clever (subtle/ironic comment)", "Has meaning", "Somewhat meaningful", "Kind of interesting"],
          "translation": "Interesting/clever (subtle/ironic comment)",
          "languageCode": "zh",
          "romanization": "you dian yi si",
          "correctAnswer": "Interesting/clever (subtle/ironic comment)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "逆天",
          "prompt": "What does this internet slang term mean?",
          "options": ["Defying heaven/incredibly good", "opposing fate", "rebellious", "impossible"],
          "translation": "Defying heaven/incredibly good",
          "languageCode": "zh",
          "romanization": "ni tian",
          "correctAnswer": "Defying heaven/incredibly good",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "不明觉厉",
          "prompt": "What does this internet slang mean?",
          "options": ["Don't understand but impressed (ironic)", "Confusing but impressive", "Not clear but impressive", "Unclear meaning"],
          "translation": "Don't understand but impressed (ironic)",
          "languageCode": "zh",
          "romanization": "bu ming jue li",
          "correctAnswer": "Don't understand but impressed (ironic)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "段子",
          "prompt": "What does this word mean?",
          "options": ["Joke/funny story", "Anecdote", "Tale", "Comic sketch"],
          "translation": "Joke/funny story",
          "languageCode": "zh",
          "romanization": "duan zi",
          "correctAnswer": "Joke/funny story",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "幽默",
          "prompt": "What does this word mean?",
          "options": ["Humor", "Wit", "Humorous", "Comic"],
          "translation": "Humor",
          "languageCode": "zh",
          "romanization": "you mo",
          "correctAnswer": "Humor",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "言外之意",
          "prompt": "What does this phrase mean?",
          "options": ["Implication/what's not said", "Hidden meaning", "Subtext", "Unspoken message"],
          "translation": "Implication/what's not said",
          "languageCode": "zh",
          "romanization": "yan wai zhi yi",
          "correctAnswer": "Implication/what's not said",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这个段子用了黑色幽默的手法，既逗人发笑又令人深思",
          "prompt": "How do you describe dark humor: 'This joke uses dark humor to both entertain and provoke thought'?",
          "options": ["这个段子用了黑色幽默的手法，既逗人发笑又令人深思 (zhè ge duan zi yong le hei se you mo de shou fa, ji dou ren fa xiao you ling ren shen si)", "黑色幽默 (hei se you mo)", "逗人发笑 (dou ren fa xiao)", "令人深思 (ling ren shen si)"],
          "translation": "This joke uses dark humor to both entertain and provoke thought",
          "languageCode": "zh",
          "romanization": "zhè ge duan zi yong le hei se you mo de shou fa, ji dou ren fa xiao you ling ren shen si",
          "correctAnswer": "这个段子用了黑色幽默的手法，既逗人发笑又令人深思 (zhè ge duan zi yong le hei se you mo de shou fa, ji dou ren fa xiao you ling ren shen si)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他言外之意是在讽刺那些过度依赖技术的人",
          "prompt": "How do you explain implication: 'His implication is to satirize those who are overly reliant on technology'?",
          "options": ["他言外之意是在讽刺那些过度依赖技术的人 (ta yan wai zhi yi shi zai feng ci na xiē guo du yi lai ji shu de ren)", "言外之意 (yan wai zhi yi)", "讽刺人群 (feng ci ren qun)", "依赖技术 (yi lai ji shu)"],
          "translation": "His implication is to satirize those who are overly reliant on technology",
          "languageCode": "zh",
          "romanization": "ta yan wai zhi yi shi zai feng ci na xiē guo du yi lai ji shu de ren",
          "correctAnswer": "他言外之意是在讽刺那些过度依赖技术的人 (ta yan wai zhi yi shi zai feng ci na xiē guo du yi lai ji shu de ren)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "别看他说得不明觉厉，其实他对这个领域的理解非常深入",
          "prompt": "How do you use internet slang: 'Although what he says seems incomprehensible yet impressive, his understanding of this field is actually very deep'?",
          "options": ["别看他说得不明觉厉，其实他对这个领域的理解非常深入 (bie kan ta shuo de bu ming jue li, qi shi ta dui zhè ge ling yu de li jie fei chang shen ru)", "不明觉厉 (bu ming jue li)", "领域理解 (ling yu li jie)", "深入了解 (shen ru le jie)"],
          "translation": "Although what he says seems incomprehensible yet impressive, his understanding of this field is actually very deep",
          "languageCode": "zh",
          "romanization": "bie kan ta shuo de bu ming jue li, qi shi ta dui zhè ge ling yu de li jie fei chang shen ru",
          "correctAnswer": "别看他说得不明觉厉，其实他对这个领域的理解非常深入 (bie kan ta shuo de bu ming jue li, qi shi ta dui zhè ge ling yu de li jie fei chang shen ru)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个解决方案简直逆天，完全出乎我们的预料",
          "prompt": "How do you use internet slang admiringly: 'This solution is incredibly good, completely beyond our expectations'?",
          "options": ["这个解决方案简直逆天，完全出乎我们的预料 (zhè ge jie jue fang an jian zhi ni tian, wan quan chu hu wo men de yu liao)", "逆天方案 (ni tian fang an)", "出乎预料 (chu hu yu liao)", "完全超出 (wan quan chao chu)"],
          "translation": "This solution is incredibly good, completely beyond our expectations",
          "languageCode": "zh",
          "romanization": "zhè ge jie jue fang an jian zhi ni tian, wan quan chu hu wo men de yu liao",
          "correctAnswer": "这个解决方案简直逆天，完全出乎我们的预料 (zhè ge jie jue fang an jian zhi ni tian, wan quan chu hu wo men de yu liao)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他的表演可真有点意思，既幽默又发人深省",
          "prompt": "How do you use colloquial appreciation: 'His performance is quite clever, both humorous and thought-provoking'?",
          "options": ["他的表演可真有点意思，既幽默又发人深省 (ta de biao yan ke zhen you dian yi si, ji you mo you fa ren shen sheng)", "有点意思 (you dian yi si)", "幽默深省 (you mo shen sheng)", "表演绝了 (biao yan jue le)"],
          "translation": "His performance is quite clever, both humorous and thought-provoking",
          "languageCode": "zh",
          "romanization": "ta de biao yan ke zhen you dian yi si, ji you mo you fa ren shen sheng",
          "correctAnswer": "他的表演可真有点意思，既幽默又发人深省 (ta de biao yan ke zhen you dian yi si, ji you mo you fa ren shen sheng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "绝了",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Amazing", "Incredible", "Unbelievable", "Ridiculous"],
          "translation": "Amazing",
          "languageCode": "zh",
          "romanization": "jue le",
          "correctAnswer": "Amazing",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "逆天",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Defying heaven/incredibly good", "opposing fate", "rebellious", "impossible"],
          "translation": "Defying heaven/incredibly good",
          "languageCode": "zh",
          "romanization": "ni tian",
          "correctAnswer": "Defying heaven/incredibly good",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "有点意思",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Interesting/clever (subtle/ironic comment)", "Has meaning", "Somewhat meaningful", "Kind of interesting"],
          "translation": "Interesting/clever (subtle/ironic comment)",
          "languageCode": "zh",
          "romanization": "you dian yi si",
          "correctAnswer": "Interesting/clever (subtle/ironic comment)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "段子",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Joke/funny story", "Anecdote", "Tale", "Comic sketch"],
          "translation": "Joke/funny story",
          "languageCode": "zh",
          "romanization": "duan zi",
          "correctAnswer": "Joke/funny story",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "幽默",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Humor", "Wit", "Humorous", "Comic"],
          "translation": "Humor",
          "languageCode": "zh",
          "romanization": "you mo",
          "correctAnswer": "Humor",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "言外之意",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Implication/what's not said", "Hidden meaning", "Subtext", "Unspoken message"],
          "translation": "Implication/what's not said",
          "languageCode": "zh",
          "romanization": "yan wai zhi yi",
          "correctAnswer": "Implication/what's not said",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这个段子用了黑色幽默的手法，既逗人发笑又令人深思",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This joke uses dark humor for both laughs and reflection", "Dark humor joke", "Funny and thoughtful", "Comic effect"],
          "translation": "This joke uses dark humor for both laughs and reflection",
          "languageCode": "zh",
          "romanization": "zhè ge duan zi yong le hei se you mo de shou fa, ji dou ren fa xiao you ling ren shen si",
          "correctAnswer": "This joke uses dark humor for both laughs and reflection",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他言外之意是在讽刺那些过度依赖技术的人",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["His implication satirizes overly tech-dependent people", "Hidden criticism", "Implied meaning", "Sarcastic comment"],
          "translation": "His implication satirizes overly tech-dependent people",
          "languageCode": "zh",
          "romanization": "ta yan wai zhi yi shi zai feng ci na xiē guo du yi lai ji shu de ren",
          "correctAnswer": "His implication satirizes overly tech-dependent people",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "别看他说得不明觉厉，其实他对这个领域的理解非常深入",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Though seemingly confusing, his field understanding is actually deep", "Incomprehensible but impressive", "Deep knowledge", "Subtle expertise"],
          "translation": "Though seemingly confusing, his field understanding is actually deep",
          "languageCode": "zh",
          "romanization": "bie kan ta shuo de bu ming jue li, qi shi ta dui zhè ge ling yu de li jie fei chang shen ru",
          "correctAnswer": "Though seemingly confusing, his field understanding is actually deep",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个解决方案简直逆天，完全出乎我们的预料",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This solution is incredibly good, exceeding expectations", "Amazing solution", "Unexpected result", "Incredible approach"],
          "translation": "This solution is incredibly good, exceeding expectations",
          "languageCode": "zh",
          "romanization": "zhè ge jie jue fang an jian zhi ni tian, wan quan chu hu wo men de yu liao",
          "correctAnswer": "This solution is incredibly good, exceeding expectations",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他的表演可真有点意思，既幽默又发人深省",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["His performance is clever, both funny and thought-provoking", "Amusing performance", "Witty show", "Meaningful humor"],
          "translation": "His performance is clever, both funny and thought-provoking",
          "languageCode": "zh",
          "romanization": "ta de biao yan ke zhen you dian yi si, ji you mo you fa ren shen sheng",
          "correctAnswer": "His performance is clever, both funny and thought-provoking",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "幽默",
          "prompt": "Write the Chinese characters for 'Humor'",
          "options": ["幽默", "默幽", "幽", "默"],
          "translation": "Humor",
          "languageCode": "zh",
          "romanization": "you mo",
          "correctAnswer": "幽默",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "段子",
          "prompt": "Write the Chinese characters for 'Joke/funny story'",
          "options": ["段子", "子段", "段", "子"],
          "translation": "Joke/funny story",
          "languageCode": "zh",
          "romanization": "duan zi",
          "correctAnswer": "段子",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "逆天",
          "prompt": "Write the Chinese characters for 'Incredibly good'",
          "options": ["逆天", "天逆", "逆", "天"],
          "translation": "Incredibly good",
          "languageCode": "zh",
          "romanization": "ni tian",
          "correctAnswer": "逆天",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "讽刺",
          "prompt": "Write the Chinese characters for 'Satire/sarcasm'",
          "options": ["讽刺", "刺讽", "讽", "刺"],
          "translation": "Satire/sarcasm",
          "languageCode": "zh",
          "romanization": "feng ci",
          "correctAnswer": "讽刺",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "黑色",
          "prompt": "Write the Chinese characters for 'Black' (as in dark humor)",
          "options": ["黑色", "色黑", "黑", "色"],
          "translation": "Black",
          "languageCode": "zh",
          "romanization": "hei se",
          "correctAnswer": "黑色",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: IDIOMS & PROVERBS =====
  {
    lessonId: 'zh-stage9-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "厚积薄发",
          "prompt": "What does this idiom mean?",
          "options": ["Accumulate widely, emit sparingly (lay groundwork for big results)", "Store much, release little", "Prepare thoroughly", "Build foundation"],
          "translation": "Accumulate widely, emit sparingly",
          "languageCode": "zh",
          "romanization": "hou ji bo fa",
          "correctAnswer": "Accumulate widely, emit sparingly (lay groundwork for big results)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "深思熟虑",
          "prompt": "What does this idiom mean?",
          "options": ["Think deeply and carefully", "Consider thoroughly", "Profound consideration", "Careful planning"],
          "translation": "Think deeply and carefully",
          "languageCode": "zh",
          "romanization": "shen si shu lv",
          "correctAnswer": "Think deeply and carefully",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "举一反三",
          "prompt": "What does this idiom mean?",
          "options": ["Infer three things by seeing one (draw broad insights)", "Extend knowledge", "Understand widely", "Comprehend fully"],
          "translation": "Infer three things by seeing one",
          "languageCode": "zh",
          "romanization": "ju yi fan san",
          "correctAnswer": "Infer three things by seeing one (draw broad insights)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "南辕北辙",
          "prompt": "What does this idiom mean?",
          "options": ["Going south while aiming north (heading in wrong direction)", "Contradictory efforts", "Working against oneself", "Misguided action"],
          "translation": "Going south while aiming north",
          "languageCode": "zh",
          "romanization": "nan yuan bei zhe",
          "correctAnswer": "Going south while aiming north (heading in wrong direction)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "循循善诱",
          "prompt": "What does this idiom mean?",
          "options": ["Guide patiently and methodically", "Gentle guidance", "Patient teaching", "Kind persuasion"],
          "translation": "Guide patiently and methodically",
          "languageCode": "zh",
          "romanization": "xun xun shan you",
          "correctAnswer": "Guide patiently and methodically",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "见微知著",
          "prompt": "What does this idiom mean?",
          "options": ["Perceive the great from the small (see details to understand whole)", "Keen observation", "Foresight", "Perception"],
          "translation": "Perceive the great from the small",
          "languageCode": "zh",
          "romanization": "jian wei zhi zhu",
          "correctAnswer": "Perceive the great from the small (see details to understand whole)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "豁然开朗",
          "prompt": "What does this idiom mean?",
          "options": ["Suddenly become clear and enlightened", "Sudden clarity", "Breakthrough understanding", "Instant realization"],
          "translation": "Suddenly become clear and enlightened",
          "languageCode": "zh",
          "romanization": "huo ran kai lang",
          "correctAnswer": "Suddenly become clear and enlightened",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "因材施教",
          "prompt": "What does this idiom mean?",
          "options": ["Teach according to student's ability", "Personalized instruction", "Adapt teaching method", "Match instruction to learner"],
          "translation": "Teach according to student's ability",
          "languageCode": "zh",
          "romanization": "yin cai shi jiao",
          "correctAnswer": "Teach according to student's ability",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "她厚积薄发的创作理念体现了对卓越的执着追求",
          "prompt": "How do you apply the idiom 厚积薄发: 'Her belief in long preparation and impactful results reflects dedication to excellence'?",
          "options": ["她厚积薄发的创作理念体现了对卓越的执着追求 (ta hou ji bo fa de chuang zuo li nian ti xian le dui zhuo yue de zhi zao zhui qiu)", "厚积薄发创作 (hou ji bo fa chuang zuo)", "卓越追求 (zhuo yue zhui qiu)", "理念体现 (li nian ti xian)"],
          "translation": "Her belief in long preparation and impactful results reflects dedication to excellence",
          "languageCode": "zh",
          "romanization": "ta hou ji bo fa de chuang zuo li nian ti xian le dui zhuo yue de zhi zao zhui qiu",
          "correctAnswer": "她厚积薄发的创作理念体现了对卓越的执着追求 (ta hou ji bo fa de chuang zuo li nian ti xian le dui zhuo yue de zhi zao zhui qiu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他深思熟虑后做出的决定让所有人都为之信服",
          "prompt": "How do you use 深思熟虑: 'His carefully considered decision convinced everyone'?",
          "options": ["他深思熟虑后做出的决定让所有人都为之信服 (ta shen si shu lv hou zuo chu de jue ding rang suo you ren dou wei zhi xin fu)", "深思熟虑决定 (shen si shu lv jue ding)", "仔细考虑 (zi xi kao lv)", "令人信服 (ling ren xin fu)"],
          "translation": "His carefully considered decision convinced everyone",
          "languageCode": "zh",
          "romanization": "ta shen si shu lv hou zuo chu de jue ding rang suo you ren dou wei zhi xin fu",
          "correctAnswer": "他深思熟虑后做出的决定让所有人都为之信服 (ta shen si shu lv hou zuo chu de jue ding rang suo you ren dou wei zhi xin fu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这位老师总是循循善诱地引导学生去思考问题的本质",
          "prompt": "How do you use 循循善诱: 'This teacher patiently guides students to consider the essence of problems'?",
          "options": ["这位老师总是循循善诱地引导学生去思考问题的本质 (zhè wei lao shi zong shi xun xun shan you de yin dao xue sheng qu si kao wen ti de ben zhi)", "循循善诱引导 (xun xun shan you yin dao)", "学生思考 (xue sheng si kao)", "问题本质 (wen ti ben zhi)"],
          "translation": "This teacher patiently guides students to consider the essence of problems",
          "languageCode": "zh",
          "romanization": "zhè wei lao shi zong shi xun xun shan you de yin dao xue sheng qu si kao wen ti de ben zhi",
          "correctAnswer": "这位老师总是循循善诱地引导学生去思考问题的本质 (zhè wei lao shi zong shi xun xun shan you de yin dao xue sheng qu si kao wen ti de ben zhi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "看到这个小细节，他豁然开朗，终于理解了整个事件的真相",
          "prompt": "How do you use 豁然开朗: 'Seeing this small detail, he suddenly understood and grasped the truth of the whole event'?",
          "options": ["看到这个小细节，他豁然开朗，终于理解了整个事件的真相 (kan dao zhè ge xiao xi jie, ta huo ran kai lang, zhong yu li jie le zheng ge shi jian de zhen xiang)", "豁然开朗理解 (huo ran kai lang li jie)", "细节真相 (xi jie zhen xiang)", "恍然大悟 (huang ran da wu)"],
          "translation": "Seeing this small detail, he suddenly understood and grasped the truth of the whole event",
          "languageCode": "zh",
          "romanization": "kan dao zhè ge xiao xi jie, ta huo ran kai lang, zhong yu li jie le zheng ge shi jian de zhen xiang",
          "correctAnswer": "看到这个小细节，他豁然开朗，终于理解了整个事件的真相 (kan dao zhè ge xiao xi jie, ta huo ran kai lang, zhong yu li jie le zheng ge shi jian de zhen xiang)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "优秀的教育工作者懂得因材施教，能够满足不同学生的学习需求",
          "prompt": "How do you describe 因材施教: 'Excellent educators understand differentiated instruction and meet different students' learning needs'?",
          "options": ["优秀的教育工作者懂得因材施教，能够满足不同学生的学习需求 (you xiu de jiao yu gong zuo zhe dong de yin cai shi jiao, neng gou man zu bu tong xue sheng de xue xi xu qiu)", "因材施教 (yin cai shi jiao)", "学生需求 (xue sheng xu qiu)", "个性化教学 (ge xing hua jiao xue)"],
          "translation": "Excellent educators understand differentiated instruction and meet different students' learning needs",
          "languageCode": "zh",
          "romanization": "you xiu de jiao yu gong zuo zhe dong de yin cai shi jiao, neng gou man zu bu tong xue sheng de xue xi xu qiu",
          "correctAnswer": "优秀的教育工作者懂得因材施教，能够满足不同学生的学习需求 (you xiu de jiao yu gong zuo zhe dong de yin cai shi jiao, neng gou man zu bu tong xue sheng de xue xi xu qiu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "厚积薄发",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Accumulate widely, emit sparingly", "Store much, release little", "Prepare thoroughly", "Build foundation"],
          "translation": "Accumulate widely, emit sparingly",
          "languageCode": "zh",
          "romanization": "hou ji bo fa",
          "correctAnswer": "Accumulate widely, emit sparingly",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "举一反三",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Infer three from one (broad insights)", "Extend knowledge", "Understand widely", "Comprehend fully"],
          "translation": "Infer three from one",
          "languageCode": "zh",
          "romanization": "ju yi fan san",
          "correctAnswer": "Infer three from one (broad insights)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "见微知著",
          "prompt": "Listen and select the correct meaning.",
          "options": ["See small to know large (understand whole from parts)", "Keen observation", "Foresight", "Perception"],
          "translation": "See small to know large",
          "languageCode": "zh",
          "romanization": "jian wei zhi zhu",
          "correctAnswer": "See small to know large (understand whole from parts)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "豁然开朗",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Suddenly enlightened", "Sudden clarity", "Breakthrough", "Instant realization"],
          "translation": "Suddenly enlightened",
          "languageCode": "zh",
          "romanization": "huo ran kai lang",
          "correctAnswer": "Suddenly enlightened",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "深思熟虑",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Think deeply and carefully", "Consider thoroughly", "Profound consideration", "Careful planning"],
          "translation": "Think deeply and carefully",
          "languageCode": "zh",
          "romanization": "shen si shu lv",
          "correctAnswer": "Think deeply and carefully",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "因材施教",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Teach according to ability", "Personalized instruction", "Adapt teaching", "Match to learner"],
          "translation": "Teach according to ability",
          "languageCode": "zh",
          "romanization": "yin cai shi jiao",
          "correctAnswer": "Teach according to ability",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "她厚积薄发的创作理念体现了对卓越的执着追求",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Her philosophy of careful preparation reflects commitment to excellence", "Creative approach", "Pursuit of excellence", "Deliberate method"],
          "translation": "Her philosophy of careful preparation reflects commitment to excellence",
          "languageCode": "zh",
          "romanization": "ta hou ji bo fa de chuang zuo li nian ti xian le dui zhuo yue de zhi zao zhui qiu",
          "correctAnswer": "Her philosophy of careful preparation reflects commitment to excellence",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他深思熟虑后做出的决定让所有人都为之信服",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["His thoughtful decision convinced everyone", "Considered choice", "Careful decision-making", "Persuasive conclusion"],
          "translation": "His thoughtful decision convinced everyone",
          "languageCode": "zh",
          "romanization": "ta shen si shu lv hou zuo chu de jue ding rang suo you ren dou wei zhi xin fu",
          "correctAnswer": "His thoughtful decision convinced everyone",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这位老师总是循循善诱地引导学生去思考问题的本质",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The teacher patiently guides students to think deeply about core issues", "Patient guidance", "Student learning", "Problem-solving"],
          "translation": "The teacher patiently guides students to think deeply about core issues",
          "languageCode": "zh",
          "romanization": "zhè wei lao shi zong shi xun xun shan you de yin dao xue sheng qu si kao wen ti de ben zhi",
          "correctAnswer": "The teacher patiently guides students to think deeply about core issues",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "看到这个小细节，他豁然开朗，终于理解了整个事件的真相",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Seeing this detail, he suddenly understood the whole truth", "Sudden realization", "Understanding breakthrough", "Clarity achieved"],
          "translation": "Seeing this detail, he suddenly understood the whole truth",
          "languageCode": "zh",
          "romanization": "kan dao zhè ge xiao xi jie, ta huo ran kai lang, zhong yu li jie le zheng ge shi jian de zhen xiang",
          "correctAnswer": "Seeing this detail, he suddenly understood the whole truth",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "优秀的教育工作者懂得因材施教，能够满足不同学生的学习需求",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Good educators practice differentiation to meet each student's needs", "Teaching approach", "Student diversity", "Educational excellence"],
          "translation": "Good educators practice differentiation to meet each student's needs",
          "languageCode": "zh",
          "romanization": "you xiu de jiao yu gong zuo zhe dong de yin cai shi jiao, neng gou man zu bu tong xue sheng de xue xi xu qiu",
          "correctAnswer": "Good educators practice differentiation to meet each student's needs",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "厚积薄发",
          "prompt": "Write the Chinese characters for 'Accumulate and achieve'",
          "options": ["厚积薄发", "薄发厚积", "厚积", "薄发"],
          "translation": "Accumulate and achieve",
          "languageCode": "zh",
          "romanization": "hou ji bo fa",
          "correctAnswer": "厚积薄发",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "豁然开朗",
          "prompt": "Write the Chinese characters for 'Suddenly enlightened'",
          "options": ["豁然开朗", "开朗豁然", "豁然", "开朗"],
          "translation": "Suddenly enlightened",
          "languageCode": "zh",
          "romanization": "huo ran kai lang",
          "correctAnswer": "豁然开朗",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "举一反三",
          "prompt": "Write the Chinese characters for 'Infer broadly'",
          "options": ["举一反三", "反三举一", "举一", "反三"],
          "translation": "Infer broadly",
          "languageCode": "zh",
          "romanization": "ju yi fan san",
          "correctAnswer": "举一反三",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "见微知著",
          "prompt": "Write the Chinese characters for 'See small know large'",
          "options": ["见微知著", "知著见微", "见微", "知著"],
          "translation": "See small know large",
          "languageCode": "zh",
          "romanization": "jian wei zhi zhu",
          "correctAnswer": "见微知著",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "因材施教",
          "prompt": "Write the Chinese characters for 'Teach by ability'",
          "options": ["因材施教", "施教因材", "因材", "施教"],
          "translation": "Teach by ability",
          "languageCode": "zh",
          "romanization": "yin cai shi jiao",
          "correctAnswer": "因材施教",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: REGIONAL EXPRESSIONS & DIALECTS =====
  {
    lessonId: 'zh-stage9-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "口音",
          "prompt": "What does this word mean?",
          "options": ["Accent", "Dialect", "Speech patterm", "Intonation"],
          "translation": "Accent",
          "languageCode": "zh",
          "romanization": "kou yin",
          "correctAnswer": "Accent",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "方言",
          "prompt": "What does this word mean?",
          "options": ["Dialect", "Regional language", "Local speech", "Vernacular"],
          "translation": "Dialect",
          "languageCode": "zh",
          "romanization": "fang yan",
          "correctAnswer": "Dialect",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "地方特色",
          "prompt": "What does this phrase mean?",
          "options": ["Regional characteristics", "Local flavor", "Regional features", "Distinctive traits"],
          "translation": "Regional characteristics",
          "languageCode": "zh",
          "romanization": "di fang te se",
          "correctAnswer": "Regional characteristics",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "俚语",
          "prompt": "What does this word mean?",
          "options": ["Colloquial speech", "Slang", "Vernacular", "Common parlance"],
          "translation": "Colloquial speech",
          "languageCode": "zh",
          "romanization": "li yu",
          "correctAnswer": "Colloquial speech",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "文化内涵",
          "prompt": "What does this phrase mean?",
          "options": ["Cultural connotation", "Cultural substance", "Deeper meaning", "Cultural essence"],
          "translation": "Cultural connotation",
          "languageCode": "zh",
          "romanization": "wen hua nei han",
          "correctAnswer": "Cultural connotation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "传承",
          "prompt": "What does this word mean?",
          "options": ["Pass down", "Inherit", "Transmit", "Succession"],
          "translation": "Pass down",
          "languageCode": "zh",
          "romanization": "chuan cheng",
          "correctAnswer": "Pass down",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "代代相传",
          "prompt": "What does this phrase mean?",
          "options": ["Passed down through generations", "Generational transmission", "Hereditary", "Traditional continuity"],
          "translation": "Passed down through generations",
          "languageCode": "zh",
          "romanization": "dai dai xiang chuan",
          "correctAnswer": "Passed down through generations",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "民俗",
          "prompt": "What does this word mean?",
          "options": ["Folk customs", "Folklore", "Popular practice", "Traditional practice"],
          "translation": "Folk customs",
          "languageCode": "zh",
          "romanization": "min su",
          "correctAnswer": "Folk customs",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这个地区的方言保留了丰富的地方特色和文化内涵",
          "prompt": "How do you describe dialects: 'This region's dialect preserves rich regional characteristics and cultural connotation'?",
          "options": ["这个地区的方言保留了丰富的地方特色和文化内涵 (zhè ge di qu de fang yan bao liu le feng fu de di fang te se he wen hua nei han)", "方言特色 (fang yan te se)", "文化内涵 (wen hua nei han)", "地方特征 (di fang te zheng)"],
          "translation": "This region's dialect preserves rich regional characteristics and cultural connotation",
          "languageCode": "zh",
          "romanization": "zhè ge di qu de fang yan bao liu le feng fu de di fang te se he wen hua nei han",
          "correctAnswer": "这个地区的方言保留了丰富的地方特色和文化内涵 (zhè ge di qu de fang yan bao liu le feng fu de di fang te se he wen hua nei han)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这种俚语代代相传，成为了地方民俗的重要组成部分",
          "prompt": "How do you connect dialect with tradition: 'This colloquial expression is passed down through generations and has become an important part of local customs'?",
          "options": ["这种俚语代代相传，成为了地方民俗的重要组成部分 (zhè zhong li yu dai dai xiang chuan, cheng wei le di fang min su de zhong yao zu cheng bu fen)", "俚语传承 (li yu chuan cheng)", "民俗传统 (min su chuan tong)", "地方文化 (di fang wen hua)"],
          "translation": "This colloquial expression is passed down through generations and has become an important part of local customs",
          "languageCode": "zh",
          "romanization": "zhè zhong li yu dai dai xiang chuan, cheng wei le di fang min su de zhong yao zu cheng bu fen",
          "correctAnswer": "这种俚语代代相传，成为了地方民俗的重要组成部分 (zhè zhong li yu dai dai xiang chuan, cheng wei le di fang min su de zhong yao zu cheng bu fen)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "虽然他带着浓重的地方口音，但这正是他家乡文化的生动体现",
          "prompt": "How do you appreciate dialectal features: 'Although he speaks with a strong regional accent, it vividly embodies his hometown's culture'?",
          "options": ["虽然他带着浓重的地方口音，但这正是他家乡文化的生动体现 (sui ran ta dai zhe nong zhong de di fang kou yin, dan zhe zheng shi ta jia xiang wen hua de sheng dong ti xian)", "口音体现 (kou yin ti xian)", "家乡文化 (jia xiang wen hua)", "文化特征 (wen hua te zheng)"],
          "translation": "Although he speaks with a strong regional accent, it vividly embodies his hometown's culture",
          "languageCode": "zh",
          "romanization": "sui ran ta dai zhe nong zhong de di fang kou yin, dan zhe zheng shi ta jia xiang wen hua de sheng dong ti xian",
          "correctAnswer": "虽然他带着浓重的地方口音，但这正是他家乡文化的生动体现 (sui ran ta dai zhe nong zhong de di fang kou yin, dan zhe zheng shi ta jia xiang wen hua de sheng dong ti xian)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "语言学家对各地方言的传承和保护工作给予了高度重视",
          "prompt": "How do you describe linguistic preservation: 'Linguists have placed great emphasis on the preservation and protection of various regional dialects'?",
          "options": ["语言学家对各地方言的传承和保护工作给予了高度重视 (yu yan xue jia dui ge di fang yan de chuan cheng he bao hu gong zuo gei yu le gao du zhong shi)", "方言保护 (fang yan bao hu)", "传承工作 (chuan cheng gong zuo)", "语言研究 (yu yan yan jiu)"],
          "translation": "Linguists have placed great emphasis on the preservation and protection of various regional dialects",
          "languageCode": "zh",
          "romanization": "yu yan xue jia dui ge di fang yan de chuan cheng he bao hu gong zuo gei yu le gao du zhong shi",
          "correctAnswer": "语言学家对各地方言的传承和保护工作给予了高度重视 (yu yan xue jia dui ge di fang yan de chuan cheng he bao hu gong zuo gei yu le gao du zhong shi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "在全球化时代，保留地方方言对于传承民族文化具有重要意义",
          "prompt": "How do you frame cultural preservation: 'In the age of globalization, preserving local dialects is significant for inheriting ethnic culture'?",
          "options": ["在全球化时代，保留地方方言对于传承民族文化具有重要意义 (zai quan qiu hua shi dai, bao liu di fang fang yan dui yu chuan cheng min zu wen hua ju you zhong yao yi yi)", "方言保留 (fang yan bao liu)", "民族文化 (min zu wen hua)", "全球化时代 (quan qiu hua shi dai)"],
          "translation": "In the age of globalization, preserving local dialects is significant for inheriting ethnic culture",
          "languageCode": "zh",
          "romanization": "zai quan qiu hua shi dai, bao liu di fang fang yan dui yu chuan cheng min zu wen hua ju you zhong yao yi yi",
          "correctAnswer": "在全球化时代，保留地方方言对于传承民族文化具有重要意义 (zai quan qiu hua shi dai, bao liu di fang fang yan dui yu chuan cheng min zu wen hua ju you zhong yao yi yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "方言",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Dialect", "Regional language", "Local speech", "Vernacular"],
          "translation": "Dialect",
          "languageCode": "zh",
          "romanization": "fang yan",
          "correctAnswer": "Dialect",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "口音",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Accent", "Dialect", "Speech pattern", "Intonation"],
          "translation": "Accent",
          "languageCode": "zh",
          "romanization": "kou yin",
          "correctAnswer": "Accent",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "俚语",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Colloquial speech", "Slang", "Vernacular", "Common parlance"],
          "translation": "Colloquial speech",
          "languageCode": "zh",
          "romanization": "li yu",
          "correctAnswer": "Colloquial speech",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "传承",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Pass down", "Inherit", "Transmit", "Succession"],
          "translation": "Pass down",
          "languageCode": "zh",
          "romanization": "chuan cheng",
          "correctAnswer": "Pass down",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "民俗",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Folk customs", "Folklore", "Popular practice", "Traditional practice"],
          "translation": "Folk customs",
          "languageCode": "zh",
          "romanization": "min su",
          "correctAnswer": "Folk customs",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "文化内涵",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Cultural connotation", "Cultural substance", "Deeper meaning", "Cultural essence"],
          "translation": "Cultural connotation",
          "languageCode": "zh",
          "romanization": "wen hua nei han",
          "correctAnswer": "Cultural connotation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这个地区的方言保留了丰富的地方特色和文化内涵",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This region's dialect preserves rich cultural character and meaning", "Regional dialect", "Cultural preservation", "Local features"],
          "translation": "This region's dialect preserves rich cultural character and meaning",
          "languageCode": "zh",
          "romanization": "zhè ge di qu de fang yan bao liu le feng fu de di fang te se he wen hua nei han",
          "correctAnswer": "This region's dialect preserves rich cultural character and meaning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这种俚语代代相传，成为了地方民俗的重要组成部分",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This colloquialism passes through generations and forms local custom", "Generational transmission", "Folk tradition", "Cultural heritage"],
          "translation": "This colloquialism passes through generations and forms local custom",
          "languageCode": "zh",
          "romanization": "zhè zhong li yu dai dai xiang chuan, cheng wei le di fang min su de zhong yao zu cheng bu fen",
          "correctAnswer": "This colloquialism passes through generations and forms local custom",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "虽然他带着浓重的地方口音，但这正是他家乡文化的生动体现",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Though he has a strong accent, it vividly reflects his hometown's culture", "Regional accent", "Cultural embodiment", "Hometown identity"],
          "translation": "Though he has a strong accent, it vividly reflects his hometown's culture",
          "languageCode": "zh",
          "romanization": "sui ran ta dai zhe nong zhong de di fang kou yin, dan zhe zheng shi ta jia xiang wen hua de sheng dong ti xian",
          "correctAnswer": "Though he has a strong accent, it vividly reflects his hometown's culture",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "语言学家对各地方言的传承和保护工作给予了高度重视",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Linguists emphasize preserving and protecting regional dialects", "Language research", "Dialect protection", "Academic focus"],
          "translation": "Linguists emphasize preserving and protecting regional dialects",
          "languageCode": "zh",
          "romanization": "yu yan xue jia dui ge di fang yan de chuan cheng he bao hu gong zuo gei yu le gao du zhong shi",
          "correctAnswer": "Linguists emphasize preserving and protecting regional dialects",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "在全球化时代，保留地方方言对于传承民族文化具有重要意义",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Preserving local dialects is crucial for maintaining ethnic culture globally", "Cultural preservation", "Globalization impact", "Language heritage"],
          "translation": "Preserving local dialects is crucial for maintaining ethnic culture globally",
          "languageCode": "zh",
          "romanization": "zai quan qiu hua shi dai, bao liu di fang fang yan dui yu chuan cheng min zu wen hua ju you zhong yao yi yi",
          "correctAnswer": "Preserving local dialects is crucial for maintaining ethnic culture globally",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "方言",
          "prompt": "Write the Chinese characters for 'Dialect'",
          "options": ["方言", "言方", "方", "言"],
          "translation": "Dialect",
          "languageCode": "zh",
          "romanization": "fang yan",
          "correctAnswer": "方言",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "俚语",
          "prompt": "Write the Chinese characters for 'Colloquial speech'",
          "options": ["俚语", "语俚", "俚", "语"],
          "translation": "Colloquial speech",
          "languageCode": "zh",
          "romanization": "li yu",
          "correctAnswer": "俚语",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "传承",
          "prompt": "Write the Chinese characters for 'Pass down'",
          "options": ["传承", "承传", "传", "承"],
          "translation": "Pass down",
          "languageCode": "zh",
          "romanization": "chuan cheng",
          "correctAnswer": "传承",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "民俗",
          "prompt": "Write the Chinese characters for 'Folk customs'",
          "options": ["民俗", "俗民", "民", "俗"],
          "translation": "Folk customs",
          "languageCode": "zh",
          "romanization": "min su",
          "correctAnswer": "民俗",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "口音",
          "prompt": "Write the Chinese characters for 'Accent'",
          "options": ["口音", "音口", "口", "音"],
          "translation": "Accent",
          "languageCode": "zh",
          "romanization": "kou yin",
          "correctAnswer": "口音",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: NUANCE & SOPHISTICATED EXPRESSION =====
  {
    lessonId: 'zh-stage9-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "细微之处",
          "prompt": "What does this phrase mean?",
          "options": ["Subtle details", "Fine points", "Minute difference", "Intricacies"],
          "translation": "Subtle details",
          "languageCode": "zh",
          "romanization": "xi wei zhi chu",
          "correctAnswer": "Subtle details",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "微妙",
          "prompt": "What does this adjective mean?",
          "options": ["Subtle", "Delicate", "Nuanced", "Intricate"],
          "translation": "Subtle",
          "languageCode": "zh",
          "romanization": "wei miao",
          "correctAnswer": "Subtle",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "含蓄",
          "prompt": "What does this adjective mean?",
          "options": ["Subtle/Implicit", "Restrained", "Implicit", "Reserved"],
          "translation": "Subtle/Implicit",
          "languageCode": "zh",
          "romanization": "han xu",
          "correctAnswer": "Subtle/Implicit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "言有尽而意无穷",
          "prompt": "What does this phrase mean?",
          "options": ["Words have limits but meaning is endless", "Implied meaning", "Deep implication", "Unsaid thoughts"],
          "translation": "Words have limits but meaning is endless",
          "languageCode": "zh",
          "romanization": "yan you jin er yi wu qiong",
          "correctAnswer": "Words have limits but meaning is endless",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "情感的细腻",
          "prompt": "What does this phrase mean?",
          "options": ["Fine texture of emotion", "Subtle feeling", "Refined emotion", "Delicate sentiment"],
          "translation": "Fine texture of emotion",
          "languageCode": "zh",
          "romanization": "qing gan de xi ni",
          "correctAnswer": "Fine texture of emotion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "弦外之音",
          "prompt": "What does this phrase mean?",
          "options": ["Overtone/unspoken implication", "Hidden meaning", "Subtext", "Underlying message"],
          "translation": "Overtone/unspoken implication",
          "languageCode": "zh",
          "romanization": "xian wai zhi yin",
          "correctAnswer": "Overtone/unspoken implication",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "恰到好处",
          "prompt": "What does this phrase mean?",
          "options": ["Just right/perfectly appropriate", "Perfectly timed", "Ideal measure", "Perfect balance"],
          "translation": "Just right/perfectly appropriate",
          "languageCode": "zh",
          "romanization": "qia dao hao chu",
          "correctAnswer": "Just right/perfectly appropriate",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "不言而喻",
          "prompt": "What does this phrase mean?",
          "options": ["Self-evident/need not be stated", "Obvious without saying", "Clear implication", "Implicit understanding"],
          "translation": "Self-evident/need not be stated",
          "languageCode": "zh",
          "romanization": "bu yan er yu",
          "correctAnswer": "Self-evident/need not be stated",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这句话虽然简洁，但其中蕴含的意义却恰到好处地表达了作者的心意",
          "prompt": "How do you describe subtle expression: 'Though concise, this sentence perfectly expresses the author's feelings through its implied meaning'?",
          "options": ["这句话虽然简洁，但其中蕴含的意义却恰到好处地表达了作者的心意 (zhè ju hua sui ran jian jie, dan qi zhong yun han de yi yi que qia dao hao chu de biao da le zuo zhe de xin yi)", "简洁表达 (jian jie biao da)", "蕴含意义 (yun han yi yi)", "作者心意 (zuo zhe xin yi)"],
          "translation": "Though concise, this sentence perfectly expresses the author's feelings through its implied meaning",
          "languageCode": "zh",
          "romanization": "zhè ju hua sui ran jian jie, dan qi zhong yun han de yi yi que qia dao hao chu de biao da le zuo zhe de xin yi",
          "correctAnswer": "这句话虽然简洁，但其中蕴含的意义却恰到好处地表达了作者的心意 (zhè ju hua sui ran jian jie, dan qi zhong yun han de yi yi que qia dao hao chu de biao da le zuo zhe de xin yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这诗人用含蓄的笔法描绘了爱情中微妙的情感变化",
          "prompt": "How do you praise nuanced writing: 'This poet uses subtle language to depict the delicate emotional changes in love'?",
          "options": ["这诗人用含蓄的笔法描绘了爱情中微妙的情感变化 (zhè shi ren yong han xu de bi fa miao hui le ai qing zhong wei miao de qing gan bian hua)", "含蓄笔法 (han xu bi fa)", "微妙情感 (wei miao qing gan)", "情感变化 (qing gan bian hua)"],
          "translation": "This poet uses subtle language to depict the delicate emotional changes in love",
          "languageCode": "zh",
          "romanization": "zhè shi ren yong han xu de bi fa miao hui le ai qing zhong wei miao de qing gan bian hua",
          "correctAnswer": "这诗人用含蓄的笔法描绘了爱情中微妙的情感变化 (zhè shi ren yong han xu de bi fa miao hui le ai qing zhong wei miao de qing gan bian hua)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他对这含有弦外之音的话感悟颇深，能够体察话语背后的真实想法",
          "prompt": "How do you describe reading between lines: 'He had deep insight into this remark with its unspoken implications and could sense the true thoughts behind the words'?",
          "options": ["他对这含有弦外之音的话感悟颇深，能够体察话语背后的真实想法 (ta dui zhe han you xian wai zhi yin de hua gan wu po shen, neng gou ti cha hua yu bei hou de zhen shi xiang fa)", "弦外之音 (xian wai zhi yin)", "体察想法 (ti cha xiang fa)", "背后真意 (bei hou zhen yi)"],
          "translation": "He had deep insight into this remark with its unspoken implications and could sense the true thoughts behind the words",
          "languageCode": "zh",
          "romanization": "ta dui zhe han you xian wai zhi yin de hua gan wu po shen, neng gou ti cha hua yu bei hou de zhen shi xiang fa",
          "correctAnswer": "他对这含有弦外之音的话感悟颇深，能够体察话语背后的真实想法 (ta dui zhe han you xian wai zhi yin de hua gan wu po shen, neng gou ti cha hua yu bei hou de zhen shi xiang fa)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个细微之处的处理恰恰反映了导演对人物内心世界的深刻理解",
          "prompt": "How do you acknowledge masterful detail handling: 'The masterful handling of this subtle detail precisely reflects the director's deep understanding of the character's inner world'?",
          "options": ["这个细微之处的处理恰恰反映了导演对人物内心世界的深刻理解 (zhè ge xi wei zhi chu de chu li qia qia fan ying le dao yan dui ren wu nei xin shi jie de shen ke li jie)", "细微之处 (xi wei zhi chu)", "内心世界 (nei xin shi jie)", "深刻理解 (shen ke li jie)"],
          "translation": "The masterful handling of this subtle detail precisely reflects the director's deep understanding of the character's inner world",
          "languageCode": "zh",
          "romanization": "zhè ge xi wei zhi chu de chu li qia qia fan ying le dao yan dui ren wu nei xin shi jie de shen ke li jie",
          "correctAnswer": "这个细微之处的处理恰恰反映了导演对人物内心世界的深刻理解 (zhè ge xi wei zhi chu de chu li qia qia fan ying le dao yan dui ren wu nei xin shi jie de shen ke li jie)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "好的文学作品往往言有尽而意无穷，给读者留下深刻的启发和无尽的想象空间",
          "prompt": "How do you appreciate literary depth: 'Great literature often leaves unsaid what is endless in meaning, providing readers with profound enlightenment and infinite imagination'?",
          "options": ["好的文学作品往往言有尽而意无穷，给读者留下深刻的启发和无尽的想象空间 (hao de wen xue zuo pin wang wang yan you jin er yi wu qiong, gei du zhe liu xia shen ke de qi fa he wu jin de xiang xiang kong jian)", "言有尽意无穷 (yan you jin yi wu qiong)", "启发想象 (qi fa xiang xiang)", "文学作品 (wen xue zuo pin)"],
          "translation": "Great literature often leaves unsaid what is endless in meaning, providing readers with profound enlightenment and infinite imagination",
          "languageCode": "zh",
          "romanization": "hao de wen xue zuo pin wang wang yan you jin er yi wu qiong, gei du zhe liu xia shen ke de qi fa he wu jin de xiang xiang kong jian",
          "correctAnswer": "好的文学作品往往言有尽而意无穷，给读者留下深刻的启发和无尽的想象空间 (hao de wen xue zuo pin wang wang yan you jin er yi wu qiong, gei du zhe liu xia shen ke de qi fa he wu jin de xiang xiang kong jian)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "微妙",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Subtle", "Delicate", "Nuanced", "Intricate"],
          "translation": "Subtle",
          "languageCode": "zh",
          "romanization": "wei miao",
          "correctAnswer": "Subtle",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "含蓄",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Implicit", "Restrained", "Implied", "Reserved"],
          "translation": "Implicit",
          "languageCode": "zh",
          "romanization": "han xu",
          "correctAnswer": "Implicit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "恰到好处",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Just right", "Perfectly timed", "Ideal", "Perfect balance"],
          "translation": "Just right",
          "languageCode": "zh",
          "romanization": "qia dao hao chu",
          "correctAnswer": "Just right",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "弦外之音",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Overtone/unspoken meaning", "Hidden meaning", "Subtext", "Underlying message"],
          "translation": "Overtone/unspoken meaning",
          "languageCode": "zh",
          "romanization": "xian wai zhi yin",
          "correctAnswer": "Overtone/unspoken meaning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "不言而喻",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Self-evident", "Obvious", "Clear", "Implicit"],"translation": "Self-evident",
          "languageCode": "zh",
          "romanization": "bu yan er yu",
          "correctAnswer": "Self-evident",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "细微之处",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Subtle details", "Fine points", "Minute difference", "Intricacies"],
          "translation": "Subtle details",
          "languageCode": "zh",
          "romanization": "xi wei zhi chu",
          "correctAnswer": "Subtle details",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这句话虽然简洁，但其中蕴含的意义却恰到好处地表达了作者的心意",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Brief yet perfectly expressed, capturing the author's true sentiment", "Concise expression", "Implied meaning", "Author's feeling"],
          "translation": "Brief yet perfectly expressed, capturing the author's true sentiment",
          "languageCode": "zh",
          "romanization": "zhè ju hua sui ran jian jie, dan qi zhong yun han de yi yi que qia dao hao chu de biao da le zuo zhe de xin yi",
          "correctAnswer": "Brief yet perfectly expressed, capturing the author's true sentiment",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这诗人用含蓄的笔法描绘了爱情中微妙的情感变化",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The poet subtly portrays love's delicate emotional nuances", "Subtle style", "Emotional depth", "Poetic expression"],
          "translation": "The poet subtly portrays love's delicate emotional nuances",
          "languageCode": "zh",
          "romanization": "zhè shi ren yong han xu de bi fa miao hui le ai qing zhong wei miao de qing gan bian hua",
          "correctAnswer": "The poet subtly portrays love's delicate emotional nuances",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他对这含有弦外之音的话感悟颇深，能够体察话语背后的真实想法",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["He deeply grasped the unspoken meaning behind the words", "Hidden message", "True intention", "Reading between lines"],
          "translation": "He deeply grasped the unspoken meaning behind the words",
          "languageCode": "zh",
          "romanization": "ta dui zhe han you xian wai zhi yin de hua gan wu po shen, neng gou ti cha hua yu bei hou de zhen shi xiang fa",
          "correctAnswer": "He deeply grasped the unspoken meaning behind the words",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个细微之处的处理恰恰反映了导演对人物内心世界的深刻理解",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This subtle detail reveals the director's deep understanding of character psychology", "Detail mastery", "Character depth", "Directorial skill"],
          "translation": "This subtle detail reveals the director's deep understanding of character psychology",
          "languageCode": "zh",
          "romanization": "zhè ge xi wei zhi chu de chu li qia qia fan ying le dao yan dui ren wu nei xin shi jie de shen ke li jie",
          "correctAnswer": "This subtle detail reveals the director's deep understanding of character psychology",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "好的文学作品往往言有尽而意无穷，给读者留下深刻的启发和无尽的想象空间",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Great literature expresses much through little, inspiring boundless imagination", "Literary depth", "Endless meaning", "Profound work"],
          "translation": "Great literature expresses much through little, inspiring boundless imagination",
          "languageCode": "zh",
          "romanization": "hao de wen xue zuo pin wang wang yan you jin er yi wu qiong, gei du zhe liu xia shen ke de qi fa he wu jin de xiang xiang kong jian",
          "correctAnswer": "Great literature expresses much through little, inspiring boundless imagination",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage9-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "微妙",
          "prompt": "Write the Chinese characters for 'Subtle'",
          "options": ["微妙", "妙微", "微", "妙"],
          "translation": "Subtle",
          "languageCode": "zh",
          "romanization": "wei miao",
          "correctAnswer": "微妙",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "含蓄",
          "prompt": "Write the Chinese characters for 'Implicit'",
          "options": ["含蓄", "蓄含", "含", "蓄"],
          "translation": "Implicit",
          "languageCode": "zh",
          "romanization": "han xu",
          "correctAnswer": "含蓄",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "恰到好处",
          "prompt": "Write the Chinese characters for 'Just right'",
          "options": ["恰到好处", "好处恰到", "恰到", "好处"],
          "translation": "Just right",
          "languageCode": "zh",
          "romanization": "qia dao hao chu",
          "correctAnswer": "恰到好处",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "不言而喻",
          "prompt": "Write the Chinese characters for 'Self-evident'",
          "options": ["不言而喻", "而喻不言", "不言", "而喻"],
          "translation": "Self-evident",
          "languageCode": "zh",
          "romanization": "bu yan er yu",
          "correctAnswer": "不言而喻",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "弦外之音",
          "prompt": "Write the Chinese characters for 'Overtone'",
          "options": ["弦外之音", "之音弦外", "弦外", "之音"],
          "translation": "Overtone",
          "languageCode": "zh",
          "romanization": "xian wai zhi yin",
          "correctAnswer": "弦外之音",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 9 (C1 - Advanced) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Literary, Slang, Idioms, Dialects, Nuance)\n');

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
