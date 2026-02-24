import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 8: B2 - Professional
const lessonUpdates = [
  // ===== CHAPTER 1: BUSINESS COMMUNICATION =====
  {
    lessonId: 'zh-stage8-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "协议",
          "prompt": "What does this word mean?",
          "options": ["Agreement", "Contract", "Deal", "Understanding"],
          "translation": "Agreement",
          "languageCode": "zh",
          "romanization": "xié yi",
          "correctAnswer": "Agreement",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "谈判",
          "prompt": "What does this word mean?",
          "options": ["Negotiation", "Discussion", "Bargaining", "Talk"],
          "translation": "Negotiation",
          "languageCode": "zh",
          "romanization": "tán pàn",
          "correctAnswer": "Negotiation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "条款",
          "prompt": "What does this word mean?",
          "options": ["Terms", "Clauses", "Provisions", "Conditions"],
          "translation": "Terms",
          "languageCode": "zh",
          "romanization": "tiáo kuǎn",
          "correctAnswer": "Terms",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "数据",
          "prompt": "What does this word mean?",
          "options": ["Data", "Information", "Numbers", "Statistics"],
          "translation": "Data",
          "languageCode": "zh",
          "romanization": "shù ju",
          "correctAnswer": "Data",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "收益",
          "prompt": "What does this word mean?",
          "options": ["Revenue", "Income", "Profit", "Return"],
          "translation": "Revenue",
          "languageCode": "zh",
          "romanization": "shōu yi",
          "correctAnswer": "Revenue",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "成本",
          "prompt": "What does this word mean?",
          "options": ["Cost", "Expense", "Price", "Fee"],
          "translation": "Cost",
          "languageCode": "zh",
          "romanization": "chéng běn",
          "correctAnswer": "Cost",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "利润",
          "prompt": "What does this word mean?",
          "options": ["Profit", "Earnings", "Gain", "Margin"],
          "translation": "Profit",
          "languageCode": "zh",
          "romanization": "lì run",
          "correctAnswer": "Profit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "风险",
          "prompt": "What does this word mean?",
          "options": ["Risk", "Danger", "Hazard", "Peril"],
          "translation": "Risk",
          "languageCode": "zh",
          "romanization": "fēng xiǎn",
          "correctAnswer": "Risk",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我们提议在下个季度开始这个项目的谈判",
          "prompt": "How do you propose a business initiative: 'We propose initiating negotiations for this project in the next quarter'?",
          "options": ["我们提议在下个季度开始这个项目的谈判 (wǒ men tí yi zài xià ge jì du kāi shi zhè ge xiàng mu de tán pàn)", "提议项目 (tí yi xiàng mu)", "开始谈判 (kāi shi tán pàn)", "季度项目 (jì du xiàng mu)"],
          "translation": "We propose initiating negotiations for this project in the next quarter",
          "languageCode": "zh",
          "romanization": "wǒ men tí yi zài xià ge jì du kāi shi zhè ge xiàng mu de tán pàn",
          "correctAnswer": "我们提议在下个季度开始这个项目的谈判 (wǒ men tí yi zài xià ge jì du kāi shi zhè ge xiàng mu de tán pàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "根据最近的数据分析，我们的收益增长了百分之二十",
          "prompt": "How do you report financial results: 'According to recent data analysis, our revenue increased by twenty percent'?",
          "options": ["根据最近的数据分析，我们的收益增长了百分之二十 (gēn ju zuì jìn de shù ju fēn xi, wǒ men de shōu yi zēng zhǎng le bǎi fēn zhī èr shi)", "数据分析收益 (shù ju fēn xi shōu yi)", "增长百分之二十 (zēng zhǎng bǎi fēn zhī èr shi)", "收益增长 (shōu yi zēng zhǎng)"],
          "translation": "According to recent data analysis, our revenue increased by twenty percent",
          "languageCode": "zh",
          "romanization": "gēn ju zuì jìn de shù ju fēn xi, wǒ men de shōu yi zēng zhǎng le bǎi fēn zhī èr shi",
          "correctAnswer": "根据最近的数据分析，我们的收益增长了百分之二十 (gēn ju zuì jìn de shù ju fēn xi, wǒ men de shōu yi zēng zhǎng le bǎi fēn zhī èr shi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "虽然成本有所上升，但利润仍然保持在一个健康的水平",
          "prompt": "How do you balance positive and negative factors: 'Although costs have risen, profit remains at a healthy level'?",
          "options": ["虽然成本有所上升，但利润仍然保持在一个健康的水平 (suī rán chéng běn yǒu suo shàng shēng, dàn lì run reng rán bǎo chi zài yi ge jiàn kāng de shuǐ píng)", "成本利润 (chéng běn lì run)", "保持水平 (bǎo chi shuǐ píng)", "健康上升 (jiàn kāng shàng shēng)"],
          "translation": "Although costs have risen, profit remains at a healthy level",
          "languageCode": "zh",
          "romanization": "suī rán chéng běn yǒu suo shàng shēng, dàn lì run reng rán bǎo chi zài yi ge jiàn kāng de shuǐ píng",
          "correctAnswer": "虽然成本有所上升，但利润仍然保持在一个健康的水平 (suī rán chéng běn yǒu suo shàng shēng, dàn lì run reng rán bǎo chi zài yi ge jiàn kāng de shuǐ píng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我们需要仔细评估这个新投资可能带来的风险",
          "prompt": "How do you discuss risk assessment: 'We need to carefully evaluate the risks this new investment might bring'?",
          "options": ["我们需要仔细评估这个新投资可能带来的风险 (wǒ men xu yao zi xi píng gu zhè ge xīn tou zi kě néng dài lái de fēng xiǎn)", "评估风险 (píng gu fēng xiǎn)", "投资风险 (tou zi fēng xiǎn)", "仔细评估 (zi xi píng gu)"],
          "translation": "We need to carefully evaluate the risks this new investment might bring",
          "languageCode": "zh",
          "romanization": "wǒ men xu yao zi xi píng gu zhè ge xīn tou zi kě néng dài lái de fēng xiǎn",
          "correctAnswer": "我们需要仔细评估这个新投资可能带来的风险 (wǒ men xu yao zi xi píng gu zhè ge xīn tou zi kě néng dài lái de fēng xiǎn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "合同中的关键条款涉及双方的权利和义务",
          "prompt": "How do you describe contract essentials: 'The key clauses in the contract involve both parties' rights and obligations'?",
          "options": ["合同中的关键条款涉及双方的权利和义务 (hé tong zhong de guān jiàn tiáo kuǎn shè ji shuang fāng de quán li he yi wu)", "关键条款 (guān jiàn tiáo kuǎn)", "权利义务 (quán li yi wu)", "双方条款 (shuang fāng tiáo kuǎn)"],
          "translation": "The key clauses in the contract involve both parties' rights and obligations",
          "languageCode": "zh",
          "romanization": "hé tong zhong de guān jiàn tiáo kuǎn shè ji shuang fāng de quán li he yi wu",
          "correctAnswer": "合同中的关键条款涉及双方的权利和义务 (hé tong zhong de guān jiàn tiáo kuǎn shè ji shuang fāng de quán li he yi wu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "协议",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Agreement", "Contract", "Deal", "Understanding"],
          "translation": "Agreement",
          "languageCode": "zh",
          "romanization": "xié yi",
          "correctAnswer": "Agreement",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "谈判",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Negotiation", "Discussion", "Bargaining", "Talk"],
          "translation": "Negotiation",
          "languageCode": "zh",
          "romanization": "tán pàn",
          "correctAnswer": "Negotiation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "收益",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Revenue", "Income", "Profit", "Return"],
          "translation": "Revenue",
          "languageCode": "zh",
          "romanization": "shōu yi",
          "correctAnswer": "Revenue",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "成本",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Cost", "Expense", "Price", "Fee"],
          "translation": "Cost",
          "languageCode": "zh",
          "romanization": "chéng běn",
          "correctAnswer": "Cost",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "利润",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Profit", "Earnings", "Gain", "Margin"],
          "translation": "Profit",
          "languageCode": "zh",
          "romanization": "lì run",
          "correctAnswer": "Profit",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "风险",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Risk", "Danger", "Hazard", "Peril"],
          "translation": "Risk",
          "languageCode": "zh",
          "romanization": "fēng xiǎn",
          "correctAnswer": "Risk",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我们提议在下个季度开始这个项目的谈判",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["We propose beginning negotiations for this project next quarter", "Start negotiations", "Next quarter project", "Begin proposal"],
          "translation": "We propose beginning negotiations for this project next quarter",
          "languageCode": "zh",
          "romanization": "wǒ men tí yi zài xià ge jì du kāi shi zhè ge xiàng mu de tán pàn",
          "correctAnswer": "We propose beginning negotiations for this project next quarter",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "根据最近的数据分析，我们的收益增长了百分之二十",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["According to recent data analysis, our revenue increased by twenty percent", "Revenue increased", "Data shows growth", "Twenty percent growth"],
          "translation": "According to recent data analysis, our revenue increased by twenty percent",
          "languageCode": "zh",
          "romanization": "gēn ju zuì jìn de shù ju fēn xi, wǒ men de shōu yi zēng zhǎng le bǎi fēn zhī èr shi",
          "correctAnswer": "According to recent data analysis, our revenue increased by twenty percent",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "虽然成本有所上升，但利润仍然保持在一个健康的水平",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Although costs rise, profit remains at a healthy level", "Costs increasing", "Healthy profit", "Cost and profit"],
          "translation": "Although costs rise, profit remains at a healthy level",
          "languageCode": "zh",
          "romanization": "suī rán chéng běn yǒu suo shàng shēng, dàn lì run reng rán bǎo chi zài yi ge jiàn kāng de shuǐ píng",
          "correctAnswer": "Although costs rise, profit remains at a healthy level",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我们需要仔细评估这个新投资可能带来的风险",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["We need to carefully assess risks from this new investment", "Risk assessment", "New investment", "Evaluate risks"],
          "translation": "We need to carefully assess risks from this new investment",
          "languageCode": "zh",
          "romanization": "wǒ men xu yao zi xi píng gu zhè ge xīn tou zi kě néng dài lái de fēng xiǎn",
          "correctAnswer": "We need to carefully assess risks from this new investment",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "合同中的关键条款涉及双方的权利和义务",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Key contract clauses define both parties' rights and obligations", "Contract terms", "Rights and duties", "Key clauses"],
          "translation": "Key contract clauses define both parties' rights and obligations",
          "languageCode": "zh",
          "romanization": "hé tong zhong de guān jiàn tiáo kuǎn shè ji shuang fāng de quán li he yi wu",
          "correctAnswer": "Key contract clauses define both parties' rights and obligations",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "协议",
          "prompt": "Write the Chinese characters for 'Agreement'",
          "options": ["协议", "议协", "协", "议"],
          "translation": "Agreement",
          "languageCode": "zh",
          "romanization": "xié yi",
          "correctAnswer": "协议",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "谈判",
          "prompt": "Write the Chinese characters for 'Negotiation'",
          "options": ["谈判", "判谈", "谈", "判"],
          "translation": "Negotiation",
          "languageCode": "zh",
          "romanization": "tán pàn",
          "correctAnswer": "谈判",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "收益",
          "prompt": "Write the Chinese characters for 'Revenue'",
          "options": ["收益", "益收", "收", "益"],
          "translation": "Revenue",
          "languageCode": "zh",
          "romanization": "shōu yi",
          "correctAnswer": "收益",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "成本",
          "prompt": "Write the Chinese characters for 'Cost'",
          "options": ["成本", "本成", "成", "本"],
          "translation": "Cost",
          "languageCode": "zh",
          "romanization": "chéng běn",
          "correctAnswer": "成本",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "风险",
          "prompt": "Write the Chinese characters for 'Risk'",
          "options": ["风险", "险风", "风", "险"],
          "translation": "Risk",
          "languageCode": "zh",
          "romanization": "fēng xiǎn",
          "correctAnswer": "风险",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: NEWS ANALYSIS =====
  {
    lessonId: 'zh-stage8-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "报道",
          "prompt": "What does this word mean?",
          "options": ["Report", "Coverage", "News coverage", "Story"],
          "translation": "Report",
          "languageCode": "zh",
          "romanization": "bào dào",
          "correctAnswer": "Report",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "头条",
          "prompt": "What does this word mean?",
          "options": ["Headline", "Top story", "Breaking news", "Main news"],
          "translation": "Headline",
          "languageCode": "zh",
          "romanization": "tóu tiáo",
          "correctAnswer": "Headline",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "媒体",
          "prompt": "What does this word mean?",
          "options": ["Media", "Press", "News organization", "Channel"],
          "translation": "Media",
          "languageCode": "zh",
          "romanization": "méi ti",
          "correctAnswer": "Media",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "采访",
          "prompt": "What does this word mean?",
          "options": ["Interview", "Investigate", "Survey", "Cover"],
          "translation": "Interview",
          "languageCode": "zh",
          "romanization": "cǎi fǎng",
          "correctAnswer": "Interview",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "证实",
          "prompt": "What does this verb mean?",
          "options": ["Confirm", "Verify", "Corroborate", "Substantiate"],
          "translation": "Confirm",
          "languageCode": "zh",
          "romanization": "zhèng shi",
          "correctAnswer": "Confirm",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "评论",
          "prompt": "What does this word mean?",
          "options": ["Comment", "Commentary", "Review", "Critique"],
          "translation": "Comment",
          "languageCode": "zh",
          "romanization": "píng lùn",
          "correctAnswer": "Comment",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "影响",
          "prompt": "What does this word mean?",
          "options": ["Impact", "Effect", "Influence", "Consequence"],
          "translation": "Impact",
          "languageCode": "zh",
          "romanization": "yǐng xiǎng",
          "correctAnswer": "Impact",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "趋势",
          "prompt": "What does this word mean?",
          "options": ["Trend", "Tendency", "Direction", "Pattern"],
          "translation": "Trend",
          "languageCode": "zh",
          "romanization": "qu shi",
          "correctAnswer": "Trend",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "据多家媒体报道，这个重要的经济协议已经达成",
          "prompt": "How do you cite multiple sources: 'According to multiple media reports, this important economic agreement has been reached'?",
          "options": ["据多家媒体报道，这个重要的经济协议已经达成 (ju duō jiā méi ti bào dào, zhè ge zhòng yào de jīng ji xié yi yǐ jing dá chéng)", "媒体报道 (méi ti bào dào)", "经济协议达成 (jīng ji xié yi dá chéng)", "重要协议 (zhòng yào xié yi)"],
          "translation": "According to multiple media reports, this important economic agreement has been reached",
          "languageCode": "zh",
          "romanization": "ju duō jiā méi ti bào dào, zhè ge zhòng yào de jīng ji xié yi yǐ jing dá chéng",
          "correctAnswer": "据多家媒体报道，这个重要的经济协议已经达成 (ju duō jiā méi ti bào dào, zhè ge zhòng yào de jīng ji xié yi yǐ jing dá chéng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "为了验证这则头条新闻，我们采访了事件的相关人士",
          "prompt": "How do you describe investigation: 'To verify this headline, we interviewed relevant parties involved in the incident'?",
          "options": ["为了验证这则头条新闻，我们采访了事件的相关人士 (wèi le yàn zhèng zhè ze tóu tiáo xīn wén, wǒ men cǎi fǎng le shì jiàn de xiāng guān rén shi)", "验证头条 (yàn zhèng tóu tiáo)", "采访人士 (cǎi fǎng rén shi)", "事件采访 (shì jiàn cǎi fǎng)"],
          "translation": "To verify this headline, we interviewed relevant parties involved in the incident",
          "languageCode": "zh",
          "romanization": "wèi le yàn zhèng zhè ze tóu tiáo xīn wén, wǒ men cǎi fǎng le shì jiàn de xiāng guān rén shi",
          "correctAnswer": "为了验证这则头条新闻，我们采访了事件的相关人士 (wèi le yàn zhèng zhè ze tóu tiáo xīn wén, wǒ men cǎi fǎng le shì jiàn de xiāng guān rén shi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这份报告证实了之前的预测，并分析了可能产生的长期影响",
          "prompt": "How do you connect confirmation with analysis: 'This report confirms previous predictions and analyzes possible long-term impacts'?",
          "options": ["这份报告证实了之前的预测，并分析了可能产生的长期影响 (zhè fen bào gào zhèng shi le zhī qián de yu ce, bing fēn xi le kě néng chǎn shēng de cháng qi yǐng xiǎng)", "证实预测 (zhèng shi yu ce)", "分析影响 (fēn xi yǐng xiǎng)", "长期影响 (cháng qi yǐng xiǎng)"],
          "translation": "This report confirms previous predictions and analyzes possible long-term impacts",
          "languageCode": "zh",
          "romanization": "zhè fen bào gào zhèng shi le zhī qián de yu ce, bing fēn xi le kě néng chǎn shēng de cháng qi yǐng xiǎng",
          "correctAnswer": "这份报告证实了之前的预测，并分析了可能产生的长期影响 (zhè fen bào gào zhèng shi le zhī qián de yu ce, bing fēn xi le kě néng chǎn shēng de cháng qi yǐng xiǎng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "一些专家在评论中指出，这个趋势可能改变整个行业的格局",
          "prompt": "How do you report expert commentary: 'Some experts point out in their comments that this trend may change the industry landscape'?",
          "options": ["一些专家在评论中指出，这个趋势可能改变整个行业的格局 (yi xiē zhuān jiā zài píng lùn zhong zhǐ chu, zhè ge qu shi kě néng gǎi biàn zhěng ge háng ye de gé ju)", "专家评论 (zhuān jiā píng lùn)", "趋势改变 (qu shi gǎi biàn)", "行业格局 (háng ye gé ju)"],
          "translation": "Some experts point out in their comments that this trend may change the industry landscape",
          "languageCode": "zh",
          "romanization": "yi xiē zhuān jiā zài píng lùn zhong zhǐ chu, zhè ge qu shi kě néng gǎi biàn zhěng ge háng ye de gé ju",
          "correctAnswer": "一些专家在评论中指出，这个趋势可能改变整个行业的格局 (yi xiē zhuān jiā zài píng lùn zhong zhǐ chu, zhè ge qu shi kě néng gǎi biàn zhěng ge háng ye de gé ju)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "虽然报道详尽，但仍然有一些细节需要进一步的澄清",
          "prompt": "How do you note incomplete information: 'Although the report is detailed, some details still need further clarification'?",
          "options": ["虽然报道详尽，但仍然有一些细节需要进一步的澄清 (suī rán bào dào xiáng jin, dàn reng rán yǒu yi xiē xi jié xu yao jin yi bu de chéng qīng)", "报道详尽 (bào dào xiáng jin)", "细节澄清 (xi jié chéng qīng)", "进一步澄清 (jin yi bu chéng qīng)"],
          "translation": "Although the report is detailed, some details still need further clarification",
          "languageCode": "zh",
          "romanization": "suī rán bào dào xiáng jin, dàn reng rán yǒu yi xiē xi jié xu yao jin yi bu de chéng qīng",
          "correctAnswer": "虽然报道详尽，但仍然有一些细节需要进一步的澄清 (suī rán bào dào xiáng jin, dàn reng rán yǒu yi xiē xi jié xu yao jin yi bu de chéng qīng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "报道",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Report", "Coverage", "News coverage", "Story"],
          "translation": "Report",
          "languageCode": "zh",
          "romanization": "bào dào",
          "correctAnswer": "Report",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "头条",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Headline", "Top story", "Breaking news", "Main news"],
          "translation": "Headline",
          "languageCode": "zh",
          "romanization": "tóu tiáo",
          "correctAnswer": "Headline",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "证实",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Confirm", "Verify", "Corroborate", "Substantiate"],
          "translation": "Confirm",
          "languageCode": "zh",
          "romanization": "zhèng shi",
          "correctAnswer": "Confirm",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "影响",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Impact", "Effect", "Influence", "Consequence"],
          "translation": "Impact",
          "languageCode": "zh",
          "romanization": "yǐng xiǎng",
          "correctAnswer": "Impact",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "趋势",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Trend", "Tendency", "Direction", "Pattern"],
          "translation": "Trend",
          "languageCode": "zh",
          "romanization": "qu shi",
          "correctAnswer": "Trend",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "媒体",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Media", "Press", "News organization", "Channel"],
          "translation": "Media",
          "languageCode": "zh",
          "romanization": "méi ti",
          "correctAnswer": "Media",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "据多家媒体报道，这个重要的经济协议已经达成",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["According to various media reports, this important economic agreement has been reached", "Media reports agreement", "Economic deal reached", "Multiple sources report"],
          "translation": "According to various media reports, this important economic agreement has been reached",
          "languageCode": "zh",
          "romanization": "ju duō jiā méi ti bào dào, zhè ge zhòng yào de jīng ji xié yi yǐ jing dá chéng",
          "correctAnswer": "According to various media reports, this important economic agreement has been reached",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "为了验证这则头条新闻，我们采访了事件的相关人士",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["To verify this headline, we interviewed relevant parties in the incident", "Verify headline", "Interview people", "News verification"],
          "translation": "To verify this headline, we interviewed relevant parties in the incident",
          "languageCode": "zh",
          "romanization": "wèi le yàn zhèng zhè ze tóu tiáo xīn wén, wǒ men cǎi fǎng le shì jiàn de xiāng guān rén shi",
          "correctAnswer": "To verify this headline, we interviewed relevant parties in the incident",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这份报告证实了之前的预测，并分析了可能产生的长期影响",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This report confirms predictions and analyzes possible long-term impacts", "Confirms prediction", "Long-term effects", "Analysis report"],
          "translation": "This report confirms predictions and analyzes possible long-term impacts",
          "languageCode": "zh",
          "romanization": "zhè fen bào gào zhèng shi le zhī qián de yu ce, bing fēn xi le kě néng chǎn shēng de cháng qi yǐng xiǎng",
          "correctAnswer": "This report confirms predictions and analyzes possible long-term impacts",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "一些专家在评论中指出，这个趋势可能改变整个行业的格局",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Experts point out this trend may change the industry landscape", "Expert opinion", "Industry change", "Trend analysis"],
          "translation": "Experts point out this trend may change the industry landscape",
          "languageCode": "zh",
          "romanization": "yi xiē zhuān jiā zài píng lùn zhong zhǐ chu, zhè ge qu shi kě néng gǎi biàn zhěng ge háng ye de gé ju",
          "correctAnswer": "Experts point out this trend may change the industry landscape",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "虽然报道详尽，但仍然有一些细节需要进一步的澄清",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Although detailed, the report still needs further clarification on some details", "Detailed report", "Need clarification", "More details needed"],
          "translation": "Although detailed, the report still needs further clarification on some details",
          "languageCode": "zh",
          "romanization": "suī rán bào dào xiáng jin, dàn reng rán yǒu yi xiē xi jié xu yao jin yi bu de chéng qīng",
          "correctAnswer": "Although detailed, the report still needs further clarification on some details",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "报道",
          "prompt": "Write the Chinese characters for 'Report'",
          "options": ["报道", "道报", "报", "道"],
          "translation": "Report",
          "languageCode": "zh",
          "romanization": "bào dào",
          "correctAnswer": "报道",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "头条",
          "prompt": "Write the Chinese characters for 'Headline'",
          "options": ["头条", "条头", "头", "条"],
          "translation": "Headline",
          "languageCode": "zh",
          "romanization": "tóu tiáo",
          "correctAnswer": "头条",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "证实",
          "prompt": "Write the Chinese characters for 'Confirm'",
          "options": ["证实", "实证", "证", "实"],
          "translation": "Confirm",
          "languageCode": "zh",
          "romanization": "zhèng shi",
          "correctAnswer": "证实",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "影响",
          "prompt": "Write the Chinese characters for 'Impact'",
          "options": ["影响", "响影", "影", "响"],
          "translation": "Impact",
          "languageCode": "zh",
          "romanization": "yǐng xiǎng",
          "correctAnswer": "影响",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "趋势",
          "prompt": "Write the Chinese characters for 'Trend'",
          "options": ["趋势", "势趋", "趋", "势"],
          "translation": "Trend",
          "languageCode": "zh",
          "romanization": "qu shi",
          "correctAnswer": "趋势",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: DEBATE & ARGUMENTATION =====
  {
    lessonId: 'zh-stage8-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "论点",
          "prompt": "What does this word mean?",
          "options": ["Argument", "Thesis", "Claim", "Position"],
          "translation": "Argument",
          "languageCode": "zh",
          "romanization": "lùn diǎn",
          "correctAnswer": "Argument",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "证据",
          "prompt": "What does this word mean?",
          "options": ["Evidence", "Proof", "Support", "Testimony"],
          "translation": "Evidence",
          "languageCode": "zh",
          "romanization": "zhèng ju",
          "correctAnswer": "Evidence",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "反驳",
          "prompt": "What does this verb mean?",
          "options": ["Rebut", "Counter", "Refute", "Argue against"],
          "translation": "Rebut",
          "languageCode": "zh",
          "romanization": "fǎn bo",
          "correctAnswer": "Rebut",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "立场",
          "prompt": "What does this word mean?",
          "options": ["Stance", "Position", "Stand", "Point of view"],
          "translation": "Stance",
          "languageCode": "zh",
          "romanization": "li chǎng",
          "correctAnswer": "Stance",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "逻辑",
          "prompt": "What does this word mean?",
          "options": ["Logic", "Reasoning", "Rationale", "Sequence"],
          "translation": "Logic",
          "languageCode": "zh",
          "romanization": "luó ji",
          "correctAnswer": "Logic",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "论证",
          "prompt": "What does this noun/verb mean?",
          "options": ["Argumentation", "Prove", "Justify", "Demonstrate"],
          "translation": "Argumentation",
          "languageCode": "zh",
          "romanization": "lùn zhèng",
          "correctAnswer": "Argumentation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "结论",
          "prompt": "What does this word mean?",
          "options": ["Conclusion", "Outcome", "Result", "Finding"],
          "translation": "Conclusion",
          "languageCode": "zh",
          "romanization": "jié lùn",
          "correctAnswer": "Conclusion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "前提",
          "prompt": "What does this word mean?",
          "options": ["Premise", "Assumption", "Precondition", "Foundation"],
          "translation": "Premise",
          "languageCode": "zh",
          "romanization": "qián ti",
          "correctAnswer": "Premise",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "第一个论点是基于以下前提：市场需求正在快速增长",
          "prompt": "How do you introduce an argument: 'The first argument is based on the following premise: market demand is growing rapidly'?",
          "options": ["第一个论点是基于以下前提：市场需求正在快速增长 (di yi ge lùn diǎn shì ji yu yi xià qián ti: shì chǎng xu qiú zheng zài kuài su zēng zhǎng)", "论点前提 (lùn diǎn qián ti)", "市场需求增长 (shì chǎng xu qiú zēng zhǎng)", "基于前提 (ji yu qián ti)"],
          "translation": "The first argument is based on the following premise: market demand is growing rapidly",
          "languageCode": "zh",
          "romanization": "di yi ge lùn diǎn shì ji yu yi xià qián ti: shì chǎng xu qiú zheng zài kuài su zēng zhǎng",
          "correctAnswer": "第一个论点是基于以下前提：市场需求正在快速增长 (di yi ge lùn diǎn shì ji yu yi xià qián ti: shì chǎng xu qiú zheng zài kuài su zēng zhǎng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "为了论证这个观点，我们可以引用以下证据",
          "prompt": "How do you introduce evidence: 'To support this viewpoint, we can cite the following evidence'?",
          "options": ["为了论证这个观点，我们可以引用以下证据 (wèi le lùn zhèng zhè ge guān diǎn, wǒ men kě yi yǐn yòng yi xià zhèng ju)", "论证观点 (lùn zhèng guān diǎn)", "引用证据 (yǐn yòng zhèng ju)", "证据支持 (zhèng ju zhī chi)"],
          "translation": "To support this viewpoint, we can cite the following evidence",
          "languageCode": "zh",
          "romanization": "wèi le lùn zhèng zhè ge guān diǎn, wǒ men kě yi yǐn yòng yi xià zhèng ju",
          "correctAnswer": "为了论证这个观点，我们可以引用以下证据 (wèi le lùn zhèng zhè ge guān diǎn, wǒ men kě yi yǐn yòng yi xià zhèng ju)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "虽然对方的论点有一定的合理性，但我们必须反驳他们的主要推理",
          "prompt": "How do you acknowledge counterpoint while rebutting: 'Although the other side's argument has some merit, we must refute their main reasoning'?",
          "options": ["虽然对方的论点有一定的合理性，但我们必须反驳他们的主要推理 (suī rán duì fāng de lùn diǎn yǒu yi ding de he li xing, dàn wǒ men bi xu fǎn bo tā men de zhǔ yào tuī li)", "论点合理 (lùn diǎn he li)", "反驳推理 (fǎn bo tuī li)", "主要推理 (zhǔ yào tuī li)"],
          "translation": "Although the other side's argument has some merit, we must refute their main reasoning",
          "languageCode": "zh",
          "romanization": "suī rán duì fāng de lùn diǎn yǒu yi ding de he li xing, dàn wǒ men bi xu fǎn bo tā men de zhǔ yào tuī li",
          "correctAnswer": "虽然对方的论点有一定的合理性，但我们必须反驳他们的主要推理 (suī rán duì fāng de lùn diǎn yǒu yi ding de he li xing, dàn wǒ men bi xu fǎn bo tā men de zhǔ yào tuī li)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "基于以上的逻辑分析，我们可以得出以下结论",
          "prompt": "How do you conclude an argument: 'Based on the above logical analysis, we can draw the following conclusion'?",
          "options": ["基于以上的逻辑分析，我们可以得出以下结论 (ji yu yi shàng de luó ji fēn xi, wǒ men kě yi dé chu yi xià jié lùn)", "逻辑分析 (luó ji fēn xi)", "得出结论 (dé chu jié lùn)", "以上分析 (yi shàng fēn xi)"],
          "translation": "Based on the above logical analysis, we can draw the following conclusion",
          "languageCode": "zh",
          "romanization": "ji yu yi shàng de luó ji fēn xi, wǒ men kě yi dé chu yi xià jié lùn",
          "correctAnswer": "基于以上的逻辑分析，我们可以得出以下结论 (ji yu yi shàng de luó ji fēn xi, wǒ men kě yi dé chu yi xià jié lùn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个立场与之前的研究结果相符，因此更加可信",
          "prompt": "How do you support your stance with research: 'This stance aligns with previous research results, and therefore is more credible'?",
          "options": ["这个立场与之前的研究结果相符，因此更加可信 (zhè ge li chǎng yu zhī qián de yan jiu jié guo xiāng fu, yin ci gèng jiā ke xìn)", "立场相符 (li chǎng xiāng fu)", "研究结果 (yan jiu jié guo)", "可信结果 (ke xìn jié guo)"],
          "translation": "This stance aligns with previous research results, and therefore is more credible",
          "languageCode": "zh",
          "romanization": "zhè ge li chǎng yu zhī qián de yan jiu jié guo xiāng fu, yin ci gèng jiā ke xìn",
          "correctAnswer": "这个立场与之前的研究结果相符，因此更加可信 (zhè ge li chǎng yu zhī qián de yan jiu jié guo xiāng fu, yin ci gèng jiā ke xìn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "论点",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Argument", "Thesis", "Claim", "Position"],
          "translation": "Argument",
          "languageCode": "zh",
          "romanization": "lùn diǎn",
          "correctAnswer": "Argument",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "证据",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Evidence", "Proof", "Support", "Testimony"],
          "translation": "Evidence",
          "languageCode": "zh",
          "romanization": "zhèng ju",
          "correctAnswer": "Evidence",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "反驳",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Rebut", "Counter", "Refute", "Argue against"],
          "translation": "Rebut",
          "languageCode": "zh",
          "romanization": "fǎn bo",
          "correctAnswer": "Rebut",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "结论",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Conclusion", "Outcome", "Result", "Finding"],
          "translation": "Conclusion",
          "languageCode": "zh",
          "romanization": "jié lùn",
          "correctAnswer": "Conclusion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "逻辑",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Logic", "Reasoning", "Rationale", "Sequence"],
          "translation": "Logic",
          "languageCode": "zh",
          "romanization": "luó ji",
          "correctAnswer": "Logic",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "立场",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Stance", "Position", "Stand", "Point of view"],
          "translation": "Stance",
          "languageCode": "zh",
          "romanization": "li chǎng",
          "correctAnswer": "Stance",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "第一个论点是基于以下前提：市场需求正在快速增长",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The first argument is based on this premise: market demand is growing rapidly", "Market demand growing", "First argument", "Based on premise"],
          "translation": "The first argument is based on this premise: market demand is growing rapidly",
          "languageCode": "zh",
          "romanization": "di yi ge lùn diǎn shì ji yu yi xià qián ti: shì chǎng xu qiú zheng zài kuài su zēng zhǎng",
          "correctAnswer": "The first argument is based on this premise: market demand is growing rapidly",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "为了论证这个观点，我们可以引用以下证据",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["To support this viewpoint, we can cite the following evidence", "Support viewpoint", "Evidence citation", "Proof provided"],
          "translation": "To support this viewpoint, we can cite the following evidence",
          "languageCode": "zh",
          "romanization": "wèi le lùn zhèng zhè ge guān diǎn, wǒ men kě yi yǐn yòng yi xià zhèng ju",
          "correctAnswer": "To support this viewpoint, we can cite the following evidence",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "虽然对方的论点有一定的合理性，但我们必须反驳他们的主要推理",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Although their argument has merit, we must refute their main reasoning", "Their points valid", "Counterargument necessary", "Refute reasoning"],
          "translation": "Although their argument has merit, we must refute their main reasoning",
          "languageCode": "zh",
          "romanization": "suī rán duì fāng de lùn diǎn yǒu yi ding de he li xing, dàn wǒ men bi xu fǎn bo tā men de zhǔ yào tuī li",
          "correctAnswer": "Although their argument has merit, we must refute their main reasoning",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "基于以上的逻辑分析，我们可以得出以下结论",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Based on the above logical analysis, we can reach this conclusion", "Analysis conclusion", "Logical reasoning", "Final conclusion"],
          "translation": "Based on the above logical analysis, we can reach this conclusion",
          "languageCode": "zh",
          "romanization": "ji yu yi shàng de luó ji fēn xi, wǒ men kě yi dé chu yi xià jié lùn",
          "correctAnswer": "Based on the above logical analysis, we can reach this conclusion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个立场与之前的研究结果相符，因此更加可信",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This stance aligns with previous research, making it more credible", "Research supports", "Aligned with studies", "More credible stance"],
          "translation": "This stance aligns with previous research, making it more credible",
          "languageCode": "zh",
          "romanization": "zhè ge li chǎng yu zhī qián de yan jiu jié guo xiāng fu, yin ci gèng jiā ke xìn",
          "correctAnswer": "This stance aligns with previous research, making it more credible",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "论点",
          "prompt": "Write the Chinese characters for 'Argument'",
          "options": ["论点", "点论", "论", "点"],
          "translation": "Argument",
          "languageCode": "zh",
          "romanization": "lùn diǎn",
          "correctAnswer": "论点",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "证据",
          "prompt": "Write the Chinese characters for 'Evidence'",
          "options": ["证据", "据证", "证", "据"],
          "translation": "Evidence",
          "languageCode": "zh",
          "romanization": "zhèng ju",
          "correctAnswer": "证据",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "反驳",
          "prompt": "Write the Chinese characters for 'Rebut'",
          "options": ["反驳", "驳反", "反", "驳"],
          "translation": "Rebut",
          "languageCode": "zh",
          "romanization": "fǎn bo",
          "correctAnswer": "反驳",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "结论",
          "prompt": "Write the Chinese characters for 'Conclusion'",
          "options": ["结论", "论结", "结", "论"],
          "translation": "Conclusion",
          "languageCode": "zh",
          "romanization": "jié lùn",
          "correctAnswer": "结论",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "立场",
          "prompt": "Write the Chinese characters for 'Stance'",
          "options": ["立场", "场立", "立", "场"],
          "translation": "Stance",
          "languageCode": "zh",
          "romanization": "li chǎng",
          "correctAnswer": "立场",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: PROFESSIONAL PROTOCOL & ETIQUETTE =====
  {
    lessonId: 'zh-stage8-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "仪式",
          "prompt": "What does this word mean?",
          "options": ["Ceremony", "Ritual", "Formality", "Protocol"],
          "translation": "Ceremony",
          "languageCode": "zh",
          "romanization": "yi shi",
          "correctAnswer": "Ceremony",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "流程",
          "prompt": "What does this word mean?",
          "options": ["Process", "Procedure", "Workflow", "Sequence"],
          "translation": "Process",
          "languageCode": "zh",
          "romanization": "liu chéng",
          "correctAnswer": "Process",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "参与",
          "prompt": "What does this verb mean?",
          "options": ["Participate", "Join", "Attend", "Engage"],
          "translation": "Participate",
          "languageCode": "zh",
          "romanization": "cān yu",
          "correctAnswer": "Participate",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "邀请",
          "prompt": "What does this word mean?",
          "options": ["Invitation", "Invite", "Request attendance", "Summon"],
          "translation": "Invitation",
          "languageCode": "zh",
          "romanization": "yāo qing",
          "correctAnswer": "Invitation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "出席",
          "prompt": "What does this verb mean?",
          "options": ["Attend", "Be present", "Show up", "Participate"],
          "translation": "Attend",
          "languageCode": "zh",
          "romanization": "chu xi",
          "correctAnswer": "Attend",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "审议",
          "prompt": "What does this verb mean?",
          "options": ["Deliberate", "Review", "Consider", "Examine"],
          "translation": "Deliberate",
          "languageCode": "zh",
          "romanization": "shěn yi",
          "correctAnswer": "Deliberate",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "表决",
          "prompt": "What does this noun/verb mean?",
          "options": ["Vote", "Voting", "Cast vote", "Poll"],
          "translation": "Vote",
          "languageCode": "zh",
          "romanization": "biǎo jue",
          "correctAnswer": "Vote",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "通过",
          "prompt": "What does this verb mean?",
          "options": ["Pass", "Approved", "Go through", "Adopt"],
          "translation": "Pass",
          "languageCode": "zh",
          "romanization": "tong guo",
          "correctAnswer": "Pass",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "会议流程包括发言、讨论和表决三个主要环节",
          "prompt": "How do you describe meeting structure: 'The meeting process includes three main stages: speeches, discussion, and voting'?",
          "options": ["会议流程包括发言、讨论和表决三个主要环节 (huì yi liu chéng bāo kuò fā yan, tao lùn he biǎo jue sān ge zhǔ yào huán jié)", "会议流程 (huì yi liu chéng)", "发言讨论 (fā yan tao lùn)", "三个环节 (sān ge huán jié)"],
          "translation": "The meeting process includes three main stages: speeches, discussion, and voting",
          "languageCode": "zh",
          "romanization": "huì yi liu chéng bāo kuò fā yan, tao lùn he biǎo jue sān ge zhǔ yào huán jié",
          "correctAnswer": "会议流程包括发言、讨论和表决三个主要环节 (huì yi liu chéng bāo kuò fā yan, tao lùn he biǎo jue sān ge zhǔ yào huán jié)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我们诚挚地邀请您参与这次重要的商务会议",
          "prompt": "How do you extend a formal invitation: 'We cordially invite you to participate in this important business meeting'?",
          "options": ["我们诚挚地邀请您参与这次重要的商务会议 (wǒ men chéng zhi de yāo qing nin cān yu zhè ci zhòng yào de shang wu huì yi)", "邀请参与 (yāo qing cān yu)", "商务会议 (shang wu huì yi)", "诚挚邀请 (chéng zhi yāo qing)"],
          "translation": "We cordially invite you to participate in this important business meeting",
          "languageCode": "zh",
          "romanization": "wǒ men chéng zhi de yāo qing nin cān yu zhè ci zhòng yào de shang wu huì yi",
          "correctAnswer": "我们诚挚地邀请您参与这次重要的商务会议 (wǒ men chéng zhi de yāo qing nin cān yu zhè ci zhòng yào de shang wu huì yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "在表决之前，所有的参与者都有机会提出自己的观点",
          "prompt": "How do you describe democratic process: 'Before voting, all participants have the opportunity to voice their opinions'?",
          "options": ["在表决之前，所有的参与者都有机会提出自己的观点 (zài biǎo jue zhī qián, suǒ yǒu de cān yu zhě dou yǒu ji hui ti chu zi ji de guān diǎn)", "表决前 (biǎo jue qián)", "参与者观点 (cān yu zhě guān diǎn)", "提出观点 (ti chu guān diǎn)"],
          "translation": "Before voting, all participants have the opportunity to voice their opinions",
          "languageCode": "zh",
          "romanization": "zài biǎo jue zhī qián, suǒ yǒu de cān yu zhě dou yǒu ji hui ti chu zi ji de guān diǎn",
          "correctAnswer": "在表决之前，所有的参与者都有机会提出自己的观点 (zài biǎo jue zhī qián, suǒ yǒu de cān yu zhě dou yǒu ji hui ti chu zi ji de guān diǎn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "经过充分的讨论和审议，该提案最终得到了通过",
          "prompt": "How do you describe approval of proposal: 'After thorough discussion and deliberation, the proposal was ultimately approved'?",
          "options": ["经过充分的讨论和审议，该提案最终得到了通过 (jīng guo chong fen de tao lùn he shěn yi, gāi ti àn zuì zhong de dào le tong guo)", "讨论审议 (tao lùn shěn yi)", "提案通过 (ti àn tong guo)", "充分讨论 (chong fen tao lùn)"],
          "translation": "After thorough discussion and deliberation, the proposal was ultimately approved",
          "languageCode": "zh",
          "romanization": "jīng guo chong fen de tao lùn he shěn yi, gāi ti àn zuì zhong de dào le tong guo",
          "correctAnswer": "经过充分的讨论和审议，该提案最终得到了通过 (jīng guo chong fen de tao lùn he shěn yi, gāi ti àn zuì zhong de dào le tong guo)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "为了确保会议的顺利进行，所有参与者都应该遵守相关的会议规则",
          "prompt": "How do you emphasize protocol compliance: 'To ensure the meeting runs smoothly, all participants should follow the relevant meeting rules'?",
          "options": ["为了确保会议的顺利进行，所有参与者都应该遵守相关的会议规则 (wèi le que bao huì yi de shun li jin xíng, suǒ yǒu cān yu zhě dou yīng gāi zun shou xiāng guān de huì yi gui ze)", "确保顺利 (que bao shun li)", "遵守规则 (zun shou gui ze)", "会议进行 (huì yi jin xíng)"],
          "translation": "To ensure the meeting runs smoothly, all participants should follow the relevant meeting rules",
          "languageCode": "zh",
          "romanization": "wèi le que bao huì yi de shun li jin xíng, suǒ yǒu cān yu zhě dou yīng gāi zun shou xiāng guān de huì yi gui ze",
          "correctAnswer": "为了确保会议的顺利进行，所有参与者都应该遵守相关的会议规则 (wèi le que bao huì yi de shun li jin xíng, suǒ yǒu cān yu zhě dou yīng gāi zun shou xiāng guān de huì yi gui ze)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "流程",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Process", "Procedure", "Workflow", "Sequence"],
          "translation": "Process",
          "languageCode": "zh",
          "romanization": "liu chéng",
          "correctAnswer": "Process",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "出席",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Attend", "Be present", "Show up", "Participate"],
          "translation": "Attend",
          "languageCode": "zh",
          "romanization": "chu xi",
          "correctAnswer": "Attend",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "表决",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Vote", "Voting", "Cast vote", "Poll"],
          "translation": "Vote",
          "languageCode": "zh",
          "romanization": "biǎo jue",
          "correctAnswer": "Vote",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "通过",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Pass", "Approved", "Go through", "Adopt"],
          "translation": "Pass",
          "languageCode": "zh",
          "romanization": "tong guo",
          "correctAnswer": "Pass",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "邀请",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Invitation", "Invite", "Request attendance", "Summon"],
          "translation": "Invitation",
          "languageCode": "zh",
          "romanization": "yāo qing",
          "correctAnswer": "Invitation",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "审议",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Deliberate", "Review", "Consider", "Examine"],
          "translation": "Deliberate",
          "languageCode": "zh",
          "romanization": "shěn yi",
          "correctAnswer": "Deliberate",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "会议流程包括发言、讨论和表决三个主要环节",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The meeting includes three stages: presentation, discussion, and voting", "Meeting structure", "Three main parts", "Meeting process"],
          "translation": "The meeting includes three stages: presentation, discussion, and voting",
          "languageCode": "zh",
          "romanization": "huì yi liu chéng bāo kuò fā yan, tao lùn he biǎo jue sān ge zhǔ yào huán jié",
          "correctAnswer": "The meeting includes three stages: presentation, discussion, and voting",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我们诚挚地邀请您参与这次重要的商务会议",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["We cordially invite you to participate in this important business meeting", "Formal invitation", "Business meeting", "Please attend"],
          "translation": "We cordially invite you to participate in this important business meeting",
          "languageCode": "zh",
          "romanization": "wǒ men chéng zhi de yāo qing nin cān yu zhè ci zhòng yào de shang wu huì yi",
          "correctAnswer": "We cordially invite you to participate in this important business meeting",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "在表决之前，所有的参与者都有机会提出自己的观点",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Before voting, all participants can express their views", "Voice opinions", "Before voting", "Participants speak"],
          "translation": "Before voting, all participants can express their views",
          "languageCode": "zh",
          "romanization": "zài biǎo jue zhī qián, suǒ yǒu de cān yu zhě dou yǒu ji hui ti chu zi ji de guān diǎn",
          "correctAnswer": "Before voting, all participants can express their views",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "经过充分的讨论和审议，该提案最终得到了通过",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["After discussion and deliberation, the proposal was approved", "Proposal approved", "Thorough discussion", "Final approval"],
          "translation": "After discussion and deliberation, the proposal was approved",
          "languageCode": "zh",
          "romanization": "jīng guo chong fen de tao lùn he shěn yi, gāi ti àn zuì zhong de dào le tong guo",
          "correctAnswer": "After discussion and deliberation, the proposal was approved",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "为了确保会议的顺利进行，所有参与者都应该遵守相关的会议规则",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["To ensure smooth meetings, all participants should follow the rules", "Meeting rules", "Smooth operation", "Rule compliance"],
          "translation": "To ensure smooth meetings, all participants should follow the rules",
          "languageCode": "zh",
          "romanization": "wèi le que bao huì yi de shun li jin xíng, suǒ yǒu cān yu zhě dou yīng gāi zun shou xiāng guān de huì yi gui ze",
          "correctAnswer": "To ensure smooth meetings, all participants should follow the rules",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "流程",
          "prompt": "Write the Chinese characters for 'Process'",
          "options": ["流程", "程流", "流", "程"],
          "translation": "Process",
          "languageCode": "zh",
          "romanization": "liu chéng",
          "correctAnswer": "流程",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "出席",
          "prompt": "Write the Chinese characters for 'Attend'",
          "options": ["出席", "席出", "出", "席"],
          "translation": "Attend",
          "languageCode": "zh",
          "romanization": "chu xi",
          "correctAnswer": "出席",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "表决",
          "prompt": "Write the Chinese characters for 'Vote'",
          "options": ["表决", "决表", "表", "决"],
          "translation": "Vote",
          "languageCode": "zh",
          "romanization": "biǎo jue",
          "correctAnswer": "表决",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "通过",
          "prompt": "Write the Chinese characters for 'Pass'",
          "options": ["通过", "过通", "通", "过"],
          "translation": "Pass",
          "languageCode": "zh",
          "romanization": "tong guo",
          "correctAnswer": "通过",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "邀请",
          "prompt": "Write the Chinese characters for 'Invitation'",
          "options": ["邀请", "请邀", "邀", "请"],
          "translation": "Invitation",
          "languageCode": "zh",
          "romanization": "yāo qing",
          "correctAnswer": "邀请",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: PROFESSIONAL RELATIONS & COLLABORATION =====
  {
    lessonId: 'zh-stage8-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "合作",
          "prompt": "What does this word mean?",
          "options": ["Collaboration", "Cooperation", "Partnership", "Teamwork"],
          "translation": "Collaboration",
          "languageCode": "zh",
          "romanization": "hé zuo",
          "correctAnswer": "Collaboration",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "伙伴",
          "prompt": "What does this word mean?",
          "options": ["Partner", "Ally", "Associate", "Colleague"],
          "translation": "Partner",
          "languageCode": "zh",
          "romanization": "huǒ ban",
          "correctAnswer": "Partner",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "责任",
          "prompt": "What does this word mean?",
          "options": ["Responsibility", "Duty", "Obligation", "Accountability"],
          "translation": "Responsibility",
          "languageCode": "zh",
          "romanization": "ze ren",
          "correctAnswer": "Responsibility",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "沟通",
          "prompt": "What does this word mean?",
          "options": ["Communication", "Communicate", "Interaction", "Exchange"],
          "translation": "Communication",
          "languageCode": "zh",
          "romanization": "gou tong",
          "correctAnswer": "Communication",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "效率",
          "prompt": "What does this word mean?",
          "options": ["Efficiency", "Effectiveness", "Productivity", "Performance"],
          "translation": "Efficiency",
          "languageCode": "zh",
          "romanization": "xiao lu",
          "correctAnswer": "Efficiency",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "目标",
          "prompt": "What does this word mean?",
          "options": ["Goal", "Objective", "Target", "Aim"],
          "translation": "Goal",
          "languageCode": "zh",
          "romanization": "mu biao",
          "correctAnswer": "Goal",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "互信",
          "prompt": "What does this word mean?",
          "options": ["Mutual trust", "Trust", "Confidence", "Faith"],
          "translation": "Mutual trust",
          "languageCode": "zh",
          "romanization": "hu xin",
          "correctAnswer": "Mutual trust",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "发展",
          "prompt": "What does this word mean?",
          "options": ["Development", "Progress", "Evolution", "Growth"],
          "translation": "Development",
          "languageCode": "zh",
          "romanization": "fa zhan",
          "correctAnswer": "Development",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我们相信，通过密切的合作和互相尊重，可以实现共同的目标",
          "prompt": "How do you express shared goals: 'We believe that through close collaboration and mutual respect, we can achieve our common goals'?",
          "options": ["我们相信，通过密切的合作和互相尊重，可以实现共同的目标 (wǒ men xiāng xin, tong guo mi qie de hé zuo he hu xiāng zun zhong, kě yi shi xiàn gong tong de mu biao)", "合作尊重 (hé zuo zun zhong)", "共同目标 (gong tong mu biao)", "实现目标 (shi xiàn mu biao)"],
          "translation": "We believe that through close collaboration and mutual respect, we can achieve our common goals",
          "languageCode": "zh",
          "romanization": "wǒ men xiāng xin, tong guo mi qie de hé zuo he hu xiāng zun zhong, kě yi shi xiàn gong tong de mu biao",
          "correctAnswer": "我们相信，通过密切的合作和互相尊重，可以实现共同的目标 (wǒ men xiāng xin, tong guo mi qie de hé zuo he hu xiāng zun zhong, kě yi shi xiàn gong tong de mu biao)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "作为长期的伙伴，我们需要定期进行有效的沟通",
          "prompt": "How do you describe partnership requirements: 'As long-term partners, we need to communicate effectively on a regular basis'?",
          "options": ["作为长期的伙伴，我们需要定期进行有效的沟通 (zuo wei cháng qi de huǒ ban, wǒ men xu yao ding qi jin xíng yǒu xiao de gou tong)", "长期伙伴 (cháng qi huǒ ban)", "定期沟通 (ding qi gou tong)", "有效沟通 (yǒu xiao gou tong)"],
          "translation": "As long-term partners, we need to communicate effectively on a regular basis",
          "languageCode": "zh",
          "romanization": "zuo wei cháng qi de huǒ ban, wǒ men xu yao ding qi jin xíng yǒu xiao de gou tong",
          "correctAnswer": "作为长期的伙伴，我们需要定期进行有效的沟通 (zuo wei cháng qi de huǒ ban, wǒ men xu yao ding qi jin xíng yǒu xiao de gou tong)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "每一方都应该履行各自的责任，以提高项目的整体效率",
          "prompt": "How do you describe accountability: 'Each party should fulfill their respective responsibilities to improve overall project efficiency'?",
          "options": ["每一方都应该履行各自的责任，以提高项目的整体效率 (měi yi fāng dou yīng gāi lǐ xing ge zi de ze ren, yi ti gao xiàng mu de zhěng ti xiao lu)", "履行责任 (lǐ xing ze ren)", "提高效率 (ti gao xiao lu)", "整体效率 (zhěng ti xiao lu)"],
          "translation": "Each party should fulfill their respective responsibilities to improve overall project efficiency",
          "languageCode": "zh",
          "romanization": "měi yi fāng dou yīng gāi lǐ xing ge zi de ze ren, yi ti gao xiàng mu de zhěng ti xiao lu",
          "correctAnswer": "每一方都应该履行各自的责任，以提高项目的整体效率 (měi yi fāng dou yīng gāi lǐ xing ge zi de ze ren, yi ti gao xiàng mu de zhěng ti xiao lu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "基于互信的基础，双方都致力于长期的合作和共同发展",
          "prompt": "How do you describe mutual commitment: 'Based on mutual trust, both parties are committed to long-term collaboration and mutual development'?",
          "options": ["基于互信的基础，双方都致力于长期的合作和共同发展 (ji yu hu xin de ji chu, shuang fāng dou zhi li yu cháng qi de hé zuo he gong tong fa zhan)", "互信基础 (hu xin ji chu)", "长期合作 (cháng qi hé zuo)", "共同发展 (gong tong fa zhan)"],
          "translation": "Based on mutual trust, both parties are committed to long-term collaboration and mutual development",
          "languageCode": "zh",
          "romanization": "ji yu hu xin de ji chu, shuang fāng dou zhi li yu cháng qi de hé zuo he gong tong fa zhan",
          "correctAnswer": "基于互信的基础，双方都致力于长期的合作和共同发展 (ji yu hu xin de ji chu, shuang fāng dou zhi li yu cháng qi de hé zuo he gong tong fa zhan)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我们期望通过这次合作，开启双方关系发展的新阶段",
          "prompt": "How do you express future prospects: 'We hope this collaboration will open a new chapter in the development of our relationship'?",
          "options": ["我们期望通过这次合作，开启双方关系发展的新阶段 (wǒ men qi wang tong guo zhè ci hé zuo, kāi qi shuang fāng guān xi fa zhan de xīn jiē duàn)", "期望合作 (qi wang hé zuo)", "关系发展 (guān xi fa zhan)", "新阶段 (xīn jiē duàn)"],
          "translation": "We hope this collaboration will open a new chapter in the development of our relationship",
          "languageCode": "zh",
          "romanization": "wǒ men qi wang tong guo zhè ci hé zuo, kāi qi shuang fāng guān xi fa zhan de xīn jiē duàn",
          "correctAnswer": "我们期望通过这次合作，开启双方关系发展的新阶段 (wǒ men qi wang tong guo zhè ci hé zuo, kāi qi shuang fāng guān xi fa zhan de xīn jiē duàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "合作",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Collaboration", "Cooperation", "Partnership", "Teamwork"],
          "translation": "Collaboration",
          "languageCode": "zh",
          "romanization": "hé zuo",
          "correctAnswer": "Collaboration",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "伙伴",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Partner", "Ally", "Associate", "Colleague"],
          "translation": "Partner",
          "languageCode": "zh",
          "romanization": "huǒ ban",
          "correctAnswer": "Partner",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "沟通",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Communication", "Communicate", "Interaction", "Exchange"],
          "translation": "Communication",
          "languageCode": "zh",
          "romanization": "gou tong",
          "correctAnswer": "Communication",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "效率",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Efficiency", "Effectiveness", "Productivity", "Performance"],
          "translation": "Efficiency",
          "languageCode": "zh",
          "romanization": "xiao lu",
          "correctAnswer": "Efficiency",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "目标",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Goal", "Objective", "Target", "Aim"],
          "translation": "Goal",
          "languageCode": "zh",
          "romanization": "mu biao",
          "correctAnswer": "Goal",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "发展",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Development", "Progress", "Evolution", "Growth"],
          "translation": "Development",
          "languageCode": "zh",
          "romanization": "fa zhan",
          "correctAnswer": "Development",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我们相信，通过密切的合作和互相尊重，可以实现共同的目标",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["We believe collaboration and mutual respect help achieve common goals", "Working together", "Shared goals", "Mutual respect"],
          "translation": "We believe collaboration and mutual respect help achieve common goals",
          "languageCode": "zh",
          "romanization": "wǒ men xiāng xin, tong guo mi qie de hé zuo he hu xiāng zun zhong, kě yi shi xiàn gong tong de mu biao",
          "correctAnswer": "We believe collaboration and mutual respect help achieve common goals",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "作为长期的伙伴，我们需要定期进行有效的沟通",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["As long-term partners, we need regular effective communication", "Partnership requirements", "Regular communication", "Effective dialogue"],
          "translation": "As long-term partners, we need regular effective communication",
          "languageCode": "zh",
          "romanization": "zuo wei cháng qi de huǒ ban, wǒ men xu yao ding qi jin xíng yǒu xiao de gou tong",
          "correctAnswer": "As long-term partners, we need regular effective communication",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "每一方都应该履行各自的责任，以提高项目的整体效率",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Each party should fulfill responsibilities to improve project efficiency", "Accountability", "Project efficiency", "Responsibility"],
          "translation": "Each party should fulfill responsibilities to improve project efficiency",
          "languageCode": "zh",
          "romanization": "měi yi fāng dou yīng gāi lǐ xing ge zi de ze ren, yi ti gao xiàng mu de zhěng ti xiao lu",
          "correctAnswer": "Each party should fulfill responsibilities to improve project efficiency",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "基于互信的基础，双方都致力于长期的合作和共同发展",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Built on mutual trust, both parties pursue long-term collaboration and development", "Mutual trust foundation", "Long-term partnership", "Shared growth"],
          "translation": "Built on mutual trust, both parties pursue long-term collaboration and development",
          "languageCode": "zh",
          "romanization": "ji yu hu xin de ji chu, shuang fāng dou zhi li yu cháng qi de hé zuo he gong tong fa zhan",
          "correctAnswer": "Built on mutual trust, both parties pursue long-term collaboration and development",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我们期望通过这次合作，开启双方关系发展的新阶段",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["We hope this collaboration opens a new chapter in our relationship", "Future prospects", "New beginning", "Relationship development"],
          "translation": "We hope this collaboration opens a new chapter in our relationship",
          "languageCode": "zh",
          "romanization": "wǒ men qi wang tong guo zhè ci hé zuo, kāi qi shuang fāng guān xi fa zhan de xīn jiē duàn",
          "correctAnswer": "We hope this collaboration opens a new chapter in our relationship",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage8-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "合作",
          "prompt": "Write the Chinese characters for 'Collaboration'",
          "options": ["合作", "作合", "合", "作"],
          "translation": "Collaboration",
          "languageCode": "zh",
          "romanization": "hé zuo",
          "correctAnswer": "合作",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "伙伴",
          "prompt": "Write the Chinese characters for 'Partner'",
          "options": ["伙伴", "伴伙", "伙", "伴"],
          "translation": "Partner",
          "languageCode": "zh",
          "romanization": "huǒ ban",
          "correctAnswer": "伙伴",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "沟通",
          "prompt": "Write the Chinese characters for 'Communication'",
          "options": ["沟通", "通沟", "沟", "通"],
          "translation": "Communication",
          "languageCode": "zh",
          "romanization": "gou tong",
          "correctAnswer": "沟通",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "目标",
          "prompt": "Write the Chinese characters for 'Goal'",
          "options": ["目标", "标目", "目", "标"],
          "translation": "Goal",
          "languageCode": "zh",
          "romanization": "mu biao",
          "correctAnswer": "目标",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "发展",
          "prompt": "Write the Chinese characters for 'Development'",
          "options": ["发展", "展发", "发", "展"],
          "translation": "Development",
          "languageCode": "zh",
          "romanization": "fa zhan",
          "correctAnswer": "发展",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 8 (B2 - Professional) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Business, News, Debate, Protocol, Relations)\n');

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
