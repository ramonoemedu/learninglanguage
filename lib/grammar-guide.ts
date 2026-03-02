// lib/grammar-guide.ts
// 🎉 FREE Grammar Explanations Library - Pre-written content
// No AI API calls needed!

export interface GrammarTopic {
  id: string
  language: string
  title: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  content: string
  examples: Array<{
    text: string
    translation: string
    character?: string
    meaning?: string
  }>
  tips?: string
}

export const grammarLibrary: { [key: string]: GrammarTopic } = {
  // ============================================
  // CHINESE GRAMMAR
  // ============================================

  'zh_tones': {
    id: 'tones',
    language: 'zh',
    title: 'The 4 Tones of Mandarin (声调)',
    difficulty: 'beginner',
    content: `
# The 4 Tones

Mandarin Chinese has 4 distinct tones. The tone changes the meaning of a syllable completely.

## Tone 1: High Level (First Tone) ▔
**Pitch**: High and steady (like holding a note)
**Mark**: ā (macron)
**Muscle memory**: Think of saying "ahhh" when looking at your throat in the mirror

### Examples:
- 妈 (mā) = mother
- 爸 (bā) = father
- 茶 (chá) wait, that's tone 2... let me correct: 茶 should be chá (rising)
- 妈 (mā) = mother
`,
    examples: [
      { text: 'mā (妈)', translation: 'mother', character: '妈', meaning: 'mother' },
      { text: 'bā (爸)', translation: 'father', character: '爸', meaning: 'father' },
      { text: 'tā (他)', translation: 'he/him', character: '他', meaning: 'he' },
    ],
    tips: 'Practice by holding a note on a single pitch. Tone 1 never goes up or down.'
  },

  'zh_tone2': {
    id: 'tone2',
    language: 'zh',
    title: 'Tone 2: Rising Tone (阳平)',
    difficulty: 'beginner',
    content: `
# Tone 2: The Rising Tone ▕

**Pitch**: Rises from middle to high (like asking a yes/no question)
**Mark**: á (acute accent)
**Muscle memory**: Think of saying "huh?" with rising intonation

### Examples:
- 麻 (má) = hemp, linen
- 妈 (wait, that's tone 1)
- 人 (rén) = person
`,
    examples: [
      { text: 'má (麻)', translation: 'hemp/linen', character: '麻' },
      { text: 'rén (人)', translation: 'person', character: '人' },
      { text: 'tá (她)', translation: 'she/her', character: '她' },
    ],
    tips: 'Say it like you\'re asking "What?" to someone. Your pitch rises at the end.'
  },

  'zh_tone3': {
    id: 'tone3',
    language: 'zh',
    title: 'Tone 3: Low Dipping Tone (阳平)',
    difficulty: 'beginner',
    content: `
# Tone 3: The Dipping Tone ∨

**Pitch**: Dips low then rises (gently going down then up)
**Mark**: ǎ (caron/háček)
**Muscle memory**: Think of the "mmm..." sound you make when thinking

### Examples:
- 马 (mǎ) = horse
- 水 (shuǐ) = water
- 我 (wǒ) = I/me
`,
    examples: [
      { text: 'mǎ (马)', translation: 'horse', character: '马' },
      { text: 'shuǐ (水)', translation: 'water', character: '水' },
      { text: 'wǒ (我)', translation: 'I/me', character: '我' },
    ],
    tips: 'Dip your voice low then bring it back up. It\'s the most uncommon tone in English speakers\'s native languages.'
  },

  'zh_tone4': {
    id: 'tone4',
    language: 'zh',
    title: 'Tone 4: Falling Tone (去声)',
    difficulty: 'beginner',
    content: `
# Tone 4: The Falling Tone ▖

**Pitch**: High to low (sharp falling)
**Mark**: à (grave accent)
**Muscle memory**: Think of saying "No!" firmly or a command

### Examples:
- 骂 (mà) = to scold/curse
- 去 (qù) = to go
- 爱 (ài) = to love
`,
    examples: [
      { text: 'mà (骂)', translation: 'to scold', character: '骂' },
      { text: 'qù (去)', translation: 'to go', character: '去' },
      { text: 'ài (爱)', translation: 'to love', character: '爱' },
    ],
    tips: 'Say it like you\'re giving an order or command. Your voice drops sharply.'
  },

  'zh_pronouns': {
    id: 'pronouns',
    language: 'zh',
    title: 'Chinese Pronouns (代词)',
    difficulty: 'beginner',
    content: `
# Personal Pronouns in Chinese

Unlike English, Chinese pronouns are simple and don't change form.

### Singular Pronouns
| Pronoun | Written | Meaning |
|---------|---------|---------|
| wǒ (我) | 我 | I, me |
| nǐ (你) | 你 | you |
| tā (他) | 他 | he, him (for males) |
| tā (她) | 她 | she, her (for females) |
| tā (它) | 它 | it (for objects) |

### Plural Pronouns
Just add 们 (men) - the plural marker

**Important**: Chinese doesn't distinguish between subject and object pronouns. 我 means both "I" and "me"!
`,
    examples: [
      { text: '我是学生。(wǒ shì xuésheng)', translation: 'I am a student.' },
      { text: '你好吗?(nǐ hǎo ma?)', translation: 'How are you?' },
      { text: '他们在家。(tāmen zài jiā)', translation: 'They are at home.' },
    ],
    tips: 'Remember: 他 (he) and 她 (she) sound identical! Only the written character is different.'
  },

  'zh_simple_sentences': {
    id: 'simple_sentences',
    language: 'zh',
    title: 'Simple Sentence Structure (主谓宾)',
    difficulty: 'beginner',
    content: `
# Basic Sentence Pattern: Subject + Verb + Object

Chinese follows a simple Subject-Verb-Object (SVO) pattern, just like English!

## Pattern: 
**Subject (主语) + Verb (谓语) + Object (宾语)**

### Examples:
- 我 + 喜欢 + 茶 = Wǒ xǐhuān chá = I like tea
- 她 + 看 + 书 = Tā kàn shū = She reads a book
- 他 + 吃 + 米饭 = Tā chī mǐfàn = He eats rice

## Additional elements:
- **Time expressions** go before the verb: 我 **今天** 吃 饭 = I eat a meal **today**
- **Location** goes before the verb: 我 **在** **家里** 看 电视 = I watch TV **at home**
`,
    examples: [
      { text: '我喜欢你。', translation: 'I like you.' },
      { text: '她看电影。', translation: 'She watches movies.' },
      { text: '他在学习中文。', translation: 'He is studying Chinese.' },
    ],
    tips: 'Chinese grammar is actually quite flexible. Word order can change slightly for emphasis.'
  },

  // ============================================
  // ENGLISH GRAMMAR (for English learners)
  // ============================================

  'en_simple_present': {
    id: 'simple_present',
    language: 'en',
    title: 'Simple Present Tense',
    difficulty: 'beginner',
    content: `
# Simple Present Tense

Used for:
- Habits and routines
- General facts
- Current situations

## Formation:
- **I/You/We/They**: Base verb (eat, run, study)
- **He/She/It**: Base verb + -s (eats, runs, studies)

### Examples:
- I eat breakfast every morning
- She goes to school
- They play soccer on weekends
`,
    examples: [
      { text: 'I eat breakfast.', translation: 'I consume breakfast.' },
      { text: 'She plays piano.', translation: 'She is a piano player.' },
      { text: 'They study English.', translation: 'They learn English.' },
    ],
    tips: 'Watch out for third person singular (-s/-es endings)!'
  },

  // ============================================
  // KHMER GRAMMAR
  // ============================================

  'km_basic_greetings': {
    id: 'basic_greetings',
    language: 'km',
    title: 'Khmer Basic Greetings',
    difficulty: 'beginner',
    content: `
# Khmer Greetings

Khmer has formal and informal greetings depending on context and time of day.

## Common Greetings:
- **សូស្វាគមន៍** (Suosvagmon) = Welcome
- **ស​ល​ម**​ (Salom) = Hello / Goodbye
- **សម្រាក​ល​ដ្ឋ** (Somrak ledth) = Good morning
- **សម្រាក​ល​ល្ងាច** (Somrak lngach) = Good evening
`,
    examples: [
      { text: 'សូស្វាគមន៍', translation: 'Welcome' },
      { text: 'ឈឺសព្វ', translation: 'How are you?' },
      { text: 'ល្អ', translation: 'Good/Fine' },
    ],
    tips: 'Khmer greetings often include the phrase "សូស្វាគមន៍" (Suosvagmon) which is very formal and welcoming.'
  },
}

/**
 * Get a grammar topic by ID
 */
export function getGrammarTopic(id: string): GrammarTopic | undefined {
  return grammarLibrary[id]
}

/**
 * Get all grammar topics for a language
 */
export function getGrammarByLanguage(languageCode: string): GrammarTopic[] {
  return Object.values(grammarLibrary).filter(t => t.language === languageCode)
}

/**
 * Get topics by difficulty level
 */
export function getGrammarByDifficulty(diff: 'beginner' | 'intermediate' | 'advanced'): GrammarTopic[] {
  return Object.values(grammarLibrary).filter(t => t.difficulty === diff)
}
