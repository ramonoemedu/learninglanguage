// app/progress/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Spinner, Tabs, Tab } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Zap, Coins, Flame, BookOpen, Target, BrainCircuit } from 'lucide-react'

interface OverallStats {
  xpTotal: number
  coins: number
  streakDays: number
  lessonsCompleted: number
  averageScore: number
  vocabularyLearned: number
}

interface LanguageStats {
  code: string
  name: string
  flag: string
  xpInLanguage: number
  currentStage: number
}

interface UserProgressData {
  overall: OverallStats
  languages: LanguageStats[]
}

export default function ProgressPage() {
  const [progressData, setProgressData] = useState<UserProgressData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await fetch('/api/progress')
        const data = await res.json()
        setProgressData(data)
      } catch (err) {
        console.error('Failed to load progress data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProgress()
  }, [])

  if (loading || !progressData) {
    return (
      <div className="relative overflow-hidden min-h-screen bg-slate-50 dark:bg-[#030712] flex items-center justify-center">
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <Spinner size="lg" color="primary" className="relative z-10" />
      </div>
    )
  }

  const { overall, languages } = progressData

  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-50 dark:bg-[#030712] p-4 sm:p-6 text-slate-900 dark:text-white">
      {/* --- Ambient AI Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[150px] z-0 pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[150px] z-0 pointer-events-none animate-pulse delay-1000" />

      {/* --- Header --- */}
      <header className="relative z-10 max-w-5xl mx-auto flex items-center justify-between mb-8 sm:mb-12 pt-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <button className="p-2 rounded-xl bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] group">
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </Link>
          <div className="flex items-center gap-3">
            <Target className="text-sky-500 dark:text-sky-400" size={24} />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Telemetry & Progress</h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10 pb-12">

        {/* --- Overall Stats Container --- */}
        <section className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400">Overall Diagnostics</h2>
            <div className="w-full h-px bg-gradient-to-r from-sky-500/20 to-transparent dark:from-sky-400/20" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { label: 'Total XP', value: overall.xpTotal, icon: <Zap size={16} />, color: 'text-sky-500 dark:text-sky-400' },
              { label: 'Credits', value: overall.coins, icon: <Coins size={16} />, color: 'text-amber-500 dark:text-amber-400' },
              { label: 'Streak', value: overall.streakDays, icon: <Flame size={16} />, color: 'text-orange-500 dark:text-orange-400' },
              { label: 'Lessons', value: overall.lessonsCompleted, icon: <BookOpen size={16} />, color: 'text-indigo-500 dark:text-indigo-400' },
              { label: 'Avg Score', value: `${overall.averageScore.toFixed(0)}%`, icon: <Target size={16} />, color: 'text-emerald-500 dark:text-emerald-400' },
              { label: 'Words Lexicon', value: overall.vocabularyLearned, icon: <BrainCircuit size={16} />, color: 'text-fuchsia-500 dark:text-fuchsia-400' }
            ].map((stat, i) => (
              <div key={i} className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-xl bg-white/30 dark:bg-[#030712]/50 border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-700">
                <div className={`flex items-center gap-1.5 mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300 ease-out`}>
                  {stat.icon}
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Language Tabs Section --- */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-2">Module Routing</h2>

          <Tabs
            aria-label="Progress by Language"
            variant="light"
            classNames={{
              tabList: "bg-white/50 dark:bg-[#030712]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-1 shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.05)]",
              cursor: "bg-white dark:bg-[#050b14] border border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-[0_0_10px_rgba(56,189,248,0.1)] rounded-lg",
              tab: "h-12 px-6",
              tabContent: "group-data-[selected=true]:text-sky-500 dark:group-data-[selected=true]:text-sky-400 font-bold transition-colors"
            }}
          >
            {languages.map((lang) => (
              <Tab
                key={lang.code}
                title={
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm tracking-wide">{lang.name}</span>
                  </div>
                }
              >
                <div className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] rounded-2xl p-6 sm:p-8 mt-4 transition-all duration-300 hover:border-sky-500/30 dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.1)]">

                  {/* XP & Current Stage Header */}
                  <div className="flex justify-between items-end mb-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Module Experience</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight">{lang.xpInLanguage}</span>
                        <span className="text-sm text-sky-500 dark:text-sky-400 font-bold">XP</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Stage</span>
                      <span className="px-3 py-1 rounded-md border border-sky-500/30 bg-sky-500/10 text-sky-500 dark:text-sky-400 text-xs font-bold uppercase tracking-widest">
                        Lvl {lang.currentStage}
                      </span>
                    </div>
                  </div>

                  {/* Main Progress Bar (Neon) */}
                  <div className="w-full h-2 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden mb-8">
                    <div
                      className="h-full bg-sky-500 dark:bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)] dark:shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-all duration-1000 ease-out"
                      style={{ width: `${(lang.xpInLanguage % 1000) / 10}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {/* Skill Breakdown */}
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                        <Target size={14} /> Skill Matrix
                      </h3>
                      <div className="flex flex-col gap-4">
                        {[
                          { name: 'Lexicon', value: 85, color: 'bg-emerald-500', glow: 'shadow-[0_0_10px_rgba(16,185,129,0.5)]' },
                          { name: 'Syntax', value: 70, color: 'bg-amber-500', glow: 'shadow-[0_0_10px_rgba(245,158,11,0.5)]' },
                          { name: 'Audio Proc', value: 60, color: 'bg-rose-500', glow: 'shadow-[0_0_10px_rgba(244,63,94,0.5)]' },
                          { name: 'Vocal Gen', value: 50, color: 'bg-indigo-500', glow: 'shadow-[0_0_10px_rgba(99,102,241,0.5)]' }
                        ].map((skill) => (
                          <div key={skill.name} className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center text-xs font-medium">
                              <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                              <span className="text-slate-500 font-bold">{skill.value}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                              <div className={`h-full ${skill.color} rounded-full ${skill.glow} transition-all duration-1000 ease-out`} style={{ width: `${skill.value}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Review Targets */}
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                        <BrainCircuit size={14} /> Review Targets
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['你好', '谢谢', '学生', '朋友'].map((word) => (
                          <span
                            key={word}
                            className="px-3 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800/80 bg-white/30 dark:bg-[#030712]/50 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-sky-500/50 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </Tab>
            ))}
          </Tabs>
        </section>

      </main>
    </div>
  )
}