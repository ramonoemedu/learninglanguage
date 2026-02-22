// app/(dashboard)/practice/audio/page.tsx
'use client'

import { Headphones, ArrowLeft, Activity, Sparkles, Volume2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AudioImmersivePage() {
  const router = useRouter()

  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full overflow-hidden rounded-[32px] bg-slate-50/50 dark:bg-[#030712]/50 p-4 sm:p-8 2xl:p-12 flex flex-col items-center justify-center">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        <div className="w-24 h-24 rounded-[32px] bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-8 animate-bounce">
          <Headphones size={48} className="text-indigo-500" />
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em]">Module Status: Integration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Audio <span className="text-indigo-500">Immersive</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">
            The Auditory Processing Matrix is being calibrated for real-world scenarios. Prepare to train your ear with high-fidelity native speaker simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/80 dark:border-slate-800/80">
            <Volume2 size={20} className="text-indigo-500 mx-auto mb-3" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">3D Spatial</span>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/80 dark:border-slate-800/80">
            <Activity size={20} className="text-sky-500 mx-auto mb-3" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Noise Sync</span>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-slate-200/80 dark:border-slate-800/80">
            <Sparkles size={20} className="text-amber-500 mx-auto mb-3" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Scene Logic</span>
          </div>
        </div>

        <button 
          onClick={() => router.back()}
          className="mt-8 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] text-sm shadow-xl transition-all hover:-translate-y-1"
        >
          Return to Arena
        </button>
      </div>
    </div>
  )
}
