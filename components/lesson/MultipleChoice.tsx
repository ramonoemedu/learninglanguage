// components/lesson/MultipleChoice.tsx
'use client'

import { Button, Card, CardBody } from '@heroui/react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface MultipleChoiceProps {
  question: {
    prompt?: string
    word?: string
    options: string[]
    translation?: string
    image?: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
}

export default function MultipleChoice({ question, onAnswer, selectedAnswer, disabled }: MultipleChoiceProps) {
  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700">

      {/* HUD Header */}
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
        <Sparkles size={12} className="text-indigo-500" />
        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.3em]">Logic Core Protocol</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight text-center max-w-lg leading-tight">
        {question.prompt || question.word}
      </h2>

      {question.image && (
        <Card className="w-full max-w-sm aspect-video border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/5 backdrop-blur-xl overflow-hidden rounded-[32px] shadow-xl">
          <img
            src={question.image}
            alt="Sequence visual"
            className="w-full h-full object-cover"
          />
        </Card>
      )}

      <div className="w-full max-w-xl space-y-4">
        <div className="flex items-center gap-2 px-2">
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Select Response</span>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option, i) => (
            <motion.div
              key={option}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => onAnswer(option)}
                disabled={disabled}
                className={`w-full h-16 sm:h-20 px-8 text-lg sm:text-xl font-bold rounded-2xl border-2 transition-all duration-300 text-left flex items-center justify-between ${selectedAnswer === option
                  ? 'bg-sky-500 border-sky-400 text-white shadow-xl shadow-sky-500/30 -translate-x-1'
                  : 'bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-500/50 hover:bg-sky-500/5'
                  }`}
              >
                <span>{option}</span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAnswer === option ? 'border-white bg-white/20' : 'border-slate-200 dark:border-slate-800'}`}>
                  {selectedAnswer === option && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
