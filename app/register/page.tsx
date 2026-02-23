// app/register/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Languages, Eye, EyeOff, AlertTriangle, ChevronLeft } from 'lucide-react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to register')
      }

      router.push('/onboarding')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  // Master class for the native input elements
  const inputBase = "w-full bg-white/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 focus:border-sky-500 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] outline-none transition-all duration-300 rounded-xl h-14 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden px-4 font-sans transition-colors duration-500">

      {/* --- Floating Escape Hatch (Fixed Positioning) --- */}
      <Link
        href="/"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-50 group flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-[#050b14] shadow-sm hover:shadow-md hover:-translate-x-1"
      >
        <ChevronLeft size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-sky-500 transition-colors duration-300" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
          Return to Hub
        </span>
      </Link>
      {/* Ambient Mouse Glow */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 mix-blend-screen dark:mix-blend-lighten"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.06), transparent 40%)`
          }}
        />
      )}

      {/* Ambient Grid & Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-sky-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md z-10 my-10"
      >
        <div className="bg-white/70 dark:bg-[#030712]/60 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl dark:shadow-[0_0_40px_-10px_rgba(56,189,248,0.15)] p-6 sm:p-8 rounded-[2rem] transition-all duration-300">

          {/* Header */}
          <header className="flex flex-col items-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/30 dark:shadow-sky-500/20 transform hover:scale-105 transition-transform duration-300">
              <Languages className="text-white w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Initialize Identity</h1>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 text-center">System Registration Protocol</p>
          </header>

          <main>
            <form onSubmit={handleRegister} className="flex flex-col gap-5">

              {/* --- Custom Name Input --- */}
              <div className="flex flex-col gap-1.5 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-sky-400 transition-colors ml-1">
                  Designation / Alias
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-sky-400 transition-colors pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Enter designation"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${inputBase} pl-11 pr-4`}
                  />
                </div>
              </div>

              {/* --- Custom Email Input --- */}
              <div className="flex flex-col gap-1.5 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-sky-400 transition-colors ml-1">
                  Comm Link (Email)
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-sky-400 transition-colors pointer-events-none" />
                  <input
                    type="email"
                    placeholder="sys.user@domain.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputBase} pl-11 pr-4`}
                  />
                </div>
              </div>

              {/* --- Custom Password Input --- */}
              <div className="flex flex-col gap-1.5 group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-sky-400 transition-colors ml-1">
                  Security Passkey
                </label>
                <div className="relative flex flex-col gap-1.5">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-sky-400 transition-colors pointer-events-none" />
                  <input
                    type={isVisible ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${inputBase} pl-11 pr-12 ${!isVisible ? "tracking-[0.2em]" : ""}`}
                  />
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {isVisible ? (
                      <EyeOff className="w-4 h-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" />
                    ) : (
                      <Eye className="w-4 h-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" />
                    )}
                  </button>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1 mt-0.5">
                  Min. 8 cryptographic characters
                </span>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-xs font-medium text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 p-3 rounded-xl flex items-start gap-2 border border-rose-200 dark:border-rose-500/20 mt-1"
                >
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{error}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-sky-500 text-white font-bold tracking-wide text-sm rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.3)] mt-2 transition-all duration-300 ease-out hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                isLoading={loading}
              >
                Execute Registration
              </Button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-6 mt-2">
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              <span className="flex-shrink mx-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Or Bridge With</span>
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            </div>

            {/* Google Auth Button */}
            <Button
              className="w-full h-12 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-white font-medium border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 ease-out rounded-xl shadow-sm"
              onClick={handleGoogleLogin}
              startContent={
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              }
            >
              Google Workspace
            </Button>
          </main>

          <footer className="flex flex-col items-center pt-8">
            <p className="text-slate-500 dark:text-slate-400 font-medium text-xs">
              Profile already established?{' '}
              <Link href="/login" className="text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors font-bold underline decoration-sky-500/30 underline-offset-4">
                Authenticate
              </Link>
            </p>
          </footer>
        </div>
      </motion.div>
    </div>
  )
}