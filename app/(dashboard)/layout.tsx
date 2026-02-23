'use client'

import React, { useEffect, useState } from 'react'
import { Sidebar } from "@/components/Layouts/sidebar"
import { Header } from "@/components/Layouts/header"
import { useUserStore } from '@/lib/stores/authStore'
import { motion, AnimatePresence } from 'framer-motion'
import { SidebarProvider } from '@/components/Layouts/sidebar/sidebar-context'
import { AmbientBackground } from '@/components/ambient-background' // Import AmbientBackground

// Removed AmbientBackground component definition (now in its own file)

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
        <AmbientBackground /> {/* Re-added usage */}
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
        <AmbientBackground /> {/* Re-added usage */}

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