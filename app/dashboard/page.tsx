// app/dashboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button, Card, CardHeader, CardBody, Progress, Spinner, Avatar } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MessageSquareText, Trophy, User, BarChart } from 'lucide-react' // Added BarChart icon

interface EnrolledLanguage {
  id: string
  languageCode: string
  currentStage: number
  currentChapter: number
  xpInLanguage: number
  language: {
    name: string
    flag: string
  }
}

interface User {
  id: string
  name: string
  email: string
  xpTotal: number
  coins: number
  streakDays: number
  avatarUrl?: string // Added avatarUrl
  enrolledLanguages: EnrolledLanguage[]
}

export default function DashboardPage() {
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
        console.error('Failed to load user', err)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 mb-6 sm:mb-10 text-center sm:text-left">
        <div className="flex flex-col mb-4 sm:mb-0">
          <h1 className="text-xl sm:text-2xl font-bold text-primary">LearningLanguage</h1>
          <p className="text-sm text-default-500">Welcome back, {user?.name}</p>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-lg sm:text-xl">🔥</span>
            <span className="font-bold text-base sm:text-lg">{user?.streakDays || 0}</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-lg sm:text-xl">💰</span>
            <span className="font-bold text-base sm:text-lg">{user?.coins || 0}</span>
          </div>
          <Button color="danger" variant="ghost" size="sm" onClick={handleLogout}>Log Out</Button>
          <Link href="/profile">
            <Avatar 
              src={user?.avatarUrl} 
              fallback={<User size={20} />} 
              size="md" 
              className="cursor-pointer" 
            />
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-xl sm:text-2xl font-bold">Your Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {user?.enrolledLanguages.map((el) => (
                <Card key={el.id} className="p-3 sm:p-4 border-2 border-transparent hover:border-primary-200 transition-all cursor-pointer" shadow="sm">
                  <CardHeader className="flex gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">{el.language.flag}</span>
                    <div className="flex flex-col text-left">
                      <p className="text-base sm:text-md font-bold">{el.language.name}</p>
                      <p className="text-xs text-default-500">Stage {el.currentStage} • Chapter {el.currentChapter}</p>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{el.xpInLanguage} XP</span>
                      </div>
                      <Progress 
                        value={(el.xpInLanguage % 500) / 5} 
                        color="primary" 
                        size="sm" 
                        aria-label="Language progress"
                      />
                      <Link href={`/learn/${el.languageCode}`} className="mt-3 sm:mt-4">
                        <Button color="primary" className="w-full font-bold text-sm">
                          Continue Learning
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              ))}

              <Card className="p-3 sm:p-4 border-dashed border-2 border-default-200 bg-default-50 flex items-center justify-center hover:bg-default-100 transition-all cursor-pointer min-h-[160px]" shadow="none">
                <Link href="/onboarding" className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl text-default-300 mb-1 sm:mb-2">+</span>
                  <p className="text-default-400 font-bold text-sm">Add New Language</p>
                </Link>
              </Card>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6">Practice & Rankings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card 
                isPressable
                onClick={() => router.push('/practice')}
                className="p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:bg-default-50 transition-colors"
              >
                <MessageSquareText size={30} className="text-primary" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Practice Hub</h3>
                  <p className="text-xs sm:text-sm text-default-500">AI Chat, Speaking, Listening, and more!</p>
                </div>
              </Card>

              <Card 
                isPressable
                onClick={() => router.push('/leaderboard')}
                className="p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:bg-default-50 transition-colors"
              >
                <Trophy size={30} className="text-warning" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Leaderboard</h3>
                  <p className="text-xs sm:text-sm text-default-500">See how you rank against other learners.</p>
                </div>
              </Card>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6">Insights</h2>
            <Card 
              isPressable
              onClick={() => router.push('/progress')}
              className="p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:bg-default-50 transition-colors"
            >
              <BarChart size={30} className="text-success" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">My Progress</h3>
                <p className="text-xs sm:text-sm text-default-500">View your learning statistics and insights.</p>
              </div>
            </Card>
          </div>

          {/* Sidebar / Stats */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl sm:text-2xl font-bold">Stats</h2>
            <Card className="p-4" shadow="sm">
              <CardBody className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-default-500">Total XP</span>
                  <span className="font-bold text-lg sm:text-xl">{user?.xpTotal || 0}</span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-default-500">Global Rank</span>
                  <span className="font-bold text-lg sm:text-xl">#1,240</span>
                </div>
                <Divider />
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-bold text-default-400 uppercase">Weekly Goal</p>
                  <Progress value={60} color="success" size="sm" aria-label="Weekly goal progress" />
                  <p className="text-xs text-default-500">3 / 5 days completed this week</p>
                </div>
              </CardBody>
            </Card>

            <Card className="p-4 bg-primary text-primary-foreground" shadow="sm">
              <CardBody className="flex flex-col gap-2">
                <h3 className="font-bold text-lg">Upgrade to Pro</h3>
                <p className="text-sm opacity-90">Unlock unlimited AI chat and infinite hearts.</p>
                <Button size="sm" className="bg-white text-primary font-bold mt-2">Coming Soon</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function Divider() {
  return <div className="h-[1px] w-full bg-default-100 my-2" />
}