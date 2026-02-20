// components/lesson/Listening.tsx
'use client'

import { Button, Card, CardBody, Input, Spinner } from '@heroui/react'
import { Volume2, Sparkles, Activity, Headphones, CheckCircle2 } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ListeningProps {
  question: {
    prompt: string
    audioUrl?: string
    options?: string[]
    correctAnswer: string
    word?: string // The target language word
    languageCode?: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
  showOptions?: boolean
}

export default function Listening({ question, onAnswer, selectedAnswer, disabled, showOptions = true }: ListeningProps) {
  const [isAudioLoading, setIsAudioLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [inputValue, setInputValue] = useState(selectedAnswer)
  const audioCache = useRef<Map<string, string>>(new Map())

  const playAudio = async () => {
    if (isAudioLoading) return
    
    // Determine what to speak: word (target lang) is prioritized over correctAnswer (meaning)
    const textToSpeak = question.word || question.correctAnswer
    if (!textToSpeak) return

    // 🛡️ TOKEN SAVER: Audio Cache
    if (audioCache.current.has(textToSpeak)) {
      const audio = new Audio(audioCache.current.get(textToSpeak))
      audio.onplay = () => setIsPlaying(true)
      audio.onended = () => setIsPlaying(false)
      audio.play()
      return
    }

    setIsAudioLoading(true)
    try {
      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: textToSpeak, 
          voice: 'nova', 
          speed: 1.0,
        }),
      })
      const data = await res.json()
      if (res.ok && data.audioUrl) {
        audioCache.current.set(textToSpeak, data.audioUrl)
        const audio = new Audio(data.audioUrl)
        audio.onplay = () => setIsPlaying(true)
        audio.onended = () => setIsPlaying(false)
        audio.play()
      }
    } catch (error) {
      console.error('Error playing audio:', error)
    } finally {
      setIsAudioLoading(false)
    }
  }

  // 🔊 AUTO-PLAY ON MOUNT
  useEffect(() => {
    const timer = setTimeout(() => {
      playAudio()
    }, 600)
    return () => clearTimeout(timer)
  }, [question.word, question.correctAnswer])

  const handleInputChange = (value: string) => {
    setInputValue(value)
    onAnswer(value)
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700">
      
      {/* HUD Header */}
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20">
        <Headphones size={12} className="text-sky-500 animate-pulse" />
        <span className="text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em]">Auditory Pattern Sync</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight text-center max-w-lg leading-tight">
        {question.prompt}
      </h2>

      <Card className="w-full max-w-md bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-3xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden">
        <CardBody className="flex flex-col items-center justify-center p-12">
          <button 
            onClick={playAudio}
            disabled={isAudioLoading || disabled}
            className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
              isPlaying ? 'bg-sky-500 shadow-[0_0_30px_rgba(56,189,248,0.5)]' : 'bg-slate-100 dark:bg-slate-800 hover:bg-sky-500/10'
            }`}
          >
            {isAudioLoading ? (
              <Spinner size="md" color="white" />
            ) : (
              <Volume2 className={isPlaying ? 'text-white' : 'text-sky-500'} size={40} />
            )}
            {isPlaying && (
              <span className="absolute inset-0 rounded-full border-2 border-sky-500 animate-ping opacity-40"></span>
            )}
          </button>
          <span className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Transmit Audio Signal</span>
        </CardBody>
      </Card>

      <div className="w-full max-w-xl space-y-4">
        <div className="flex items-center gap-2 px-2">
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Select Output</span>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        {showOptions && question.options ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((option, i) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                <button 
                  onClick={() => onAnswer(option)}
                  disabled={disabled}
                  className={`w-full h-20 text-xl font-bold rounded-2xl border-2 transition-all duration-300 ${
                    selectedAnswer === option 
                      ? 'bg-sky-500 border-sky-400 text-white shadow-xl shadow-sky-500/30 -translate-y-1' 
                      : 'bg-white/50 dark:bg-white/5 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-sky-500/50'
                  }`}
                >
                  {option}
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative group">
            <Input
              type="text"
              placeholder="Decode the signal..."
              value={inputValue}
              onValueChange={handleInputChange}
              className="w-full"
              size="lg"
              variant="bordered"
              classNames={{
                input: "text-center text-xl font-bold uppercase tracking-widest",
                inputWrapper: "h-20 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl group-hover:border-sky-500/50 transition-all shadow-inner"
              }}
              isDisabled={disabled}
            />
          </div>
        )}
      </div>
    </div>
  )
}
