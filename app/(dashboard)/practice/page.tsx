'use client'

import { MessageSquareText, Mic2, Headphones, ArrowLeft, Sparkles, Target, Zap, Activity, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function PracticeHubPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full overflow-hidden rounded-[32px] bg-slate-50/50 dark:bg-[#030712]/50 p-4 sm:p-8 2xl:p-12">
      {/* 1. AI BACKGROUND & AMBIENT EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Perspective Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Breathing Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] -left-[10%] w-[500px] h-[500px] bg-sky-500 blur-[120px] rounded-full opacity-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] -right-[10%] w-[600px] h-[600px] bg-indigo-500 blur-[120px] rounded-full opacity-10" 
        />
      </div>

      <div className="relative z-10 space-y-12">
        {/* 2. HUD HEADER */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => router.back()} 
              className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-sky-500/10"
            >
              <ArrowLeft size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-sky-500 transition-colors" />
            </button>
            
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 flex items-center gap-2">
                  <Activity size={12} className="text-sky-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em]">Training Arena Active</span>
                </div>
              </div>
              <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                Practice <span className="text-sky-500 dark:text-sky-400">Arena</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-right">
              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Neural Readiness</span>
              <span className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Optimal</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Zap size={20} className="text-emerald-500 fill-emerald-500" />
            </div>
          </div>
        </header>

        {/* 3. PRACTICE MODULES GRID */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          
          {/* AI TUTOR CARD */}
          <motion.button
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/practice/chat')}
            className="group relative flex flex-col items-center p-10 text-center transition-all duration-500 rounded-[40px] bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-sky-500/10 hover:border-sky-500/40"
          >
            <div className="absolute inset-0 rounded-[40px] bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            <div className="relative z-10 w-24 h-24 rounded-[28px] bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-sky-500 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-500">
              <MessageSquareText size={44} className="text-sky-500 group-hover:text-white transition-colors" />
            </div>
            <div className="relative z-10 space-y-3">
              <span className="text-[11px] font-black text-sky-500 dark:text-sky-400 uppercase tracking-[0.3em]">Communication Sync</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">AI Tutor Chat</h2>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-[240px]">
                Engage in high-fidelity dialogue with your personal linguistic AI.
              </p>
            </div>
            <div className="mt-8 relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-800 group-hover:border-sky-500/30 transition-all">
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Engage Link</span>
              <ChevronRight size={12} className="text-sky-500" />
            </div>
          </motion.button>

          {/* SPEECH LAB */}
          <motion.button
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/practice/speech')}
            className="group relative flex flex-col items-center p-10 text-center transition-all duration-500 rounded-[40px] bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-sky-500/10 hover:border-sky-500/40"
          >
            <div className="absolute inset-0 rounded-[40px] bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            <div className="relative z-10 w-24 h-24 rounded-[28px] bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-sky-500 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all duration-500">
              <Mic2 size={44} className="text-sky-500 group-hover:text-white transition-colors" />
            </div>
            <div className="relative z-10 space-y-3">
              <span className="text-[11px] font-black text-sky-500 dark:text-sky-400 uppercase tracking-[0.3em]">Phonetic Calibration</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Speech Lab</h2>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-[240px]">
                Improve phonetic output and fluency with real-time feedback.
              </p>
            </div>
            <div className="mt-8 relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-800 group-hover:border-sky-500/30 transition-all">
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Engage Link</span>
              <ChevronRight size={12} className="text-sky-500" />
            </div>
          </motion.button>

          {/* AUDIO IMMERSIVE */}
          <motion.button
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/practice/audio')}
            className="group relative flex flex-col items-center p-10 text-center transition-all duration-500 rounded-[40px] bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-sky-500/10 hover:border-sky-500/40"
          >
            <div className="absolute inset-0 rounded-[40px] bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            <div className="relative z-10 w-24 h-24 rounded-[28px] bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-500">
              <Headphones size={44} className="text-indigo-500 group-hover:text-white transition-colors" />
            </div>
            <div className="relative z-10 space-y-3">
              <span className="text-[11px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.3em]">Auditory Processing</span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight text-balance">Audio Immersive</h2>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-[240px]">
                Train your auditory matrix to decode native speaker scenarios.
              </p>
            </div>
            <div className="mt-8 relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-800 group-hover:border-indigo-500/30 transition-all">
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Engage Link</span>
              <ChevronRight size={12} className="text-indigo-500" />
            </div>
          </motion.button>

        </main>

        {/* 4. MISSION FOOTER (HUD) */}
        <footer className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">Neural Link Status: SECURE</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Drills</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">03 / 03</span>
            </div>
            <Target size={24} className="text-sky-500" />
          </div>
        </footer>
      </div>
    </div>
  )
}
