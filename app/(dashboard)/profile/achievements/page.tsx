// app/profile/achievements/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Lock, Trophy, Zap, Coins } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: string
  xpReward: number
  coinReward: number
  isUnlocked: boolean
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch('/api/gamification/achievements')
        const data = await res.json()
        setAchievements(data)
      } catch (err) {
        console.error('Failed to load achievements:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAchievements()
  }, [])

  if (loading) {
    return (
      <div className="relative overflow-hidden min-h-screen bg-slate-50 dark:bg-[#030712] flex items-center justify-center">
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <Spinner size="lg" color="primary" className="relative z-10" />
      </div>
    )
  }

  const categorizeAchievements = (achs: Achievement[]) => {
    return achs.reduce((acc, ach) => {
      (acc[ach.category] = acc[ach.category] || []).push(ach)
      return acc
    }, {} as Record<string, Achievement[]>)
  }

  const categorized = categorizeAchievements(achievements)

  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-50 dark:bg-[#030712] p-4 sm:p-6 text-slate-900 dark:text-white">
      {/* --- Ambient AI Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px] z-0 pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px] z-0 pointer-events-none animate-pulse delay-700" />

      {/* --- Header --- */}
      <header className="relative z-10 max-w-4xl mx-auto flex items-center justify-between mb-8 sm:mb-12 pt-4">
        <div className="flex items-center gap-4">
          <Link href="/profile">
            <button className="p-2 rounded-xl bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] group">
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </Link>
          <div className="flex items-center gap-3">
            <Trophy className="text-sky-500 dark:text-sky-400" size={24} />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Achievements</h1>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8 sm:gap-10 pb-12">
        {Object.keys(categorized).map(category => (
          <section key={category} className="flex flex-col gap-4 sm:gap-5">
            {/* Category HUD Header */}
            <div className="flex items-center gap-4">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 whitespace-nowrap">
                {category}
              </h2>
              <div className="w-full h-px bg-gradient-to-r from-sky-500/20 to-transparent dark:from-sky-400/20" />
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {categorized[category].map(ach => (
                <div
                  key={ach.id}
                  className={`relative overflow-hidden flex gap-4 p-4 sm:p-5 rounded-2xl border backdrop-blur-2xl transition-all duration-300 ease-out ${ach.isUnlocked
                    ? 'bg-white/70 dark:bg-[#050b14]/70 border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] hover:border-sky-500/30 group'
                    : 'bg-white/30 dark:bg-[#030712]/50 border-slate-200/40 dark:border-slate-800/40 opacity-75 grayscale-[0.5]'
                    }`}
                >
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl transition-transform duration-300 ${ach.isUnlocked
                    ? 'bg-sky-500/10 dark:bg-sky-400/10 text-sky-500 dark:text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20'
                    : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500'
                    }`}>
                    {ach.isUnlocked ? ach.icon : <Lock size={20} />}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className={`font-semibold text-sm sm:text-base tracking-tight ${ach.isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                        {ach.title}
                      </h3>
                      {ach.isUnlocked && (
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-500 dark:text-sky-400">
                          Unlocked
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                      {ach.description}
                    </p>

                    {/* HUD Rewards */}
                    {ach.isUnlocked && (
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <Zap size={12} className="text-sky-500 dark:text-sky-400" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">+{ach.xpReward} XP</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <Coins size={12} className="text-amber-500 dark:text-amber-400" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">+{ach.coinReward} Cr</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Subtle Unlocked Glow Accent */}
                  {ach.isUnlocked && (
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-sky-500/5 dark:bg-sky-400/10 blur-xl rounded-full pointer-events-none group-hover:bg-sky-500/10 transition-colors duration-300" />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}