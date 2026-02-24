import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Complete update array for Stage 5: A2+ - Traveler
const lessonUpdates = [
  // ===== CHAPTER 1: MAP & DIRECTIONS =====
  {
    lessonId: 'zh-stage5-ch1-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "地图",
          "prompt": "What does this word mean?",
          "options": ["Map", "Location", "Place", "Route"],
          "translation": "Map",
          "languageCode": "zh",
          "romanization": "dì tú",
          "correctAnswer": "Map",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "方向",
          "prompt": "What does this word mean?",
          "options": ["Direction", "Way", "Path", "Road"],
          "translation": "Direction",
          "languageCode": "zh",
          "romanization": "fāng xiàng",
          "correctAnswer": "Direction",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "北",
          "prompt": "What does this direction mean?",
          "options": ["North", "South", "East", "West"],
          "translation": "North",
          "languageCode": "zh",
          "romanization": "běi",
          "correctAnswer": "North",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "南",
          "prompt": "What does this direction mean?",
          "options": ["South", "North", "East", "West"],
          "translation": "South",
          "languageCode": "zh",
          "romanization": "nán",
          "correctAnswer": "South",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "东",
          "prompt": "What does this direction mean?",
          "options": ["East", "West", "North", "South"],
          "translation": "East",
          "languageCode": "zh",
          "romanization": "dōng",
          "correctAnswer": "East",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "西",
          "prompt": "What does this direction mean?",
          "options": ["West", "East", "North", "South"],
          "translation": "West",
          "languageCode": "zh",
          "romanization": "xī",
          "correctAnswer": "West",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "直走",
          "prompt": "What does this phrase mean?",
          "options": ["Go straight", "Turn around", "Go back", "Turn right"],
          "translation": "Go straight",
          "languageCode": "zh",
          "romanization": "zhí zǒu",
          "correctAnswer": "Go straight",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "转弯",
          "prompt": "What does this verb mean?",
          "options": ["Turn", "Go straight", "Stop", "Wait"],
          "translation": "Turn",
          "languageCode": "zh",
          "romanization": "zhuǎn wān",
          "correctAnswer": "Turn",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch1-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "你能告诉我怎么去火车站吗？",
          "prompt": "How do you ask 'Can you tell me how to get to the train station?'",
          "options": ["你能告诉我怎么去火车站吗？(nǐ néng gào su wǒ zěn me qù huǒ chē zhàn ma?)", "怎么去火车站？(zěn me qù huǒ chē zhàn?)", "火车站在哪里？(huǒ chē zhàn zài nǎ li?)", "告诉我火车站 (gào su wǒ huǒ chē zhàn)"],
          "translation": "Can you tell me how to get to the train station?",
          "languageCode": "zh",
          "romanization": "nǐ néng gào su wǒ zěn me qù huǒ chē zhàn ma?",
          "correctAnswer": "你能告诉我怎么去火车站吗？(nǐ néng gào su wǒ zěn me qù huǒ chē zhàn ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "向右转，然后直走",
          "prompt": "How do you say 'Turn right, then go straight'?",
          "options": ["向右转，然后直走 (xiàng yòu zhuǎn, rán hòu zhí zǒu)", "右转直走 (yòu zhuǎn zhí zǒu)", "转右直 (zhuǎn yòu zhí)", "然后向右 (rán hòu xiàng yòu)"],
          "translation": "Turn right, then go straight",
          "languageCode": "zh",
          "romanization": "xiàng yòu zhuǎn, rán hòu zhí zǒu",
          "correctAnswer": "向右转，然后直走 (xiàng yòu zhuǎn, rán hòu zhí zǒu)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "医院在公园的北边",
          "prompt": "How do you say 'The hospital is north of the park'?",
          "options": ["医院在公园的北边 (yī yuàn zài gōng yuán de běi bian)", "医院北公园 (yī yuàn běi gōng yuán)", "公园在医院 (gōng yuán zài yī yuàn)", "北边医院 (běi bian yī yuàn)"],
          "translation": "The hospital is north of the park",
          "languageCode": "zh",
          "romanization": "yī yuàn zài gōng yuán de běi bian",
          "correctAnswer": "医院在公园的北边 (yī yuàn zài gōng yuán de běi bian)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这条街在地图的哪一边？",
          "prompt": "How do you ask 'Which side of the map is this street on?'",
          "options": ["这条街在地图的哪一边？(zhè tiáo jiē zài dì tú de nǎ yī bian?)", "这条街在哪里？(zhè tiáo jiē zài nǎ li?)", "街在地图 (jiē zài dì tú)", "哪一边？(nǎ yī bian?)"],
          "translation": "Which side of the map is this street on?",
          "languageCode": "zh",
          "romanization": "zhè tiáo jiē zài dì tú de nǎ yī bian?",
          "correctAnswer": "这条街在地图的哪一边？(zhè tiáo jiē zài dì tú de nǎ yī bian?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "从这里向东走大概两公里",
          "prompt": "How do you say 'Go east from here for about 2 kilometers'?",
          "options": ["从这里向东走大概两公里 (cóng zhè li xiàng dōng zǒu dà gài liǎng gōng lǐ)", "这里东走 (zhè li dōng zǒu)", "向东两公里 (xiàng dōng liǎng gōng lǐ)", "走东边 (zǒu dōng bian)"],
          "translation": "Go east from here for about 2 kilometers",
          "languageCode": "zh",
          "romanization": "cóng zhè li xiàng dōng zǒu dà gài liǎng gōng lǐ",
          "correctAnswer": "从这里向东走大概两公里 (cóng zhè li xiàng dōng zǒu dà gài liǎng gōng lǐ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch1-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "地图",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Map", "Location", "Place", "Road"],
          "translation": "Map",
          "languageCode": "zh",
          "romanization": "dì tú",
          "correctAnswer": "Map",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "北",
          "prompt": "Listen and select the correct direction.",
          "options": ["North", "South", "East", "West"],
          "translation": "North",
          "languageCode": "zh",
          "romanization": "běi",
          "correctAnswer": "North",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "东",
          "prompt": "Listen and select the correct direction.",
          "options": ["East", "West", "North", "South"],
          "translation": "East",
          "languageCode": "zh",
          "romanization": "dōng",
          "correctAnswer": "East",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "直走",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Go straight", "Turn around", "Go back", "Stop"],
          "translation": "Go straight",
          "languageCode": "zh",
          "romanization": "zhí zǒu",
          "correctAnswer": "Go straight",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "转弯",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Turn", "Go", "Stop", "Walk"],
          "translation": "Turn",
          "languageCode": "zh",
          "romanization": "zhuǎn wān",
          "correctAnswer": "Turn",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "方向",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Direction", "Way", "Path", "Route"],
          "translation": "Direction",
          "languageCode": "zh",
          "romanization": "fāng xiàng",
          "correctAnswer": "Direction",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch1-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "你能告诉我怎么去火车站吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Can you tell me how to get to the train station?", "How is the train station", "Where is train", "Tell me the station"],
          "translation": "Can you tell me how to get to the train station?",
          "languageCode": "zh",
          "romanization": "nǐ néng gào su wǒ zěn me qù huǒ chē zhàn ma?",
          "correctAnswer": "Can you tell me how to get to the train station?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "向右转，然后直走",
          "prompt": "Speak this instruction aloud. What does it mean?",
          "options": ["Turn right, then go straight", "Right then straight", "Turn and go", "Go right forward"],
          "translation": "Turn right, then go straight",
          "languageCode": "zh",
          "romanization": "xiàng yòu zhuǎn, rán hòu zhí zǒu",
          "correctAnswer": "Turn right, then go straight",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "医院在公园的北边",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["The hospital is north of the park", "Hospital near park", "Park is north", "North hospital park"],
          "translation": "The hospital is north of the park",
          "languageCode": "zh",
          "romanization": "yī yuàn zài gōng yuán de běi bian",
          "correctAnswer": "The hospital is north of the park",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这条街在地图的哪一边？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Which side of the map is this street on?", "What street this", "Where on map", "Side of street"],
          "translation": "Which side of the map is this street on?",
          "languageCode": "zh",
          "romanization": "zhè tiáo jiē zài dì tú de nǎ yī bian?",
          "correctAnswer": "Which side of the map is this street on?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "从这里向东走大概两公里",
          "prompt": "Speak this instruction aloud. What does it mean?",
          "options": ["Go east from here for about 2 kilometers", "Go east two km", "Walk east from here", "About east kilometers"],
          "translation": "Go east from here for about 2 kilometers",
          "languageCode": "zh",
          "romanization": "cóng zhè li xiàng dōng zǒu dà gài liǎng gōng lǐ",
          "correctAnswer": "Go east from here for about 2 kilometers",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch1-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "地图",
          "prompt": "Write the Chinese characters for 'Map'",
          "options": ["地图", "方向", "路", "街"],
          "translation": "Map",
          "languageCode": "zh",
          "romanization": "dì tú",
          "correctAnswer": "地图",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "北",
          "prompt": "Write the Chinese character for 'North'",
          "options": ["北", "南", "东", "西"],
          "translation": "North",
          "languageCode": "zh",
          "romanization": "běi",
          "correctAnswer": "北",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "东",
          "prompt": "Write the Chinese character for 'East'",
          "options": ["东", "西", "北", "南"],
          "translation": "East",
          "languageCode": "zh",
          "romanization": "dōng",
          "correctAnswer": "东",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "直走",
          "prompt": "Write the Chinese characters for 'Go straight'",
          "options": ["直走", "走直", "直线", "直"],
          "translation": "Go straight",
          "languageCode": "zh",
          "romanization": "zhí zǒu",
          "correctAnswer": "直走",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "转弯",
          "prompt": "Write the Chinese characters for 'Turn'",
          "options": ["转弯", "转", "弯", "转向"],
          "translation": "Turn",
          "languageCode": "zh",
          "romanization": "zhuǎn wān",
          "correctAnswer": "转弯",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 2: TRANSPORT =====
  {
    lessonId: 'zh-stage5-ch2-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "公交车",
          "prompt": "What does this word mean?",
          "options": ["Bus", "Taxi", "Train", "Car"],
          "translation": "Bus",
          "languageCode": "zh",
          "romanization": "gōng jiāo chē",
          "correctAnswer": "Bus",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "火车",
          "prompt": "What does this word mean?",
          "options": ["Train", "Bus", "Taxi", "Subway"],
          "translation": "Train",
          "languageCode": "zh",
          "romanization": "huǒ chē",
          "correctAnswer": "Train",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "地铁",
          "prompt": "What does this word mean?",
          "options": ["Subway", "Bus", "Train", "Taxi"],
          "translation": "Subway",
          "languageCode": "zh",
          "romanization": "dì tiě",
          "correctAnswer": "Subway",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "出租车",
          "prompt": "What does this word mean?",
          "options": ["Taxi", "Bus", "Rental car", "Private car"],
          "translation": "Taxi",
          "languageCode": "zh",
          "romanization": "chū zū chē",
          "correctAnswer": "Taxi",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "飞机",
          "prompt": "What does this word mean?",
          "options": ["Airplane", "Helicopter", "Jet", "Plane"],
          "translation": "Airplane",
          "languageCode": "zh",
          "romanization": "fēi jī",
          "correctAnswer": "Airplane",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "票",
          "prompt": "What does this word mean?",
          "options": ["Ticket", "Pass", "Card", "Document"],
          "translation": "Ticket",
          "languageCode": "zh",
          "romanization": "piào",
          "correctAnswer": "Ticket",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "站",
          "prompt": "What does this word mean?",
          "options": ["Station", "Stop", "Stand", "Platform"],
          "translation": "Station",
          "languageCode": "zh",
          "romanization": "zhàn",
          "correctAnswer": "Station",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "出发",
          "prompt": "What does this verb mean?",
          "options": ["Depart", "Leave", "Go", "Start"],
          "translation": "Depart",
          "languageCode": "zh",
          "romanization": "chū fā",
          "correctAnswer": "Depart",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch2-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我需要买去北京的火车票",
          "prompt": "How do you say 'I need to buy a train ticket to Beijing'?",
          "options": ["我需要买去北京的火车票 (wǒ xū yào mǎi qù běi jīng de huǒ chē piào)", "我要买火车票 (wǒ yào mǎi huǒ chē piào)", "去北京火车票 (qù běi jīng huǒ chē piào)", "买北京票 (mǎi běi jīng piào)"],
          "translation": "I need to buy a train ticket to Beijing",
          "languageCode": "zh",
          "romanization": "wǒ xū yào mǎi qù běi jīng de huǒ chē piào",
          "correctAnswer": "我需要买去北京的火车票 (wǒ xū yào mǎi qù běi jīng de huǒ chē piào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这班公交车去电影院吗？",
          "prompt": "How do you ask 'Does this bus go to the cinema?'",
          "options": ["这班公交车去电影院吗？(zhè bān gōng jiāo chē qù diàn yǐng yuàn ma?)", "公交车去电影院？(gōng jiāo chē qù diàn yǐng yuàn?)", "这个公交去哪里？(zhè ge gōng jiāo qù nǎ li?)", "电影院公交 (diàn yǐng yuàn gōng jiāo)"],
          "translation": "Does this bus go to the cinema?",
          "languageCode": "zh",
          "romanization": "zhè bān gōng jiāo chē qù diàn yǐng yuàn ma?",
          "correctAnswer": "这班公交车去电影院吗？(zhè bān gōng jiāo chē qù diàn yǐng yuàn ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "飞机什么时候出发？",
          "prompt": "How do you ask 'When does the airplane depart?'",
          "options": ["飞机什么时候出发？(fēi jī shén me shí hou chū fā?)", "飞机出发？(fēi jī chū fā?)", "什么时候飞机？(shén me shí hou fēi jī?)", "飞机时间 (fēi jī shí jiān)"],
          "translation": "When does the airplane depart?",
          "languageCode": "zh",
          "romanization": "fēi jī shén me shí hou chū fā?",
          "correctAnswer": "飞机什么时候出发？(fēi jī shén me shí hou chū fā?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "坐地铁比坐出租车便宜",
          "prompt": "How do you say 'Taking the subway is cheaper than taking a taxi'?",
          "options": ["坐地铁比坐出租车便宜 (zuò dì tiě bǐ zuò chū zū chē pián yi)", "地铁便宜 (dì tiě pián yi)", "比出租车便宜 (bǐ chū zū chē pián yi)", "地铁出租车便宜 (dì tiě chū zū chē pián yi)"],
          "translation": "Taking the subway is cheaper than taking a taxi",
          "languageCode": "zh",
          "romanization": "zuò dì tiě bǐ zuò chū zū chē pián yi",
          "correctAnswer": "坐地铁比坐出租车便宜 (zuò dì tiě bǐ zuò chū zū chē pián yi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这是去机场的车吗？",
          "prompt": "How do you ask 'Is this the car to the airport?'",
          "options": ["这是去机场的车吗？(zhè shì qù jī chǎng de chē ma?)", "这个车去机场？(zhè ge chē qù jī chǎng?)", "机场车吗？(jī chǎng chē ma?)", "去机场的 (qù jī chǎng de)"],
          "translation": "Is this the car to the airport?",
          "languageCode": "zh",
          "romanization": "zhè shì qù jī chǎng de chē ma?",
          "correctAnswer": "这是去机场的车吗？(zhè shì qù jī chǎng de chē ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch2-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "公交车",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Bus", "Taxi", "Train", "Subway"],
          "translation": "Bus",
          "languageCode": "zh",
          "romanization": "gōng jiāo chē",
          "correctAnswer": "Bus",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "火车",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Train", "Bus", "Taxi", "Airplane"],
          "translation": "Train",
          "languageCode": "zh",
          "romanization": "huǒ chē",
          "correctAnswer": "Train",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "地铁",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Subway", "Bus", "Train", "Taxi"],
          "translation": "Subway",
          "languageCode": "zh",
          "romanization": "dì tiě",
          "correctAnswer": "Subway",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "飞机",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Airplane", "Helicopter", "Jet", "Aircraft"],
          "translation": "Airplane",
          "languageCode": "zh",
          "romanization": "fēi jī",
          "correctAnswer": "Airplane",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "出发",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Depart", "Leave", "Go", "Start"],
          "translation": "Depart",
          "languageCode": "zh",
          "romanization": "chū fā",
          "correctAnswer": "Depart",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "票",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Ticket", "Pass", "Card", "Document"],
          "translation": "Ticket",
          "languageCode": "zh",
          "romanization": "piào",
          "correctAnswer": "Ticket",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch2-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我需要买去北京的火车票",
          "prompt": "Speak this sentence aloud. What does it mean?",
          "options": ["I need to buy a train ticket to Beijing", "I need train ticket", "Beijing train", "Buy train ticket"],
          "translation": "I need to buy a train ticket to Beijing",
          "languageCode": "zh",
          "romanization": "wǒ xū yào mǎi qù běi jīng de huǒ chē piào",
          "correctAnswer": "I need to buy a train ticket to Beijing",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这班公交车去电影院吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Does this bus go to the cinema?", "This bus cinema", "Bus to movie", "Cinema bus"],
          "translation": "Does this bus go to the cinema?",
          "languageCode": "zh",
          "romanization": "zhè bān gōng jiāo chē qù diàn yǐng yuàn ma?",
          "correctAnswer": "Does this bus go to the cinema?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "飞机什么时候出发？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["When does the airplane depart?", "When airplane", "Airplane time", "Depart when"],
          "translation": "When does the airplane depart?",
          "languageCode": "zh",
          "romanization": "fēi jī shén me shí hou chū fā?",
          "correctAnswer": "When does the airplane depart?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "坐地铁比坐出租车便宜",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["Taking the subway is cheaper than taking a taxi", "Subway cheaper", "Cheaper than taxi", "Taxi more expensive"],
          "translation": "Taking the subway is cheaper than taking a taxi",
          "languageCode": "zh",
          "romanization": "zuò dì tiě bǐ zuò chū zū chē pián yi",
          "correctAnswer": "Taking the subway is cheaper than taking a taxi",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这是去机场的车吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Is this the car to the airport?", "Car airport", "To airport", "Airport vehicle"],
          "translation": "Is this the car to the airport?",
          "languageCode": "zh",
          "romanization": "zhè shì qù jī chǎng de chē ma?",
          "correctAnswer": "Is this the car to the airport?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch2-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "公交车",
          "prompt": "Write the Chinese characters for 'Bus'",
          "options": ["公交车", "火车", "地铁", "出租车"],
          "translation": "Bus",
          "languageCode": "zh",
          "romanization": "gōng jiāo chē",
          "correctAnswer": "公交车",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "火车",
          "prompt": "Write the Chinese characters for 'Train'",
          "options": ["火车", "公交车", "地铁", "飞机"],
          "translation": "Train",
          "languageCode": "zh",
          "romanization": "huǒ chē",
          "correctAnswer": "火车",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "地铁",
          "prompt": "Write the Chinese characters for 'Subway'",
          "options": ["地铁", "公交车", "火车", "飞机"],
          "translation": "Subway",
          "languageCode": "zh",
          "romanization": "dì tiě",
          "correctAnswer": "地铁",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "飞机",
          "prompt": "Write the Chinese characters for 'Airplane'",
          "options": ["飞机", "火车", "地铁", "汽车"],
          "translation": "Airplane",
          "languageCode": "zh",
          "romanization": "fēi jī",
          "correctAnswer": "飞机",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "出发",
          "prompt": "Write the Chinese characters for 'Depart'",
          "options": ["出发", "出去", "发车", "出门"],
          "translation": "Depart",
          "languageCode": "zh",
          "romanization": "chū fā",
          "correctAnswer": "出发",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 3: WEATHER =====
  {
    lessonId: 'zh-stage5-ch3-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "天气",
          "prompt": "What does this word mean?",
          "options": ["Weather", "Climate", "Season", "Temperature"],
          "translation": "Weather",
          "languageCode": "zh",
          "romanization": "tiān qì",
          "correctAnswer": "Weather",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "晴天",
          "prompt": "What does this word mean?",
          "options": ["Sunny day", "Clear sky", "Good weather", "Bright day"],
          "translation": "Sunny day",
          "languageCode": "zh",
          "romanization": "qíng tiān",
          "correctAnswer": "Sunny day",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "下雨",
          "prompt": "What does this verb mean?",
          "options": ["Rain", "Raining", "Rainy", "It rains"],
          "translation": "Rain",
          "languageCode": "zh",
          "romanization": "xià yu",
          "correctAnswer": "Rain",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "下雪",
          "prompt": "What does this verb mean?",
          "options": ["Snow", "Snowing", "Snowy", "It snows"],
          "translation": "Snow",
          "languageCode": "zh",
          "romanization": "xià xuě",
          "correctAnswer": "Snow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "温度",
          "prompt": "What does this word mean?",
          "options": ["Temperature", "Heat", "Cold", "Degree"],
          "translation": "Temperature",
          "languageCode": "zh",
          "romanization": "wēn du",
          "correctAnswer": "Temperature",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "风",
          "prompt": "What does this word mean?",
          "options": ["Wind", "Breeze", "Air", "Gust"],
          "translation": "Wind",
          "languageCode": "zh",
          "romanization": "fēng",
          "correctAnswer": "Wind",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "雾",
          "prompt": "What does this word mean?",
          "options": ["Fog", "Mist", "Cloud", "Smoke"],
          "translation": "Fog",
          "languageCode": "zh",
          "romanization": "wu",
          "correctAnswer": "Fog",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "湿度",
          "prompt": "What does this word mean?",
          "options": ["Humidity", "Moisture", "Dampness", "Wetness"],
          "translation": "Humidity",
          "languageCode": "zh",
          "romanization": "shī du",
          "correctAnswer": "Humidity",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch3-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "今天天气怎么样？",
          "prompt": "How do you ask 'How is the weather today?'",
          "options": ["今天天气怎么样？(jīn tiān tiān qì zěn me yàng?)", "天气怎样？(tiān qì zěn yàng?)", "今天天气？(jīn tiān tiān qì?)", "怎么样天气 (zěn me yàng tiān qì)"],
          "translation": "How is the weather today?",
          "languageCode": "zh",
          "romanization": "jīn tiān tiān qì zěn me yàng?",
          "correctAnswer": "今天天气怎么样？(jīn tiān tiān qì zěn me yàng?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "明天会下雨吗？",
          "prompt": "How do you ask 'Will it rain tomorrow?'",
          "options": ["明天会下雨吗？(míng tiān huì xià yu ma?)", "明天下雨？(míng tiān xià yu?)", "会下雨吗？(huì xià yu ma?)", "下雨明天 (xià yu míng tiān)"],
          "translation": "Will it rain tomorrow?",
          "languageCode": "zh",
          "romanization": "míng tiān huì xià yu ma?",
          "correctAnswer": "明天会下雨吗？(míng tiān huì xià yu ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "这个季节很冷，经常下雪",
          "prompt": "How do you say 'This season is very cold and often snows'?",
          "options": ["这个季节很冷，经常下雪 (zhè ge jì jié hěn lěng, jīng cháng xià xuě)", "季节冷下雪 (jì jié lěng xià xuě)", "冷下雪 (lěng xià xuě)", "很冷经常雪 (hěn lěng jīng cháng xuě)"],
          "translation": "This season is very cold and often snows",
          "languageCode": "zh",
          "romanization": "zhè ge jì jié hěn lěng, jīng cháng xià xuě",
          "correctAnswer": "这个季节很冷，经常下雪 (zhè ge jì jié hěn lěng, jīng cháng xià xuě)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "温度多少度？",
          "prompt": "How do you ask 'What is the temperature?'",
          "options": ["温度多少度？(wēn du duō shao du?)", "多少度？(duō shao du?)", "温度？(wēn du?)", "度数？(du shu?)"],
          "translation": "What is the temperature?",
          "languageCode": "zh",
          "romanization": "wēn du duō shao du?",
          "correctAnswer": "温度多少度？(wēn du duō shao du?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "外面有风，要带伞",
          "prompt": "How do you say 'It's windy outside, bring an umbrella'?",
          "options": ["外面有风，要带伞 (wài mian yǒu fēng, yào dài sǎn)", "风要伞 (fēng yào sǎn)", "有风伞 (yǒu fēng sǎn)", "带伞风 (dài sǎn fēng)"],
          "translation": "It's windy outside, bring an umbrella",
          "languageCode": "zh",
          "romanization": "wài mian yǒu fēng, yào dài sǎn",
          "correctAnswer": "外面有风，要带伞 (wài mian yǒu fēng, yào dài sǎn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch3-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "天气",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Weather", "Climate", "Season", "Temperature"],
          "translation": "Weather",
          "languageCode": "zh",
          "romanization": "tiān qì",
          "correctAnswer": "Weather",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "晴天",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Sunny day", "Clear day", "Good day", "Bright"],
          "translation": "Sunny day",
          "languageCode": "zh",
          "romanization": "qíng tiān",
          "correctAnswer": "Sunny day",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "下雨",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Rain", "Raining", "Rainy", "Storm"],
          "translation": "Rain",
          "languageCode": "zh",
          "romanization": "xià yu",
          "correctAnswer": "Rain",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "下雪",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Snow", "Snowing", "Snowy", "Blizzard"],
          "translation": "Snow",
          "languageCode": "zh",
          "romanization": "xià xuě",
          "correctAnswer": "Snow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "温度",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Temperature", "Heat", "Cold", "Degree"],
          "translation": "Temperature",
          "languageCode": "zh",
          "romanization": "wēn du",
          "correctAnswer": "Temperature",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "风",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Wind", "Breeze", "Air", "Gust"],
          "translation": "Wind",
          "languageCode": "zh",
          "romanization": "fēng",
          "correctAnswer": "Wind",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch3-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "今天天气怎么样？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["How is the weather today?", "Today weather", "What weather", "Weather how"],
          "translation": "How is the weather today?",
          "languageCode": "zh",
          "romanization": "jīn tiān tiān qì zěn me yàng?",
          "correctAnswer": "How is the weather today?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "明天会下雨吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Will it rain tomorrow?", "Tomorrow rain", "Rain tomorrow", "Raining"],
          "translation": "Will it rain tomorrow?",
          "languageCode": "zh",
          "romanization": "míng tiān huì xià yu ma?",
          "correctAnswer": "Will it rain tomorrow?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "这个季节很冷，经常下雪",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["This season is very cold and often snows", "Cold season snows", "Often cold snow", "Snow cold"],
          "translation": "This season is very cold and often snows",
          "languageCode": "zh",
          "romanization": "zhè ge jì jié hěn lěng, jīng cháng xià xuě",
          "correctAnswer": "This season is very cold and often snows",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "温度多少度？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["What is the temperature?", "How many degrees", "Temperature what", "Degree measure"],
          "translation": "What is the temperature?",
          "languageCode": "zh",
          "romanization": "wēn du duō shao du?",
          "correctAnswer": "What is the temperature?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "外面有风，要带伞",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["It's windy outside, bring an umbrella", "Outside wind umbrella", "Windy need umbrella", "Bring umbrella"],
          "translation": "It's windy outside, bring an umbrella",
          "languageCode": "zh",
          "romanization": "wài mian yǒu fēng, yào dài sǎn",
          "correctAnswer": "It's windy outside, bring an umbrella",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch3-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "天气",
          "prompt": "Write the Chinese characters for 'Weather'",
          "options": ["天气", "季节", "温度", "气候"],
          "translation": "Weather",
          "languageCode": "zh",
          "romanization": "tiān qì",
          "correctAnswer": "天气",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "下雨",
          "prompt": "Write the Chinese characters for 'Rain'",
          "options": ["下雨", "下雪", "晴天", "下冰"],
          "translation": "Rain",
          "languageCode": "zh",
          "romanization": "xià yu",
          "correctAnswer": "下雨",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "下雪",
          "prompt": "Write the Chinese characters for 'Snow'",
          "options": ["下雪", "下雨", "雪", "晴"],
          "translation": "Snow",
          "languageCode": "zh",
          "romanization": "xià xuě",
          "correctAnswer": "下雪",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "晴天",
          "prompt": "Write the Chinese characters for 'Sunny day'",
          "options": ["晴天", "下雨", "天气", "天"],
          "translation": "Sunny day",
          "languageCode": "zh",
          "romanization": "qíng tiān",
          "correctAnswer": "晴天",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "风",
          "prompt": "Write the Chinese character for 'Wind'",
          "options": ["风", "天", "气", "雨"],
          "translation": "Wind",
          "languageCode": "zh",
          "romanization": "fēng",
          "correctAnswer": "风",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 4: SCHEDULE & TIME MANAGEMENT =====
  {
    lessonId: 'zh-stage5-ch4-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "日程",
          "prompt": "What does this word mean?",
          "options": ["Schedule", "Plan", "Itinerary", "Timetable"],
          "translation": "Schedule",
          "languageCode": "zh",
          "romanization": "rì chéng",
          "correctAnswer": "Schedule",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "预约",
          "prompt": "What does this verb mean?",
          "options": ["Appointment", "Book", "Reserve", "Schedule"],
          "translation": "Appointment",
          "languageCode": "zh",
          "romanization": "yù yuē",
          "correctAnswer": "Appointment",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "迟到",
          "prompt": "What does this verb mean?",
          "options": ["Be late", "Arrive early", "Delay", "Tardy"],
          "translation": "Be late",
          "languageCode": "zh",
          "romanization": "chí dào",
          "correctAnswer": "Be late",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "准时",
          "prompt": "What does this adjective mean?",
          "options": ["On time", "Punctual", "Accurate", "Exact"],
          "translation": "On time",
          "languageCode": "zh",
          "romanization": "zhǔn shí",
          "correctAnswer": "On time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
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
          "word": "忙碌",
          "prompt": "What does this adjective mean?",
          "options": ["Busy", "Hectic", "Occupied", "Tied up"],
          "translation": "Busy",
          "languageCode": "zh",
          "romanization": "máng lu",
          "correctAnswer": "Busy",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "放松",
          "prompt": "What does this verb mean?",
          "options": ["Relax", "Release", "Let go", "Unwind"],
          "translation": "Relax",
          "languageCode": "zh",
          "romanization": "fàng sōng",
          "correctAnswer": "Relax",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "休息",
          "prompt": "What does this verb mean?",
          "options": ["Rest", "Take a break", "Relax", "Sleep"],
          "translation": "Rest",
          "languageCode": "zh",
          "romanization": "xiū xi",
          "correctAnswer": "Rest",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch4-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "我的日程表很满",
          "prompt": "How do you say 'My schedule is very full'?",
          "options": ["我的日程表很满 (wǒ de rì chéng biǎo hěn mǎn)", "日程表满 (rì chéng biǎo mǎn)", "我很忙 (wǒ hěn máng)", "日程满 (rì chéng mǎn)"],
          "translation": "My schedule is very full",
          "languageCode": "zh",
          "romanization": "wǒ de rì chéng biǎo hěn mǎn",
          "correctAnswer": "我的日程表很满 (wǒ de rì chéng biǎo hěn mǎn)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "你能周五下午三点见面吗？",
          "prompt": "How do you ask 'Can you meet me at 3 PM on Friday?'",
          "options": ["你能周五下午三点见面吗？(nǐ néng zhōu wu xià wu sān diǎn jiàn miàn ma?)", "周五三点见面？(zhōu wu sān diǎn jiàn miàn?)", "见面三点 (jiàn miàn sān diǎn)", "下午见面 (xià wu jiàn miàn)"],
          "translation": "Can you meet me at 3 PM on Friday?",
          "languageCode": "zh",
          "romanization": "nǐ néng zhōu wu xià wu sān diǎn jiàn miàn ma?",
          "correctAnswer": "你能周五下午三点见面吗？(nǐ néng zhōu wu xià wu sān diǎn jiàn miàn ma?)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我不能迟到，要准时到",
          "prompt": "How do you say 'I cannot be late, I have to arrive on time'?",
          "options": ["我不能迟到，要准时到 (wǒ bu néng chí dào, yào zhǔn shí dào)", "不迟到准时 (bu chí dào zhǔn shí)", "要准时 (yào zhǔn shí)", "迟到不行 (chí dào bu xíng)"],
          "translation": "I cannot be late, I have to arrive on time",
          "languageCode": "zh",
          "romanization": "wǒ bu néng chí dào, yào zhǔn shí dào",
          "correctAnswer": "我不能迟到，要准时到 (wǒ bu néng chí dào, yào zhǔn shí dào)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "会议推迟到明天",
          "prompt": "How do you say 'The meeting is postponed to tomorrow'?",
          "options": ["会议推迟到明天 (huì yi tuī chí dào míng tiān)", "会议明天 (huì yi míng tiān)", "推迟明天 (tuī chí míng tiān)", "会议晚点 (huì yi wǎn diǎn)"],
          "translation": "The meeting is postponed to tomorrow",
          "languageCode": "zh",
          "romanization": "huì yi tuī chí dào míng tiān",
          "correctAnswer": "会议推迟到明天 (huì yi tuī chí dào míng tiān)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我需要放松一下，休息几天",
          "prompt": "How do you say 'I need to relax and rest for a few days'?",
          "options": ["我需要放松一下，休息几天 (wǒ xū yào fàng sōng yi xià, xiū xi jǐ tiān)", "放松休息 (fàng sōng xiū xi)", "要休息 (yào xiū xi)", "放松几天 (fàng sōng jǐ tiān)"],
          "translation": "I need to relax and rest for a few days",
          "languageCode": "zh",
          "romanization": "wǒ xū yào fàng sōng yi xià, xiū xi jǐ tiān",
          "correctAnswer": "我需要放松一下，休息几天 (wǒ xū yào fàng sōng yi xià, xiū xi jǐ tiān)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch4-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "日程",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Schedule", "Plan", "Itinerary", "Calendar"],
          "translation": "Schedule",
          "languageCode": "zh",
          "romanization": "rì chéng",
          "correctAnswer": "Schedule",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "预约",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Appointment", "Book", "Reserve", "Schedule"],
          "translation": "Appointment",
          "languageCode": "zh",
          "romanization": "yù yuē",
          "correctAnswer": "Appointment",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "迟到",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Be late", "Arrive early", "Delay", "Late arrival"],
          "translation": "Be late",
          "languageCode": "zh",
          "romanization": "chí dào",
          "correctAnswer": "Be late",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "准时",
          "prompt": "Listen and select the correct meaning.",
          "options": ["On time", "Punctual", "Accurate", "Exact"],
          "translation": "On time",
          "languageCode": "zh",
          "romanization": "zhǔn shí",
          "correctAnswer": "On time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
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
          "word": "放松",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Relax", "Release", "Let go", "Unwind"],
          "translation": "Relax",
          "languageCode": "zh",
          "romanization": "fàng sōng",
          "correctAnswer": "Relax",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch4-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "我的日程表很满",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["My schedule is very full", "Schedule full", "Very busy", "Packed schedule"],
          "translation": "My schedule is very full",
          "languageCode": "zh",
          "romanization": "wǒ de rì chéng biǎo hěn mǎn",
          "correctAnswer": "My schedule is very full",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "你能周五下午三点见面吗？",
          "prompt": "Speak this question aloud. What does it mean?",
          "options": ["Can you meet me at 3 PM on Friday?", "Friday meeting time", "Three o'clock Friday", "Friday afternoon"],
          "translation": "Can you meet me at 3 PM on Friday?",
          "languageCode": "zh",
          "romanization": "nǐ néng zhōu wu xià wu sān diǎn jiàn miàn ma?",
          "correctAnswer": "Can you meet me at 3 PM on Friday?",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我不能迟到，要准时到",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["I cannot be late, I have to arrive on time", "Cannot be late", "Be on time", "Late is bad"],
          "translation": "I cannot be late, I have to arrive on time",
          "languageCode": "zh",
          "romanization": "wǒ bu néng chí dào, yào zhǔn shí dào",
          "correctAnswer": "I cannot be late, I have to arrive on time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "会议推迟到明天",
          "prompt": "Speak this announcement aloud. What does it mean?",
          "options": ["The meeting is postponed to tomorrow", "Meeting tomorrow", "Delay meeting", "Tomorrow meeting"],
          "translation": "The meeting is postponed to tomorrow",
          "languageCode": "zh",
          "romanization": "huì yi tuī chí dào míng tiān",
          "correctAnswer": "The meeting is postponed to tomorrow",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我需要放松一下，休息几天",
          "prompt": "Speak this statement aloud. What does it mean?",
          "options": ["I need to relax and rest for a few days", "Need to relax", "Rest some days", "Take a break"],
          "translation": "I need to relax and rest for a few days",
          "languageCode": "zh",
          "romanization": "wǒ xū yào fàng sōng yi xià, xiū xi jǐ tiān",
          "correctAnswer": "I need to relax and rest for a few days",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch4-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "日程",
          "prompt": "Write the Chinese characters for 'Schedule'",
          "options": ["日程", "时间", "计划", "行程"],
          "translation": "Schedule",
          "languageCode": "zh",
          "romanization": "rì chéng",
          "correctAnswer": "日程",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "迟到",
          "prompt": "Write the Chinese characters for 'Be late'",
          "options": ["迟到", "准时", "晚点", "延迟"],
          "translation": "Be late",
          "languageCode": "zh",
          "romanization": "chí dào",
          "correctAnswer": "迟到",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "准时",
          "prompt": "Write the Chinese characters for 'On time'",
          "options": ["准时", "迟到", "按时", "及时"],
          "translation": "On time",
          "languageCode": "zh",
          "romanization": "zhǔn shí",
          "correctAnswer": "准时",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "会议",
          "prompt": "Write the Chinese characters for 'Meeting'",
          "options": ["会议", "会晤", "会合", "聚会"],
          "translation": "Meeting",
          "languageCode": "zh",
          "romanization": "huì yi",
          "correctAnswer": "会议",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "休息",
          "prompt": "Write the Chinese characters for 'Rest'",
          "options": ["休息", "放松", "休假", "睡眠"],
          "translation": "Rest",
          "languageCode": "zh",
          "romanization": "xiū xi",
          "correctAnswer": "休息",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },

  // ===== CHAPTER 5: IDIOMS & COMMON PHRASES =====
  {
    lessonId: 'zh-stage5-ch5-vocab',
    contentJson: {
      "questions": [
        {
          "type": "vocab",
          "word": "一帆风顺",
          "prompt": "What does this idiom mean?",
          "options": ["Smooth sailing", "Good luck", "Success", "Everything goes well"],
          "translation": "Smooth sailing",
          "languageCode": "zh",
          "romanization": "yī fān fēng shùn",
          "correctAnswer": "Smooth sailing",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "加油",
          "prompt": "What does this phrase mean?",
          "options": ["Keep it up", "Come on", "Cheer up", "Go for it"],
          "translation": "Keep it up",
          "languageCode": "zh",
          "romanization": "jiā yóu",
          "correctAnswer": "Keep it up",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "再见",
          "prompt": "What does this phrase mean?",
          "options": ["Goodbye", "See you", "Farewell", "Until later"],
          "translation": "Goodbye",
          "languageCode": "zh",
          "romanization": "zài jiàn",
          "correctAnswer": "Goodbye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "谢谢",
          "prompt": "What does this phrase mean?",
          "options": ["Thank you", "Thanks", "Much obliged", "I appreciate it"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie",
          "correctAnswer": "Thank you",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "不好意思",
          "prompt": "What does this phrase mean?",
          "options": ["Sorry/Excuse me", "Embarrassed", "Apologies", "Pardon me"],
          "translation": "Sorry/Excuse me",
          "languageCode": "zh",
          "romanization": "bu hǎo yi si",
          "correctAnswer": "Sorry/Excuse me",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "没关系",
          "prompt": "What does this phrase mean?",
          "options": ["Never mind", "It doesn't matter", "No problem", "It's fine"],
          "translation": "Never mind",
          "languageCode": "zh",
          "romanization": "méi guān xi",
          "correctAnswer": "Never mind",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "当然",
          "prompt": "What does this phrase mean?",
          "options": ["Of course", "Certainly", "Absolutely", "Sure"],
          "translation": "Of course",
          "languageCode": "zh",
          "romanization": "dāng rán",
          "correctAnswer": "Of course",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "vocab",
          "word": "我也是",
          "prompt": "What does this phrase mean?",
          "options": ["Me too", "Same here", "I as well", "Also me"],
          "translation": "Me too",
          "languageCode": "zh",
          "romanization": "wǒ yě shì",
          "correctAnswer": "Me too",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch5-grammar',
    contentJson: {
      "questions": [
        {
          "type": "grammar",
          "word": "祝你一帆风顺！",
          "prompt": "How do you say 'Wishing you smooth sailing!'",
          "options": ["祝你一帆风顺！(zhù ni yī fān fēng shùn!)", "一帆风顺 (yī fān fēng shùn)", "祝你好 (zhù ni hǎo)", "风顺 (fēng shùn)"],
          "translation": "Wishing you smooth sailing!",
          "languageCode": "zh",
          "romanization": "zhù ni yī fān fēng shùn!",
          "correctAnswer": "祝你一帆风顺！(zhù ni yī fān fēng shùn!)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "加油，你一定能做到！",
          "prompt": "How do you say 'Keep it up, you can definitely do it!'",
          "options": ["加油，你一定能做到！(jiā yóu, nǐ yī dìng néng zuò dào!)", "加油 (jiā yóu)", "你能做到 (nǐ néng zuò dào)", "一定做到 (yī dìng zuò dào)"],
          "translation": "Keep it up, you can definitely do it!",
          "languageCode": "zh",
          "romanization": "jiā yóu, nǐ yī dìng néng zuò dào!",
          "correctAnswer": "加油，你一定能做到！(jiā yóu, nǐ yī dìng néng zuò dào!)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "不好意思，我迟到了",
          "prompt": "How do you say 'Sorry, I'm late'",
          "options": ["不好意思，我迟到了 (bu hǎo yi si, wǒ chí dào le)", "对不起迟到 (duì bu qi chí dào)", "我迟到了 (wǒ chí dào le)", "不好意思 (bu hǎo yi si)"],
          "translation": "Sorry, I'm late",
          "languageCode": "zh",
          "romanization": "bu hǎo yi si, wǒ chí dào le",
          "correctAnswer": "不好意思，我迟到了 (bu hǎo yi si, wǒ chí dào le)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "没关系，这次没关系",
          "prompt": "How do you say 'Never mind, it's fine this time'",
          "options": ["没关系，这次没关系 (méi guān xi, zhè cì méi guān xi)", "没关系 (méi guān xi)", "这次没关系 (zhè cì méi guān xi)", "关系没 (guān xi méi)"],
          "translation": "Never mind, it's fine this time",
          "languageCode": "zh",
          "romanization": "méi guān xi, zhè cì méi guān xi",
          "correctAnswer": "没关系，这次没关系 (méi guān xi, zhè cì méi guān xi)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "grammar",
          "word": "我也是，很高兴见到你",
          "prompt": "How do you say 'Me too, glad to see you'",
          "options": ["我也是，很高兴见到你 (wǒ yě shì, hěn gāo xìng jiàn dào nǐ)", "我也是 (wǒ yě shì)", "高兴见到你 (gāo xìng jiàn dào nǐ)", "很高兴 (hěn gāo xìng)"],
          "translation": "Me too, glad to see you",
          "languageCode": "zh",
          "romanization": "wǒ yě shì, hěn gāo xìng jiàn dào nǐ",
          "correctAnswer": "我也是，很高兴见到你 (wǒ yě shì, hěn gāo xìng jiàn dào nǐ)",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch5-listen',
    contentJson: {
      "questions": [
        {
          "type": "listen",
          "word": "加油",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Keep it up", "Come on", "Cheer up", "Go for it"],
          "translation": "Keep it up",
          "languageCode": "zh",
          "romanization": "jiā yóu",
          "correctAnswer": "Keep it up",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "再见",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Goodbye", "See you", "Farewell", "Until later"],
          "translation": "Goodbye",
          "languageCode": "zh",
          "romanization": "zài jiàn",
          "correctAnswer": "Goodbye",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "谢谢",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Thank you", "Thanks", "Much obliged", "I appreciate it"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie",
          "correctAnswer": "Thank you",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "没关系",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Never mind", "It doesn't matter", "No problem", "It's fine"],
          "translation": "Never mind",
          "languageCode": "zh",
          "romanization": "méi guān xi",
          "correctAnswer": "Never mind",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "当然",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Of course", "Certainly", "Absolutely", "Sure"],
          "translation": "Of course",
          "languageCode": "zh",
          "romanization": "dāng rán",
          "correctAnswer": "Of course",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "listen",
          "word": "不好意思",
          "prompt": "Listen and select the correct meaning.",
          "options": ["Sorry/Excuse me", "Embarrassed", "Apologies", "Pardon me"],
          "translation": "Sorry/Excuse me",
          "languageCode": "zh",
          "romanization": "bu hǎo yi si",
          "correctAnswer": "Sorry/Excuse me",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch5-speak',
    contentJson: {
      "questions": [
        {
          "type": "speaking",
          "word": "祝你一帆风顺！",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Wishing you smooth sailing!", "Wishing well", "Smooth journey", "Good luck"],
          "translation": "Wishing you smooth sailing!",
          "languageCode": "zh",
          "romanization": "zhù ni yī fān fēng shùn!",
          "correctAnswer": "Wishing you smooth sailing!",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "加油，你一定能做到！",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Keep it up, you can definitely do it!", "You can do it", "Keep going", "Sure you will"],
          "translation": "Keep it up, you can definitely do it!",
          "languageCode": "zh",
          "romanization": "jiā yóu, nǐ yī dìng néng zuò dào!",
          "correctAnswer": "Keep it up, you can definitely do it!",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "不好意思，我迟到了",
          "prompt": "Speak this phrase aloud. What does it mean?",
          "options": ["Sorry, I'm late", "I was late", "Sorry late", "Apologies for being late"],
          "translation": "Sorry, I'm late",
          "languageCode": "zh",
          "romanization": "bu hǎo yi si, wǒ chí dào le",
          "correctAnswer": "Sorry, I'm late",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "没关系，这次没关系",
          "prompt": "Speak this reassurance aloud. What does it mean?",
          "options": ["Never mind, it's fine this time", "It's OK", "Not a problem", "Doesn't matter"],
          "translation": "Never mind, it's fine this time",
          "languageCode": "zh",
          "romanization": "méi guān xi, zhè cì méi guān xi",
          "correctAnswer": "Never mind, it's fine this time",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "speaking",
          "word": "我也是，很高兴见到你",
          "prompt": "Speak this response aloud. What does it mean?",
          "options": ["Me too, glad to see you", "Me also", "Happy to see you", "Likewise"],
          "translation": "Me too, glad to see you",
          "languageCode": "zh",
          "romanization": "wǒ yě shì, hěn gāo xìng jiàn dào nǐ",
          "correctAnswer": "Me too, glad to see you",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  },
  {
    lessonId: 'zh-stage5-ch5-writing',
    contentJson: {
      "questions": [
        {
          "type": "writing",
          "word": "加油",
          "prompt": "Write the Chinese characters for 'Keep it up'",
          "options": ["加油", "油加", "加", "油"],
          "translation": "Keep it up",
          "languageCode": "zh",
          "romanization": "jiā yóu",
          "correctAnswer": "加油",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "谢谢",
          "prompt": "Write the Chinese characters for 'Thank you'",
          "options": ["谢谢", "感谢", "谢", "谢了"],
          "translation": "Thank you",
          "languageCode": "zh",
          "romanization": "xiè xie",
          "correctAnswer": "谢谢",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "再见",
          "prompt": "Write the Chinese characters for 'Goodbye'",
          "options": ["再见", "见面", "再", "大见"],
          "translation": "Goodbye",
          "languageCode": "zh",
          "romanization": "zài jiàn",
          "correctAnswer": "再见",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "没关系",
          "prompt": "Write the Chinese characters for 'Never mind'",
          "options": ["没关系", "没有", "关系", "没法"],
          "translation": "Never mind",
          "languageCode": "zh",
          "romanization": "méi guān xi",
          "correctAnswer": "没关系",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        },
        {
          "type": "writing",
          "word": "当然",
          "prompt": "Write the Chinese characters for 'Of course'",
          "options": ["当然", "当", "然", "真的"],
          "translation": "Of course",
          "languageCode": "zh",
          "romanization": "dāng rán",
          "correctAnswer": "当然",
          "nativeLanguage": "en",
          "targetLanguage": "zh"
        }
      ]
    }
  }
];

async function updateLessons() {
  try {
    console.log('🚀 Starting Stage 5 (A2+ - Traveler) lesson content updates...\n');
    console.log('📚 Updating 25 lessons across 5 chapters (Map & Directions, Transport, Weather, Schedule, Idioms)\n');

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
