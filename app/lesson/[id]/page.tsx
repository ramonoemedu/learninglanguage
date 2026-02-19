// app/lesson/[id]/page.tsx
'use client'

import { useState, useEffect, use } from 'react'
import { Button, Progress, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { X, Heart, HeartOff, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import FlashCard from '@/components/lesson/FlashCard'
import MultipleChoice from '@/components/lesson/MultipleChoice'
import Listening from '@/components/lesson/Listening'
import FillInBlank from '@/components/lesson/FillInBlank'
import Speaking from '@/components/lesson/Speaking'
import Writing from '@/components/lesson/Writing'
import Reading from '@/components/lesson/Reading'
import Dialogue from '@/components/lesson/Dialogue'
import GrammarExplanation from '@/components/lesson/GrammarExplanation'

interface LessonQuestion {
  type: 'flashcard' | 'multiple-choice' | 'listening' | 'fill-in-the-blank' | 'speaking' | 'writing' | 'reading' | 'dialogue'
  word?: string
  romanization?: string
  translation?: string
  options?: string[]
  correctAnswer: string
  audioUrl?: string
  prompt?: string
  blankedSentence?: string
  hint?: string
  languageCode?: string // Added to question type
  targetLanguage?: string // For writing and other AI tasks
  nativeLanguage?: string // For writing and other AI tasks
  passage?: string // For reading lessons
  comprehensionQuestions?: {
    question: string
    options: string[]
    correctAnswer: string
  }[]
  scenario?: string // For dialogue lessons
  initialDialogue?: { role: 'user' | 'assistant' | 'system'; content: string }[]
  grammarTopic?: string // For grammar explanations
}

interface LessonContent {
  questions: LessonQuestion[]
}

interface Lesson {
  id: string
  type: string
  xpReward: number
  coinReward: number
  contentJson: LessonContent
  chapter: {
    title: string
    stage: {
      language: {
        name: string
        flag: string
        code: string
      }
    }
  }
}

export default function LessonPlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: lessonId } = use(params)
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hearts, setHearts] = useState(5)
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong' | 'completed' | 'failed'>('playing')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [correctAnswerText, setCorrectAnswerText] = useState('')
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [xpEarned, setXPEarned] = useState(0)
  const [coinsEarned, setCoinsEarned] = useState(0)
  const [scorePercentage, setScorePercentage] = useState(0)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0) // Track correct answers
  const [canShowHint, setCanShowHint] = useState(true) // For hints in fill-in-the-blank, etc.

  const router = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await fetch(`/api/lessons/${lessonId}`)
        const data = await res.json()
        setLesson(data)
        setTotalQuestions(data.contentJson?.questions?.length || 0)
      } catch (err) {
        console.error('Failed to load lesson', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLesson()
  }, [lessonId])

  const currentQuestion = lesson?.contentJson?.questions[currentIndex]

  const handleAnswer = (answer: string, scoreFromAI?: number) => {
    setSelectedAnswer(answer)
    if (currentQuestion?.type === 'writing' && scoreFromAI !== undefined) {
      // Logic for writing score from AI
      if (scoreFromAI >= 60) { // Example threshold for 'correct'
        setStatus('correct')
        setCorrectAnswersCount(prev => prev + 1)
      } else {
        setHearts(h => Math.max(0, h - 1))
        setStatus('wrong')
        setCorrectAnswerText('See AI feedback for details.')
      }
    }
  }

  const handleCheck = async () => {
    if (!currentQuestion || status !== 'playing') return

    let isCorrect = false
    if (currentQuestion.type === 'speaking' || currentQuestion.type === 'dialogue') {
      isCorrect = true // Any submission moves to the next step
    } else if (currentQuestion.type === 'writing') {
      // Writing component sets its own status via onAnswer. This function shouldn't be called.
      // But if it is, we do nothing and wait for the user to click 'Continue' (handleNext)
      return; 
    } else {
      isCorrect = selectedAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim()
    }

    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1)
      setStatus('correct')
    } else {
      setHearts(h => Math.max(0, h - 1))
      setCorrectAnswerText(currentQuestion.correctAnswer)
      setStatus('wrong')
      if (hearts <= 1) { // If this was the last heart
        setStatus('failed')
        onOpen() // Show "No Hearts" modal
      }
    }
  }

  const handleSubmitLesson = async () => {
    if (!lesson) return
    setLoading(true)
    const finalScore = totalQuestions > 0 ? (correctAnswersCount / totalQuestions) * 100 : 0
    try {
      const res = await fetch(`/api/lessons/${lessonId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score: finalScore,
          timeSpent: 100, // Placeholder for actual time tracking
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit lesson')

      setXPEarned(data.xpEarned)
      setCoinsEarned(data.coinsEarned)
      setScorePercentage(data.score)
      setStatus('completed')
    } catch (err) {
      console.error('Error submitting lesson:', err)
      setStatus('failed') // Could be a different state for submission error
    } finally {
      setLoading(false)
    }
  }

  const handleNext = () => {
    if (!lesson) return

    if (currentIndex + 1 >= totalQuestions) {
      handleSubmitLesson()
    } else {
      setCurrentIndex(c => c + 1)
      setSelectedAnswer('')
      setCorrectAnswerText('')
      setStatus('playing')
      setCanShowHint(true) // Reset hint status for new question
    }
  }

  const handleSpendCoins = async (amount: number, reason: string, sourceType: string) => {
    try {
      const res = await fetch('/api/gamification/coins/spend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, reason, sourceType, sourceId: lessonId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to spend coins')
      // Update UI: maybe show new coin balance if available, or just refresh user context
      router.refresh() // Refresh user data on dashboard or context
      return true
    } catch (err) {
      console.error('Error spending coins:', err)
      alert(err instanceof Error ? err.message : 'Failed to spend coins.') // Show error to user
      return false
    }
  }

  const handleRefillHearts = async () => {
    const success = await handleSpendCoins(25, 'Refill hearts in lesson', 'HEART_REFILL')
    if (success) {
      setHearts(5) // Restore full hearts
      onOpenChange() // Close modal
      setStatus('playing') // Resume lesson
    }
  }

  const handleShowHint = async () => {
    if (currentQuestion?.hint) {
      const success = await handleSpendCoins(5, 'Hint in lesson', 'HINT')
      if (success) {
        setCanShowHint(false) // Show hint and prevent further hints for this question
        // Logic to display hint in FillInBlank component would be needed
      }
    }
  }

  if (loading || !lesson || !currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col p-2 sm:p-0">
      {/* Header: Progress + Hearts */}
      <header className="max-w-4xl mx-auto w-full px-4 py-4 sm:px-6 sm:py-6 flex items-center gap-4 sm:gap-6">
        <Link href={`/learn/${lesson.chapter.stage.language.code}`}>
          <Button variant="light" isIconOnly size="sm" className="text-default-400 hover:text-foreground">
            <X size={20} />
          </Button>
        </Link>
        
        <Progress 
          value={((currentIndex + (status !== 'playing' ? 1 : 0)) / totalQuestions) * 100} 
          className="flex-1" 
          color="success" 
          size="sm"
          radius="full"
        />

        <div className="flex items-center gap-1 sm:gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart key={i} className={`h-5 w-5 sm:h-6 sm:w-6 ${i < hearts ? 'text-danger fill-danger' : 'text-default-300'}`} />
          ))}
        </div>
      </header>

      {/* Main Content: The Question Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 max-w-2xl mx-auto w-full">
        {status === 'completed' ? (
          <div className="text-center animate-in zoom-in duration-300 px-4">
            <h2 className="text-3xl sm:text-4xl font-black mb-3 sm:mb-4">Lesson Complete! 🏆</h2>
            <p className="text-base sm:text-xl text-default-500 mb-2">You scored {scorePercentage.toFixed(0)}%</p>
            <p className="text-base sm:text-xl text-default-500 mb-6 sm:mb-8">You earned {xpEarned} XP and {coinsEarned} Coins.</p>
            <Link href="/dashboard">
              <Button color="primary" size="lg" className="font-bold text-base sm:text-lg px-8 sm:px-12">Continue</Button>
            </Link>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center text-center gap-6 sm:gap-10">
            {currentQuestion.type === 'flashcard' && currentQuestion.word && (
              <FlashCard
                question={{
                  word: currentQuestion.word,
                  romanization: currentQuestion.romanization || '',
                  translation: currentQuestion.translation || '',
                  options: currentQuestion.options || [],
                  correctAnswer: currentQuestion.correctAnswer,
                  languageCode: lesson.chapter.stage.language.code,
                }}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
                disabled={status !== 'playing'}
              />
            )}
            {currentQuestion.type === 'multiple-choice' && currentQuestion.prompt && (
              <MultipleChoice
                question={{
                  prompt: currentQuestion.prompt,
                  options: currentQuestion.options || [],
                  translation: currentQuestion.translation,
                }}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
                disabled={status !== 'playing'}
              />
            )}
            {currentQuestion.type === 'multiple-choice' && currentQuestion.grammarTopic && (
              <GrammarExplanation
                topic={currentQuestion.grammarTopic}
                targetLanguage={lesson.chapter.stage.language.code}
                nativeLanguage={'en'} // Fallback, should come from user profile
                disabled={status !== 'playing'}
              />
            )}
            {currentQuestion.type === 'listening' && currentQuestion.prompt && (
              <Listening
                question={{
                  prompt: currentQuestion.prompt,
                  audioUrl: currentQuestion.audioUrl || '', // Fallback for dynamically generated audio
                  options: currentQuestion.options,
                  correctAnswer: currentQuestion.correctAnswer,
                }}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
                disabled={status !== 'playing'}
                showOptions={currentQuestion.options && currentQuestion.options.length > 0}
              />
            )}
            {currentQuestion.type === 'fill-in-the-blank' && currentQuestion.blankedSentence && (
              <FillInBlank
                question={{
                  prompt: currentQuestion.prompt || '',
                  blankedSentence: currentQuestion.blankedSentence,
                  correctAnswer: currentQuestion.correctAnswer,
                  hint: currentQuestion.hint,
                }}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
                disabled={status !== 'playing'}
              />
            )}
            {currentQuestion.type === 'speaking' && currentQuestion.prompt && (
              <Speaking
                question={{
                  prompt: currentQuestion.prompt,
                  correctAnswer: currentQuestion.correctAnswer,
                  romanization: currentQuestion.romanization,
                  languageCode: lesson.chapter.stage.language.code,
                }}
                onAnswer={handleAnswer}
                disabled={status !== 'playing'}
              />
            )}
            {currentQuestion.type === 'writing' && currentQuestion.prompt && (
              <Writing
                question={{
                  prompt: currentQuestion.prompt,
                  correctAnswer: currentQuestion.correctAnswer,
                  targetLanguage: currentQuestion.targetLanguage || lesson.chapter.stage.language.code,
                  nativeLanguage: currentQuestion.nativeLanguage || 'en', // Fallback, should come from user profile
                }}
                onAnswer={handleAnswer} // Writing component handles its own check logic
                disabled={status !== 'playing'}
              />
            )}
            {currentQuestion.type === 'reading' && currentQuestion.passage && currentQuestion.comprehensionQuestions && (
              <Reading
                question={{
                  prompt: currentQuestion.prompt || 'Read the passage and answer the questions.',
                  passage: currentQuestion.passage,
                  comprehensionQuestions: currentQuestion.comprehensionQuestions,
                  languageCode: lesson.chapter.stage.language.code,
                }}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
                disabled={status !== 'playing'}
              />
            )}
            {currentQuestion.type === 'dialogue' && currentQuestion.scenario && currentQuestion.initialDialogue && (
              <Dialogue
                question={{
                  prompt: currentQuestion.prompt || 'Roleplay a conversation.',
                  scenario: currentQuestion.scenario,
                  initialDialogue: currentQuestion.initialDialogue,
                  targetLanguage: currentQuestion.targetLanguage || lesson.chapter.stage.language.code,
                  nativeLanguage: currentQuestion.nativeLanguage || 'en', // Fallback
                }}
                onAnswer={(userText) => {
                  setSelectedAnswer(userText) // Just mark that user responded for now
                  setStatus('correct') // Assume dialogue turn is 'correct' for progression
                }}
                disabled={status !== 'playing'}
              />
            )}
          </div>
        )}
      </main>

      {/* Footer Check/Next Section */}
      <footer className={`border-t py-4 px-4 sm:py-8 sm:px-6 transition-colors duration-300 ${
        status === 'correct' ? 'bg-success-100 border-success-200' :
        status === 'wrong' ? 'bg-danger-100 border-danger-200' :
        'bg-background'
      }`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex-1">
            {status === 'correct' && (
              <div className="flex items-center gap-2 sm:gap-3 text-success">
                <CheckCircle2 size={24} />
                <div className="flex flex-col">
                  <span className="font-black text-lg sm:text-xl">Excellent!</span>
                  <span className="text-sm">You got it right.</span>
                </div>
              </div>
            )}
            {status === 'wrong' && (
              <div className="flex items-center gap-2 sm:gap-3 text-danger">
                <AlertCircle size={24} />
                <div className="flex flex-col">
                  <span className="font-black text-lg sm:text-xl">Not quite.</span>
                  <span className="text-sm">Correct: {correctAnswerText}</span>
                </div>
              </div>
            )}
            {status === 'playing' && currentQuestion?.hint && canShowHint && (
              <Button size="sm" variant="ghost" className="text-xs sm:text-sm" onClick={handleShowHint}>
                💡 Hint (-5 Coins)
              </Button>
            )}
          </div>
          
          <Button 
            color={status === 'correct' ? 'success' : status === 'wrong' ? 'danger' : 'primary'}
            size="md" // Adjusted size for mobile
            className="font-black text-lg sm:text-xl px-8 sm:px-12 h-12 sm:h-16 shadow-lg min-w-[150px] sm:min-w-[200px]"
            onClick={status === 'playing' ? handleCheck : handleNext}
            isDisabled={status === 'playing' && !selectedAnswer && currentQuestion?.type !== 'speaking' && currentQuestion?.type !== 'writing' && currentQuestion?.type !== 'dialogue'}
            endContent={status !== 'playing' && <ChevronRight size={20} />}
          >
            {status === 'playing' ? 'CHECK' : 'CONTINUE'}
          </Button>
        </div>
      </footer>

      {/* Out of Hearts Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center pt-8 sm:pt-10">
                <HeartOff className="text-danger mb-3 sm:mb-4" size={48} />
                <h2 className="text-xl sm:text-2xl font-black">Out of Hearts!</h2>
              </ModalHeader>
              <ModalBody className="text-center text-default-500 px-6 sm:px-10">
                You've run out of lives for this session. You can wait for them to refill or spend coins to continue.
              </ModalBody>
              <ModalFooter className="flex flex-col gap-2 sm:gap-3 pb-8 sm:pb-10">
                <Button color="primary" className="w-full font-bold h-10 sm:h-12" onClick={handleRefillHearts}>
                  Spend 25 Coins (Refill Hearts)
                </Button>
                <Button variant="ghost" className="w-full font-bold h-10 sm:h-12" onClick={() => router.push('/dashboard')}>
                  End Session
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
