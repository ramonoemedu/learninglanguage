// components/lesson/FlashCard.tsx
'use client'

import { Card, CardBody, Spinner } from '@heroui/react'
import { Volume2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface FlashCardProps {
  question: {
    word: string
    romanization: string
    ipa?: string
    translation: string
    options: string[]
    correctAnswer: string
    languageCode: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
  playbackSpeed?: number
  playTTS: (text: string, forceSpeed?: number) => Promise<void>
}

export default function FlashCard({ question, onAnswer, selectedAnswer, disabled, playbackSpeed = 1.0, playTTS }: FlashCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const handlePlay = async () => {
    setIsPlaying(true)
    await playTTS(question.word)
    setIsPlaying(false)
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700 pb-10">
      
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20">
        <Sparkles size={12} className="text-sky-500" />
        <span className="text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em]">Neural Pattern Matching</span>
      </div>

      <Card className="w-full max-w-lg bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-3xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden">
        <CardBody className="flex flex-col items-center justify-center p-10 sm:p-16 min-h-[350px]">
          <motion.p className="text-sky-500 dark:text-sky-400 text-3xl sm:text-4xl font-black mb-4 tracking-tight">
            {question.romanization}
          </motion.p>

          <motion.span className="text-6xl sm:text-8xl font-black text-slate-900 dark:text-white mb-10 drop-shadow-xl text-center">
            {question.word}
          </motion.span>
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => handlePlay()}
              disabled={disabled}
              className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-500 ${
                isPlaying ? 'bg-sky-500 shadow-[0_0_40px_rgba(56,189,248,0.5)]' : 'bg-slate-100 dark:bg-slate-800 hover:bg-sky-500/10 border-2 border-transparent hover:border-sky-500/30'
              }`}
            >
              <Volume2 className={isPlaying ? 'text-white' : 'text-sky-500'} size={40} />
              {isPlaying && (
                <span className="absolute inset-0 rounded-full border-2 border-sky-500 animate-ping opacity-40"></span>
              )}
            </button>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Listen ({playbackSpeed}x)</span>
          </div>
        </CardBody>
      </Card>

      <div className="w-full max-w-xl space-y-4">
        <div className="flex items-center gap-2 px-2">
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Decode Meaning</span>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((option, i) => (
            <motion.div key={option} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.05 }}>
              <button 
                onClick={() => onAnswer(option)}
                disabled={disabled}
                className={`w-full h-20 text-xl font-bold rounded-[24px] border-2 transition-all duration-300 ${selectedAnswer === option ? 'bg-sky-500 border-sky-400 text-white shadow-xl -translate-y-1' : 'bg-white/50 dark:bg-white/5 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-sky-500/50'}`}
              >
                {option}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
