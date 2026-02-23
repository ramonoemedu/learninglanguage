// app/system-specs/page.tsx
'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import {
  BrainCircuit, Radar, Mic2, Flame, Zap, Activity,
  ShieldCheck, ChevronRight, ChevronLeft, Cpu
} from 'lucide-react'
import { ThemeToggleSwitch } from '@/components/Layouts/header/theme-toggle'

export default function SystemSpecsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }

  // Fully Light/Dark compatible base classes for the Bento Cards
  const cardBase = "group relative overflow-hidden bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1 shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-500/30 dark:hover:border-sky-500/50"
  const hudText = "text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400"

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden font-sans transition-colors duration-500 selection:bg-sky-500/30">

      {/* --- Ambient AI Schematic Background --- */}
      {/* Light Mode Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:opacity-0 transition-opacity duration-500" />
      {/* Dark Mode Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-0 dark:opacity-100 transition-opacity duration-500" />

      {/* Breathing Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45rem] h-[45rem] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* --- Floating Navigation Bar --- */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex justify-between items-center"
      >
        <Link href="/" className="group flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-[#050b14] shadow-sm hover:shadow-md">
          <ChevronLeft size={16} className="text-slate-500 dark:text-slate-400 group-hover:-translate-x-1 group-hover:text-sky-500 transition-all duration-300" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
            Return to Hub
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggleSwitch />
        </div>
      </motion.nav>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 flex flex-col items-center">

        {/* --- Header --- */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 mb-6 shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <Cpu size={14} className="animate-pulse" />
            <span className={hudText}>Core Engine Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white drop-shadow-sm">
            System Architecture
          </h1>
          <p className="max-w-2xl text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
            Discover the neural logic and deep telemetry running under the hood. Our platform doesn't just teach—it continuously analyzes and adapts to your exact cognitive footprint.
          </p>
        </motion.header>

        {/* --- Bento Box Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20"
        >
          {/* Card 1: Neural Curriculum Engine (Large: 2x2) */}
          <motion.div variants={itemVariants} className={`${cardBase} md:col-span-2 md:row-span-2 flex flex-col justify-between`}>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/5 dark:bg-sky-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 ease-out" />

            <div className="relative z-10 mb-12">
              <div className="flex items-center gap-3 mb-6 text-sky-500 dark:text-sky-400 group-hover:scale-105 transition-transform duration-300 origin-left">
                <BrainCircuit size={28} />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Neural Curriculum Engine</h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                A dynamic matrix that maps your comprehension in real-time. Content difficulty and review cycles automatically scale based on your retention rates, ensuring zero wasted time.
              </p>
            </div>

            {/* Micro-Visual: Network Node Graph */}
            <div className="relative z-10 w-full h-40 bg-slate-100/50 dark:bg-[#020408]/50 rounded-xl border border-slate-200/80 dark:border-slate-800/50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-700 shadow-[0_0_10px_rgba(15,23,42,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                <div className="w-16 h-px bg-slate-300 dark:bg-slate-700" />
                <div className="w-4 h-4 rounded-full bg-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.6)] animate-pulse" />
                <div className="w-16 h-px bg-gradient-to-r from-sky-500 to-emerald-500" />
                <div className="w-5 h-5 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
              </div>

              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className={hudText}>Active Routing</span>
                <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-500">Node_74 - Node_92</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Deep Telemetry (Medium: 1x1) */}
          <motion.div variants={itemVariants} className={`${cardBase} md:col-span-1 md:row-span-1`}>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-indigo-500 dark:text-indigo-400 group-hover:-translate-y-1 transition-transform duration-300">
                <Radar size={20} />
                <span className={hudText}>System Diagnostics</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Deep Telemetry</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Granular tracking of your lexicon, syntax comprehension, and vocal accuracy visualised in real-time.
              </p>

              {/* Micro-Visual: Mini Stats */}
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Lexicon Map', val: '87%' },
                  { label: 'Syntax Logic', val: '92%' }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/50">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{stat.label}</span>
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Acoustic Analysis (Medium: 1x1) */}
          <motion.div variants={itemVariants} className={`${cardBase} md:col-span-1 md:row-span-1`}>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4 text-rose-500 dark:text-rose-400 group-hover:-translate-y-1 transition-transform duration-300">
                <Mic2 size={20} />
                <span className={hudText}>Vocal Processing</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Acoustic Analysis</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Micro-level IPA syntax comparison matches your vocal wavelengths against native speaker datasets.
              </p>

              {/* Micro-Visual: Audio Waves */}
              <div className="mt-auto flex items-end justify-center gap-1.5 h-12 overflow-hidden">
                {[40, 70, 45, 90, 60, 100, 50, 80, 30].map((height, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-rose-400/40 dark:bg-rose-400/30 rounded-t-sm group-hover:bg-rose-500 dark:group-hover:bg-rose-400 transition-all duration-300 ease-out"
                    style={{ height: `${height}%`, transitionDelay: `${i * 30}ms` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Dopamine Reward Loops (Wide: 3x1) */}
          <motion.div variants={itemVariants} className={`${cardBase} md:col-span-3 flex flex-col md:flex-row items-center gap-8`}>
            <div className="absolute bottom-0 right-0 w-[800px] h-32 bg-gradient-to-t from-amber-500/5 dark:from-amber-400/10 to-transparent pointer-events-none" />

            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-4 text-amber-500 dark:text-amber-400 group-hover:scale-105 transition-transform duration-300 origin-left">
                <Flame size={24} />
                <span className={hudText}>Behavioral Systems</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">Dopamine Reward Loops</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Learning requires persistence. Our platform uses precisely timed gamification—yielding XP, Cryptographic Credits, and Streak Multipliers—to keep your motivation matrix fully engaged.
              </p>
            </div>

            {/* Micro-Visual: Badges */}
            <div className="flex items-center gap-4 relative z-10 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 hidden-scrollbar">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-100/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/50 min-w-[100px] hover:border-amber-500/30 transition-colors">
                <Zap size={24} className="text-sky-500 dark:text-sky-400 mb-2" />
                <span className="text-lg font-black text-slate-900 dark:text-white">+250</span>
                <span className={hudText}>Exp Pts</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-100/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/50 min-w-[100px] hover:border-amber-500/30 transition-colors">
                <Flame size={24} className="text-amber-500 dark:text-amber-400 mb-2" />
                <span className="text-lg font-black text-slate-900 dark:text-white">14 Day</span>
                <span className={hudText}>Streak</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-100/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/50 min-w-[100px] hover:border-amber-500/30 transition-colors">
                <ShieldCheck size={24} className="text-emerald-500 dark:text-emerald-400 mb-2" />
                <span className="text-lg font-black text-slate-900 dark:text-white">Lvl 8</span>
                <span className={hudText}>Clearance</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Footer Conversion CTA --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-20 w-full max-w-lg mx-auto flex flex-col items-center text-center gap-6"
        >
          <div className="w-px h-16 bg-gradient-to-b from-sky-500/0 via-sky-500/30 dark:via-sky-500/50 to-sky-500/0 mb-2" />

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Ready to integrate?
          </h2>

          <Link
            href="/register"
            className="group relative w-full flex items-center justify-between p-1.5 bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] hover:border-sky-500/50"
          >
            {/* Inner Neon Button */}
            <div className="flex-1 flex items-center justify-center h-14 bg-sky-500 rounded-xl shadow-[0_4px_20px_rgba(56,189,248,0.4)] group-hover:bg-sky-400 transition-colors duration-300">
              <span className="text-sm font-bold text-white tracking-wide">
                System Understood. Initialize Identity.
              </span>
            </div>

            {/* Right Arrow Accents */}
            <div className="px-4 text-slate-500 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 flex items-center">
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              <ChevronRight size={20} className="-ml-3 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all delay-75" />
            </div>
          </Link>
        </motion.div>

      </main>
    </div>
  )
}