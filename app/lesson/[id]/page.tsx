'use client'

import { useState, useEffect, useRef } from 'react'
import { Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { X, Heart, HeartOff, CheckCircle2, AlertCircle, ChevronRight, Zap, Sparkles, Coins, Volume2, Cpu, Activity } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import FlashCard from '@/components/lesson/FlashCard'
import MultipleChoice from '@/components/lesson/MultipleChoice'
import Listening from '@/components/lesson/Listening'
import FillInBlank from '@/components/lesson/FillInBlank'
import Speaking from '@/components/lesson/Speaking'
import Writing from '@/components/lesson/Writing'
import Reading from '@/components/lesson/Reading'
import Dialogue from '@/components/lesson/Dialogue'
import GrammarExplanation from '@/components/lesson/GrammarExplanation'

// REUSABLE AI LOADING HUD
export function AILoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute inset-0 border-2 border-slate-200 dark:border-slate-800 border-t-sky-500 dark:border-t-sky-400 rounded-full" />
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-2 border-2 border-slate-200 dark:border-slate-800 border-b-indigo-500 dark:border-b-indigo-400 rounded-full" />
        </div>
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex flex-col items-center gap-1">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900 dark:text-white">Neural Uplink</span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">Synchronizing Matrix...</span>
        </motion.div>
      </div>
    </div>
  )
}

interface LessonQuestion {
  type: 'flashcard' | 'multiple-choice' | 'listening' | 'fill-in-the-blank' | 'speaking' | 'writing' | 'reading' | 'dialogue'
  word?: string
  romanization?: string
  translation?: string
  options?: string[]
  correctAnswer?: string
  audioUrl?: string
  prompt?: string
  blankedSentence?: string
  hint?: string
  languageCode?: string
  targetLanguage?: string
  nativeLanguage?: string
  passage?: string
  comprehensionQuestions?: {
    question: string
    options: string[]
    correctAnswer: string
  }[]
  scenario?: string
  initialDialogue?: { role: 'user' | 'assistant' | 'system'; content: string }[]
  grammarTopic?: string
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
    id: string
    title: string
    chapterNum: number
    lessons: { id: string }[]
    stage: {
      language: {
        name: string
        flag: string
        code: string
      }
    }
  }
}

