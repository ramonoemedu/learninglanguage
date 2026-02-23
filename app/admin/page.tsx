// app/admin/page.tsx
'use client'

import { Users, Layers, Cpu, TrendingUp, Activity } from 'lucide-react'

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">

      {/* --- HUD Page Header --- */}
      <header className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sky-500/10 dark:bg-sky-400/10 rounded-lg border border-sky-500/20 text-sky-500 dark:text-sky-400">
            <Activity size={20} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">System Overview</h1>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400">Platform Performance & Telemetry</p>
          <div className="flex-1 h-px bg-gradient-to-r from-sky-500/20 to-transparent dark:from-sky-400/20" />
        </div>
      </header>

      {/* --- Metrics Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

        {/* Metric 1: Total Users */}
        <div className="group relative overflow-hidden bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-500/30">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky-500/5 dark:bg-sky-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

          <div className="relative z-10 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              <Users size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Active Identities</span>
            </div>

            <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">1,240</span>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                <TrendingUp size={12} />
                +12%
              </div>
              <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest">vs prev cycle</span>
            </div>
          </div>
        </div>

        {/* Metric 2: Total Lessons */}
        <div className="group relative overflow-hidden bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:border-sky-500/30">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

          <div className="relative z-10 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
              <Layers size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Modules Indexed</span>
            </div>

            <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">342</span>

            <div className="mt-6 flex items-center gap-3">
              <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                8 Core Languages
              </span>
            </div>
          </div>
        </div>

        {/* Metric 3: AI Cost (Accent Card) */}
        <div className="group relative overflow-hidden bg-slate-900 dark:bg-[#020408]/90 backdrop-blur-2xl border border-slate-700/80 dark:border-sky-500/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-sky-500/20 dark:hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] hover:border-sky-400/50">
          {/* Internal Neon Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl group-hover:bg-sky-400/30 transition-colors duration-500" />

          <div className="relative z-10 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 text-sky-400 group-hover:text-sky-300 transition-colors">
              <Cpu size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300 dark:text-sky-400/80">AI Compute Compute</span>
            </div>

            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">$14.20</span>

            <div className="mt-6 flex flex-col w-full gap-2">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>Budget Allocation</span>
                <span className="text-sky-400">4.5%</span>
              </div>
              {/* Micro Progress Bar */}
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.8)] rounded-full w-[4.5%]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}