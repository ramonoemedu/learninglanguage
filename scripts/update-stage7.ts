import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 7: B1+ - Reader
const lessonUpdates = [
  // ===== CHAPTER 1: NEWS & MEDIA LANGUAGE =====
  {
    lessonId: 'zh-stage7-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "新闻",
          "prompt": "What does this word mean?",
          "options": ["News", "Information", "Report", "Update"],
          "translation": "News",
          "languageCode": "zh",
          "romanization": "xīn wén",
          "correctAnswer": "News",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "标题",
          "prompt": "What does this word mean?",
          "options": ["Title", "Headline", "Heading", "Caption"],
          "translation": "Title",
          "languageCode": "zh",
          "romanization": "biāo tí",
          "correctAnswer": "Title",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "文章",
          "prompt": "What does this word mean?",
          "options": ["Article", "Essay", "Paper", "Text"],
          "translation": "Article",
          "languageCode": "zh",
          "romanization": "wén zhāng",
          "correctAnswer": "Article",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "内容",
          "prompt": "What does this word mean?",
          "options": ["Content", "Meaning", "Substance", "Material"],
          "translation": "Content",
          "languageCode": "zh",
          "romanization": "nèi róng",
          "correctAnswer": "Content",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "观点",
          "prompt": "What does this word mean?",
          "options": ["Viewpoint", "Opinion", "Perspective", "Angle"],
          "translation": "Viewpoint",
          "languageCode": "zh",
          "romanization": "guān diǎn",
          "correctAnswer": "Viewpoint",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "记者",
          "prompt": "What does this word mean?",
          "options": ["Journalist", "Reporter", "Correspondent", "Editor"],
          "translation": "Journalist",
          "languageCode": "zh",
          "romanization": "jì zhě",
          "correctAnswer": "Journalist",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "事件",
          "prompt": "What does this word mean?",
          "options": ["Event", "Incident", "Occurrence", "Happening"],
          "translation": "Event",
          "languageCode": "zh",
          "romanization": "shì jiàn",
          "correctAnswer": "Event",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "来源",
          "prompt": "What does this word mean?",
          "options": ["Source", "Origin", "Root", "Foundation"],
          "translation": "Source",
          "languageCode": "zh",
          "romanization": "lái yuán",
          "correctAnswer": "Source",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "根据最新的新闻报道，这个事件已经得到了解决",
          "prompt": "How do you structure a news-based sentence: 'According to the latest news report, the incident has been resolved'?",
          "options": ["根据最新的新闻报道，这个事件已经得到了解决 (gēn jù zuì xīn de xīn wén bào dào, zhè ge shì jiàn yǐ jing dé dào le jiě jué)", "新闻事件解决 (xīn wén shì jiàn jiě jué)", "根据报道 (gēn jù bào dào)", "已经解决 (yǐ jing jiě jué)"],
          "translation": "According to the latest news report, the incident has been resolved",
          "languageCode": "zh",
          "romanization": "gēn jù zuì xīn de xīn wén bào dào, zhè ge shì jiàn yǐ jing dé dào le jiě jué",
          "correctAnswer": "根据最新的新闻报道，这个事件已经得到了解决 (gēn jù zuì xīn de xīn wén bào dào, zhè ge shì jiàn yǐ jing dé dào le jiě jué)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这篇文章的标题很有趣，吸引了很多读者的注意",
          "prompt": "How do you describe an article's appeal: 'This article's title is very interesting and attracted the attention of many readers'?",
          "options": ["这篇文章的标题很有趣，吸引了很多读者的注意 (zhè piān wén zhāng de biāo tí hěn yǒu qu, xī yǐn le hěn duō dú zhě de zhù yi)", "标题有趣 (biāo tí yǒu qu)", "吸引读者 (xī yǐn dú zhě)", "文章有趣 (wén zhāng yǒu qu)"],
          "translation": "This article's title is very interesting and attracted the attention of many readers",
          "languageCode": "zh",
          "romanization": "zhè piān wén zhāng de biāo tí hěn yǒu qu, xī yǐn le hěn duō dú zhě de zhù yi",
          "correctAnswer": "这篇文章的标题很有趣，吸引了很多读者的注意 (zhè piān wén zhāng de biāo tí hěn yǒu qu, xī yǐn le hěn duō dú zhě de zhù yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "从这篇文章的内容可以看出，作者的观点比较客观",
          "prompt": "How do you analyze an article's perspective: 'From the content of this article, one can see that the author's viewpoint is rather objective'?",
          "options": ["从这篇文章的内容可以看出，作者的观点比较客观 (cóng zhè piān wén zhāng de nèi róng kě yi kàn chu, zuò zhě de guān diǎn bǐ jiào kè guān)", "文章内容客观 (wén zhāng nèi róng kè guān)", "观点客观 (guān diǎn kè guān)", "看出观点 (kàn chu guān diǎn)"],
          "translation": "From the content of this article, one can see that the author's viewpoint is rather objective",
          "languageCode": "zh",
          "romanization": "cóng zhè piān wén zhāng de nèi róng kě yi kàn chu, zuò zhě de guān diǎn bǐ jiào kè guān",
          "correctAnswer": "从这篇文章的内容可以看出，作者的观点比较客观 (cóng zhè piān wén zhāng de nèi róng kě yi kàn chu, zuò zhě de guān diǎn bǐ jiào kè guān)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这位记者用了很多权威的来源来支持他的论点",
          "prompt": "How do you describe journalistic credibility: 'This journalist used many authoritative sources to support his argument'?",
          "options": ["这位记者用了很多权威的来源来支持他的论点 (zhè wèi jì zhě yòng le hěn duō quán wēi de lái yuán lái zhī chi tā de lùn diǎn)", "记者来源 (jì zhě lái yuán)", "支持论点 (zhī chi lùn diǎn)", "权威来源 (quán wēi lái yuán)"],
          "translation": "This journalist used many authoritative sources to support his argument",
          "languageCode": "zh",
          "romanization": "zhè wèi jì zhě yòng le hěn duō quán wēi de lái yuán lái zhī chi tā de lùn diǎn",
          "correctAnswer": "这位记者用了很多权威的来源来支持他的论点 (zhè wèi jì zhě yòng le hěn duō quán wēi de lái yuán lái zhī chi tā de lùn diǎn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "该文章对近期发生的这一事件进行了深入的分析",
          "prompt": "How do you describe in-depth analysis: 'This article conducted an in-depth analysis of this recent event'?",
          "options": ["该文章对近期发生的这一事件进行了深入的分析 (gāi wén zhāng duì jìn qī fā shēng de zhè yi shì jiàn jìn xíng le shēn ru de fēn xi)", "文章分析事件 (wén zhāng fēn xi shì jiàn)", "深入分析 (shēn ru fēn xi)", "分析事件 (fēn xi shì jiàn)"],
          "translation": "This article conducted an in-depth analysis of this recent event",
          "languageCode": "zh",
          "romanization": "gāi wén zhāng duì jìn qī fā shēng de zhè yi shì jiàn jìn xíng le shēn ru de fēn xi",
          "correctAnswer": "该文章对近期发生的这一事件进行了深入的分析 (gāi wén zhāng duì jìn qī fā shēng de zhè yi shì jiàn jìn xíng le shēn ru de fēn xi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "新闻",
          "prompt": "Listen and select the correct meaning.",
          "options": ["News", "Information", "Report", "Update"],
          "translation": "News",
          "languageCode": "zh",
          "romanization": "xīn wén",
          "correctAnswer": "News",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "文章",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Article", "Essay", "Paper", "Text"],
          "translation": "Article",
          "languageCode": "zh",
          "romanization": "wén zhāng",
          "correctAnswer": "Article",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "标题",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Title", "Headline", "Heading", "Caption"],
          "translation": "Title",
          "languageCode": "zh",
          "romanization": "biāo tí",
          "correctAnswer": "Title",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "观点",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Viewpoint", "Opinion", "Perspective", "Angle"],
          "translation": "Viewpoint",
          "languageCode": "zh",
          "romanization": "guān diǎn",
          "correctAnswer": "Viewpoint",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "记者",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Journalist", "Reporter", "Correspondent", "Editor"],
          "translation": "Journalist",
          "languageCode": "zh",
          "romanization": "jì zhě",
          "correctAnswer": "Journalist",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "事件",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Event", "Incident", "Occurrence", "Happening"],
          "translation": "Event",
          "languageCode": "zh",
          "romanization": "shì jiàn",
          "correctAnswer": "Event",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "根据最新的新闻报道，这个事件已经得到了解决",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["According to the latest news report, the incident has been resolved", "News says resolved", "Latest news event", "Incident resolved"],
          "translation": "According to the latest news report, the incident has been resolved",
          "languageCode": "zh",
          "romanization": "gēn jù zuì xīn de xīn wén bào dào, zhè ge shì jiàn yǐ jing dé dào le jiě jué",
          "correctAnswer": "According to the latest news report, the incident has been resolved",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这篇文章的标题很有趣，吸引了很多读者的注意",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This article's title is very interesting and attracted many readers", "Title interesting", "Many readers article", "Attracted readers"],
          "translation": "This article's title is very interesting and attracted many readers",
          "languageCode": "zh",
          "romanization": "zhè piān wén zhāng de biāo tí hěn yǒu qu, xī yǐn le hěn duō dú zhě de zhù yi",
          "correctAnswer": "This article's title is very interesting and attracted many readers",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "从这篇文章的内容可以看出，作者的观点比较客观",
          "prompt": "Speak this analysis aloud. What does it mean?",
          "options": ["From this article's content, the author's viewpoint is rather objective", "Content shows objective", "Author viewpoint", "Article objective"],
          "translation": "From this article's content, the author's viewpoint is rather objective",
          "languageCode": "zh",
          "romanization": "cóng zhè piān wén zhāng de nèi róng kě yi kàn chu, zuò zhě de guān diǎn bǐ jiào kè guān",
          "correctAnswer": "From this article's content, the author's viewpoint is rather objective",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这位记者用了很多权威的来源来支持他的论点",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This journalist used many authoritative sources to support the argument", "Journalist sources", "Authoritative support", "Support argument"],
          "translation": "This journalist used many authoritative sources to support the argument",
          "languageCode": "zh",
          "romanization": "zhè wèi jì zhě yòng le hěn duō quán wēi de lái yuán lái zhī chi tā de lùn diǎn",
          "correctAnswer": "This journalist used many authoritative sources to support the argument",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "该文章对近期发生的这一事件进行了深入的分析",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This article conducted an in-depth analysis of this recent event", "Article analyzes event", "Deep analysis", "Recent event analysis"],
          "translation": "This article conducted an in-depth analysis of this recent event",
          "languageCode": "zh",
          "romanization": "gāi wén zhāng duì jìn qī fā shēng de zhè yi shì jiàn jìn xíng le shēn ru de fēn xi",
          "correctAnswer": "This article conducted an in-depth analysis of this recent event",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "新闻",
          "prompt": "Write the Chinese characters for 'News'",
          "options": ["新闻", "闻新", "新", "闻"],
          "translation": "News",
          "languageCode": "zh",
          "romanization": "xīn wén",
          "correctAnswer": "新闻",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "文章",
          "prompt": "Write the Chinese characters for 'Article'",
          "options": ["文章", "章文", "文", "章"],
          "translation": "Article",
          "languageCode": "zh",
          "romanization": "wén zhāng",
          "correctAnswer": "文章",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "标题",
          "prompt": "Write the Chinese characters for 'Title'",
          "options": ["标题", "题标", "标", "题"],
          "translation": "Title",
          "languageCode": "zh",
          "romanization": "biāo tí",
          "correctAnswer": "标题",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "观点",
          "prompt": "Write the Chinese characters for 'Viewpoint'",
          "options": ["观点", "点观", "观", "点"],
          "translation": "Viewpoint",
          "languageCode": "zh",
          "romanization": "guān diǎn",
          "correctAnswer": "观点",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "事件",
          "prompt": "Write the Chinese characters for 'Event'",
          "options": ["事件", "件事", "事", "件"],
          "translation": "Event",
          "languageCode": "zh",
          "romanization": "shì jiàn",
          "correctAnswer": "事件",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: FORMAL VS INFORMAL LANGUAGE =====
  {
    lessonId: 'zh-stage7-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "正式",
          "prompt": "What does this adjective mean?",
          "options": ["Formal", "Official", "Formal", "Proper"],
          "translation": "Formal",
          "languageCode": "zh",
          "romanization": "zhèng shì",
          "correctAnswer": "Formal",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "非正式",
          "prompt": "What does this adjective mean?",
          "options": ["Informal", "Casual", "Unofficial", "Relaxed"],
          "translation": "Informal",
          "languageCode": "zh",
          "romanization": "fēi zhèng shì",
          "correctAnswer": "Informal",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "尊敬",
          "prompt": "What does this word mean?",
          "options": ["Respect", "Regard", "Honor", "Esteem"],
          "translation": "Respect",
          "languageCode": "zh",
          "romanization": "zūn jìng",
          "correctAnswer": "Respect",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "礼貌",
          "prompt": "What does this noun/adjective mean?",
          "options": ["Politeness", "Courtesy", "Manners", "Decorum"],
          "translation": "Politeness",
          "languageCode": "zh",
          "romanization": "lǐ mào",
          "correctAnswer": "Politeness",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "敬请",
          "prompt": "What does this verb mean?",
          "options": ["Kindly/Please (formal)", "Request", "Ask politely", "Beseech"],
          "translation": "Kindly/Please (formal)",
          "languageCode": "zh",
          "romanization": "jìng qǐng",
          "correctAnswer": "Kindly/Please (formal)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "请问",
          "prompt": "What does this phrase mean?",
          "options": ["May I ask", "Excuse me", "Could you tell me", "I wonder"],
          "translation": "May I ask",
          "languageCode": "zh",
          "romanization": "qǐng wèn",
          "correctAnswer": "May I ask",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "敬意",
          "prompt": "What does this word mean?",
          "options": ["Respect", "Deference", "Regard", "Reverence"],
          "translation": "Respect",
          "languageCode": "zh",
          "romanization": "jìng yi",
          "correctAnswer": "Respect",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "得体",
          "prompt": "What does this adjective mean?",
          "options": ["Appropriate", "Proper", "Fitting", "Suitable"],
          "translation": "Appropriate",
          "languageCode": "zh",
          "romanization": "dé tǐ",
          "correctAnswer": "Appropriate",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "在正式场合使用敬语是非常必要的",
          "prompt": "How do you express formal language requirements: 'Using formal language in formal settings is very necessary'?",
          "options": ["在正式场合使用敬语是非常必要的 (zài zhèng shì chǎng hé shǐ yòng jìng yu shì fēi cháng bì yào de)", "正式敬语必要 (zhèng shì jìng yu bì yào)", "使用敬语 (shǐ yòng jìng yu)", "场合敬语 (chǎng hé jìng yu)"],
          "translation": "Using formal language in formal settings is very necessary",
          "languageCode": "zh",
          "romanization": "zài zhèng shì chǎng hé shǐ yòng jìng yu shì fēi cháng bì yào de",
          "correctAnswer": "在正式场合使用敬语是非常必要的 (zài zhèng shì chǎng hé shǐ yòng jìng yu shì fēi cháng bì yào de)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "与朋友交流时，我们可以使用更加非正式的方式",
          "prompt": "How do you express informal communication: 'When communicating with friends, we can use a more informal way'?",
          "options": ["与朋友交流时，我们可以使用更加非正式的方式 (yǔ péng you jiāo liú shí, wǒ men kě yi shǐ yòng gèng jiā fēi zhèng shì de fāng shì)", "朋友交流非正式 (péng you jiāo liú fēi zhèng shì)", "可以非正式 (kě yi fēi zhèng shì)", "更加方式 (gèng jiā fāng shì)"],
          "translation": "When communicating with friends, we can use a more informal way",
          "languageCode": "zh",
          "romanization": "yǔ péng you jiāo liú shí, wǒ men kě yi shǐ yòng gèng jiā fēi zhèng shì de fāng shì",
          "correctAnswer": "与朋友交流时，我们可以使用更加非正式的方式 (yǔ péng you jiāo liú shí, wǒ men kě yi shǐ yòng gèng jiā fēi zhèng shì de fāng shì)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "请问您能告诉我怎样写更得体的电子邮件吗？",
          "prompt": "How do you ask politely: 'May I ask, can you tell me how to write more appropriate emails?'",
          "options": ["请问您能告诉我怎样写更得体的电子邮件吗？(qǐng wèn nín néng gào su wǒ zěn yàng xiě gèng dé tǐ de diàn zi yóu jiàn ma?)", "请问邮件 (qǐng wèn yóu jiàn)", "怎样得体 (zěn yàng dé tǐ)", "邮件得体 (yóu jiàn dé tǐ)"],
          "translation": "May I ask, can you tell me how to write more appropriate emails?",
          "languageCode": "zh",
          "romanization": "qǐng wèn nín néng gào su wǒ zěn yàng xiě gèng dé tǐ de diàn zi yóu jiàn ma?",
          "correctAnswer": "请问您能告诉我怎样写更得体的电子邮件吗？(qǐng wèn nín néng gào su wǒ zěn yàng xiě gèng dé tǐ de diàn zi yóu jiàn ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "用敬语表达对领导的尊敬是一种很好的礼貌表现",
          "prompt": "How do you express respect through formal language: 'Using formal language to show respect for leaders is a great demonstration of politeness'?",
          "options": ["用敬语表达对领导的尊敬是一种很好的礼貌表现 (yòng jìng yu biǎo dá duì lǐng dǎo de zūn jìng shì yi zhǒng hěn hǎo de lǐ mào biǎo xiàn)", "敬语尊敬 (jìng yu zūn jìng)", "表达尊敬 (biǎo dá zūn jìng)", "礼貌表现 (lǐ mào biǎo xiàn)"],
          "translation": "Using formal language to show respect for leaders is a great demonstration of politeness",
          "languageCode": "zh",
          "romanization": "yòng jìng yu biǎo dá duì lǐng dǎo de zūn jìng shì yi zhǒng hěn hǎo de lǐ mào biǎo xiàn",
          "correctAnswer": "用敬语表达对领导的尊敬是一种很好的礼貌表现 (yòng jìng yu biǎo dá duì lǐng dǎo de zūn jìng shì yi zhǒng hěn hǎo de lǐ mào biǎo xiàn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "正式和非正式语言之间的差异取决于社交场合和受众",
          "prompt": "How do you explain linguistic variation: 'The differences between formal and informal language depend on the social context and audience'?",
          "options": ["正式和非正式语言之间的差异取决于社交场合和受众 (zhèng shì he fēi zhèng shì yu yán zhī jiān de chā yi qǔ jué yu shè jiāo chǎng hé he shòu zhòng)", "语言差异 (yu yán chā yi)", "社交场合 (shè jiāo chǎng hé)", "正式非正式 (zhèng shì fēi zhèng shì)"],
          "translation": "The differences between formal and informal language depend on the social context and audience",
          "languageCode": "zh",
          "romanization": "zhèng shì he fēi zhèng shì yu yán zhī jiān de chā yi qǔ jué yu shè jiāo chǎng hé he shòu zhòng",
          "correctAnswer": "正式和非正式语言之间的差异取决于社交场合和受众 (zhèng shì he fēi zhèng shì yu yán zhī jiān de chā yi qǔ jué yu shè jiāo chǎng hé he shòu zhòng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "正式",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Formal", "Official", "Formal", "Proper"],
          "translation": "Formal",
          "languageCode": "zh",
          "romanization": "zhèng shì",
          "correctAnswer": "Formal",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "非正式",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Informal", "Casual", "Unofficial", "Relaxed"],
          "translation": "Informal",
          "languageCode": "zh",
          "romanization": "fēi zhèng shì",
          "correctAnswer": "Informal",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "礼貌",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Politeness", "Courtesy", "Manners", "Decorum"],
          "translation": "Politeness",
          "languageCode": "zh",
          "romanization": "lǐ mào",
          "correctAnswer": "Politeness",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "请问",
          "prompt": "Listen and select the correct meaning.",
          "options": ["May I ask", "Excuse me", "Could you tell me", "I wonder"],
          "translation": "May I ask",
          "languageCode": "zh",
          "romanization": "qǐng wèn",
          "correctAnswer": "May I ask",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "尊敬",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Respect", "Regard", "Honor", "Esteem"],
          "translation": "Respect",
          "languageCode": "zh",
          "romanization": "zūn jìng",
          "correctAnswer": "Respect",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "得体",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Appropriate", "Proper", "Fitting", "Suitable"],
          "translation": "Appropriate",
          "languageCode": "zh",
          "romanization": "dé tǐ",
          "correctAnswer": "Appropriate",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "在正式场合使用敬语是非常必要的",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Using formal language in formal settings is very necessary", "Formal language required", "Formal occasions", "Necessary formal"],
          "translation": "Using formal language in formal settings is very necessary",
          "languageCode": "zh",
          "romanization": "zài zhèng shì chǎng hé shǐ yòng jìng yu shì fēi cháng bì yào de",
          "correctAnswer": "Using formal language in formal settings is very necessary",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "与朋友交流时，我们可以使用更加非正式的方式",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["When with friends, we can use a more informal way", "Friends informal", "More informal style", "Casual way"],
          "translation": "When with friends, we can use a more informal way",
          "languageCode": "zh",
          "romanization": "yǔ péng you jiāo liú shí, wǒ men kě yi shǐ yòng gèng jiā fēi zhèng shì de fāng shì",
          "correctAnswer": "When with friends, we can use a more informal way",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "请问您能告诉我怎样写更得体的电子邮件吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["May I ask, can you tell me how to write more appropriate emails?", "How write emails", "Appropriate emails", "Email etiquette"],
          "translation": "May I ask, can you tell me how to write more appropriate emails?",
          "languageCode": "zh",
          "romanization": "qǐng wèn nín néng gào su wǒ zěn yàng xiě gèng dé tǐ de diàn zi yóu jiàn ma?",
          "correctAnswer": "May I ask, can you tell me how to write more appropriate emails?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "用敬语表达对领导的尊敬是一种很好的礼貌表现",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Using formal language to show respect for leaders demonstrates good manners", "Respect leader", "Formal politeness", "Show respect formally"],
          "translation": "Using formal language to show respect for leaders demonstrates good manners",
          "languageCode": "zh",
          "romanization": "yòng jìng yu biǎo dá duì lǐng dǎo de zūn jìng shì yi zhǒng hěn hǎo de lǐ mào biǎo xiàn",
          "correctAnswer": "Using formal language to show respect for leaders demonstrates good manners",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "正式和非正式语言之间的差异取决于社交场合和受众",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The difference between formal and informal language depends on context and audience", "Language differences", "Social context matters", "Formal or informal"],
          "translation": "The difference between formal and informal language depends on context and audience",
          "languageCode": "zh",
          "romanization": "zhèng shì he fēi zhèng shì yu yán zhī jiān de chā yi qǔ jué yu shè jiāo chǎng hé he shòu zhòng",
          "correctAnswer": "The difference between formal and informal language depends on context and audience",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "正式",
          "prompt": "Write the Chinese characters for 'Formal'",
          "options": ["正式", "式正", "正", "式"],
          "translation": "Formal",
          "languageCode": "zh",
          "romanization": "zhèng shì",
          "correctAnswer": "正式",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "礼貌",
          "prompt": "Write the Chinese characters for 'Politeness'",
          "options": ["礼貌", "貌礼", "礼", "貌"],
          "translation": "Politeness",
          "languageCode": "zh",
          "romanization": "lǐ mào",
          "correctAnswer": "礼貌",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "尊敬",
          "prompt": "Write the Chinese characters for 'Respect'",
          "options": ["尊敬", "敬尊", "尊", "敬"],
          "translation": "Respect",
          "languageCode": "zh",
          "romanization": "zūn jìng",
          "correctAnswer": "尊敬",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "得体",
          "prompt": "Write the Chinese characters for 'Appropriate'",
          "options": ["得体", "体得", "得", "体"],
          "translation": "Appropriate",
          "languageCode": "zh",
          "romanization": "dé tǐ",
          "correctAnswer": "得体",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "请问",
          "prompt": "Write the Chinese characters for 'May I ask'",
          "options": ["请问", "问请", "请", "问"],
          "translation": "May I ask",
          "languageCode": "zh",
          "romanization": "qǐng wèn",
          "correctAnswer": "请问",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: READING COMPREHENSION =====
  {
    lessonId: 'zh-stage7-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "理解",
          "prompt": "What does this verb mean?",
          "options": ["Understand", "Comprehend", "Grasp", "Get"],
          "translation": "Understand",
          "languageCode": "zh",
          "romanization": "lǐ jiě",
          "correctAnswer": "Understand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "要点",
          "prompt": "What does this word mean?",
          "options": ["Main point", "Key issue", "Essential point", "Core idea"],
          "translation": "Main point",
          "languageCode": "zh",
          "romanization": "yao diǎn",
          "correctAnswer": "Main point",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "细节",
          "prompt": "What does this word mean?",
          "options": ["Detail", "Particulars", "Specifics", "Minute point"],
          "translation": "Detail",
          "languageCode": "zh",
          "romanization": "xi jié",
          "correctAnswer": "Detail",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "总结",
          "prompt": "What does this verb/noun mean?",
          "options": ["Summarize", "Sum up", "Summary", "Conclude"],
          "translation": "Summarize",
          "languageCode": "zh",
          "romanization": "zǒng jié",
          "correctAnswer": "Summarize",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "推断",
          "prompt": "What does this verb mean?",
          "options": ["Infer", "Deduce", "Conclude", "Assume"],
          "translation": "Infer",
          "languageCode": "zh",
          "romanization": "tuī duàn",
          "correctAnswer": "Infer",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "段落",
          "prompt": "What does this word mean?",
          "options": ["Paragraph", "Section", "Passage", "Chapter"],
          "translation": "Paragraph",
          "languageCode": "zh",
          "romanization": "duàn luò",
          "correctAnswer": "Paragraph",
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
          "word": "关键",
          "prompt": "What does this adjective mean?",
          "options": ["Key", "Crucial", "Critical", "Essential"],
          "translation": "Key",
          "languageCode": "zh",
          "romanization": "guān jiàn",
          "correctAnswer": "Key",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "阅读这篇文章时，首先要理解每个段落的要点",
          "prompt": "How do you describe reading strategy: 'When reading this article, first you should understand the main point of each paragraph'?",
          "options": ["阅读这篇文章时，首先要理解每个段落的要点 (yue du zhè piān wén zhāng shí, shǒu xiān yào lǐ jiě měi ge duàn luò de yao diǎn)", "理解段落 (lǐ jiě duàn luò)", "要点首先 (yao diǎn shǒu xiān)", "段落要点 (duàn luò yao diǎn)"],
          "translation": "When reading this article, first you should understand the main point of each paragraph",
          "languageCode": "zh",
          "romanization": "yue du zhè piān wén zhāng shí, shǒu xiān yào lǐ jiě měi ge duàn luò de yao diǎn",
          "correctAnswer": "阅读这篇文章时，首先要理解每个段落的要点 (yue du zhè piān wén zhāng shí, shǒu xiān yào lǐ jiě měi ge duàn luò de yao diǎn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "从这些细节可以推断出作者的真实意图",
          "prompt": "How do you express inference: 'From these details, one can infer the author's true intention'?",
          "options": ["从这些细节可以推断出作者的真实意图 (cóng zhè xiē xi jié kě yi tuī duàn chu zuò zhě de zhēn shi yi tu)", "细节推断 (xi jié tuī duàn)", "真实意图 (zhēn shi yi tu)", "推断意图 (tuī duàn yi tu)"],
          "translation": "From these details, one can infer the author's true intention",
          "languageCode": "zh",
          "romanization": "cóng zhè xiē xi jié kě yi tuī duàn chu zuò zhě de zhēn shi yi tu",
          "correctAnswer": "从这些细节可以推断出作者的真实意图 (cóng zhè xiē xi jié kě yi tuī duàn chu zuò zhě de zhēn shi yi tu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "总结这篇文章的主要内容，可以得出以下结论",
          "prompt": "How do you structure summarization: 'Summarizing this article's main content, we can draw the following conclusion'?",
          "options": ["总结这篇文章的主要内容，可以得出以下结论 (zǒng jié zhè piān wén zhāng de zhǔ yào nèi róng, kě yi dé chu yi xià jié lùn)", "总结内容 (zǒng jié nèi róng)", "得出结论 (dé chu jié lùn)", "主要内容 (zhǔ yào nèi róng)"],
          "translation": "Summarizing this article's main content, we can draw the following conclusion",
          "languageCode": "zh",
          "romanization": "zǒng jié zhè piān wén zhāng de zhǔ yào nèi róng, kě yi dé chu yi xià jié lùn",
          "correctAnswer": "总结这篇文章的主要内容，可以得出以下结论 (zǒng jié zhè piān wén zhāng de zhǔ yào nèi róng, kě yi dé chu yi xià jié lùn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个关键信息对于理解整篇文章的逻辑至关重要",
          "prompt": "How do you emphasize importance: 'This key information is crucial for understanding the logic of the entire article'?",
          "options": ["这个关键信息对于理解整篇文章的逻辑至关重要 (zhè ge guān jiàn xìn xi duì yu lǐ jiě zhěng piān wén zhāng de luó ji zhì guān zhòng yào)", "关键信息 (guān jiàn xìn xi)", "理解逻辑 (lǐ jiě luó ji)", "重要信息 (zhòng yào xìn xi)"],
          "translation": "This key information is crucial for understanding the logic of the entire article",
          "languageCode": "zh",
          "romanization": "zhè ge guān jiàn xìn xi duì yu lǐ jiě zhěng piān wén zhāng de luó ji zhì guān zhòng yào",
          "correctAnswer": "这个关键信息对于理解整篇文章的逻辑至关重要 (zhè ge guān jiàn xìn xi duì yu lǐ jiě zhěng piān wén zhāng de luó ji zhì guān zhòng yào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "在阅读过程中，我们应该区分哪些是事实，哪些是观点",
          "prompt": "How do you describe critical reading: 'During reading, we should distinguish between what is fact and what is opinion'?",
          "options": ["在阅读过程中，我们应该区分哪些是事实，哪些是观点 (zài yue du guò chéng zhong, wǒ men yīng gāi qu fēn nǎ xiē shì shì shi, nǎ xiē shì guān diǎn)", "区分事实观点 (qu fēn shì shi guān diǎn)", "事实观点 (shì shi guān diǎn)", "阅读区分 (yue du qu fēn)"],
          "translation": "During reading, we should distinguish between what is fact and what is opinion",
          "languageCode": "zh",
          "romanization": "zài yue du guò chéng zhong, wǒ men yīng gāi qu fēn nǎ xiē shì shì shi, nǎ xiē shì guān diǎn",
          "correctAnswer": "在阅读过程中，我们应该区分哪些是事实，哪些是观点 (zài yue du guò chéng zhong, wǒ men yīng gāi qu fēn nǎ xiē shì shì shi, nǎ xiē shì guān diǎn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "理解",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Understand", "Comprehend", "Grasp", "Get"],
          "translation": "Understand",
          "languageCode": "zh",
          "romanization": "lǐ jiě",
          "correctAnswer": "Understand",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "要点",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Main point", "Key issue", "Essential point", "Core idea"],
          "translation": "Main point",
          "languageCode": "zh",
          "romanization": "yao diǎn",
          "correctAnswer": "Main point",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "细节",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Detail", "Particulars", "Specifics", "Minute point"],
          "translation": "Detail",
          "languageCode": "zh",
          "romanization": "xi jié",
          "correctAnswer": "Detail",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "总结",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Summarize", "Sum up", "Summary", "Conclude"],
          "translation": "Summarize",
          "languageCode": "zh",
          "romanization": "zǒng jié",
          "correctAnswer": "Summarize",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "推断",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Infer", "Deduce", "Conclude", "Assume"],
          "translation": "Infer",
          "languageCode": "zh",
          "romanization": "tuī duàn",
          "correctAnswer": "Infer",
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
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "阅读这篇文章时，首先要理解每个段落的要点",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["When reading this article, first understand each paragraph's main point", "Understand paragraphs", "Read first", "Main points"],
          "translation": "When reading this article, first understand each paragraph's main point",
          "languageCode": "zh",
          "romanization": "yue du zhè piān wén zhāng shí, shǒu xiān yào lǐ jiě měi ge duàn luò de yao diǎn",
          "correctAnswer": "When reading this article, first understand each paragraph's main point",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "从这些细节可以推断出作者的真实意图",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["From these details, we can infer the author's true intention", "Details show", "Author intention", "Infer meaning"],
          "translation": "From these details, we can infer the author's true intention",
          "languageCode": "zh",
          "romanization": "cóng zhè xiē xi jié kě yi tuī duàn chu zuò zhě de zhēn shi yi tu",
          "correctAnswer": "From these details, we can infer the author's true intention",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "总结这篇文章的主要内容，可以得出以下结论",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Summarizing this article, we can draw the following conclusion", "Article summary", "Main content", "Reach conclusion"],
          "translation": "Summarizing this article, we can draw the following conclusion",
          "languageCode": "zh",
          "romanization": "zǒng jié zhè piān wén zhāng de zhǔ yào nèi róng, kě yi dé chu yi xià jié lùn",
          "correctAnswer": "Summarizing this article, we can draw the following conclusion",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个关键信息对于理解整篇文章的逻辑至关重要",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This key information is crucial for understanding the article's logic", "Key information needed", "Important information", "Logic essential"],
          "translation": "This key information is crucial for understanding the article's logic",
          "languageCode": "zh",
          "romanization": "zhè ge guān jiàn xìn xi duì yu lǐ jiě zhěng piān wén zhāng de luó ji zhì guān zhòng yào",
          "correctAnswer": "This key information is crucial for understanding the article's logic",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "在阅读过程中，我们应该区分哪些是事实，哪些是观点",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["During reading, we should distinguish between facts and opinions", "Facts and opinions", "Critical reading", "Separate fact"],
          "translation": "During reading, we should distinguish between facts and opinions",
          "languageCode": "zh",
          "romanization": "zài yue du guò chéng zhong, wǒ men yīng gāi qu fēn nǎ xiē shì shì shi, nǎ xiē shì guān diǎn",
          "correctAnswer": "During reading, we should distinguish between facts and opinions",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "理解",
          "prompt": "Write the Chinese characters for 'Understand'",
          "options": ["理解", "解理", "理", "解"],
          "translation": "Understand",
          "languageCode": "zh",
          "romanization": "lǐ jiě",
          "correctAnswer": "理解",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "要点",
          "prompt": "Write the Chinese characters for 'Main point'",
          "options": ["要点", "点要", "要", "点"],
          "translation": "Main point",
          "languageCode": "zh",
          "romanization": "yao diǎn",
          "correctAnswer": "要点",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "总结",
          "prompt": "Write the Chinese characters for 'Summarize'",
          "options": ["总结", "结总", "总", "结"],
          "translation": "Summarize",
          "languageCode": "zh",
          "romanization": "zǒng jié",
          "correctAnswer": "总结",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "细节",
          "prompt": "Write the Chinese characters for 'Detail'",
          "options": ["细节", "节细", "细", "节"],
          "translation": "Detail",
          "languageCode": "zh",
          "romanization": "xi jié",
          "correctAnswer": "细节",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "逻辑",
          "prompt": "Write the Chinese characters for 'Logic'",
          "options": ["逻辑", "辑逻", "逻", "辑"],
          "translation": "Logic",
          "languageCode": "zh",
          "romanization": "luó ji",
          "correctAnswer": "逻辑",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: NARRATIVE STRUCTURES =====
  {
    lessonId: 'zh-stage7-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "故事",
          "prompt": "What does this word mean?",
          "options": ["Story", "Tale", "Narrative", "Plot"],
          "translation": "Story",
          "languageCode": "zh",
          "romanization": "gu shi",
          "correctAnswer": "Story",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "人物",
          "prompt": "What does this word mean?",
          "options": ["Character", "Person", "Figure", "Individual"],
          "translation": "Character",
          "languageCode": "zh",
          "romanization": "rén wu",
          "correctAnswer": "Character",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "情节",
          "prompt": "What does this word mean?",
          "options": ["Plot", "Storyline", "Episode", "Scene"],
          "translation": "Plot",
          "languageCode": "zh",
          "romanization": "qíng jié",
          "correctAnswer": "Plot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "背景",
          "prompt": "What does this word mean?",
          "options": ["Background", "Setting", "Context", "Backdrop"],
          "translation": "Background",
          "languageCode": "zh",
          "romanization": "běi jǐng",
          "correctAnswer": "Background",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "冲突",
          "prompt": "What does this word mean?",
          "options": ["Conflict", "Dispute", "Tension", "Clash"],
          "translation": "Conflict",
          "languageCode": "zh",
          "romanization": "chōng tu",
          "correctAnswer": "Conflict",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "转折",
          "prompt": "What does this word mean?",
          "options": ["Turn", "Plot twist", "Turning point", "Reversal"],
          "translation": "Turn",
          "languageCode": "zh",
          "romanization": "zhuǎn zhé",
          "correctAnswer": "Turn",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "结局",
          "prompt": "What does this word mean?",
          "options": ["Ending", "Conclusion", "Outcome", "Finale"],
          "translation": "Ending",
          "languageCode": "zh",
          "romanization": "jié ju",
          "correctAnswer": "Ending",
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
          "romanization": "fā zhǎn",
          "correctAnswer": "Development",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "故事的背景设定在一个虚构的未来世界",
          "prompt": "How do you describe story setting: 'The story's background is set in a fictional future world'?",
          "options": ["故事的背景设定在一个虚构的未来世界 (gu shi de běi jǐng shè dìng zài yi ge xu gòu de wèi lái shì jiè)", "背景设定 (běi jǐng shè dìng)", "虚构未来 (xu gòu wèi lái)", "设在世界 (shè zài shì jiè)"],
          "translation": "The story's background is set in a fictional future world",
          "languageCode": "zh",
          "romanization": "gu shi de běi jǐng shè dìng zài yi ge xu gòu de wèi lái shì jiè",
          "correctAnswer": "故事的背景设定在一个虚构的未来世界 (gu shi de běi jǐng shè dìng zài yi ge xu gòu de wèi lái shì jiè)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "主人公与反面人物之间的冲突是故事的核心",
          "prompt": "How do you describe narrative conflict: 'The conflict between the protagonist and antagonist is the core of the story'?",
          "options": ["主人公与反面人物之间的冲突是故事的核心 (zhǔ rén gong yǔ fǎn miàn rén wu zhī jiān de chōng tu shì gu shi de hé xin)", "冲突核心 (chōng tu hé xin)", "人物冲突 (rén wu chōng tu)", "主人公反对 (zhǔ rén gong fǎn duì)"],
          "translation": "The conflict between the protagonist and antagonist is the core of the story",
          "languageCode": "zh",
          "romanization": "zhǔ rén gong yǔ fǎn miàn rén wu zhī jiān de chōng tu shì gu shi de hé xin",
          "correctAnswer": "主人公与反面人物之间的冲突是故事的核心 (zhǔ rén gong yǔ fǎn miàn rén wu zhī jiān de chōng tu shì gu shi de hé xin)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "故事的进展可以分为三个主要阶段：开始、中间和结局",
          "prompt": "How do you structure narrative stages: 'The story's progression can be divided into three main stages: beginning, middle, and ending'?",
          "options": ["故事的进展可以分为三个主要阶段：开始、中间和结局 (gu shi de jìn zhǎn kě yi fēn wéi sān ge zhǔ yào jiē duàn: kāi shi, zhong jiān he jié ju)", "进展阶段 (jìn zhǎn jiē duàn)", "开始结局 (kāi shi jié ju)", "三个阶段 (sān ge jiē duàn)"],
          "translation": "The story's progression can be divided into three main stages: beginning, middle, and ending",
          "languageCode": "zh",
          "romanization": "gu shi de jìn zhǎn kě yi fēn wéi sān ge zhǔ yào jiē duàn: kāi shi, zhong jiān he jié ju",
          "correctAnswer": "故事的进展可以分为三个主要阶段：开始、中间和结局 (gu shi de jìn zhǎn kě yi fēn wéi sān ge zhǔ yào jiē duàn: kāi shi, zhong jiān he jié ju)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "在故事的中间出现了一个意想不到的转折",
          "prompt": "How do you describe plot twist: 'An unexpected turn occurred in the middle of the story'?",
          "options": ["在故事的中间出现了一个意想不到的转折 (zài gu shi de zhong jiān chu xiàn le yi ge yi xiǎng bu dào de zhuǎn zhé)", "转折出现 (zhuǎn zhé chu xiàn)", "意想不到 (yi xiǎng bu dào)", "故事中间 (gu shi zhong jiān)"],
          "translation": "An unexpected turn occurred in the middle of the story",
          "languageCode": "zh",
          "romanization": "zài gu shi de zhong jiān chu xiàn le yi ge yi xiǎng bu dào de zhuǎn zhé",
          "correctAnswer": "在故事的中间出现了一个意想不到的转折 (zài gu shi de zhong jiān chu xiàn le yi ge yi xiǎng bu dào de zhuǎn zhé)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "故事的结局既令人满意，又发人深思",
          "prompt": "How do you describe ending: 'The story's ending is both satisfying and thought-provoking'?",
          "options": ["故事的结局既令人满意，又发人深思 (gu shi de jié ju ji ling rén mǎn yi, you fā rén shēn si)", "结局满意 (jié ju mǎn yi)", "发人深思 (fā rén shēn si)", "既又 (ji you)"],
          "translation": "The story's ending is both satisfying and thought-provoking",
          "languageCode": "zh",
          "romanization": "gu shi de jié ju ji ling rén mǎn yi, you fā rén shēn si",
          "correctAnswer": "故事的结局既令人满意，又发人深思 (gu shi de jié ju ji ling rén mǎn yi, you fā rén shēn si)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "故事",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Story", "Tale", "Narrative", "Plot"],
          "translation": "Story",
          "languageCode": "zh",
          "romanization": "gu shi",
          "correctAnswer": "Story",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "人物",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Character", "Person", "Figure", "Individual"],
          "translation": "Character",
          "languageCode": "zh",
          "romanization": "rén wu",
          "correctAnswer": "Character",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "情节",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Plot", "Storyline", "Episode", "Scene"],
          "translation": "Plot",
          "languageCode": "zh",
          "romanization": "qíng jié",
          "correctAnswer": "Plot",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "冲突",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Conflict", "Dispute", "Tension", "Clash"],
          "translation": "Conflict",
          "languageCode": "zh",
          "romanization": "chōng tu",
          "correctAnswer": "Conflict",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "结局",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Ending", "Conclusion", "Outcome", "Finale"],
          "translation": "Ending",
          "languageCode": "zh",
          "romanization": "jié ju",
          "correctAnswer": "Ending",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "转折",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Turn", "Plot twist", "Turning point", "Reversal"],
          "translation": "Turn",
          "languageCode": "zh",
          "romanization": "zhuǎn zhé",
          "correctAnswer": "Turn",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "故事的背景设定在一个虚构的未来世界",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The story's background is set in a fictional future world", "Story background future", "Fictional setting", "Set in world"],
          "translation": "The story's background is set in a fictional future world",
          "languageCode": "zh",
          "romanization": "gu shi de běi jǐng shè dìng zài yi ge xu gòu de wèi lái shì jiè",
          "correctAnswer": "The story's background is set in a fictional future world",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "主人公与反面人物之间的冲突是故事的核心",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The protagonist-antagonist conflict is the story's core", "Character conflict", "Main conflict", "Story center"],
          "translation": "The protagonist-antagonist conflict is the story's core",
          "languageCode": "zh",
          "romanization": "zhǔ rén gong yǔ fǎn miàn rén wu zhī jiān de chōng tu shì gu shi de hé xin",
          "correctAnswer": "The protagonist-antagonist conflict is the story's core",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "在故事的中间出现了一个意想不到的转折",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["An unexpected turn occurred in the middle of the story", "Plot twist appears", "Unexpected turn", "Story surprise"],
          "translation": "An unexpected turn occurred in the middle of the story",
          "languageCode": "zh",
          "romanization": "zài gu shi de zhong jiān chu xiàn le yi ge yi xiǎng bu dào de zhuǎn zhé",
          "correctAnswer": "An unexpected turn occurred in the middle of the story",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "故事的结局既令人满意，又发人深思",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The ending is both satisfying and thought-provoking", "Good and meaningful ending", "Satisfying conclusion", "Thought-provoking result"],
          "translation": "The ending is both satisfying and thought-provoking",
          "languageCode": "zh",
          "romanization": "gu shi de jié ju ji ling rén mǎn yi, you fā rén shēn si",
          "correctAnswer": "The ending is both satisfying and thought-provoking",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "故事的进展可以分为三个主要阶段：开始、中间和结局",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The story progression divides into three stages: beginning, middle, ending", "Three story stages", "Story structure", "Beginning middle end"],
          "translation": "The story progression divides into three stages: beginning, middle, ending",
          "languageCode": "zh",
          "romanization": "gu shi de jìn zhǎn kě yi fēn wéi sān ge zhǔ yào jiē duàn: kāi shi, zhong jiān he jié ju",
          "correctAnswer": "The story progression divides into three stages: beginning, middle, ending",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "故事",
          "prompt": "Write the Chinese characters for 'Story'",
          "options": ["故事", "事故", "故", "事"],
          "translation": "Story",
          "languageCode": "zh",
          "romanization": "gu shi",
          "correctAnswer": "故事",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "人物",
          "prompt": "Write the Chinese characters for 'Character'",
          "options": ["人物", "物人", "人", "物"],
          "translation": "Character",
          "languageCode": "zh",
          "romanization": "rén wu",
          "correctAnswer": "人物",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "情节",
          "prompt": "Write the Chinese characters for 'Plot'",
          "options": ["情节", "节情", "情", "节"],
          "translation": "Plot",
          "languageCode": "zh",
          "romanization": "qíng jié",
          "correctAnswer": "情节",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "冲突",
          "prompt": "Write the Chinese characters for 'Conflict'",
          "options": ["冲突", "突冲", "冲", "突"],
          "translation": "Conflict",
          "languageCode": "zh",
          "romanization": "chōng tu",
          "correctAnswer": "冲突",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "结局",
          "prompt": "Write the Chinese characters for 'Ending'",
          "options": ["结局", "局结", "结", "局"],
          "translation": "Ending",
          "languageCode": "zh",
          "romanization": "jié ju",
          "correctAnswer": "结局",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: WRITTEN COMMUNICATION =====
  {
    lessonId: 'zh-stage7-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "电子邮件",
          "prompt": "What does this word mean?",
          "options": ["Email", "Electronic mail", "Message", "Letter"],
          "translation": "Email",
          "languageCode": "zh",
          "romanization": "diàn zi yóu jiàn",
          "correctAnswer": "Email",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "信件",
          "prompt": "What does this word mean?",
          "options": ["Letter", "Correspondence", "Mail", "Note"],
          "translation": "Letter",
          "languageCode": "zh",
          "romanization": "xìn jiàn",
          "correctAnswer": "Letter",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "开头",
          "prompt": "What does this word mean?",
          "options": ["Opening", "Beginning", "Start", "Salutation"],
          "translation": "Opening",
          "languageCode": "zh",
          "romanization": "kāi tou",
          "correctAnswer": "Opening",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "结尾",
          "prompt": "What does this word mean?",
          "options": ["Closing", "Ending", "Conclusion", "Sign-off"],
          "translation": "Closing",
          "languageCode": "zh",
          "romanization": "jié wei",
          "correctAnswer": "Closing",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "正文",
          "prompt": "What does this word mean?",
          "options": ["Body", "Main text", "Content", "Message body"],
          "translation": "Body",
          "languageCode": "zh",
          "romanization": "zhèng wén",
          "correctAnswer": "Body",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "署名",
          "prompt": "What does this word mean?",
          "options": ["Signature", "Sign", "Name", "Author"],
          "translation": "Signature",
          "languageCode": "zh",
          "romanization": "shǔ míng",
          "correctAnswer": "Signature",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "格式",
          "prompt": "What does this word mean?",
          "options": ["Format", "Style", "Layout", "Structure"],
          "translation": "Format",
          "languageCode": "zh",
          "romanization": "gé shi",
          "correctAnswer": "Format",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "避免",
          "prompt": "What does this verb mean?",
          "options": ["Avoid", "Prevent", "Refrain from", "Escape"],
          "translation": "Avoid",
          "languageCode": "zh",
          "romanization": "bi miǎn",
          "correctAnswer": "Avoid",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "在写正式电子邮件时，应该使用适当的开头和结尾",
          "prompt": "How do you describe email etiquette: 'When writing a formal email, you should use appropriate opening and closing'?",
          "options": ["在写正式电子邮件时，应该使用适当的开头和结尾 (zài xiě zhèng shì diàn zi yóu jiàn shí, yīng gāi shǐ yòng shì dāng de kāi tou he jié wei)", "电子邮件开头 (diàn zi yóu jiàn kāi tou)", "正式结尾 (zhèng shì jié wei)", "使用开头结尾 (shǐ yòng kāi tou jié wei)"],
          "translation": "When writing a formal email, you should use appropriate opening and closing",
          "languageCode": "zh",
          "romanization": "zài xiě zhèng shì diàn zi yóu jiàn shí, yīng gāi shǐ yòng shì dāng de kāi tou he jié wei",
          "correctAnswer": "在写正式电子邮件时，应该使用适当的开头和结尾 (zài xiě zhèng shì diàn zi yóu jiàn shí, yīng gāi shǐ yòng shì dāng de kāi tou he jié wei)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "信件的正文应该清晰明确，避免过于复杂的表达",
          "prompt": "How do you describe writing clarity: 'The body of the letter should be clear and concise, avoiding overly complex expressions'?",
          "options": ["信件的正文应该清晰明确，避免过于复杂的表达 (xìn jiàn de zhèng wén yīng gāi qīng xi míng que, bi miǎn guò yu fu zá de biǎo dá)", "正文清晰 (zhèng wén qīng xi)", "避免复杂 (bi miǎn fu zá)", "表达明确 (biǎo dá míng que)"],
          "translation": "The body of the letter should be clear and concise, avoiding overly complex expressions",
          "languageCode": "zh",
          "romanization": "xìn jiàn de zhèng wén yīng gāi qīng xi míng que, bi miǎn guò yu fu zá de biǎo dá",
          "correctAnswer": "信件的正文应该清晰明确，避免过于复杂的表达 (xìn jiàn de zhèng wén yīng gāi qīng xi míng que, bi miǎn guò yu fu zá de biǎo dá)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "在署名之前，应该使用恰当的结尾语来表达敬意",
          "prompt": "How do you express respect in closing: 'Before signing, you should use an appropriate closing phrase to express respect'?",
          "options": ["在署名之前，应该使用恰当的结尾语来表达敬意 (zài shǔ míng zhī qián, yīng gāi shǐ yòng qià dāng de jié wei yu lái biǎo dá jìng yi)", "署名结尾 (shǔ míng jié wei)", "结尾语敬意 (jié wei yu jìng yi)", "恰当表达 (qià dāng biǎo dá)"],
          "translation": "Before signing, you should use an appropriate closing phrase to express respect",
          "languageCode": "zh",
          "romanization": "zài shǔ míng zhī qián, yīng gāi shǐ yòng qià dāng de jié wei yu lái biǎo dá jìng yi",
          "correctAnswer": "在署名之前，应该使用恰当的结尾语来表达敬意 (zài shǔ míng zhī qián, yīng gāi shǐ yòng qià dāng de jié wei yu lái biǎo dá jìng yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "不同的文化背景可能对信的格式和内容有不同的期望",
          "prompt": "How do you discuss cultural considerations: 'Different cultural backgrounds may have different expectations for letter format and content'?",
          "options": ["不同的文化背景可能对信的格式和内容有不同的期望 (bu tóng de wén huà běi jǐng kě néng duì xìn de gé shi he nèi róng yǒu bu tóng de qī wàng)", "格式内容期望 (gé shi nèi róng qī wàng)", "文化背景 (wén huà běi jǐng)", "不同期望 (bu tóng qī wàng)"],
          "translation": "Different cultural backgrounds may have different expectations for letter format and content",
          "languageCode": "zh",
          "romanization": "bu tóng de wén huà běi jǐng kě néng duì xìn de gé shi he nèi róng yǒu bu tóng de qī wàng",
          "correctAnswer": "不同的文化背景可能对信的格式和内容有不同的期望 (bu tóng de wén huà běi jǐng kě néng duì xìn de gé shi he nèi róng yǒu bu tóng de qī wàng)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "检查邮件的拼写和语法错误是发送前的重要步骤",
          "prompt": "How do you emphasize proofreading: 'Checking the email for spelling and grammar errors is an important step before sending'?",
          "options": ["检查邮件的拼写和语法错误是发送前的重要步骤 (jiǎn cha yóu jiàn de pīn xiě he yu fǎ cuò wu shì fā sòng qián de zhòng yào bu zhou)", "检查错误 (jiǎn cha cuò wu)", "拼写语法 (pīn xiě yu fǎ)", "发送前步骤 (fā sòng qián bu zhou)"],
          "translation": "Checking the email for spelling and grammar errors is an important step before sending",
          "languageCode": "zh",
          "romanization": "jiǎn cha yóu jiàn de pīn xiě he yu fǎ cuò wu shì fā sòng qián de zhòng yào bu zhou",
          "correctAnswer": "检查邮件的拼写和语法错误是发送前的重要步骤 (jiǎn cha yóu jiàn de pīn xiě he yu fǎ cuò wu shì fā sòng qián de zhòng yào bu zhou)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "电子邮件",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Email", "Electronic mail", "Message", "Letter"],
          "translation": "Email",
          "languageCode": "zh",
          "romanization": "diàn zi yóu jiàn",
          "correctAnswer": "Email",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "信件",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Letter", "Correspondence", "Mail", "Note"],
          "translation": "Letter",
          "languageCode": "zh",
          "romanization": "xìn jiàn",
          "correctAnswer": "Letter",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "正文",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Body", "Main text", "Content", "Message body"],
          "translation": "Body",
          "languageCode": "zh",
          "romanization": "zhèng wén",
          "correctAnswer": "Body",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "格式",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Format", "Style", "Layout", "Structure"],
          "translation": "Format",
          "languageCode": "zh",
          "romanization": "gé shi",
          "correctAnswer": "Format",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "署名",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Signature", "Sign", "Name", "Author"],
          "translation": "Signature",
          "languageCode": "zh",
          "romanization": "shǔ míng",
          "correctAnswer": "Signature",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "避免",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Avoid", "Prevent", "Refrain from", "Escape"],
          "translation": "Avoid",
          "languageCode": "zh",
          "romanization": "bi miǎn",
          "correctAnswer": "Avoid",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "在写正式电子邮件时，应该使用适当的开头和结尾",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["When writing formal emails, use appropriate opening and closing", "Formal email format", "Opening and closing", "Email etiquette"],
          "translation": "When writing formal emails, use appropriate opening and closing",
          "languageCode": "zh",
          "romanization": "zài xiě zhèng shì diàn zi yóu jiàn shí, yīng gāi shǐ yòng shì dāng de kāi tou he jié wei",
          "correctAnswer": "When writing formal emails, use appropriate opening and closing",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "信件的正文应该清晰明确，避免过于复杂的表达",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The letter body should be clear, avoiding complex expressions", "Clear writing", "Main content clarity", "Simple expression"],
          "translation": "The letter body should be clear, avoiding complex expressions",
          "languageCode": "zh",
          "romanization": "xìn jiàn de zhèng wén yīng gāi qīng xi míng que, bi miǎn guò yu fu zá de biǎo dá",
          "correctAnswer": "The letter body should be clear, avoiding complex expressions",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "在署名之前，应该使用恰当的结尾语来表达敬意",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Before signing, use appropriate closing to express respect", "Respectful closing", "Sign off properly", "Show respect"],
          "translation": "Before signing, use appropriate closing to express respect",
          "languageCode": "zh",
          "romanization": "zài shǔ míng zhī qián, yīng gāi shǐ yòng qià dāng de jié wei yu lái biǎo dá jìng yi",
          "correctAnswer": "Before signing, use appropriate closing to express respect",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "检查邮件的拼写和语法错误是发送前的重要步骤",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Checking spelling and grammar before sending is important", "Proofread email", "Check errors", "Before sending"],
          "translation": "Checking spelling and grammar before sending is important",
          "languageCode": "zh",
          "romanization": "jiǎn cha yóu jiàn de pīn xiě he yu fǎ cuò wu shì fā sòng qián de zhòng yào bu zhou",
          "correctAnswer": "Checking spelling and grammar before sending is important",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "不同的文化背景可能对信的格式和内容有不同的期望",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Different cultures have different expectations for letter format", "Cultural differences", "Format expectations", "Cultural context"],
          "translation": "Different cultures have different expectations for letter format",
          "languageCode": "zh",
          "romanization": "bu tóng de wén huà běi jǐng kě néng duì xìn de gé shi he nèi róng yǒu bu tóng de qī wàng",
          "correctAnswer": "Different cultures have different expectations for letter format",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage7-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "电子邮件",
          "prompt": "Write the Chinese characters for 'Email'",
          "options": ["电子邮件", "邮件电子", "电子", "邮件"],
          "translation": "Email",
          "languageCode": "zh",
          "romanization": "diàn zi yóu jiàn",
          "correctAnswer": "电子邮件",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "信件",
          "prompt": "Write the Chinese characters for 'Letter'",
          "options": ["信件", "件信", "信", "件"],
          "translation": "Letter",
          "languageCode": "zh",
          "romanization": "xìn jiàn",
          "correctAnswer": "信件",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "正文",
          "prompt": "Write the Chinese characters for 'Body'",
          "options": ["正文", "文正", "正", "文"],
          "translation": "Body",
          "languageCode": "zh",
          "romanization": "zhèng wén",
          "correctAnswer": "正文",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "格式",
          "prompt": "Write the Chinese characters for 'Format'",
          "options": ["格式", "式格", "格", "式"],
          "translation": "Format",
          "languageCode": "zh",
          "romanization": "gé shi",
          "correctAnswer": "格式",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "署名",
          "prompt": "Write the Chinese characters for 'Signature'",
          "options": ["署名", "名署", "署", "名"],
          "translation": "Signature",
          "languageCode": "zh",
          "romanization": "shǔ míng",
          "correctAnswer": "署名",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 7 (B1+ - Reader) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (News, Formal/Informal, Comprehension, Narrative, Written Comm.)\n');

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
