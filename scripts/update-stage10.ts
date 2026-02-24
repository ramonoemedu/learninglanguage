import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 10: C2 - Expert
const lessonUpdates = [
  // ===== CHAPTER 1: SPECIALIZED DISCOURSE & ACADEMIC LANGUAGE =====
  {
    lessonId: 'zh-stage10-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "蕴涵",
          "prompt": "What does this word mean?",
          "options": ["Imply/contain implicitly", "Encompass", "Hide within", "Embed"],
          "translation": "Imply/contain implicitly",
          "languageCode": "zh",
          "romanization": "yun han",
          "correctAnswer": "Imply/contain implicitly",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "诠释",
          "prompt": "What does this word mean?",
          "options": ["Interpret/exegesis", "Explain", "Expound", "Commentary"],
          "translation": "Interpret/exegesis",
          "languageCode": "zh",
          "romanization": "quan shi",
          "correctAnswer": "Interpret/exegesis",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "范畴",
          "prompt": "What does this word mean?",
          "options": ["Category/domain", "Sphere", "Realm", "Classification"],
          "translation": "Category/domain",
          "languageCode": "zh",
          "romanization": "fan chou",
          "correctAnswer": "Category/domain",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "阐述",
          "prompt": "What does this word mean?",
          "options": ["Elaborate/expound", "Clarify", "Set forth", "Explain thoroughly"],
          "translation": "Elaborate/expound",
          "languageCode": "zh",
          "romanization": "chan shu",
          "correctAnswer": "Elaborate/expound",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "悖论",
          "prompt": "What does this word mean?",
          "options": ["Paradox", "Contradiction", "Logical inconsistency", "Antinomy"],
          "translation": "Paradox",
          "languageCode": "zh",
          "romanization": "bei lun",
          "correctAnswer": "Paradox",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "规范",
          "prompt": "What does this word mean in academic context?",
          "options": ["Norm/standard", "Specification", "Convention", "Criterion"],
          "translation": "Norm/standard",
          "languageCode": "zh",
          "romanization": "gui fan",
          "correctAnswer": "Norm/standard",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "内蕴",
          "prompt": "What does this word mean?",
          "options": ["Inner quality/intrinsic implication", "Internal meaning", "Inherent nature", "Embedded meaning"],
          "translation": "Inner quality/intrinsic implication",
          "languageCode": "zh",
          "romanization": "nei yun",
          "correctAnswer": "Inner quality/intrinsic implication",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "流变",
          "prompt": "What does this word mean?",
          "options": ["Evolution/transformation", "Change over time", "Development", "Metamorphosis"],
          "translation": "Evolution/transformation",
          "languageCode": "zh",
          "romanization": "liu bian",
          "correctAnswer": "Evolution/transformation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "这一概念在哲学范畴内蕴含着深刻的矛盾性，值得深入阐述",
          "prompt": "How do you discuss complex philosophical ideas: 'This concept, within the philosophical domain, contains deep contradictions worthy of thorough exposition'?",
          "options": ["这一概念在哲学范畴内蕴含着深刻的矛盾性，值得深入阐述 (zhè yi gai nian zai zhe xue fan chou nei yun han zhe shen ke de mao dun xing, zhi de shen ru chan shu)", "哲学概念 (zhe xue gai nian)", "矛盾性深刻 (mao dun xing shen ke)", "值得阐述 (zhi de chan shu)"],
          "translation": "This concept, within the philosophical domain, contains deep contradictions worthy of thorough exposition",
          "languageCode": "zh",
          "romanization": "zhè yi gai nian zai zhe xue fan chou nei yun han zhe shen ke de mao dun xing, zhi de shen ru chan shu",
          "correctAnswer": "这一概念在哲学范畴内蕴含着深刻的矛盾性，值得深入阐述 (zhè yi gai nian zai zhe xue fan chou nei yun han zhe shen ke de mao dun xing, zhi de shen ru chan shu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "对这一文献的正确诠释需要考虑其历史流变和文化背景",
          "prompt": "How do you analyze textual interpretation: 'Correct interpretation of this text requires consideration of its historical evolution and cultural context'?",
          "options": ["对这一文献的正确诠释需要考虑其历史流变和文化背景 (dui zhè yi wen xian de zheng que quan shi xu yao kao lv qi li shi liu bian he wen hua bei jing)", "文献诠释 (wen xian quan shi)", "历史流变 (li shi liu bian)", "文化背景 (wen hua bei jing)"],
          "translation": "Correct interpretation of this text requires consideration of its historical evolution and cultural context",
          "languageCode": "zh",
          "romanization": "dui zhè yi wen xian de zheng que quan shi xu yao kao lv qi li shi liu bian he wen hua bei jing",
          "correctAnswer": "对这一文献的正确诠释需要考虑其历史流变和文化背景 (dui zhè yi wen xian de zheng que quan shi xu yao kao lv qi li shi liu bian he wen hua bei jing)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个理论框架内蕴的悖论性在多个层面上表现出来，规范化处理成为当前的主要课题",
          "prompt": "How do you discuss theoretical frameworks: 'The paradoxes inherent in this theoretical framework manifest at multiple levels, and normalization becomes the primary task'?",
          "options": ["这个理论框架内蕴的悖论性在多个层面上表现出来，规范化处理成为当前的主要课题 (zhè ge li lun kuang jia nei yun de bei lun xing zai duo ge ceng mian shang biao xian chu lai, gui fan hua chu li cheng wei dang qian de zhu yao ke ti)", "理论框架 (li lun kuang jia)", "悖论性 (bei lun xing)", "规范化处理 (gui fan hua chu li)"],
          "translation": "The paradoxes inherent in this theoretical framework manifest at multiple levels, and normalization becomes the primary task",
          "languageCode": "zh",
          "romanization": "zhè ge li lun kuang jia nei yun de bei lun xing zai duo ge ceng mian shang biao xian chu lai, gui fan hua chu li cheng wei dang qian de zhu yao ke ti",
          "correctAnswer": "这个理论框架内蕴的悖论性在多个层面上表现出来，规范化处理成为当前的主要课题 (zhè ge li lun kuang jia nei yun de bei lun xing zai duo ge ceng mian shang biao xian chu lai, gui fan hua chu li cheng wei dang qian de zhu yao ke ti)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "学贯中西的学者往往能够在不同文化范畴之间发现共性，阐述人类共同的智慧追求",
          "prompt": "How do you describe cross-cultural scholarship: 'Scholars versed in both Eastern and Western traditions often discover commonalities across cultural domains, elucidating humanity's shared wisdom pursuits'?",
          "options": ["学贯中西的学者往往能够在不同文化范畴之间发现共性，阐述人类共同的智慧追求 (xue guan zhong xi de xue zhe wang wang neng gou zai bu tong wen hua fan chou zhi jian fa xian gong xing, chan shu ren lei gong tong de zhi hui zhui qiu)", "学贯中西 (xue guan zhong xi)", "文化范畴 (wen hua fan chou)", "智慧追求 (zhi hui zhui qiu)"],
          "translation": "Scholars versed in both Eastern and Western traditions often discover commonalities across cultural domains, elucidating humanity's shared wisdom pursuits",
          "languageCode": "zh",
          "romanization": "xue guan zhong xi de xue zhe wang wang neng gou zai bu tong wen hua fan chou zhi jian fa xian gong xing, chan shu ren lei gong tong de zhi hui zhui qiu",
          "correctAnswer": "学贯中西的学者往往能够在不同文化范畴之间发现共性，阐述人类共同的智慧追求 (xue guan zhong xi de xue zhe wang wang neng gou zai bu tong wen hua fan chou zhi jian fa xian gong xing, chan shu ren lei gong tong de zhi hui zhui qiu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "对经典著作的诠释虽然仁者见仁，但其历史流变的轨迹是可以科学地描述的",
          "prompt": "How do you balance subjective interpretation with objective analysis: 'While interpretations of classical works vary, the trajectory of their historical evolution can be scientifically described'?",
          "options": ["对经典著作的诠释虽然仁者见仁，但其历史流变的轨迹是可以科学地描述的 (dui jing dian zhu zuo de quan shi sui ran ren zhe jian ren, dan qi li shi liu bian de gui ji shi ke yi ke xue de miao shu de)", "经典诠释 (jing dian quan shi)", "仁者见仁 (ren zhe jian ren)", "历史轨迹 (li shi gui ji)"],
          "translation": "While interpretations of classical works vary, the trajectory of their historical evolution can be scientifically described",
          "languageCode": "zh",
          "romanization": "dui jing dian zhu zuo de quan shi sui ran ren zhe jian ren, dan qi li shi liu bian de gui ji shi ke yi ke xue de miao shu de",
          "correctAnswer": "对经典著作的诠释虽然仁者见仁，但其历史流变的轨迹是可以科学地描述的 (dui jing dian zhu zuo de quan shi sui ran ren zhe jian ren, dan qi li shi liu bian de gui ji shi ke yi ke xue de miao shu de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "蕴涵",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Imply/contain implicitly", "Encompass", "Hide within", "Embed"],
          "translation": "Imply/contain implicitly",
          "languageCode": "zh",
          "romanization": "yun han",
          "correctAnswer": "Imply/contain implicitly",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "诠释",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Interpret/exegesis", "Explain", "Expound", "Commentary"],
          "translation": "Interpret/exegesis",
          "languageCode": "zh",
          "romanization": "quan shi",
          "correctAnswer": "Interpret/exegesis",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "范畴",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Category/domain", "Sphere", "Realm", "Classification"],
          "translation": "Category/domain",
          "languageCode": "zh",
          "romanization": "fan chou",
          "correctAnswer": "Category/domain",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "悖论",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Paradox", "Contradiction", "Logical inconsistency", "Antinomy"],
          "translation": "Paradox",
          "languageCode": "zh",
          "romanization": "bei lun",
          "correctAnswer": "Paradox",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "流变",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Evolution/transformation", "Change over time", "Development", "Metamorphosis"],
          "translation": "Evolution/transformation",
          "languageCode": "zh",
          "romanization": "liu bian",
          "correctAnswer": "Evolution/transformation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "内蕴",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Inner quality/intrinsic implication", "Internal meaning", "Inherent nature", "Embedded meaning"],
          "translation": "Inner quality/intrinsic implication",
          "languageCode": "zh",
          "romanization": "nei yun",
          "correctAnswer": "Inner quality/intrinsic implication",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "这一概念在哲学范畴内蕴含着深刻的矛盾性，值得深入阐述",
          "prompt": "Speak this statement aloud. Express your understanding of philosophical complexity.",
          "options": ["This concept contains deep philosophical contradictions requiring thorough analysis", "Complex philosophical idea", "Contradictory concept", "Requires explanation"],
          "translation": "This concept contains deep philosophical contradictions requiring thorough analysis",
          "languageCode": "zh",
          "romanization": "zhè yi gai nian zai zhe xue fan chou nei yun han zhe shen ke de mao dun xing, zhi de shen ru chan shu",
          "correctAnswer": "This concept contains deep philosophical contradictions requiring thorough analysis",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "对这一文献的正确诠释需要考虑其历史流变和文化背景",
          "prompt": "Speak this statement aloud. Express how to interpret texts properly.",
          "options": ["Proper interpretation requires understanding historical context and cultural evolution", "Textual analysis", "Historical consideration", "Cultural awareness"],
          "translation": "Proper interpretation requires understanding historical context and cultural evolution",
          "languageCode": "zh",
          "romanization": "dui zhè yi wen xian de zheng que quan shi xu yao kao lv qi li shi liu bian he wen hua bei jing",
          "correctAnswer": "Proper interpretation requires understanding historical context and cultural evolution",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个理论框架内蕴的悖论性在多个层面上表现出来",
          "prompt": "Speak this statement aloud. What theoretical insight are you expressing?",
          "options": ["The paradoxes within this framework manifest at multiple analytical levels", "Theoretical complexity", "Multi-level analysis", "Paradoxical framework"],
          "translation": "The paradoxes within this framework manifest at multiple analytical levels",
          "languageCode": "zh",
          "romanization": "zhè ge li lun kuang jia nei yun de bei lun xing zai duo ge ceng mian shang biao xian chu lai",
          "correctAnswer": "The paradoxes within this framework manifest at multiple analytical levels",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "学贯中西的学者往往能够在不同文化范畴之间发现共性",
          "prompt": "Speak this statement aloud. What cross-cultural insight does it convey?",
          "options": ["Scholars of both traditions discover commonalities across cultural domains", "Cross-cultural knowledge", "Cultural universals", "Scholarly perspective"],
          "translation": "Scholars of both traditions discover commonalities across cultural domains",
          "languageCode": "zh",
          "romanization": "xue guan zhong xi de xue zhe wang wang neng gou zai bu tong wen hua fan chou zhi jian fa xian gong xing",
          "correctAnswer": "Scholars of both traditions discover commonalities across cultural domains",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "对经典著作的诠释虽然仁者见仁，但其历史流变的轨迹是可以科学地描述的",
          "prompt": "Speak this statement aloud. Balance subjectivity with objectivity in analysis.",
          "options": ["While interpretations vary, historical evolution can be objectively described", "Interpretation variability", "Scientific analysis", "Historical perspective"],
          "translation": "While interpretations vary, historical evolution can be objectively described",
          "languageCode": "zh",
          "romanization": "dui jing dian zhu zuo de quan shi sui ran ren zhe jian ren, dan qi li shi liu bian de gui ji shi ke yi ke xue de miao shu de",
          "correctAnswer": "While interpretations vary, historical evolution can be objectively described",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "蕴涵",
          "prompt": "Write the Chinese characters for 'Imply/contain implicitly'",
          "options": ["蕴涵", "涵蕴", "蕴", "涵"],
          "translation": "Imply/contain implicitly",
          "languageCode": "zh",
          "romanization": "yun han",
          "correctAnswer": "蕴涵",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "诠释",
          "prompt": "Write the Chinese characters for 'Interpret/exegesis'",
          "options": ["诠释", "释诠", "诠", "释"],
          "translation": "Interpret/exegesis",
          "languageCode": "zh",
          "romanization": "quan shi",
          "correctAnswer": "诠释",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "范畴",
          "prompt": "Write the Chinese characters for 'Category/domain'",
          "options": ["范畴", "畴范", "范", "畴"],
          "translation": "Category/domain",
          "languageCode": "zh",
          "romanization": "fan chou",
          "correctAnswer": "范畴",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "悖论",
          "prompt": "Write the Chinese characters for 'Paradox'",
          "options": ["悖论", "论悖", "悖", "论"],
          "translation": "Paradox",
          "languageCode": "zh",
          "romanization": "bei lun",
          "correctAnswer": "悖论",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "流变",
          "prompt": "Write the Chinese characters for 'Evolution/transformation'",
          "options": ["流变", "变流", "流", "变"],
          "translation": "Evolution/transformation",
          "languageCode": "zh",
          "romanization": "liu bian",
          "correctAnswer": "流变",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: CRITICAL ANALYSIS & ARGUMENTATION =====
  {
    lessonId: 'zh-stage10-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "论据",
          "prompt": "What does this word mean in academic context?",
          "options": ["Evidence/argument", "Supporting data", "Proof", "Documentation"],
          "translation": "Evidence/argument",
          "languageCode": "zh",
          "romanization": "lun ju",
          "correctAnswer": "Evidence/argument",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "谬误",
          "prompt": "What does this word mean?",
          "options": ["Fallacy/error", "Mistake", "False reasoning", "Flaw"],
          "translation": "Fallacy/error",
          "languageCode": "zh",
          "romanization": "miu wu",
          "correctAnswer": "Fallacy/error",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "论证",
          "prompt": "What does this word mean?",
          "options": ["Argumentation/reasoning", "Proof", "Demonstration", "Evidence-based argument"],
          "translation": "Argumentation/reasoning",
          "languageCode": "zh",
          "romanization": "lun zheng",
          "correctAnswer": "Argumentation/reasoning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "驳斥",
          "prompt": "What does this word mean?",
          "options": ["Refute/rebut", "Contradict", "Disprove", "Oppose"],
          "translation": "Refute/rebut",
          "languageCode": "zh",
          "romanization": "bo chi",
          "correctAnswer": "Refute/rebut",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "推理",
          "prompt": "What does this word mean?",
          "options": ["Inference/reasoning", "Deduction", "Logic", "Conclusion"],
          "translation": "Inference/reasoning",
          "languageCode": "zh",
          "romanization": "tui li",
          "correctAnswer": "Inference/reasoning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "前提",
          "prompt": "What does this word mean?",
          "options": ["Premise/prerequisite", "assumption", "Foundation", "Condition"],
          "translation": "Premise/prerequisite",
          "languageCode": "zh",
          "romanization": "qian ti",
          "correctAnswer": "Premise/prerequisite",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "论点",
          "prompt": "What does this word mean?",
          "options": ["Thesis/main argument", "Main idea", "Central claim", "Position"],
          "translation": "Thesis/main argument",
          "languageCode": "zh",
          "romanization": "lun dian",
          "correctAnswer": "Thesis/main argument",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "佐证",
          "prompt": "What does this word mean?",
          "options": ["Corroboration/supporting evidence", "Verification", "Substantiation", "Confirmation"],
          "translation": "Corroboration/supporting evidence",
          "languageCode": "zh",
          "romanization": "zuo zheng",
          "correctAnswer": "Corroboration/supporting evidence",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "虽然他提出了有力的论故，但论据的可信度值得怀疑",
          "prompt": "How do you critique an argument: 'Although he presented a compelling thesis, the credibility of his evidence is questionable'?",
          "options": ["虽然他提出了有力的论点，但论据的可信度值得怀疑 (sui ran ta ti chu le you li de lun dian, dan lun ju de ke xin du zhi de huai yi)", "有力论点 (you li lun dian)", "论据可信 (lun ju ke xin)", "可信度怀疑 (ke xin du huai yi)"],
          "translation": "Although he presented a compelling thesis, the credibility of his evidence is questionable",
          "languageCode": "zh",
          "romanization": "sui ran ta ti chu le you li de lun dian, dan lun ju de ke xin du zhi de huai yi",
          "correctAnswer": "虽然他提出了有力的论点，但论据的可信度值得怀疑 (sui ran ta ti chu le you li de lun dian, dan lun ju de ke xin du zhi de huai yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "对方所犯的逻辑谬误表现为，他从不充分的前提推出了绝对的结论",
          "prompt": "How do you identify logical fallacies: 'His logical error consists in drawing absolute conclusions from insufficient premises'?",
          "options": ["对方所犯的逻辑谬误表现为，他从不充分的前提推出了绝对的结论 (dui fang suo fan de luo ji miu wu biao xian wei, ta cong bu chong fen de qian ti tui chu le jue dui de jie lun)", "逻辑谬误 (luo ji miu wu)", "不充分前提 (bu chong fen qian ti)", "绝对结论 (jue dui jie lun)"],
          "translation": "His logical error consists in drawing absolute conclusions from insufficient premises",
          "languageCode": "zh",
          "romanization": "dui fang suo fan de luo ji miu wu biao xian wei, ta cong bu chong fen de qian ti tui chu le jue dui de jie lun",
          "correctAnswer": "对方所犯的逻辑谬误表现为，他从不充分的前提推出了绝对的结论 (dui fang suo fan de luo ji miu wu biao xian wei, ta cong bu chong fen de qian ti tui chu le jue dui de jie lun)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "他有力地驳斥了对手的观点，通过严密的论证和充足的佐证赢得了辩论",
          "prompt": "How do you describe winning a debate: 'He powerfully refuted his opponent's views and won the debate through rigorous reasoning and sufficient evidence'?",
          "options": ["他有力地驳斥了对手的观点，通过严密的论证和充足的佐证赢得了辩论 (ta you li de bo chi le dui shou de guan dian, tong guo yan mi de lun zheng he chong zu de zuo zheng ying de le bian lun)", "驳斥观点 (bo chi guan dian)", "严密论证 (yan mi lun zheng)", "充足佐证 (chong zu zuo zheng)"],
          "translation": "He powerfully refuted his opponent's views and won the debate through rigorous reasoning and sufficient evidence",
          "languageCode": "zh",
          "romanization": "ta you li de bo chi le dui shou de guan dian, tong guo yan mi de lun zheng he chong zu de zuo zheng ying de le bian lun",
          "correctAnswer": "他有力地驳斥了对手的观点，通过严密的论证和充足的佐证赢得了辩论 (ta you li de bo chi le dui shou de guan dian, tong guo yan mi de lun zheng he chong zu de zuo zheng ying de le bian lun)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "基于以上推理，我们可以得出这样的结论：制度因素比个人因素更能决定社会现象",
          "prompt": "How do you draw logical conclusions: 'Based on the above reasoning, we can conclude that institutional factors determine social phenomena more than individual factors'?",
          "options": ["基于以上推理，我们可以得出这样的结论：制度因素比个人因素更能决定社会现象 (ji yu yi shang tui li, wo men ke yi de chu zhè yang de jie lun: zhi du yin su bi ge ren yin su geng neng jue ding she hui xian xiang)", "推理结论 (tui li jie lun)", "制度因素 (zhi du yin su)", "社会现象 (she hui xian xiang)"],
          "translation": "Based on the above reasoning, we can conclude that institutional factors determine social phenomena more than individual factors",
          "languageCode": "zh",
          "romanization": "ji yu yi shang tui li, wo men ke yi de chu zhè yang de jie lun: zhi du yin su bi ge ren yin su geng neng jue ding she hui xian xiang",
          "correctAnswer": "基于以上推理，我们可以得出这样的结论：制度因素比个人因素更能决定社会现象 (ji yu yi shang tui li, wo men ke yi de chu zhè yang de jie lun: zhi du yin su bi ge ren yin su geng neng jue ding she hui xian xiang)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "许多学者的研究都佐证了这一论点的成立：经济基础的变化决定着社会系统的发展方向",
          "prompt": "How do you support a thesis with evidence: 'Many scholars' research corroborates this thesis: changes in economic base determine the development of social systems'?",
          "options": ["许多学者的研究都佐证了这一论点的成立：经济基础的变化决定着社会系统的发展方向 (xu duo xue zhe de yan jiu dou zuo zheng le zhè yi lun dian de cheng li: jing ji ji chu de bian hua jue ding zhe she hui xi tong de fa zhan fang xiang)", "佐证论点 (zuo zheng lun dian)", "经济基础 (jing ji ji chu)", "发展方向 (fa zhan fang xiang)"],
          "translation": "Many scholars' research corroborates this thesis: changes in economic base determine the development of social systems",
          "languageCode": "zh",
          "romanization": "xu duo xue zhe de yan jiu dou zuo zheng le zhè yi lun dian de cheng li: jing ji ji chu de bian hua jue ding zhe she hui xi tong de fa zhan fang xiang",
          "correctAnswer": "许多学者的研究都佐证了这一论点的成立：经济基础的变化决定着社会系统的发展方向 (xu duo xue zhe de yan jiu dou zuo zheng le zhè yi lun dian de cheng li: jing ji ji chu de bian hua jue ding zhe she hui xi tong de fa zhan fang xiang)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "论据",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Evidence/argument", "Supporting data", "Proof", "Documentation"],
          "translation": "Evidence/argument",
          "languageCode": "zh",
          "romanization": "lun ju",
          "correctAnswer": "Evidence/argument",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "谬误",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Fallacy/error", "Mistake", "False reasoning", "Flaw"],
          "translation": "Fallacy/error",
          "languageCode": "zh",
          "romanization": "miu wu",
          "correctAnswer": "Fallacy/error",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "论证",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Argumentation/reasoning", "Proof", "Demonstration", "Evidence-based argument"],
          "translation": "Argumentation/reasoning",
          "languageCode": "zh",
          "romanization": "lun zheng",
          "correctAnswer": "Argumentation/reasoning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "驳斥",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Refute/rebut", "Contradict", "Disprove", "Oppose"],
          "translation": "Refute/rebut",
          "languageCode": "zh",
          "romanization": "bo chi",
          "correctAnswer": "Refute/rebut",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "推理",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Inference/reasoning", "Deduction", "Logic", "Conclusion"],
          "translation": "Inference/reasoning",
          "languageCode": "zh",
          "romanization": "tui li",
          "correctAnswer": "Inference/reasoning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "前提",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Premise/prerequisite", "assumption", "Foundation", "Condition"],
          "translation": "Premise/prerequisite",
          "languageCode": "zh",
          "romanization": "qian ti",
          "correctAnswer": "Premise/prerequisite",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "虽然他提出了有力的论点，但论据的可信度值得怀疑",
          "prompt": "Speak this statement aloud. How would you critique an argument?",
          "options": ["Though compelling, the evidence's reliability merits question", "Weak evidence", "Questionable thesis", "Logical issue"],
          "translation": "Though compelling, the evidence's reliability merits question",
          "languageCode": "zh",
          "romanization": "sui ran ta ti chu le you li de lun dian, dan lun ju de ke xin du zhi de huai yi",
          "correctAnswer": "Though compelling, the evidence's reliability merits question",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "对方所犯的逻辑谬误表现为，他从不充分的前提推出了绝对的结论",
          "prompt": "Speak this statement aloud. How would you identify logical errors?",
          "options": ["The fallacy is drawing absolute conclusions from insufficient premises", "Logical error", "Flawed reasoning", "Invalid conclusion"],
          "translation": "The fallacy is drawing absolute conclusions from insufficient premises",
          "languageCode": "zh",
          "romanization": "dui fang suo fan de luo ji miu wu biao xian wei, ta cong bu chong fen de qian ti tui chu le jue dui de jie lun",
          "correctAnswer": "The fallacy is drawing absolute conclusions from insufficient premises",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "他有力地驳斥了对手的观点，通过严密的论证和充足的佐证赢得了辩论",
          "prompt": "Speak this statement aloud. How would you describe a successful debate?",
          "options": ["Through rigorous argumentation and sufficient evidence, he refuted his opponent", "Won the debate", "Strong rebuttal", "Effective evidence"],
          "translation": "Through rigorous argumentation and sufficient evidence, he refuted his opponent",
          "languageCode": "zh",
          "romanization": "ta you li de bo chi le dui shou de guan dian, tong guo yan mi de lun zheng he chong zu de zuo zheng ying de le bian lun",
          "correctAnswer": "Through rigorous argumentation and sufficient evidence, he refuted his opponent",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "基于以上推理，我们可以得出这样的结论",
          "prompt": "Speak this statement aloud. How would you introduce a logical conclusion?",
          "options": ["Based on this reasoning, we can draw such conclusions", "Final conclusion", "Logical deduction", "Resulting conclusion"],
          "translation": "Based on this reasoning, we can draw such conclusions",
          "languageCode": "zh",
          "romanization": "ji yu yi shang tui li, wo men ke yi de chu zhè yang de jie lun",
          "correctAnswer": "Based on this reasoning, we can draw such conclusions",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "许多学者的研究都佐证了这一论点的成立",
          "prompt": "Speak this statement aloud. How would you cite supporting evidence?",
          "options": ["Many scholars' research corroborates this thesis", "Supporting evidence", "Academic support", "Scholarly consensus"],
          "translation": "Many scholars' research corroborates this thesis",
          "languageCode": "zh",
          "romanization": "xu duo xue zhe de yan jiu dou zuo zheng le zhè yi lun dian de cheng li",
          "correctAnswer": "Many scholars' research corroborates this thesis",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage10-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "论据",
          "prompt": "Write the Chinese characters for 'Evidence/argument'",
          "options": ["论据", "据论", "论", "据"],
          "translation": "Evidence/argument",
          "languageCode": "zh",
          "romanization": "lun ju",
          "correctAnswer": "论据",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "论证",
          "prompt": "Write the Chinese characters for 'Argumentation/reasoning'",
          "options": ["论证", "证论", "论", "证"],
          "translation": "Argumentation/reasoning",
          "languageCode": "zh",
          "romanization": "lun zheng",
          "correctAnswer": "论证",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "驳斥",
          "prompt": "Write the Chinese characters for 'Refute/rebut'",
          "options": ["驳斥", "斥驳", "驳", "斥"],
          "translation": "Refute/rebut",
          "languageCode": "zh",
          "romanization": "bo chi",
          "correctAnswer": "驳斥",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "推理",
          "prompt": "Write the Chinese characters for 'Inference/reasoning'",
          "options": ["推理", "理推", "推", "理"],
          "translation": "Inference/reasoning",
          "languageCode": "zh",
          "romanization": "tui li",
          "correctAnswer": "推理",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "佐证",
          "prompt": "Write the Chinese characters for 'Corroboration/supporting evidence'",
          "options": ["佐证", "证佐", "佐", "证"],
          "translation": "Corroboration/supporting evidence",
          "languageCode": "zh",
          "romanization": "zuo zheng",
          "correctAnswer": "佐证",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 10 (C2 - Expert) lesson content updates...\n');
    console.log('📚 Updating 20 lessons across 2 chapters (Specialized Discourse, Critical Analysis)\n');

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
