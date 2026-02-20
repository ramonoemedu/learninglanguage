'use client'

import React, { useEffect, useState } from 'react'
import { Sidebar } from "@/components/Layouts/sidebar"
import { Header } from "@/components/Layouts/header"
import { useUserStore } from '@/lib/stores/authStore'
import { motion, AnimatePresence } from 'framer-motion'
import { SidebarProvider } from '@/components/Layouts/sidebar/sidebar-context'

export function AmbientBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-1000">
      
      {/* 1. Subtle Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-10%)',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />

      {/* 2. Neural Network Points (Subtle dots) */}
      <div 
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.2) 1px, transparent 0)`,
          backgroundSize: '2rem 2rem',
        }}
      />

      {/* 3. Cinematic Breathing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-[120px] animate-orb-breathe" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[120px] animate-orb-breathe-reverse" />
      
      {/* 4. Interactive Mouse Glow (Very faint, elegant) */}
      <div
        className="absolute inset-0 z-10 opacity-40"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.03), transparent 60%)`
        }}
      />

      {/* 5. Tiny Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/30 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, "-20px", "0px"],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

    </div>
  );
}

// 2. MAIN LAYOUT
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, setUser } = useUserStore()
  const [loading, setLoading] = useState(!user)

  useEffect(() => {
    const fetchUser = async () => {
      if (user) return
      try {
        const res = await fetch('/api/users/me')
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        }
      } catch (err) {
        console.error('Failed to load user in layout', err)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [user, setUser])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-1000">
        <AmbientBackground />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative w-20 h-20">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }} 
              className="absolute inset-0 border-2 border-slate-200 dark:border-slate-800 border-t-sky-500 dark:border-t-sky-400 rounded-full" 
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }} 
              className="absolute inset-2 border-2 border-slate-200 dark:border-slate-800 border-b-indigo-500 dark:border-b-indigo-400 rounded-full" 
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900 dark:text-white">System Initialization</span>
            <span className="text-xs font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">Loading Neural Matrix...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="relative flex min-h-screen bg-transparent text-slate-900 dark:text-white selection:bg-sky-500/30 selection:text-sky-600 dark:selection:text-sky-200 overflow-hidden">
        <AmbientBackground />

        <Sidebar />

        <div className="relative z-10 flex flex-col w-full min-w-0">
          <Header />

          <main className="isolate mx-auto w-full max-w-screen-2xl flex-1 p-4 md:p-6 2xl:p-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}