// app/admin/layout.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Spinner } from '@heroui/react'
import {
  ShieldAlert,
  Activity,
  Users,
  Languages,
  BookOpen,
  Database,
  Cpu,
  LineChart,
  LogOut
} from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)

  // Turn off the loading state whenever the route successfully changes
  useEffect(() => {
    setIsNavigating(false)
  }, [pathname])

  const navLinks = [
    { href: '/admin', label: 'Overview', icon: <Activity size={16} /> },
    { href: '/admin/users', label: 'Users', icon: <Users size={16} /> },
    { href: '/admin/content/languages', label: 'Languages', icon: <Languages size={16} /> },
    { href: '/admin/content/chapters', label: 'Chapters', icon: <BookOpen size={16} /> },
    { href: '/admin/content/vocabulary', label: 'Lexicon', icon: <Database size={16} /> },
    { href: '/admin/content/lessons', label: 'Modules', icon: <Cpu size={16} /> },
    { href: '/admin/analytics', label: 'Telemetry', icon: <LineChart size={16} /> },
  ]

  const handleNavClick = (href: string) => {
    // Only trigger loading state if we are actually navigating to a new page
    const isCurrentPage = pathname === href || (href !== '/admin' && pathname.startsWith(href))
    if (!isCurrentPage) {
      setIsNavigating(true)
    }
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white font-sans transition-colors duration-500 flex flex-col md:flex-row overflow-hidden">

      {/* --- Ambient AI Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-rose-500/5 dark:bg-rose-500/10 blur-[120px] z-0 pointer-events-none animate-pulse" />
      <div className="fixed bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-sky-500/5 dark:bg-sky-500/10 blur-[120px] z-0 pointer-events-none animate-pulse delay-700" />

      {/* --- Glassmorphic Sidebar (Left Menu) --- */}
      <aside className="relative z-50 w-full md:w-64 h-auto md:h-screen flex flex-col bg-white/70 dark:bg-[#050b14]/80 backdrop-blur-2xl border-b md:border-b-0 md:border-r border-slate-200/80 dark:border-slate-800/80 shadow-xl flex-shrink-0">

        {/* Branding Area */}
        <div className="h-16 md:h-24 flex items-center px-6 border-b border-slate-200/50 dark:border-slate-800/50">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center justify-center text-rose-500 dark:text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all duration-300 ease-out">
              <ShieldAlert size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">ROOT_ACCESS</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">System Override</span>
            </div>
          </Link>
        </div>

        {/* HUD Navigation List */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto hidden-scrollbar">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 px-2">
            Command Matrix
          </span>

          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ease-out overflow-hidden group ${isActive
                  ? 'bg-sky-500/10 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.05)]'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {/* Active Sidebar Indicator Glow */}
                {isActive && (
                  <div className="absolute left-0 top-0 w-1 h-full bg-sky-500 dark:bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,1)] rounded-r-full" />
                )}

                <span className={`transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]' : 'group-hover:scale-110'}`}>
                  {link.icon}
                </span>
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Exit Area */}
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-800/50">
          <Link
            href="/dashboard"
            className="group flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-900/5 dark:bg-white/5 hover:bg-rose-500/10 border border-slate-200/80 dark:border-slate-800/80 hover:border-rose-500/30 rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-sm"
          >
            <LogOut size={16} className="text-slate-500 group-hover:text-rose-500 transition-colors" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 group-hover:text-rose-500">Exit Sys</span>
          </Link>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="relative z-10 flex-1 h-screen overflow-y-auto">
        <div className="w-full max-w-[90rem] mx-auto p-4 sm:p-6 lg:p-10 h-full">

          {/* Conditional Rendering: Show Spinner during navigation delay, else show Content */}

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
            {children}
          </div>

        </div>
      </main>

    </div>
  )
}