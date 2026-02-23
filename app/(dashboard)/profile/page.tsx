// app/profile/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button, Avatar, Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, UserCircle, Trophy, ChevronRight, Zap, Coins, Flame, LogOut } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  xpTotal: number
  coins: number
  streakDays: number
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/users/me')
        const data = await res.json()
        setUser(data)
      } catch (err) {
        console.error('Failed to load user:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
    return (
      <div className="relative overflow-hidden min-h-screen bg-slate-50 dark:bg-[#030712] flex items-center justify-center">
        {/* Ambient Grid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <Spinner size="lg" color="primary" className="relative z-10" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="relative overflow-hidden min-h-screen bg-slate-50 dark:bg-[#030712] flex flex-col items-center justify-center gap-6">
        <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <p className="text-slate-500 dark:text-slate-400 relative z-10 text-sm font-medium">System anomaly detected: User record not found.</p>
        <Button
          onClick={() => router.push('/login')}
          className="relative z-10 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-white shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Initialize Login
        </Button>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-50 dark:bg-[#030712] p-4 sm:p-6 text-slate-900 dark:text-white">
      {/* --- Ambient AI Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px] z-0 pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] z-0 pointer-events-none animate-pulse delay-1000" />

      {/* --- Header --- */}
      <header className="relative z-10 max-w-4xl mx-auto flex items-center justify-between mb-8 sm:mb-12 pt-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <button className="p-2 rounded-xl bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] group">
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Profile Data</h1>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">

        {/* User Stats Card */}
        <div className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] rounded-2xl p-6 sm:p-10 flex flex-col items-center gap-4 transition-all duration-300 ease-out hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">

          <div className="relative flex items-center justify-center group mb-4">
            {/* 1. Ambient Holographic Aura */}
            <div className="absolute inset-0 bg-sky-500/20 dark:bg-sky-400/20 blur-xl rounded-full group-hover:bg-sky-500/40 dark:group-hover:bg-sky-400/30 group-hover:blur-2xl transition-all duration-700 ease-out" />

            {/* 2. Outer HUD Tracking Ring (Rotates slowly) */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-sky-500/20 dark:border-sky-400/20 animate-[spin_12s_linear_infinite] group-hover:border-sky-500/50 dark:group-hover:border-sky-400/50 transition-colors duration-500" />

            {/* 3. Inner Containment Ring */}
            <div className="absolute -inset-1 rounded-full border border-sky-500/10 dark:border-sky-400/10 shadow-[inset_0_0_20px_rgba(56,189,248,0.1)]" />

            {/* 4. Core Avatar Image */}
            <Avatar
              src={user.avatarUrl}
              fallback={<UserCircle size={48} strokeWidth={1.5} />}
              className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 bg-white/80 dark:bg-[#050b14]/80 backdrop-blur-xl text-sky-500 dark:text-sky-400 shadow-md dark:shadow-[0_0_25px_rgba(56,189,248,0.2)] ring-1 ring-white/50 dark:ring-slate-700/50 transition-transform duration-500 group-hover:scale-105"
            />

            {/* 5. Online/Sync Status Node (Optional: Adds to the telemetry feel) */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 rounded-full bg-emerald-400 border-[3px] border-white dark:border-[#050b14] shadow-[0_0_10px_rgba(52,211,153,0.8)] z-20" />
          </div>

          <div className="text-center mt-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{user.name}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{user.email}</p>
          </div>

          <div className="w-full h-px bg-slate-200/50 dark:bg-slate-800/50 my-4" />

          {/* HUD Stats Grid */}
          <div className="grid grid-cols-3 w-full gap-4 sm:gap-8 px-2 sm:px-8">
            <div className="flex flex-col items-center group">
              <div className="flex items-center gap-2 mb-1 text-sky-500 dark:text-sky-400">
                <Zap size={18} className="group-hover:scale-110 transition-transform duration-300 ease-out" />
                <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{user.xpTotal}</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Total XP</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="flex items-center gap-2 mb-1 text-amber-500 dark:text-amber-400">
                <Coins size={18} className="group-hover:scale-110 transition-transform duration-300 ease-out" />
                <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{user.coins}</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Credits</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="flex items-center gap-2 mb-1 text-orange-500 dark:text-orange-400">
                <Flame size={18} className="group-hover:scale-110 transition-transform duration-300 ease-out" />
                <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{user.streakDays}</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Streak</span>
            </div>
          </div>
        </div>

        {/* Action List */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push('/profile/achievements')}
            className="group w-full bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] rounded-xl p-4 sm:p-5 flex justify-between items-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-sky-500/30 dark:hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-sky-500/10 dark:bg-sky-400/10 text-sky-500 dark:text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300 ease-out">
                <Trophy size={20} />
              </div>
              <span className="text-sm font-medium">Achievements & Logs</span>
            </div>
            <ChevronRight size={20} className="text-slate-400 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300" />
          </button>
        </div>

        {/* Danger Zone */}
        <div className="mt-8">
          <button
            onClick={() => { /* Logout logic */ }}
            className="group w-full bg-red-500/5 dark:bg-red-500/10 hover:bg-red-500/10 dark:hover:bg-red-500/20 backdrop-blur-xl border border-red-200/50 dark:border-red-500/20 rounded-xl p-4 flex justify-center items-center gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5 text-red-600 dark:text-red-400 font-medium text-sm"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Terminate Session</span>
          </button>
        </div>

      </main>
    </div>
  )
}