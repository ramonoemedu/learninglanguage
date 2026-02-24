// components/lesson/Listening.tsx
'use client'

import { Card, CardBody, Input, Spinner } from '@heroui/react'
import { Volume2, Headphones } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ListeningProps {
  question: {
    prompt?: string
    audioUrl?: string
    options?: string[]
    correctAnswer: string
    word?: string
    languageCode?: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
  showOptions?: boolean
  playbackSpeed?: number
  playTTS: (text: string, forceSpeed?: number) => Promise<void>
}

export default function Listening({ question, onAnswer, selectedAnswer, disabled, showOptions = true, playbackSpeed = 1.0, playTTS }: ListeningProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [inputValue, setInputValue] = useState(selectedAnswer)

  const handlePlay = async () => {
    const textToSpeak = question.word || question.correctAnswer
    if (!textToSpeak) return

    setIsPlaying(true)
    await playTTS(textToSpeak)
    setIsPlaying(false)
  }

  // 🔊 AUTO-PLAY ON MOUNT
  useEffect(() => {
    const timer = setTimeout(() => {
      handlePlay()
    }, 500)
    return () => clearTimeout(timer)
  }, [question.word, question.correctAnswer])

  const handleInputChange = (value: string) => {
    setInputValue(value)
    onAnswer(value)
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 sm:gap-12 animate-in fade-in zoom-in-95 duration-700 pb-10">

      {/* HUD Header */}
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20">
        <Headphones size={12} className="text-sky-500 animate-pulse" />
        <span className="text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em]">Auditory Pattern Sync</span>
      </div>
      <div className="flex flex-col items-center gap-2 px-4">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400 text-center"
        >
          {question.prompt || "Listen and select the correct answer"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight text-center max-w-2xl leading-tight"
        >
          {question.word || "Awaiting Audio..."}
        </motion.h2>
      </div>



      <Card className="w-full max-w-md bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-3xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden">
        <CardBody className="flex flex-col items-center justify-center p-10 sm:p-14 min-h-[280px]">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => handlePlay()}
              disabled={disabled}
              className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-all duration-500 ${isPlaying ? 'bg-sky-500 shadow-[0_0_50px_rgba(56,189,248,0.5)]' : 'bg-slate-100 dark:bg-slate-800 hover:bg-sky-500/10 border-2 border-transparent hover:border-sky-500/30 shadow-inner'
                }`}
            >
              <Volume2 className={isPlaying ? 'text-white' : 'text-sky-500'} size={64} />
              {isPlaying && (
                <span className="absolute inset-0 rounded-full border-2 border-sky-500 animate-ping opacity-40"></span>
              )}
            </button>
            <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Play Audio Signal ({playbackSpeed}x)</span>
          </div>
        </CardBody>
      </Card>

      <div className="w-full max-w-2xl space-y-6 px-2">
        <div className="flex items-center gap-4 px-4">
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Neural Response</span>
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
                  className={`w-full h-20 text-xl font-bold rounded-[24px] border-2 transition-all duration-300 ${selectedAnswer === option
                    ? 'bg-sky-500 border-sky-400 text-white shadow-xl shadow-sky-500/30 -translate-y-1'
                    : 'bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-sky-500/50'
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
              placeholder="Initialize linguistic output..."
              value={inputValue}
              onValueChange={handleInputChange}
              className="w-full"
              size="lg"
              variant="bordered"
              classNames={{
                input: "text-center text-xl sm:text-2xl font-bold uppercase tracking-widest py-10",
                inputWrapper: "h-24 sm:h-32 rounded-[32px] border-2 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl group-hover:border-sky-500/50 group-focus-within:border-sky-500 transition-all shadow-inner"
              }}
              isDisabled={disabled}
            />
          </div>
        )}
      </div>
    </div>
  )
}
