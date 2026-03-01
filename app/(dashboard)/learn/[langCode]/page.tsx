'use client'

import { use } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Lock, CheckCircle2, Sparkles, Target, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage, useUserProgress } from '@/lib/hooks/useLanguageData'

interface Chapter {
  id: string
  chapterNum: number
  title: string
}

interface Stage {
  id: string
  stageNumber: number
  title: string
  unlockXp: number
  chapters: Chapter[]
}

interface Language {
  id: string
  code: string
  name: string
  flag: string
  stages: Stage[]
}

interface UserProgress {
  currentStage: number
  currentChapter: number
  xpInLanguage: number
  completedLessonIds: string[]
}

export default function LearnPage({ params }: { params: { langCode: string } }) {
  const { langCode } = params
  const router = useRouter()

  const { data: language, error: langError, isLoading: langLoading } = useLanguage(langCode)
  const { data: progress, error: progError, isLoading: progLoading } = useUserProgress(langCode)

  const loading = langLoading || progLoading

  if (loading || !language || !progress) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-2 border-sky-500/20 border-t-sky-500 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="w-full max-w-screen-2xl mx-auto space-y-12 pb-20 px-4 sm:px-6 2xl:px-10">
      {/* HUD HEADER */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-6">
          <Link 
            href="/dashboard" 
            className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-sky-500/10"
          >
            <ChevronLeft size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-sky-500 transition-colors" />
          </Link>
          
          <div className="space-y-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                {language.flag}
              </div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                {language.name} <span className="text-sky-500 dark:text-sky-400 ml-1">Matrix</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20">
                <Target size={12} className="text-sky-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">Current Phase: Stage {progress.currentStage}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 min-w-[200px]">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">{progress.xpInLanguage} Neural XP Earned</span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-800/50 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800/80 shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(progress.xpInLanguage % 500) / 5}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-sky-600 to-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]" 
            />
          </div>
        </div>
      </header>

      {/* STAGES GRID */}
      <div className="grid grid-cols-1 gap-10">
        {language.stages.map((stage, sIdx) => {
          const isUnlocked = progress.xpInLanguage >= stage.unlockXp
          const isCurrent = stage.stageNumber === progress.currentStage

          return (
            <motion.div 
              key={stage.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: sIdx * 0.1 }}
              className={`group relative rounded-[32px] border transition-all duration-500 ${
                isCurrent 
                  ? 'bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border-sky-500/30 shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.08)]' 
                  : isUnlocked 
                  ? 'bg-white/40 dark:bg-[#030712]/40 backdrop-blur-xl border-slate-200/80 dark:border-slate-800/80' 
                  : 'bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-md border-slate-200/50 dark:border-slate-800/30 opacity-60'
              } p-8 sm:p-10`}
            >
              {/* STAGE HEADER */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-sky-500 dark:text-sky-400 uppercase tracking-[0.3em] bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                      Phase 0{stage.stageNumber}
                    </span>
                    {!isUnlocked && <Lock size={14} className="text-slate-400" />}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {stage.title}
                  </h2>
                </div>

                {isCurrent && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                    <Sparkles size={14} className="text-white animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Initialization Active</span>
                  </div>
                )}
                {!isUnlocked && (
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl">
                    Requires {stage.unlockXp} Neural XP
                  </span>
                )}
              </div>

              {/* CHAPTERS GRID */}
              {isUnlocked ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
                  {stage.chapters.map((chapter) => {
                    const isChapterCompleted = (chapter.chapterNum < progress.currentChapter && isCurrent) || stage.stageNumber < progress.currentStage
                    const isChapterCurrent = chapter.chapterNum === progress.currentChapter && isCurrent
                    const isChapterLocked = (chapter.chapterNum > progress.currentChapter && isCurrent) || stage.stageNumber > progress.currentStage

                    return (
                      <button
                        key={chapter.id}
                        disabled={isChapterLocked}
                        onClick={() => !isChapterLocked && router.push(`/learn/${langCode}/chapter/${chapter.id}`)}
                        className={`group/item relative p-6 rounded-2xl border-2 text-left transition-all duration-300 overflow-hidden ${
                          isChapterCurrent 
                            ? 'bg-sky-500 border-sky-400 text-white shadow-xl shadow-sky-500/20 scale-[1.02]' 
                            : isChapterCompleted 
                            ? 'bg-white/50 dark:bg-emerald-500/5 border-slate-200 dark:border-emerald-500/20 hover:border-emerald-500/40' 
                            : 'bg-white/30 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:border-sky-500/50'
                        } ${isChapterLocked ? 'opacity-40 grayscale cursor-not-allowed' : 'hover:-translate-y-1 active:scale-[0.98]'}`}
                      >
                        {/* Status Icon */}
                        <div className="flex justify-between items-start mb-6">
                          <div className={`p-2 rounded-lg ${isChapterCurrent ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                             <span className={`text-[10px] font-bold uppercase tracking-widest ${isChapterCurrent ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                                CH 0{chapter.chapterNum}
                             </span>
                          </div>
                          {isChapterCompleted ? (
                            <CheckCircle2 size={18} className="text-emerald-500" />
                          ) : isChapterLocked ? (
                            <Lock size={16} className="text-slate-400" />
                          ) : isChapterCurrent ? (
                            <Zap size={16} className="text-white animate-pulse" />
                          ) : null}
                        </div>

                        <div className="space-y-1">
                          <h3 className={`text-sm font-black uppercase leading-tight tracking-tight ${isChapterCurrent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                            {chapter.title}
                          </h3>
                        </div>

                        {/* Hover Glow Effect */}
                        {!isChapterLocked && !isChapterCurrent && (
                          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        )}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="py-16 flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-800 rounded-3xl bg-slate-100/30 dark:bg-slate-900/30 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center mb-4">
                    <Lock size={28} className="text-slate-400 dark:text-slate-600" />
                  </div>
                  <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">Encrypted Learning Module</p>
                </div>
              )}

              {/* Decorative Background Glow (Only for active stage) */}
              {isCurrent && (
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
