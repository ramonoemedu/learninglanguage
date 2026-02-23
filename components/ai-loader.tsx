'use client'

import { motion } from 'framer-motion'
import { Spinner } from '@heroui/react' // Assuming Spinner is also needed

// REUSABLE AI LOADING HUD
export function AILoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute inset-0 border-2 border-slate-200 dark:border-slate-800 border-t-sky-500 dark:border-t-sky-400 rounded-full" />
          <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-2 border-2 border-slate-200 dark:border-slate-800 border-b-indigo-500 dark:border-b-indigo-400 rounded-full" />
        </div>
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex flex-col items-center gap-1">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900 dark:text-white">Neural Uplink</span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">Synchronizing Matrix...</span>
        </motion.div>
      </div>
    </div>
  )
}
