#!/usr/bin/env node
/**
 * Test Script for Pinyin Validator
 * Tests the Chinese pinyin validation logic
 */

// Pinyin map (copied from the actual validator)
const pinyinMap = {
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
}

// Utility functions
function removePinyinTones(pinyin) {
  const toneMarkMap = {
    'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
    'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
    'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
    'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
    'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
    'ǖ': 'v', 'ǘ': 'v', 'ǚ': 'v', 'ǜ': 'v',
  }
  return pinyin.split('').map(char => toneMarkMap[char] || char).join('')
}

function matchesPinyinToCharacters(userPinyin, targetCharacters) {
  const normalized = removePinyinTones(userPinyin.toLowerCase().trim()).replace(/\s+/g, '')
  
  // First, try exact phrase matching in the map
  for (const pinyinKey in pinyinMap) {
    const keyNormalized = removePinyinTones(pinyinKey.toLowerCase()).replace(/\s+/g, '')
    
    // Only check for exact match (not partial includes)
    if (normalized === keyNormalized) {
      const characters = pinyinMap[pinyinKey]
      // Check if this pinyin maps to the exact target
      for (const char of characters) {
        if (char === targetCharacters) {
          return true
        }
      }
    }
  }
  
  // Fallback: Try to match syllable by syllable
  const userSyllables = userPinyin
    .toLowerCase()
    .split(/[\s\-]+/)
    .filter(s => s.length > 0)
    .map(s => removePinyinTones(s))
  
  if (userSyllables.length > 1) {
    let matchedChars = ''
    
    for (const syllable of userSyllables) {
      let foundChar = false
      
      for (const pinyinKey in pinyinMap) {
        const keyNormalized = removePinyinTones(pinyinKey.toLowerCase()).replace(/\s+/g, '')
        
        if (keyNormalized === syllable) {
          const characters = pinyinMap[pinyinKey]
          if (characters && characters.length > 0) {
            matchedChars += characters[0]
            foundChar = true
            break
          }
        }
      }
      
      if (!foundChar) {
        return false
      }
    }
    
    if (matchedChars === targetCharacters) {
      return true
    }
  }
  
  return false
}

// Test data from the lesson
const testCases = [
  // Lesson 1: Writing questions
  { input: 'ni hao', target: '你好', stage: 1, expected: true, label: 'Hello (pinyin with space)' },
  { input: 'nǐhǎo', target: '你好', stage: 1, expected: true, label: 'Hello (with tone marks)' },
  { input: 'nihao', target: '你好', stage: 1, expected: true, label: 'Hello (no space, no tones)' },
  // Note: When user types actual Chinese characters, it's handled by character similarity matching, not this pinyin function
  
  { input: 'zai jian', target: '再见', stage: 1, expected: true, label: 'Goodbye (pinyin)' },
  { input: 'zàijiàn', target: '再见', stage: 1, expected: true, label: 'Goodbye (with tones)' },
  
  { input: 'xie xie', target: '谢谢', stage: 1, expected: true, label: 'Thank you (pinyin)' },
  { input: 'xiè xiè', target: '谢谢', stage: 1, expected: true, label: 'Thank you (with tones)' },
  { input: 'xièxie', target: '谢谢', stage: 1, expected: true, label: 'Thank you (no spaces)' },
  
  { input: 'dui bu qi', target: '对不起', stage: 1, expected: true, label: 'Sorry (pinyin)' },
  { input: 'duìbuqǐ', target: '对不起', stage: 1, expected: true, label: 'Sorry (with tones)' },
  
  { input: 'qing', target: '请', stage: 1, expected: true, label: 'Please (pinyin)' },
  { input: 'qǐng', target: '请', stage: 1, expected: true, label: 'Please (with tone)' },
  
  // Negative test cases
  { input: 'hello', target: '你好', stage: 1, expected: false, label: 'Hello (wrong language)' },
  { input: 'ni', target: '你好', stage: 1, expected: false, label: 'Hello (partial, should fail)' },
  { input: 'zai', target: '再见', stage: 1, expected: false, label: 'Goodbye (partial, should fail)' },
]

// Run tests
console.log('\n' + '='.repeat(80))
console.log('🧪 PINYIN VALIDATOR TEST SUITE'.padEnd(80))
console.log('='.repeat(80) + '\n')

let passed = 0
let failed = 0

testCases.forEach((test, index) => {
  const result = matchesPinyinToCharacters(test.input, test.target)
  const success = result === test.expected
  
  if (success) {
    passed++
    console.log(`✅ Test ${index + 1}: ${test.label}`)
    console.log(`   Input: "${test.input}" → Target: "${test.target}"`)
    console.log(`   Result: ${result ? 'MATCH ✓' : 'NO MATCH'}`)
  } else {
    failed++
    console.log(`❌ Test ${index + 1}: ${test.label}`)
    console.log(`   Input: "${test.input}" → Target: "${test.target}"`)
    console.log(`   Expected: ${test.expected}, Got: ${result}`)
  }
  console.log()
})

// Summary
console.log('='.repeat(80))
console.log(`📊 TEST RESULTS: ${passed} passed, ${failed} failed out of ${testCases.length} tests`)
console.log('='.repeat(80) + '\n')

if (failed === 0) {
  console.log('🎉 ALL TESTS PASSED! The pinyin validator is working correctly.\n')
  process.exit(0)
} else {
  console.log(`⚠️  ${failed} test(s) failed. Please review the validator logic.\n`)
  process.exit(1)
}
