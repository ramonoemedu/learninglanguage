// app/progress/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button, Card, CardBody, Spinner, Progress, Tabs, Tab, Chip } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, BarChart, BookOpen, GraduationCap, Globe } from 'lucide-react'

interface OverallStats {
  xpTotal: number
  coins: number
  streakDays: number
  lessonsCompleted: number
  averageScore: number
  vocabularyLearned: number
}

interface LanguageStats {
  code: string
  name: string
  flag: string
  xpInLanguage: number
  currentStage: number
}

interface UserProgressData {
  overall: OverallStats
  languages: LanguageStats[]
}

export default function ProgressPage() {
  const [progressData, setProgressData] = useState<UserProgressData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await fetch('/api/progress')
        const data = await res.json()
        setProgressData(data)
      } catch (err) {
        console.error('Failed to load progress data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProgress()
  }, [])

  if (loading || !progressData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  const { overall, languages } = progressData

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-5xl mx-auto flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/dashboard">
            <Button variant="light" isIconOnly size="sm">
              <ChevronLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold">My Progress</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6">
        <Card className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Overall Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
            <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-default-50 rounded-lg">
              <span className="text-2xl sm:text-4xl font-black text-primary">{overall.xpTotal}</span>
              <span className="text-xs sm:text-sm text-default-500">Total XP</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-default-50 rounded-lg">
              <span className="text-2xl sm:text-4xl font-black text-warning">{overall.coins}</span>
              <span className="text-xs sm:text-sm text-default-500">Coins Earned</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-default-50 rounded-lg">
              <span className="text-2xl sm:text-4xl font-black text-success">{overall.streakDays}</span>
              <span className="text-xs sm:text-sm text-default-500">Current Streak</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-default-50 rounded-lg">
              <span className="text-2xl sm:text-4xl font-black">{overall.lessonsCompleted}</span>
              <span className="text-xs sm:text-sm text-default-500">Lessons Completed</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-default-50 rounded-lg">
              <span className="text-2xl sm:text-4xl font-black">{overall.averageScore.toFixed(0)}%</span>
              <span className="text-xs sm:text-sm text-default-500">Avg. Score</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 sm:p-4 bg-default-50 rounded-lg">
              <span className="text-2xl sm:text-4xl font-black">{overall.vocabularyLearned}</span>
              <span className="text-xs sm:text-sm text-default-500">Words Learned</span>
            </div>
          </div>
        </Card>

        <h2 className="text-lg sm:text-xl font-bold mb-2">Progress by Language</h2>
        <Tabs aria-label="Progress by Language" color="primary" variant="underlined" size="sm">
          {languages.map((lang) => (
            <Tab 
              key={lang.code} 
              title={
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-base sm:text-lg">{lang.flag}</span>
                  <span className="text-sm sm:text-base">{lang.name}</span>
                </div>
              }
            >
              <Card className="p-4 sm:p-6 mt-2 sm:mt-4">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-default-500">XP in {lang.name}</span>
                    <span className="font-bold text-lg sm:text-xl">{lang.xpInLanguage}</span>
                  </div>
                  <Progress 
                    value={(lang.xpInLanguage % 1000) / 10} // Assuming 1000 XP per stage for a general progress bar
                    color="primary" 
                    size="sm" 
                    aria-label="Language XP progress"
                  />
                  <div className="flex justify-between items-center mt-1 sm:mt-2">
                    <span className="text-sm sm:text-base text-default-500">Current Stage</span>
                    <Chip color="secondary" variant="flat" size="sm">{lang.currentStage}</Chip>
                  </div>
                  
                  {/* Placeholder for Skill Breakdown */}
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2">Skill Breakdown</h3>
                    <div className="flex flex-col gap-1 sm:gap-2 text-sm sm:text-base">
                      <div className="flex justify-between items-center">
                        <span>Vocabulary</span>
                        <Progress value={85} color="success" size="sm" className="w-1/2 sm:w-2/3" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Grammar</span>
                        <Progress value={70} color="warning" size="sm" className="w-1/2 sm:w-2/3" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Listening</span>
                        <Progress value={60} color="danger" size="sm" className="w-1/2 sm:w-2/3" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Speaking</span>
                        <Progress value={50} color="default" size="sm" className="w-1/2 sm:w-2/3" />
                      </div>
                    </div>
                  </div>

                  {/* Placeholder for Weak Words */}
                  <div className="mt-4 sm:mt-6">
                    <h3 className="text-base sm:text-lg font-bold mb-2">Words to Review</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <Chip variant="bordered" color="default" size="sm">你好</Chip>
                      <Chip variant="bordered" color="default" size="sm">谢谢</Chip>
                      <Chip variant="bordered" color="default" size="sm">学生</Chip>
                      <Chip variant="bordered" color="default" size="sm">朋友</Chip>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </main>
    </div>
  )
}
