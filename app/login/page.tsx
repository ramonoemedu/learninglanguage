'use client'

import { useState, useEffect } from 'react'
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { Mail, Lock, Languages, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  // Mouse tracking for the ambient glow effect
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      console.log('Attempting login for:', email)
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      let data
      const contentType = res.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await res.json()
      } else {
        const text = await res.text()
        console.error('Non-JSON response received:', text)
        throw new Error('Server returned an unexpected response format')
      }

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to login')
      }

      console.log('Login successful, redirecting...')
      router.push('/dashboard')
    } catch (err: any) {
      console.error('Login error detail:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
    } catch (err) {
      console.error('OAuth error:', err)
    }
  }

  return (
    // Matching the dark background of the new landing page
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#030712] text-white overflow-hidden px-4 font-sans">

      {/* 1. Interactive Mouse Glow Effect */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), transparent 40%)`
          }}
        />
      )}

      {/* 2. Static Ambient Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-sky-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        {/* Sleek, frosted glass card without harsh borders */}
        <Card className="border border-slate-800 bg-[#030712]/60 backdrop-blur-2xl shadow-[0_0_40px_-10px_rgba(56,189,248,0.15)] p-2 sm:p-4 rounded-3xl">
          <CardHeader className="flex flex-col items-center pb-6 pt-8">
            <div className="w-16 h-16 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/20">
              <Languages className="text-white w-8 h-8" />
            </div>
            {/* Softened typography */}
            <h1 className="text-2xl font-bold tracking-tight text-white">Welcome Back</h1>
            <p className="text-slate-400 mt-2 font-medium text-sm">Continue your path to fluency</p>
          </CardHeader>

          <CardBody className="px-6 py-4">
            <form onSubmit={handleLogin} className="flex flex-col gap-6">

              {/* --- CUSTOM EMAIL INPUT --- */}
              <div className="flex flex-col gap-2 group">
                <label
                  htmlFor="email-input"
                  className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-sky-400 transition-colors ml-1"
                >
                  Email Address
                </label>
                <Input
                  id="email-input"
                  aria-label="Email Address"
                  type="email"
                  variant="bordered"
                  placeholder="you@example.com"
                  value={email}
                  onValueChange={setEmail}
                  startContent={<Mail className="w-5 text-slate-500 transition-colors group-focus-within:text-sky-400" />}
                  required
                  fullWidth
                  autoComplete="email"
                  classNames={{
                    innerWrapper: "gap-3", // <-- Adds perfect spacing between the icon and the text
                    inputWrapper: [
                      "h-14",
                      "px-4", // Adds padding to the sides so it doesn't touch the edges
                      "rounded-xl",
                      "bg-[#050b14]/80",
                      "border-2 border-slate-800/80",
                      "transition-all duration-300 ease-out",
                      "hover:border-slate-600 hover:bg-[#050b14]",
                      // We use HeroUI's native data focus state to override the default white border!
                      "data-[focus=true]:!border-sky-500",
                      "data-[focus=true]:!shadow-[0_0_20px_rgba(56,189,248,0.15)]",
                    ].join(" "),
                    input: "text-white text-base font-medium placeholder:text-slate-600",
                  }}
                />
              </div>

              {/* --- CUSTOM PASSWORD INPUT --- */}
              <div className="flex flex-col gap-2 group">
                <label
                  htmlFor="password-input"
                  className="text-xs font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-sky-400 transition-colors ml-1"
                >
                  Password
                </label>
                <Input
                  id="password-input"
                  aria-label="Password"
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  placeholder="••••••••"
                  value={password}
                  onValueChange={setPassword}
                  startContent={<Lock className="w-5 text-slate-500 transition-colors group-focus-within:text-sky-400" />}
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeOff className="w-5 text-slate-500 transition-colors hover:text-slate-300" />
                      ) : (
                        <Eye className="w-5 text-slate-500 transition-colors hover:text-slate-300" />
                      )}
                    </button>
                  }
                  required
                  fullWidth
                  autoComplete="current-password"
                  classNames={{
                    innerWrapper: "gap-3", // <-- Adds perfect spacing between the icon and the text
                    inputWrapper: [
                      "h-14",
                      "px-4",
                      "rounded-xl",
                      "bg-[#050b14]/80",
                      "border-2 border-slate-800/80",
                      "transition-all duration-300 ease-out",
                      "hover:border-slate-600 hover:bg-[#050b14]",
                      "data-[focus=true]:!border-sky-500",
                      "data-[focus=true]:!shadow-[0_0_20px_rgba(56,189,248,0.15)]",
                    ].join(" "),
                    input: `text-white text-base font-medium placeholder:text-slate-600 ${!isVisible ? "tracking-[0.2em]" : ""}`,
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm font-medium text-rose-400 bg-rose-500/10 p-3 rounded-xl flex items-center gap-2 border border-rose-500/20"
                >
                  <span className="text-rose-500">⚠️</span> {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-sky-500 text-white font-semibold text-base rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.3)] mt-2 transition-all hover:bg-sky-400 hover:-translate-y-0.5"
                isLoading={loading}
              >
                Sign In
              </Button>
            </form>

            <div className="relative flex items-center py-8">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-4 text-xs font-medium text-slate-500 uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            <Button
              className="w-full h-12 bg-slate-900/50 text-white font-medium border border-slate-800 hover:bg-slate-800 transition-all rounded-xl"
              onClick={handleGoogleLogin}
              startContent={
                <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              }
            >
              Google
            </Button>
          </CardBody>
          <CardFooter className="flex flex-col items-center pb-8 pt-4">
            <p className="text-slate-400 font-medium text-sm">
              New learner?{' '}
              <Link href="/register" className="text-sky-400 hover:text-sky-300 transition-colors font-semibold">
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}