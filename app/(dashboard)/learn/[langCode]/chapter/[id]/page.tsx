'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, CheckCircle2, Lock, Sparkles, Target, Zap, BrainCircuit, Headphones, Mic2, FileText, Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Lesson {
  id: string
  type: string
  xpReward: number
  coinReward: number
  completed: boolean
  contentJson: any
}

interface Chapter {
  id: string
  chapterNum: number
  title: string
  lessons: Lesson[]
}

export default function ChapterLessonsPage({ params }: { params: { langCode: string, id: string } }) {
  const { langCode, id: chapterId } = params
  const [chapter, setChapter] = useState<Chapter | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch(`/api/chapters/${chapterId}/lessons`)
        const data = await res.json()
        setChapter(data)
      } catch (err) {
        console.error('Failed to load lessons', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLessons()
  }, [chapterId])

  const getLessonIcon = (type: string, status: 'locked' | 'active' | 'completed') => {
    const size = 22
    const color = status === 'completed' ? 'text-emerald-400' : status === 'active' ? 'text-sky-400' : 'text-slate-500'
    
    switch (type) {
      case 'vocab': return <BrainCircuit className={color} size={size} />
      case 'listen': return <Headphones className={color} size={size} />
      case 'speak': return <Mic2 className={color} size={size} />
      case 'grammar': return <Zap className={color} size={size} />
      default: return <FileText className={color} size={size} />
    }
  }

  const getLessonLabel = (type: string) => {
    switch (type) {
      case 'vocab': return 'Lexical Foundation'
      case 'listen': return 'Auditory Processing'
      case 'speak': return 'Phonetic Output'
      case 'grammar': return 'Syntax Calibration'
      case 'write': return 'Manual Encoding'
      case 'read': return 'Visual Decoding'
      case 'dialogue': return 'Matrix Simulation'
      default: return 'Neural Training'
    }
  }

  if (loading || !chapter) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-12 h-12 border-2 border-sky-500/20 border-t-sky-500 rounded-full animate-spin" />
        <span className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.3em] animate-pulse">Initializing Deck...</span>
      </div>
    )
  }

  const activeIndex = chapter.lessons.findIndex(l => !l.completed)
  const currentActiveIndex = activeIndex === -1 ? chapter.lessons.length : activeIndex

  return (
    <div className="w-full max-w-screen-2xl mx-auto space-y-12 pb-32 relative z-10 px-4 sm:px-6 2xl:px-10">
      
      {/* 1. PREMIUM HEADER */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 relative z-20">
        <div className="flex items-center gap-6">
          <Link 
            href={`/learn/${langCode}`} 
            className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/50 transition-all duration-300 shadow-sm"
          >
            <ChevronLeft size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-sky-500 transition-colors" />
          </Link>
          
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-sky-500 dark:text-sky-400 uppercase tracking-[0.3em] bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                Sequence 0{chapter.chapterNum}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              {chapter.title}
            </h1>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Overall Completion</span>
          <div className="flex items-center gap-4">
            <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-800/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(currentActiveIndex / chapter.lessons.length) * 100}%` }}
                className="h-full bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              />
            </div>
            <span className="text-xs font-black text-slate-900 dark:text-white">{Math.round((currentActiveIndex / chapter.lessons.length) * 100)}%</span>
          </div>
        </div>
      </header>

      {/* 2. NEURAL MISSION DECK */}
      <main className="max-w-4xl mx-auto relative mt-16">
        
        {/* Vertical Connector Line (Left Aligned) */}
        <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800/50 z-0">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 2 }}
            className="w-full bg-gradient-to-b from-emerald-500 via-sky-500 to-slate-800"
          />
        </div>

        <div className="space-y-8 relative z-10">
          {chapter.lessons.map((lesson, index) => {
            const isCompleted = index < currentActiveIndex
            const isActive = index === currentActiveIndex
            const isLocked = index > currentActiveIndex

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                {/* STATUS INDICATOR (On the Line) */}
                <div className="mt-6 relative flex items-center justify-center shrink-0">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                    isCompleted ? 'bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/20' :
                    isActive ? 'bg-sky-500 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] scale-110' :
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-50'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="text-white" size={24} />
                    ) : isLocked ? (
                      <Lock className="text-slate-500" size={20} />
                    ) : (
                      <Sparkles className="text-white animate-pulse" size={24} />
                    )}
                  </div>
                  {isActive && <span className="absolute inset-[-4px] rounded-2xl border-2 border-sky-500/30 animate-ping opacity-20" />}
                </div>

                {/* MISSION CARD */}
                <button
                  disabled={isLocked}
                  onClick={() => !isLocked && router.push(`/lesson/${lesson.id}`)}
                  className={`group flex-1 relative overflow-hidden rounded-[32px] border transition-all duration-300 text-left p-6 sm:p-8 ${
                    isActive 
                      ? 'bg-white/80 dark:bg-[#050b14]/80 backdrop-blur-3xl border-sky-500/30 shadow-xl shadow-sky-500/5 -translate-y-1' 
                      : isCompleted
                      ? 'bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl border-slate-200/80 dark:border-slate-800/80 opacity-80 hover:opacity-100'
                      : 'bg-transparent border-slate-200 dark:border-slate-800/50 opacity-40 grayscale cursor-not-allowed'
                  }`}
                >
                  <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-sky-500/10' : 'bg-slate-100 dark:bg-white/5'}`}>
                          {getLessonIcon(lesson.type, isCompleted ? 'completed' : isActive ? 'active' : 'locked')}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isActive ? 'text-sky-500' : 'text-slate-500'}`}>
                            Module 0{index + 1}
                          </span>
                          <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest border ${
                            isActive 
                              ? 'bg-sky-500/10 border-sky-500/30 text-sky-500' 
                              : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-slate-800 text-slate-400'
                          }`}>
                            {lesson.type}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                        {getLessonLabel(lesson.type)}
                      </h3>
                      
                      <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest max-w-sm">
                        {isLocked ? 'Access denied. Complete previous module.' : `Engage protocol to earn ${lesson.xpReward} Neural XP.`}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      {isActive && (
                        <div className="flex flex-col items-end gap-1">
                           <div className="flex items-center gap-1.5 text-amber-500">
                              <Zap size={14} className="fill-amber-500" />
                              <span className="text-xs font-black">+{lesson.xpReward}</span>
                           </div>
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Rewards</span>
                        </div>
                      )}
                      
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-sky-500 text-white shadow-lg' : 'bg-slate-100 dark:bg-white/5 text-slate-400'
                      }`}>
                        {isCompleted ? <CheckCircle2 size={20} className="text-emerald-500" /> : isActive ? <Play size={20} className="fill-white ml-1" /> : <Lock size={18} />}
                      </div>
                    </div>
                  </div>

                  {/* Hover Shimmer */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Final Matrix Target */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col items-center text-center space-y-4"
        >
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-800 flex items-center justify-center">
            <Target className="text-slate-300 dark:text-slate-700" size={32} />
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Final Chapter Sync</span>
        </motion.div>

      </main>
    </div>
  )
}
