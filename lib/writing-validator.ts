// lib/writing-validator.ts
/**
 * FREE Writing Validator - No AI costs!
 * Simple character/word matching for language learning
 * Best for stages 1-5 (vocabulary & basic writing)
 */

import { containsChineseCharacters, pinyinMap } from '@/lib/utils/pinyin-converter'

/**
 * Check if user pinyin input matches the target characters
 * by looking up the pinyin in the pinyinMap
 * Handles both full phrases (nǐhǎo) and syllable-by-syllable (ni + hao)
 */
function matchesPinyinToCharacters(userPinyin: string, targetCharacters: string): boolean {
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
  // Split user input by spaces or recognize common syllable boundaries
  const userSyllables = userPinyin
    .toLowerCase()
    .split(/[\s\-]+/) // Split by spaces or hyphens
    .filter(s => s.length > 0)
    .map(s => removePinyinTones(s))
  
  // For each syllable in the user input, check if we can find matching characters
  if (userSyllables.length > 1) {
    let matchedChars = ''
    
    for (const syllable of userSyllables) {
      let foundChar = false
      
      // Look for this syllable in the pinyinMap
      for (const pinyinKey in pinyinMap) {
        const keyNormalized = removePinyinTones(pinyinKey.toLowerCase()).replace(/\s+/g, '')
        
        // Try exact match for this syllable
        if (keyNormalized === syllable) {
          const characters = pinyinMap[pinyinKey]
          if (characters && characters.length > 0) {
            matchedChars += characters[0]
            foundChar = true
            break
          }
        }
      }
      
      // If we can't match this syllable, fail
      if (!foundChar) {
        return false
      }
    }
    
    // Check if the matched characters equal the target
    if (matchedChars === targetCharacters) {
      return true
    }
  }
  
  return false
}

/**
 * Remove tone marks from pinyin for comparison
 * nǐ → ni, hǎo → hao, etc.
 */
function removePinyinTones(pinyin: string): string {
  const toneMarkMap: { [key: string]: string } = {
    'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a',
    'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
    'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i',
    'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o',
    'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u',
    'ǖ': 'v', 'ǘ': 'v', 'ǚ': 'v', 'ǜ': 'v',
  }
  
  return pinyin.split('').map(char => toneMarkMap[char] || char).join('')
}

/**
 * Extract pinyin from text (remove spaces, normalize)
 */
function extractPinyin(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '') // Remove spaces
    .trim()
}

/**
 * Simple syllable-based comparison for pinyin
 * Compares "ni hao" against "nǐhǎo" by removing tones and spaces
 */
function comparePinyin(userPinyin: string, targetPinyin: string): number {
  const userNormalized = removePinyinTones(extractPinyin(userPinyin))
  const targetNormalized = removePinyinTones(extractPinyin(targetPinyin))
  
  // Exact match after normalization
  if (userNormalized === targetNormalized) {
    return 100
  }
  
  // Check if user pinyin is contained in target (or vice versa)
  if (userNormalized.includes(targetNormalized) || targetNormalized.includes(userNormalized)) {
    return 90
  }
  
  // Character-level similarity for partial matches
  const userChars = userNormalized.split('')
  const targetChars = targetNormalized.split('')
  
  let matches = 0
  for (let char of targetChars) {
    if (userChars.includes(char)) {
      matches++
      userChars.splice(userChars.indexOf(char), 1)
    }
  }
  
  return Math.floor((matches / targetChars.length) * 100)
}

export interface WritingValidationResult {
  score: number // 0-100
  feedback: string // User-friendly message
  correctedText: string // Target answer
  isPerfect: boolean // Exact match?
}

/**
 * Calculate similarity between two strings (0-100%)
 * Uses simple character matching approach
 */
function calculateSimilarity(input: string, target: string): number {
  const inputChars = input.split('')
  const targetChars = target.split('')
  
  // Exact match
  if (input === target) return 100
  
  // Count matching characters
  let matches = 0
  for (let char of targetChars) {
    if (inputChars.includes(char)) {
      matches++
      inputChars.splice(inputChars.indexOf(char), 1)
    }
  }
  
  const percentage = (matches / targetChars.length) * 100
  return Math.floor(percentage)
}

/**
 * Validate writing based on stage and language
 */
