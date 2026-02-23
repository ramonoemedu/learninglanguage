// components/lesson/Writing.tsx
'use client'

import { Button, Textarea, Card, CardBody, Spinner } from '@heroui/react'
import { useState } from 'react'
import { CheckCircle2, AlertCircle, Sparkles, BrainCircuit, Terminal, Activity, Zap, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface WritingProps {
  question: {
    prompt?: string
    correctAnswer: string
    targetLanguage: string
    nativeLanguage: string
    word?: string
    translation?: string
  }
  onAnswer: (answer: string, score?: number) => void
  disabled?: boolean
}

export default function Writing({ question, onAnswer, disabled }: WritingProps) {
  const [userText, setUserText] = useState('')
  const [loading, setLoading] = useState(false)
  const [aiFeedback, setAiFeedback] = useState<{ score: number, feedback: string, correctedText: string } | null>(null)
  const [error, setError] = useState('')

  const handleGradeWriting = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/ai/grade-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userText,
          prompt: question.prompt,
          targetLanguage: question.targetLanguage,
          nativeLanguage: question.nativeLanguage,
          correctAnswer: question.word || question.correctAnswer,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to grade writing.')
      }

      setAiFeedback(data)
      onAnswer(userText, data.score)
    } catch (err: any) {
      console.error('Error grading writing:', err)
      setError(err.message || 'An error occurred while grading your writing.')
      setAiFeedback(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700">

      {/* HUD HEADER */}
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20">
        <BrainCircuit size={12} className="text-sky-500" />
        <span className="text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em]">Manual Encoding Protocol</span>
      </div>

      <div className="text-center space-y-2 max-w-3xl">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight px-4">
          {question.prompt || question.translation || "Translate the following"}
        </h2>
        <div className="flex justify-center gap-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Terminal size={10} /> Target: {question.targetLanguage.toUpperCase()}
          </span>
          <div className="w-[1px] h-3 bg-slate-200 dark:bg-slate-800" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={10} /> Linguistic Sync
          </span>
        </div>
      </div>

      <div className="w-full max-w-4xl space-y-10 px-2 sm:px-0">
        <div className="relative group">
          <div className="relative">
            <Textarea
              value={userText}
              onValueChange={(val) => {
                setUserText(val)
                onAnswer(val)
              }}
              placeholder={
                question.targetLanguage === 'zh' ? "Type in Chinese... (e.g. 你好, 谢谢)" :
                  question.targetLanguage === 'km' ? "Type in Khmer... (e.g. សួស្តី)" :
                    "Type in English... (e.g. dog, cat, weather)"
              }
              minRows={6}
              maxRows={8}
              isDisabled={disabled || loading || aiFeedback !== null}
              classNames={{
                input: "text-lg sm:text-3xl font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600 leading-relaxed text-center p-8 sm:p-12 outline-none ring-0",
                inputWrapper: "bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border-2 border-slate-200/50 dark:border-slate-800/50 focus-within:border-sky-500 ring-0 outline-none rounded-[32px] sm:rounded-[40px] p-0 transition-all duration-300 shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.03)] min-h-[320px] items-center"
              }}
            />

            {/* Technical HUD Overlay for Input */}
            <div className="absolute bottom-6 right-8 sm:bottom-10 sm:right-12 flex items-center gap-4 pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Neural Buffer</span>
                <span className="text-xs font-mono font-bold text-sky-500">{userText.length} CHR</span>
              </div>
              <Activity size={16} className="text-sky-500 animate-pulse" />
            </div>
          </div>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-rose-500 px-6">
            <AlertCircle size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{error}</span>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!aiFeedback ? (
            <motion.div key="submit-btn" exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }} className="px-2">
              <Button
                onClick={handleGradeWriting}
                isLoading={loading}
                isDisabled={disabled || userText.trim().length < 5}
                className={`w-full h-20 rounded-[24px] font-black text-xl uppercase tracking-[0.3em] transition-all duration-500 ${userText.trim().length >= 5
                  ? 'bg-sky-500 text-white shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] hover:-translate-y-1'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-400 grayscale'
                  }`}
              >
                {loading ? 'Processing Matrix...' : (
                  <span className="flex items-center gap-3">
                    Transmit Sequence <ChevronRight size={24} />
                  </span>
                )}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="feedback-panel"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="space-y-6"
            >
              {/* RESULTS HUD */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-[24px] shadow-xl">
                  <CardBody className="p-8 flex flex-row items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${aiFeedback.score >= 70 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                      <Zap size={32} className={aiFeedback.score >= 70 ? 'fill-emerald-500' : 'fill-amber-500'} />
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Proficiency Score</span>
                      <h4 className="text-4xl font-black text-slate-900 dark:text-white leading-none mt-1">{aiFeedback.score}%</h4>
                    </div>
                  </CardBody>
                </Card>

                <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-[24px] shadow-xl">
                  <CardBody className="p-8 flex flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Core Status</span>
                      <h4 className="text-3xl font-black text-slate-900 dark:text-white leading-none mt-1 uppercase">Synchronized</h4>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* ANALYSIS BLOCK */}
              <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-3xl border border-slate-200/80 dark:border-slate-800/80 rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden">
                <CardBody className="p-0">
                  <div className="bg-slate-50/50 dark:bg-white/5 border-b border-slate-200/80 dark:border-slate-800/80 px-10 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sparkles size={16} className="text-sky-500" />
                      <span className="text-[12px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Neural Feedback Analysis</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500/10" />
                    </div>
                  </div>
                  <div className="p-10 sm:p-12 space-y-10">
                    <div>
                      <span className="text-[11px] font-bold text-sky-500 dark:text-sky-400 uppercase tracking-[0.2em] mb-4 block">Optimal Sequence (Corrected)</span>
                      <p className="text-xl sm:text-3xl font-medium text-slate-800 dark:text-slate-100 italic leading-relaxed">
                        "{aiFeedback.correctedText}"
                      </p>
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                    <div>
                      <span className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4 block">Linguistic Debug Notes</span>
                      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {aiFeedback.feedback}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
