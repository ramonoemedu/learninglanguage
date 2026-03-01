'use client'

import { useState, useEffect, useRef } from 'react'
import { Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { X, Heart, HeartOff, CheckCircle2, AlertCircle, ChevronRight, Zap, Sparkles, Coins, Volume2, Cpu, Activity, Sun, Moon, Monitor } from 'lucide-react'
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
import { AILoader } from '@/components/ai-loader' // Import AILoader
import { useTheme } from 'next-themes'
import { useLesson } from '@/lib/hooks/useLessons'

interface LessonQuestion {
  type: 'flashcard' | 'multiple-choice' | 'listen' | 'fill-in-the-blank' | 'speaking' | 'writing' | 'reading' | 'dialogue' | 'grammar' | 'vocab'
  id?: string
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
  
  // ✅ Goal 1 & 2: Client-Side SWR (Instant Navigation with fallback data)
  const { data: lesson, error: lessonError, isLoading: loading } = useLesson(lessonId, undefined)

  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)
  const [ttsMode, setTtsMode] = useState<'ai' | 'local'>('local')
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('')

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
  const { isOpen: isSettingsOpen, onOpen: onSettingsOpen, onOpenChange: onSettingsOpenChange } = useDisclosure()
  const { theme, setTheme } = useTheme()
  const audioCache = useRef<Map<string, string>>(new Map())

  // LOAD VOICES
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      setAvailableVoices(voices)

      if (!selectedVoiceURI && voices.length > 0) {
        const saved = localStorage.getItem('neural_voice_uri')
        if (saved && voices.find(v => v.voiceURI === saved)) {
          setSelectedVoiceURI(saved)
        } else {
          const meijia = voices.find(v => v.name.includes('Meijia') || v.lang.includes('zh-TW'))
          const defaultVoice = meijia || voices.find(v => v.name.includes('Premium') || v.name.includes('Enhanced')) || voices[0]
          setSelectedVoiceURI(defaultVoice.voiceURI)
        }
      }
    }

    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices

    const savedMode = localStorage.getItem('tts_mode') as 'ai' | 'local'
    if (savedMode) setTtsMode(savedMode)
  }, [selectedVoiceURI])

  const speakLocal = (text: string, speed: number) => {
    return new Promise<void>((resolve) => {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      const voice = availableVoices.find(v => v.voiceURI === selectedVoiceURI)
      if (voice) utterance.voice = voice

      if (lesson?.chapter.stage.language.code) {
        const code = lesson.chapter.stage.language.code
        utterance.lang = code === 'zh' ? 'zh-CN' : code === 'en' ? 'en-US' : code
      }

      utterance.rate = speed
      utterance.pitch = 1
      utterance.onend = () => resolve()
      utterance.onerror = () => resolve()
      window.speechSynthesis.speak(utterance)
    })
  }

  const playTTS = async (text: string, forceSpeed?: number) => {
    if (!text) return
    const speed = forceSpeed || playbackSpeed

    if (ttsMode === 'local') {
      await speakLocal(text, speed)
      return
    }

    setIsThinking(true)
    const cacheKey = `${text}_${speed.toFixed(2)}`

    const playAudio = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const audio = new Audio(url)
        audio.onended = () => resolve()
        audio.onerror = () => reject(new Error('Audio playback failed'))
        audio.play().catch(reject)
      })
    }

    try {
      if (audioCache.current.has(cacheKey)) {
        await playAudio(audioCache.current.get(cacheKey)!)
        return
      }

      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voice: 'nova', speed: speed }),
      })

      if (!res.ok) throw new Error('Failed to fetch audio')

      const data = await res.json()
      if (data.audioUrl) {
        audioCache.current.set(cacheKey, data.audioUrl)
        await playAudio(data.audioUrl)
      }

    } catch (err) {
      console.error('TTS error:', err)
    } finally {
      setIsThinking(false)
    }
  }