export default function LessonPlayerPage({ params }: { params: { id: string } }) {
  const { id: lessonId } = params
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hearts, setHearts] = useState(5)
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong' | 'completed' | 'failed'>('playing')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [correctAnswerText, setCorrectAnswerText] = useState('')
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [xpEarned, setXPEarned] = useState(0)
  const [coinsEarned, setCoinsEarned] = useState(0)
  const [scorePercentage, setScorePercentage] = useState(0)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [canShowHint, setCanShowHint] = useState(true)
  const [combo, setCombo] = useState(0)
  const isOverdrive = combo >= 3

  const router = useRouter()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const audioCache = useRef<Map<string, string>>(new Map())

  const playTTS = async (text: string) => {
    if (!text) return
    setIsThinking(true) // Show AI Thinking state

    if (audioCache.current.has(text)) {
      setTimeout(() => {
        new Audio(audioCache.current.get(text)).play()
        setIsThinking(false)
      }, 400) // Artificial delay for "AI feeling"
      return
    }

    try {
      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice: 'nova' }),
      })
      const data = await res.json()
      if (res.ok && data.audioUrl) {
        audioCache.current.set(text, data.audioUrl)
        new Audio(data.audioUrl).play()
      }
    } finally {
      setTimeout(() => setIsThinking(false), 600)
    }
  }

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await fetch(`/api/lessons/${lessonId}`)
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setLesson(data)
        const qCount = data.contentJson?.questions?.length || 0
        setTotalQuestions(qCount)
        if (qCount === 0) setError('Matrix empty.')
      } catch (err) {
        setError('Uplink failed.')
      } finally {
        setTimeout(() => setLoading(false), 800) // Smooth transition
      }
    }
    fetchLesson()
  }, [lessonId])

  const currentQuestion = lesson?.contentJson?.questions?.[currentIndex]

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    // 🛡️ TOKEN SAVER: Only speak if it contains target language characters (Chinese, Khmer, etc.)
    const isTargetLanguage = /[^\x00-\x7F]/.test(answer)
    if (isTargetLanguage) {
      playTTS(answer)
    }
  }

  const handleCheck = async () => {
    if (!currentQuestion || status !== 'playing') return
    let isCorrect = selectedAnswer?.toLowerCase().trim() === currentQuestion.correctAnswer?.toLowerCase().trim()

    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1)
      setCombo(prev => prev + 1)
      setStatus('correct')
      if (currentQuestion.correctAnswer && selectedAnswer !== currentQuestion.correctAnswer) playTTS(currentQuestion.correctAnswer)
    } else {
      const newHearts = Math.max(0, hearts - 1)
      setHearts(newHearts)
      setCombo(0)
      setCorrectAnswerText(currentQuestion.correctAnswer || 'Error')
      setStatus('wrong')
      if (newHearts <= 0) { setStatus('failed'); onOpen() }
    }
  }

  const handleSubmitLesson = async () => {
    if (!lesson) return
    setIsSubmitting(true)
    const finalScore = (correctAnswersCount / totalQuestions) * 100
    try {
      const res = await fetch(`/api/lessons/${lessonId}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: finalScore, timeSpent: 120 }),
      })
      const data = await res.json()
      setXPEarned(data.xpEarned + (combo >= 3 ? 10 : 0))
      setCoinsEarned(data.coinsEarned)
      setScorePercentage(data.score)
      setStatus('completed')
    } catch (err) {
      setError('Sync failed.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = () => {
    if (currentIndex + 1 >= totalQuestions) {
      handleSubmitLesson()
    } else {
      setCurrentIndex(c => c + 1)
      setSelectedAnswer('')
      setStatus('playing')
    }
  }

  const handleRefillHearts = async () => {
    // Simplified refill for demo
    setHearts(5)
    setCombo(0)
    onOpenChange()
    setStatus('playing')
  }

  if (loading) return <AILoader />

  if (error || !lesson) return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-[#030712] p-6 text-center">
      <AlertCircle size={48} className="text-rose-500 mb-4" />
      <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">System Error</h2>
      <button onClick={() => router.back()} className="mt-8 px-8 py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-widest text-sm shadow-lg">Restore Link</button>
    </div>
  )

  // Find next lesson in chapter
  const currentLessonIdx = (lesson.chapter.lessons || []).findIndex(l => l.id === lessonId)
  const nextLessonId = lesson.chapter.lessons?.[currentLessonIdx + 1]?.id

  return (
    <div className="fixed inset-0 flex flex-col bg-slate-50 dark:bg-[#030712] overflow-hidden">

      {/* 1. ANIMATED HEADER (Running Gradient) */}
      <div className="flex-none relative z-30 w-full max-w-5xl mx-auto px-4 py-4 sm:px-8 mt-4">
        <div className="relative rounded-[24px] p-[1px] overflow-hidden">
          {/* THE RUNNING GRADIENT BORDER */}
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#38bdf8_100%)] opacity-40 dark:opacity-60" />

          <div className="relative flex items-center gap-6 px-6 py-4 bg-white/80 dark:bg-[#050b14]/80 backdrop-blur-2xl rounded-[23px] border border-white/20 dark:border-slate-800/50 shadow-2xl">
            <Link href={`/learn/${lesson.chapter.stage.language.code}/chapter/${lesson.chapter.id}`} className="group flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-sky-500/10 transition-all">
              <X size={18} className="text-slate-500 group-hover:text-sky-500" />
            </Link>

            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Syncing Module 0{currentIndex + 1}</span>
                <AnimatePresence>
                  {isThinking && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Cpu size={12} className="text-sky-500 animate-spin" />
                      <span className="text-[9px] font-bold text-sky-500 uppercase tracking-widest">AI Decoding Sound...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Progress value={((currentIndex + (status !== 'playing' ? 1 : 0)) / totalQuestions) * 100} size="sm" color="primary" />
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 shadow-inner">
              {Array.from({ length: 5 }).map((_, i) => (
                <Heart key={i} size={16} className={i < hearts ? 'text-rose-500 fill-rose-500' : 'text-slate-300 dark:text-slate-700'} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 w-full flex flex-col items-center justify-center p-4 sm:p-8">
        <AnimatePresence mode="wait">
          {status === 'completed' ? (
            <motion.div key="completed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-8 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-12 rounded-[40px] shadow-2xl max-w-lg w-full">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <CheckCircle2 size={48} className="text-emerald-500" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Matrix Decrypted</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800/50 text-center">
                  <Zap size={16} className="text-sky-500 mx-auto mb-2" /><span className="text-2xl font-black text-slate-900 dark:text-white">+{xpEarned} XP</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800/50 text-center">
                  <Coins size={16} className="text-amber-500 mx-auto mb-2" /><span className="text-2xl font-black text-slate-900 dark:text-white">+{coinsEarned}</span>
                </div>
              </div>

              {nextLessonId ? (
                <button onClick={() => router.push(`/lesson/${nextLessonId}`)} className="w-full py-5 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-widest text-lg shadow-lg hover:bg-sky-400 transition-all flex items-center justify-center gap-3">
                  Next Sequence <ChevronRight size={20} />
                </button>
              ) : (
                <button onClick={() => router.push(`/learn/${lesson.chapter.stage.language.code}/chapter/${lesson.chapter.id}`)} className="w-full py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-widest text-lg shadow-lg">Return to Map</button>
              )}
            </motion.div>
          ) : currentQuestion ? (
            <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full max-w-2xl">
              {currentQuestion.type === 'flashcard' && <FlashCard question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'multiple-choice' && <MultipleChoice question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'listening' && <Listening question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} showOptions={true} />}
              {currentQuestion.type === 'speaking' && <Speaking question={currentQuestion as any} onAnswer={handleAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'writing' && <Writing question={currentQuestion as any} onAnswer={handleAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'fill-in-the-blank' && <FillInBlank question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'reading' && <Reading question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'dialogue' && <Dialogue question={currentQuestion as any} onAnswer={handleAnswer} disabled={status !== 'playing'} />}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      {/* 3. PINNED FOOTER */}
      <footer className={`flex-none relative z-20 border-t backdrop-blur-3xl py-8 px-6 sm:px-10 transition-colors duration-500 ${status === 'correct' ? 'bg-emerald-500/10 border-emerald-500/30' :
        status === 'wrong' ? 'bg-rose-500/10 border-rose-500/30' :
          'bg-white/50 dark:bg-white/[0.02] border-slate-200/80 dark:border-slate-800/80'
        }`}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {status === 'correct' && (
                <motion.div key="correct" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 text-center sm:text-left">
                  <CheckCircle2 size={32} />
                  <div><span className="text-[10px] font-black uppercase tracking-widest">Signal Perfect</span><h4 className="text-xl font-black uppercase">EXCELLENT!</h4></div>
                </motion.div>
              )}
              {status === 'wrong' && (
                <motion.div key="wrong" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4 text-rose-600 dark:text-rose-400 text-center sm:text-left">
                  <AlertCircle size={32} />
                  <div><span className="text-[10px] font-black uppercase tracking-widest">Signal Distorted</span><h4 className="text-lg font-black uppercase truncate max-w-[250px]">Target: {correctAnswerText}</h4></div>
                </motion.div>
              )}
              {status === 'playing' && (
                <div className="flex items-center gap-4 text-slate-500">
                  <Sparkles size={24} className="animate-pulse text-sky-500" />
                  <div><span className="text-[10px] font-black uppercase tracking-widest">Awaiting Uplink</span><h4 className="text-xl font-black uppercase text-slate-900 dark:text-white">Transmit Data</h4></div>
                </div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={status === 'playing' ? handleCheck : handleNext}
            disabled={isSubmitting || (status === 'playing' && !selectedAnswer && !['speaking', 'writing', 'dialogue'].includes(currentQuestion?.type || ''))}
            className={`min-w-[240px] px-10 h-16 rounded-2xl font-black text-xl uppercase tracking-[0.2em] transition-all duration-300 ${status === 'correct' ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' :
              status === 'wrong' ? 'bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]' :
                'bg-sky-500 text-white shadow-lg hover:-translate-y-1'
              } disabled:opacity-50 disabled:grayscale`}
          >
            {isSubmitting ? <Spinner size="sm" color="white" /> : (status === 'playing' ? 'VERIFY' : 'CONTINUE')}
          </button>
        </div>
      </footer>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} hideCloseButton className="dark:bg-[#050b14] border border-slate-800">
        <ModalContent>
          <ModalHeader className="flex flex-col items-center pt-10 text-slate-900 dark:text-white"><HeartOff size={48} className="text-rose-500 mb-4" /><h2 className="text-2xl font-black uppercase tracking-tight">Matrix Failed</h2></ModalHeader>
          <ModalBody className="text-center text-slate-400 px-10 pb-8">Neural link severed. Use credits to stabilize or terminate.</ModalBody>
          <ModalFooter className="flex flex-col gap-3 pb-10 px-10">
            <button onClick={handleRefillHearts} className="w-full py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-widest text-sm">Restore (25 Credits)</button>
            <button onClick={() => router.push('/dashboard')} className="w-full py-4 rounded-2xl bg-white/5 text-slate-400 font-black uppercase border border-slate-800">Terminate</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
