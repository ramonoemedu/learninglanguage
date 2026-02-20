// app/profile/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button, Card, CardBody, Avatar, Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, UserCircle, Trophy, ChevronRight } from 'lucide-react'

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
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-default-500">User not found or not logged in.</p>
        <Button onClick={() => router.push('/login')}>Go to Login</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-4xl mx-auto flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/dashboard">
            <Button variant="light" isIconOnly size="sm">
              <ChevronLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold">Profile</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
        <Card className="p-4 sm:p-6 flex flex-col items-center gap-3 sm:gap-4">
          <Avatar 
            src={user.avatarUrl} 
            fallback={<UserCircle size={48} />} 
            className="w-20 h-20 sm:w-24 sm:h-24 text-primary text-3xl sm:text-4xl"
            isBordered
            color="primary"
          />
          <h2 className="text-xl sm:text-2xl font-bold">{user.name}</h2>
          <p className="text-sm text-default-500">{user.email}</p>
          <div className="flex gap-4 sm:gap-8 mt-2 sm:mt-4">
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold">{user.xpTotal}</span>
              <span className="text-xs sm:text-sm text-default-500">Total XP</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold">{user.coins}</span>
              <span className="text-xs sm:text-sm text-default-500">Coins</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold">{user.streakDays}</span>
              <span className="text-xs sm:text-sm text-default-500">Streak Days</span>
            </div>
          </div>
        </Card>

        <Card isPressable onClick={() => router.push('/profile/achievements')} className="p-3 sm:p-4">
          <CardBody className="flex justify-between items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <Trophy size={20} className="text-warning" />
              <span className="text-base sm:text-lg font-medium">Achievements</span>
            </div>
            <ChevronRight size={20} className="text-default-400" />
          </CardBody>
        </Card>

        {/* Other profile settings/links here */}
        <Button color="danger" variant="ghost" onClick={() => { /* Logout logic */ }} className="w-full">
          Log Out
        </Button>
      </main>
    </div>
  )
}