// Initialize lesson data from SWR
  // Initialize lesson data from SWR
  useEffect(() => {
    if (lesson) {
      const qCount = lesson.contentJson?.questions?.length || 0
      console.log('✅ Lesson loaded from SWR:', lesson.id)
      console.log('❓ Questions count:', qCount)
      setTotalQuestions(qCount)
      if (qCount === 0) setError('Matrix empty.')
    }
    if (lessonError) {
      console.error('❌ Error fetching lesson:', lessonError)
      setError('Uplink failed.')
    }
  }, [lesson, lessonError])

  const currentQuestion = lesson?.contentJson?.questions?.[currentIndex]

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
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
    setHearts(5)
    setCombo(0)
    onOpenChange()
    setStatus('playing')
  }

  if (loading) return <AILoader />

  if (error || !lesson || !lesson.chapter) return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-[#030712] p-6 text-center">
      <AlertCircle size={48} className="text-rose-500 mb-4" />
      <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">System Error</h2>
      <p className="text-sm text-slate-500 mt-4 font-mono">{error || 'Lesson not found'}</p>
      <p className="text-xs text-slate-400 mt-2">ID: {lessonId}</p>
      <button onClick={() => router.back()} className="mt-8 px-8 py-4 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-widest text-sm shadow-lg">Restore Link</button>
    </div>
  )

  const currentLessonIdx = (lesson.chapter.lessons || []).findIndex((l: { id: string }) => l.id === lessonId)
  const nextLessonId = lesson.chapter.lessons?.[currentLessonIdx + 1]?.id

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#030712]">

      {/* 1. STICKY HEADER */}
      <div className="sticky top-0 z-50 w-full px-4 pt-4 sm:pt-6">
        <div className="max-w-5xl mx-auto relative rounded-[24px] p-[1px] overflow-hidden shadow-2xl">
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#38bdf8_100%)] opacity-40 dark:opacity-60" />

          <div className="relative flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 bg-white/80 dark:bg-[#050b14]/80 backdrop-blur-2xl rounded-[23px] border border-white/20 dark:border-slate-800/50">
            <Link href={`/learn/${lesson.chapter.stage.language.code}/chapter/${lesson.chapter.id}`} className="group flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-sky-500/10 transition-all shrink-0">
              <X size={18} className="text-slate-500 group-hover:text-sky-500" />
            </Link>

            <div className="flex-1 space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Syncing Module 0{currentIndex + 1}</span>
                <AnimatePresence>
                  {isThinking && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Cpu size={12} className="text-sky-500 animate-spin" />
                      <span className="text-[9px] font-bold text-sky-500 uppercase tracking-widest hidden sm:inline">Decoding...</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Progress value={((currentIndex + (status !== 'playing' ? 1 : 0)) / totalQuestions) * 100} size="sm" color="primary" />
            </div>

            {/* SPEED CONTROLS */}
            <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 shadow-inner overflow-hidden">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Speed:</span>
              <div className="flex gap-1">
                {[0.5, 0.8, 1, 1.5].map((s) => (
                  <button
                    key={s}
                    onClick={() => setPlaybackSpeed(s)}
                    className={`text-[10px] font-black px-2 py-1 rounded-md transition-all ${playbackSpeed === s ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:bg-sky-500/10'}`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 shadow-inner shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Heart key={i} size={14} className={i < hearts ? 'text-rose-500 fill-rose-500' : 'text-slate-300 dark:text-slate-700'} />
              ))}
            </div>

            <button
              onClick={onSettingsOpen}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all text-slate-500 hover:text-sky-500 shrink-0"
            >
              <Cpu size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. FLEXIBLE CONTENT AREA */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 sm:py-20 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {status === 'completed' ? (
            <motion.div key="completed" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-8 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 rounded-[40px] shadow-2xl max-w-lg w-full">
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
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`w-full ${['writing', 'reading', 'dialogue', 'listen'].includes(currentQuestion.type) ? 'max-w-4xl' : 'max-w-2xl'}`}
            >
              {currentQuestion.type === 'vocab' && <FlashCard question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} playbackSpeed={playbackSpeed} playTTS={playTTS} />}
              {currentQuestion.type === 'grammar' && <MultipleChoice question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'listen' && <Listening question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} showOptions={true} playbackSpeed={playbackSpeed} playTTS={playTTS} />}
              {currentQuestion.type === 'speaking' && <Speaking question={currentQuestion as any} onAnswer={handleAnswer} disabled={status !== 'playing'} playTTS={playTTS} />}
              {currentQuestion.type === 'writing' && <Writing question={currentQuestion as any} onAnswer={handleAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'reading' && <Reading question={currentQuestion as any} onAnswer={handleAnswer} selectedAnswer={selectedAnswer} disabled={status !== 'playing'} />}
              {currentQuestion.type === 'dialogue' && <Dialogue question={currentQuestion as any} onAnswer={handleAnswer} disabled={status !== 'playing'} />}

              {!currentQuestion.type && (
                <div className="flex flex-col items-center justify-center p-10 text-rose-500 bg-rose-500/5 rounded-3xl border border-rose-500/20">
                  <AlertCircle size={48} className="mb-4" />
                  <p className="font-bold uppercase tracking-widest">Data Error: Missing Question Type</p>
                  <p className="text-sm mt-2 opacity-70 font-mono">{currentQuestion.prompt || currentQuestion.word || 'Unknown'}</p>
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      {/* 3. STICKY FOOTER */}
      <footer className={`sticky bottom-0 z-40 border-t backdrop-blur-3xl py-6 sm:py-8 px-6 transition-colors duration-500 ${status === 'correct' ? 'bg-emerald-500/10 border-emerald-500/30' :
        status === 'wrong' ? 'bg-rose-500/10 border-rose-500/30' :
          'bg-white/80 dark:bg-[#030712]/80 border-slate-200/80 dark:border-slate-800/80'
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
            disabled={isSubmitting || (status === 'playing' && !selectedAnswer && !['speaking', 'dialogue'].includes(currentQuestion?.type || ''))}
            className={`w-full sm:min-w-[240px] sm:w-auto px-10 h-16 rounded-2xl font-black text-xl uppercase tracking-[0.2em] transition-all duration-300 ${status === 'correct' ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' :
              status === 'wrong' ? 'bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]' :
                'bg-sky-500 text-white shadow-lg hover:-translate-y-1'
              } disabled:opacity-50 disabled:grayscale`}
          >
            {isSubmitting ? <Spinner size="sm" color="white" /> : (status === 'playing' ? 'VERIFY' : 'CONTINUE')}
          </button>
        </div>
      </footer>

      {/* SETTINGS MODAL */}
      <Modal
        isOpen={isSettingsOpen}
        onOpenChange={onSettingsOpenChange}
        className="dark:bg-[#050b14] border border-slate-800 max-w-md"
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-slate-900 dark:text-white uppercase tracking-tighter pt-10">
            <div className="flex items-center gap-2">
              <Sparkles className="text-sky-500" size={18} />
              <span>Transmission Settings</span>
            </div>
          </ModalHeader>
          <ModalBody className="pb-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visual Interface</span>
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-slate-800">
                  {[
                    { id: 'light', icon: Sun, label: 'Light' },
                    { id: 'dark', icon: Moon, label: 'Dark' },
                    { id: 'system', icon: Monitor, label: 'Auto' }
                  ].map(({ id, icon: Icon, label }) => (
                    <button
                      key={id}
                      onClick={() => setTheme(id)}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${theme === id ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                      <Icon size={14} />
                      <span className="hidden sm:inline">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Processing Core</span>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => { setTtsMode('ai'); localStorage.setItem('tts_mode', 'ai'); }}
                    className={`py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${ttsMode === 'ai' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                  >
                    Cloud AI
                  </button>
                  <button
                    onClick={() => { setTtsMode('local'); localStorage.setItem('tts_mode', 'local'); }}
                    className={`py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${ttsMode === 'local' ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                  >
                    Local Link
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 italic">
                  {ttsMode === 'ai' ? 'High-fidelity neural synthesis (Uses data).' : 'Zero-latency edge processing (Free & Instant).'}
                </p>
              </div>

              {ttsMode === 'local' && (
                <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Neural Voice Signature</span>
                  <select
                    value={selectedVoiceURI}
                    onChange={(e) => { setSelectedVoiceURI(e.target.value); localStorage.setItem('neural_voice_uri', e.target.value); }}
                    className="w-full bg-white dark:bg-[#030712] border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-sm font-medium text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
                  >
                    {availableVoices
                      .filter(v => !lesson?.chapter.stage.language.code || v.lang.startsWith(lesson.chapter.stage.language.code))
                      .map(voice => (
                        <option key={voice.voiceURI} value={voice.voiceURI}>
                          {voice.name} ({voice.lang})
                        </option>
                      ))
                    }
                    {availableVoices.length === 0 && <option>No local voices detected</option>}
                  </select>

                  <button
                    onClick={() => speakLocal("Transmission check. Neural link stable.", 1.0)}
                    className="w-full py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-800 text-sky-500 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-sky-500/10 transition-all"
                  >
                    <Activity size={14} /> Pulse Test
                  </button>
                </div>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

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
