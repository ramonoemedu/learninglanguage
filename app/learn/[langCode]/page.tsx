// app/learn/[langCode]/page.tsx
'use client'

import { useState, useEffect, use } from 'react'
import { Button, Card, CardHeader, CardBody, Progress, Chip, Spinner, Accordion, AccordionItem } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Lock, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface Chapter {
  id: string
  chapterNum: number
  title: string
}

interface Stage {
  id: string
  stageNumber: number
  title: string
  unlockXp: number
  chapters: Chapter[]
}

interface Language {
  id: string
  code: string
  name: string
  flag: string
  stages: Stage[]
}

interface UserProgress {
  currentStage: number
  currentChapter: number
  xpInLanguage: number
  completedLessonIds: string[]
}

export default function LearnPage({ params }: { params: Promise<{ langCode: string }> }) {
  const { langCode } = use(params)
  const [language, setLanguage] = useState<Language | null>(null)
  const [progress, setProgress] = useState<UserProgress | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [langRes, progRes] = await Promise.all([
          fetch(`/api/languages/${langCode}`),
          fetch(`/api/users/me/progress/${langCode}`)
        ])

        const langData = await langRes.json()
        const progData = await progRes.json()

        setLanguage(langData)
        setProgress(progData)
      } catch (err) {
        console.error('Failed to load data', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [langCode])

  if (loading || !language || !progress) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 text-center sm:text-left">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-0">
          <Link href="/dashboard">
            <Button variant="light" isIconOnly size="sm">
              <ChevronLeft size={20} />
            </Button>
          </Link>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2">
              <span className="text-xl sm:text-2xl">{language.flag}</span>
              <h1 className="text-xl sm:text-2xl font-bold">{language.name}</h1>
            </div>
            <p className="text-default-500 text-xs sm:text-sm">Learning Map • Stage {progress.currentStage}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-primary">{progress.xpInLanguage} XP</p>
          <Progress 
            value={(progress.xpInLanguage % 500) / 5} 
            className="w-24 sm:w-32 h-2" 
            color="primary"
          />
        </div>
      </header>

      <main className="max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
        {language.stages.map((stage) => {
          const isUnlocked = progress.xpInLanguage >= stage.unlockXp
          const isCurrent = stage.stageNumber === progress.currentStage

          return (
            <Card 
              key={stage.id} 
              className={`p-3 sm:p-4 border-2 ${isCurrent ? 'border-primary' : 'border-transparent'} ${!isUnlocked ? 'opacity-70 bg-default-50' : ''}`}
            >
              <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center text-center sm:text-left">
                <div className="flex flex-col gap-1 mb-2 sm:mb-0">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h2 className="text-lg sm:text-xl font-bold">Stage {stage.stageNumber}: {stage.title}</h2>
                    {isCurrent && <Chip color="primary" variant="flat" size="sm">Current</Chip>}
                    {!isUnlocked && <Lock size={16} className="text-default-400" />}
                  </div>
                  <p className="text-xs sm:text-sm text-default-500">
                    {isUnlocked ? `${stage.chapters.length} Chapters` : `Unlocks at ${stage.unlockXp} XP`}
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                {isUnlocked ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-2">
                    {stage.chapters.map((chapter) => {
                      const isChapterCompleted = chapter.chapterNum < progress.currentChapter && isCurrent || stage.stageNumber < progress.currentStage
                      const isChapterCurrent = chapter.chapterNum === progress.currentChapter && isCurrent
                      const isChapterLocked = chapter.chapterNum > progress.currentChapter && isCurrent || stage.stageNumber > progress.currentStage

                      return (
                        <Card 
                          key={chapter.id}
                          isPressable={!isChapterLocked}
                          className={`p-2 sm:p-3 relative overflow-hidden transition-all hover:scale-105 active:scale-95 ${
                            isChapterCompleted ? 'bg-success-50 border-success-200' :
                            isChapterCurrent ? 'bg-primary-50 border-primary-200 shadow-md' :
                            'bg-default-50'
                          }`}
                          onClick={() => {
                            if (!isChapterLocked) {
                              router.push(`/learn/${langCode}/chapter/${chapter.id}`)
                            }
                          }}
                        >
                          <div className="flex flex-col gap-1 z-10 text-center">
                            <span className="text-xs font-bold text-default-500 uppercase">Ch. {chapter.chapterNum}</span>
                            <span className="font-bold text-sm line-clamp-1">{chapter.title}</span>
                          </div>
                          <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                            {isChapterCompleted && <CheckCircle2 size={14} className="text-success" />}
                            {isChapterLocked && <Lock size={14} className="text-default-300" />}
                          </div>
                          {isChapterCurrent && (
                            <div className="absolute bottom-0 left-0 h-1 bg-primary w-full" />
                          )}
                        </Card>
                      )
                    })}
                  </div>
                ) : (
                  <div className="py-3 sm:py-4 text-center">
                    <p className="text-default-400 italic text-sm">Collect more XP to unlock this stage.</p>
                  </div>
                )}
              </CardBody>
            </Card>
          )
        })}
      </main>
    </div>
  )
}