export function validateWriting(
  userInput: string,
  correctAnswer: string,
  stageNumber: number = 1,
  languageCode: string = 'en'
): WritingValidationResult {
  
  const userText = userInput.trim()
  const target = correctAnswer.trim()
  
  // ============================================
  // EXACT MATCH - Perfect score
  // ============================================
  if (userText === target) {
    return {
      score: 100,
      feedback: '✓ Perfect match!',
      correctedText: target,
      isPerfect: true
    }
  }

  // ============================================
  // CASE-INSENSITIVE MATCH (for English/Khmer)
  // ============================================
  if (languageCode !== 'zh' && userText.toLowerCase() === target.toLowerCase()) {
    return {
      score: 95,
      feedback: '✓ Correct! (Check capitalization)',
      correctedText: target,
      isPerfect: true
    }
  }

  // ============================================
  // CHINESE SPECIFIC RULES
  // ============================================
  if (languageCode === 'zh') {
    // Stage 1-3: Accept pinyin or characters
    if (stageNumber <= 3) {
      const userHasChars = containsChineseCharacters(userText)
      
      // If user wrote pinyin (no Chinese characters)
      if (!userHasChars) {
        // Check if pinyin matches the target characters using the map
        const pinyinMatches = matchesPinyinToCharacters(userText, target)
        
        if (pinyinMatches) {
          return {
            score: 95,
            feedback: `✓ Correct! (Pinyin: ${userText})`,
            correctedText: target,
            isPerfect: true
          }
        }
        
        // Fallback to similarity comparison
        const pinyinSimilarity = comparePinyin(userText, target)
        
        if (pinyinSimilarity >= 70) {
          return {
            score: pinyinSimilarity,
            feedback: `Good! ${pinyinSimilarity}% correct pinyin.`,
            correctedText: target,
            isPerfect: false
          }
        }
      }
      
      // If user wrote characters (or mix)
      const similarity = calculateSimilarity(userText, target)
      
      if (similarity >= 80) {
        return {
          score: similarity,
          feedback: `Good! You got ${similarity}% correct.`,
          correctedText: target,
          isPerfect: false
        }
      }
      
      // If input is very short but correct concept
      if (similarity >= 60 && userText.length >= target.length * 0.7) {
        return {
          score: 65,
          feedback: `Close! Expected: "${target}"`,
          correctedText: target,
          isPerfect: false
        }
      }
    }
    
    // Stage 4+: Require Chinese characters
    if (stageNumber >= 4) {
      const hasChineseChars = containsChineseCharacters(userText)
      
      if (!hasChineseChars) {
        return {
          score: 10,
          feedback: `⚠️ Stage ${stageNumber}+: Write in Chinese characters, not pinyin!`,
          correctedText: target,
          isPerfect: false
        }
      }
      
      // If they wrote characters, check similarity
      const similarity = calculateSimilarity(userText, target)
      if (similarity >= 80) {
        return {
          score: similarity,
          feedback: `Good! ${similarity}% correct.`,
          correctedText: target,
          isPerfect: false
        }
      }
      
      if (similarity >= 60) {
        return {
          score: 60,
          feedback: `Partial: ${similarity}% match. Target: ${target}`,
          correctedText: target,
          isPerfect: false
        }
      }
    }
  }

  // ============================================
  // OTHER LANGUAGES (English, Khmer, etc)
  // ============================================
  if (languageCode !== 'zh') {
    const similarity = calculateSimilarity(userText, target)
    
    if (similarity >= 80) {
      return {
        score: similarity,
        feedback: `Good! ${similarity}% match.`,
        correctedText: target,
        isPerfect: false
      }
    }
    
    if (similarity >= 60) {
      return {
        score: 60,
        feedback: `Partial match. Expected: "${target}"`,
        correctedText: target,
        isPerfect: false
      }
    }
  }

  // ============================================
  // INCORRECT
  // ============================================
  return {
    score: 0,
    feedback: `❌ Incorrect. Target: "${target}"`,
    correctedText: target,
    isPerfect: false
  }
}

/**
 * Quick validation for multiple choice (no grading needed)
 */
export function validateMultipleChoice(
  userAnswer: string,
  correctAnswer: string
): { isCorrect: boolean; score: number } {
  
  const isCorrect = userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
  
  return {
    isCorrect,
    score: isCorrect ? 100 : 0
  }
}

/**
 * Validate spoken answer (for speaking practice)
 */
export function validateSpeaking(
  userTranscript: string,
  targetText: string
): { isCorrect: boolean; score: number; feedback: string } {
  
  const userText = userTranscript.toLowerCase().trim()
  const target = targetText.toLowerCase().trim()
  
  // Exact match or contains
  const isMatch = userText === target || 
                  userText.includes(target) || 
                  target.includes(userText)
  
  if (isMatch) {
    return {
      isCorrect: true,
      score: 95,
      feedback: '✓ Great pronunciation!'
    }
  }
  
  // Partial match
  const similarity = calculateSimilarity(userText, target)
  if (similarity >= 70) {
    return {
      isCorrect: false,
      score: similarity,
      feedback: `Close! Target: "${target}"`
    }
  }
  
  return {
    isCorrect: false,
    score: 0,
    feedback: `Target: "${target}" | You said: "${userText}"`
  }
}
