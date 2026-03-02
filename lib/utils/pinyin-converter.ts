// lib/utils/pinyin-converter.ts
/**
 * Simple pinyin to Chinese character mapping utility
 * Used for hint system and character validation
 * For production, consider integrating @pinyin/core library for more comprehensive support
 */

// Common pinyin to character mappings for teaching (expanded list)
const pinyinMap: { [key: string]: string[] } = {
  // Basic greetings
  'nǐ': ['你'],
  'hǎo': ['好'],
  'nǐhǎo': ['你好'],
  'xièxie': ['谢谢'],
  'xiè': ['谢'],
  'xie': ['谢'],
  'zàijiàn': ['再见'],
  'zài': ['在'],
  'jiàn': ['见'],
  'duìbuqǐ': ['对不起'],
  'duì': ['对'],
  'bu': ['不'],
  'qǐ': ['起'],
  'qǐng': ['请'],
  'duōxiè': ['多谢'],
  'duō': ['多'],
  'qǐngwèn': ['请问'],
  'duōshao': ['多少'],
  'shao': ['少'],
  'wǒ': ['我'],
  'tā': ['他', '她'],
  'tamen': ['他们', '她们'],
  'shì': ['是'],
  'cuò': ['错'],
  'míngzi': ['名字'],
  'míng': ['名'],
  'zi': ['字'],
  'jiào': ['叫'],
  'guó': ['国'],
  'rén': ['人'],
  'zhōngguó': ['中国'],
  'zhōng': ['中'],
  'mèiguó': ['美国'],
  'yīngguó': ['英国'],
  'yīng': ['英'],
  'shūfu': ['舒服'],
  'shū': ['舒'],
  'fu': ['服'],
  'ma': ['吗'],
  'ba': ['吧'],
  'la': ['啦'],
  'le': ['了'],
  'de': ['的', '得'],
  'měi': ['美', '每'],
  'tiān': ['天'],
  'yuè': ['月'],
  'chī': ['吃'],
  'fàn': ['饭'],
  'shuǐ': ['水'],
  're': ['热'],
  'lěng': ['冷'],
  'ruǎnuan': ['暖和'],
  'ruǎn': ['暖'],
  'huo': ['和'],
  'kuài': ['快'],
  'màn': ['慢'],
  'kàn': ['看'],
  'tīng': ['听'],
  'shuō': ['说'],
  'xiě': ['写'],
  'huà': ['话'],
  'shàng': ['上'],
  'xià': ['下'],
  'zuǒ': ['左'],
  'yòu': ['右'],
  'qián': ['前'],
  'hòu': ['后'],
  'lǐ': ['里'],
  'wài': ['外'],
  'dà': ['大'],
  'xiǎo': ['小'],
  'zhòng': ['重'],
  'qīng': ['轻'],
  'nóng': ['浓'],
  'dàn': ['淡'],
};

/**
 * Export the pinyin map for validation purposes
 */
export { pinyinMap }

/**
 * Attempt to convert pinyin to Chinese characters
 * Returns the most likely character(s) for the given pinyin
 */
export function pinyinToCharacters(pinyin: string): string | null {
  const normalized = pinyin.toLowerCase().trim();
  
  // Try exact match first
  if (pinyinMap[normalized]) {
    return pinyinMap[normalized][0]; // Return first/most common match
  }
  
  // Try removing tone marks for broader matching
  const withoutTones = normalized
    .replace(/[āáǎà]/g, 'a')
    .replace(/[ēéěè]/g, 'e')
    .replace(/[īíǐì]/g, 'i')
    .replace(/[ōóǒò]/g, 'o')
    .replace(/[ūúǔù]/g, 'u')
    .replace(/[ǖǘǚǜü]/g, 'v');
  
  // Try to find a match without tones
  for (const key in pinyinMap) {
    const keyWithoutTones = key
      .replace(/[āáǎà]/g, 'a')
      .replace(/[ēéěè]/g, 'e')
      .replace(/[īíǐì]/g, 'i')
      .replace(/[ōóǒò]/g, 'o')
      .replace(/[ūúǔù]/g, 'u')
      .replace(/[ǖǘǚǜü]/g, 'v');
    
    if (keyWithoutTones === withoutTones) {
      return pinyinMap[key][0];
    }
  }
  
  return null;
}

/**
 * Check if text contains any Chinese characters
 */
export function containsChineseCharacters(text: string): boolean {
  const chineseRegex = /[\u4E00-\u9FFF]/g;
  return chineseRegex.test(text);
}

/**
 * Check if text contains pinyin (letters with optional tone marks)
 */
export function containsPinyin(text: string): boolean {
  // Check for Chinese pinyin characteristics (lowercase with vowels)
  const pinyinRegex = /[a-z]+[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]+[a-z]*/gi;
  return pinyinRegex.test(text);
}

/**
 * Get count of Chinese characters in text
 */
export function getChineseCharacterCount(text: string): number {
  const chineseRegex = /[\u4E00-\u9FFF]/g;
  const matches = text.match(chineseRegex);
  return matches ? matches.length : 0;
}
