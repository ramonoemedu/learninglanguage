// app/profile/achievements/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button, Card, CardBody, Chip, Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Lock, Trophy } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: string
  xpReward: number
  coinReward: number
  isUnlocked: boolean
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch('/api/gamification/achievements')
        const data = await res.json()
        setAchievements(data)
      } catch (err) {
        console.error('Failed to load achievements:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAchievements()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  const categorizeAchievements = (achs: Achievement[]) => {
    return achs.reduce((acc, ach) => {
      (acc[ach.category] = acc[ach.category] || []).push(ach)
      return acc
    }, {} as Record<string, Achievement[]>)
  }

  const categorized = categorizeAchievements(achievements)

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-4xl mx-auto flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/profile">
            <Button variant="light" isIconOnly size="sm">
              <ChevronLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold">My Achievements</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
        {Object.keys(categorized).map(category => (
          <div key={category} className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-xl font-bold border-b pb-2">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {categorized[category].map(ach => (
                <Card 
                  key={ach.id} 
                  className={`p-3 sm:p-4 flex gap-3 sm:gap-4 items-center ${ach.isUnlocked ? 'bg-default-50' : 'bg-default-100 opacity-70'}`}
                >
                  <div className="flex-shrink-0 text-3xl sm:text-4xl">
                    {ach.isUnlocked ? ach.icon : <Lock size={24} className="text-default-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <h3 className="font-bold text-base sm:text-lg">{ach.title}</h3>
                      {ach.isUnlocked && (
                        <Chip size="sm" color="success" variant="flat">Unlocked</Chip>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-default-500">{ach.description}</p>
                    {ach.isUnlocked && (
                      <p className="text-xs text-default-400 mt-1">
                        +{ach.xpReward} XP, +{ach.coinReward} Coins
                      </p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
