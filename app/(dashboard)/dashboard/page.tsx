'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MessageSquareText, Trophy, BarChart, Zap, Crown, Plus, Sparkles, Activity, Target, ChevronRight, Cpu } from 'lucide-react'
import { useUserStore } from '@/lib/stores/authStore'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function DashboardPage() {
  const { user } = useUserStore()
  const router = useRouter()

  // 3D Spatial Tilt Logic
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Get the most relevant next step
  const activeLang = user?.enrolledLanguages?.[0]
  const nextLessonUrl = activeLang 
    ? `/learn/${activeLang.languageCode}` // Ideally this points to the exact next lesson ID
    : '/learn'

  return (
    <div className="w-full space-y-12 pb-20 relative z-10">
      
      {/* 1. THE AGENTIC NEXUS (HERO WIDGET) */}
      <section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1200px" }}
        className="relative"
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative group w-full bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-3xl border border-slate-200/80 dark:border-slate-800/80 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-2xl dark:shadow-[0_0_50px_rgba(56,189,248,0.05)] transition-colors duration-500"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Intelligence Diagnostics */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-2">
                  <Sparkles size={12} className="text-sky-500 animate-pulse" />
                  <span className="text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em]">AI Co-Pilot Active</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  Neural Sync <br /> 
                  <span className="text-sky-500 dark:text-sky-400">Calibration</span>
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cognitive Load</span>
                  </div>
                  <p className="text-lg font-black text-slate-900 dark:text-white">Optimal</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu size={14} className="text-indigo-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Module</span>
                  </div>
                  <p className="text-lg font-black text-slate-900 dark:text-white truncate">
                    {activeLang?.language.name || 'New Matrix'}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={nextLessonUrl} className="flex-1">
                  <button className="relative w-full group/btn overflow-hidden h-16 rounded-2xl bg-sky-500 text-white font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
                    <span className="flex items-center justify-center gap-3">
                      Initialize Next Sequence
                      <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <button className="px-8 h-16 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-[11px] hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Sync Map
                </button>
              </div>
            </div>

            {/* Right: The Visual Core */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-64 h-64 bg-sky-500/20 rounded-full blur-[80px] animate-pulse" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[3px] border-dashed border-sky-500/30 rounded-full" 
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-[1px] border-indigo-500/40 rounded-full" 
                />
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white dark:bg-[#030712] border-2 border-sky-500 shadow-[0_0_40px_rgba(56,189,248,0.4)] flex items-center justify-center text-5xl md:text-6xl">
                  {activeLang?.language.flag || '🧠'}
                </div>
                
                {/* Floating HUD Points */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ duration: 3, delay: i * 0.8, repeat: Infinity }}
                    className="absolute w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: i % 2 === 0 ? '-10%' : '110%'
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 2. STATS OVERVIEW GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Output', value: user?.xpTotal?.toLocaleString() || '0', unit: 'XP', icon: Zap, color: 'text-sky-500', bg: 'bg-sky-500/5' },
          { label: 'Neural Streak', value: user?.streakDays || '0', unit: 'Days', icon: Activity, color: 'text-amber-500', bg: 'bg-amber-500/5' },
          { label: 'Credits Balance', value: user?.coins || '0', unit: 'Coins', icon: Crown, color: 'text-indigo-500', bg: 'bg-indigo-500/5' }
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-6 rounded-[24px] bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2.5 rounded-xl ${stat.bg}`}>
                <stat.icon size={18} className={stat.color} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. ACTIVE MATRICES SECTION */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            Active Neural Modules
          </h2>
          <Link href="/learn" className="text-[10px] font-bold uppercase tracking-widest text-sky-500 hover:text-sky-400 transition-colors">
            Access Library
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user?.enrolledLanguages?.map((el, i) => (
            <motion.div
              key={el.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex justify-between items-start">
                  <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:border-sky-500/50 transition-all duration-500">
                      {el.language.flag}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-sky-500 transition-colors">
                        {el.language.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-sky-500 dark:text-sky-400 uppercase tracking-widest">Phase 0{el.currentStage}</span>
                        <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unit 0{el.currentChapter}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-400">Module Integrity</span>
                    <span className="text-sky-500">{el.xpInLanguage} XP</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800/50">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((el.xpInLanguage % 500) / 5, 100)}%` }}
                      className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                    />
                  </div>
                </div>

                <Link href={`/learn/${el.languageCode}`} className="block">
                  <button className="w-full py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-sky-500 dark:hover:bg-sky-400 dark:hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                    Engage Module
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Add New Module Placeholder */}
          <Link
            href="/learn"
            className="group relative flex flex-col items-center justify-center min-h-[280px] rounded-[32px] border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-white/[0.02] backdrop-blur-sm transition-all hover:border-sky-500/50 hover:bg-sky-500/5"
          >
            <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all">
              <Plus className="w-6 h-6 text-slate-400 group-hover:text-sky-500 transition-colors" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-sky-500 transition-colors">
              Initialize New Module
            </span>
          </Link>
        </div>
      </section>

    </div>
  )
}