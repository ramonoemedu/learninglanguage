'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Globe, ArrowRight, Star, Trophy, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Language {
  id: string
  code: string
  name: string
  flag: string
  _count?: {
    stages: number
  }
}

export default function CoursesPage() {
  const [languages, setLanguages] = useState<Language[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch('/api/languages')
        if (res.ok) {
          const data = await res.json()
          setLanguages(data)
        }
      } catch (err) {
        console.error('Failed to load languages', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLanguages()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-2 border-sky-500/20 border-t-sky-500 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-12 pb-20 relative z-10">
      <header className="space-y-3 px-2">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl flex items-center justify-center shadow-sm">
            <Globe className="text-sky-500 dark:text-sky-400 w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Neural <span className="text-sky-500 dark:text-sky-400">Modules</span>
            </h1>
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.25em] flex items-center gap-2">
              <Sparkles size={12} className="text-sky-500 animate-pulse" />
              Select a language matrix to begin initialization
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <Link 
              href={`/learn/${lang.code}`}
              className="group block relative bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-[32px] p-8 transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:-translate-y-1 active:scale-[0.98]"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {lang.flag}
                </div>
                <div className="flex gap-1.5 p-2 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-slate-800/50">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} size={12} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {lang.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
                    <div className="flex items-center gap-2">
                      <Trophy size={14} className="text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Mastery Course</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-slate-400" />
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Live Sync</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Architecture</span>
                    <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      {lang._count?.stages || 0} Learning Phases
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-800/50 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-400 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Holographic Glow Effect */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Link>
          </motion.div>
        ))}

        {languages.length === 0 && (
          <div className="col-span-full py-24 text-center bg-white/30 dark:bg-white/[0.02] backdrop-blur-xl rounded-[40px] border border-dashed border-slate-300 dark:border-slate-800">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-slate-300 dark:text-slate-700" />
            </div>
            <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">No Languages Decrypted</p>
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] mt-3">Check back later for new neural modules</p>
          </div>
        )}
      </div>
    </div>
  )
}
