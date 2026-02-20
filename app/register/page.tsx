'use client'

import { useState } from 'react'
import { Button, Input, Card, CardHeader, CardBody, CardFooter, Divider } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { Mail, Lock, User, Languages } from 'lucide-react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

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

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <Card className="border-none bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-2xl">
          <CardHeader className="flex flex-col items-center pt-8 pb-4">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
              <Languages className="text-white w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
            <p className="text-default-500 mt-1">Start your language learning adventure</p>
          </CardHeader>
          
          <CardBody className="px-8 py-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <Input
                type="text"
                variant="bordered"
                placeholder="Name"
                value={name}
                onValueChange={setName}
                startContent={<User className="text-default-400 w-4" />}
                required
                classNames={{
                  input: "text-sm",
                  innerWrapper: "h-full",
                  inputWrapper: "h-12 border-default-200 hover:border-primary-300 group-data-[focus=true]:border-primary-500 group-data-[hover=true]:border-primary-300",
                }}
              />
              <Input
                type="email"
                variant="bordered"
                placeholder="Email"
                value={email}
                onValueChange={setEmail}
                startContent={<Mail className="text-default-400 w-4" />}
                required
                classNames={{
                  input: "text-sm",
                  innerWrapper: "h-full",
                  inputWrapper: "h-12 border-default-200 hover:border-primary-300 group-data-[focus=true]:border-primary-500 group-data-[hover=true]:border-primary-300",
                }}
              />
              <Input
                type="password"
                variant="bordered"
                placeholder="Password"
                value={password}
                onValueChange={setPassword}
                startContent={<Lock className="text-default-400 w-4" />}
                description="At least 8 characters"
                required
                classNames={{
                  input: "text-sm",
                  innerWrapper: "h-full",
                  inputWrapper: "h-12 border-default-200 hover:border-primary-300 group-data-[focus=true]:border-primary-500 group-data-[hover=true]:border-primary-300",
                  description: "text-[10px]"
                }}
              />
              
              {error && (
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs font-medium text-danger bg-danger-50 p-2 rounded-lg"
                >
                  {error}
                </motion.p>
              )}
              
              <Button
                type="submit"
                color="primary"
                className="w-full h-12 font-bold text-lg shadow-lg shadow-primary/20 mt-2"
                isLoading={loading}
              >
                Join Now
              </Button>
            </form>

            <div className="relative flex items-center py-6">
              <div className="flex-grow border-t border-default-200"></div>
              <span className="flex-shrink mx-4 text-xs font-medium text-default-400 uppercase tracking-wider">or sign up with</span>
              <div className="flex-grow border-t border-default-200"></div>
            </div>

            <Button
              variant="bordered"
              className="w-full h-11 font-medium border-default-200 hover:bg-default-100 transition-colors"
              onClick={handleGoogleLogin}
              startContent={
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              }
            >
              Google
            </Button>
          </CardBody>
          
          <CardFooter className="flex flex-col items-center pb-8 pt-2">
            <p className="text-sm text-default-500">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-bold hover:underline underline-offset-4">
                Log In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
