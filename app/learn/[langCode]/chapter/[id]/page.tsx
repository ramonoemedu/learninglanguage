// app/learn/[langCode]/chapter/[id]/page.tsx
'use client'

import { useState, useEffect, use } from 'react'
import { Button, Card, CardHeader, CardBody, Spinner, Chip } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Play, CheckCircle2, Headphones, Mic2, FileText, Languages } from 'lucide-react'
import Link from 'next/link'

interface Lesson {
  id: string
  type: string
  xpReward: number
  coinReward: number
  completed: boolean
  contentJson: any
}

interface Chapter {
  id: string
  chapterNum: number
  title: string
  lessons: Lesson[]
}

export default function ChapterLessonsPage({ params }: { params: Promise<{ langCode: string, id: string }> }) {
  const { langCode, id: chapterId } = use(params)
  const [chapter, setChapter] = useState<Chapter | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const res = await fetch(`/api/chapters/${chapterId}/lessons`)
        const data = await res.json()
        setChapter(data)
      } catch (err) {
        console.error('Failed to load lessons', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLessons()
  }, [chapterId])

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'vocab': return <Languages className="text-primary" size={24} />
      case 'listen': return <Headphones className="text-primary" size={24} />
      case 'speak': return <Mic2 className="text-primary" size={24} />
      default: return <FileText className="text-primary" size={24} />
    }
  }

  if (loading || !chapter) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 text-center sm:text-left">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-0">
          <Link href={`/learn/${langCode}`}>
            <Button variant="light" isIconOnly size="sm">
              <ChevronLeft size={20} />
            </Button>
          </Link>
          <div>
            <span className="text-xs font-bold text-default-400 uppercase">Chapter {chapter.chapterNum}</span>
            <h1 className="text-xl sm:text-2xl font-bold">{chapter.title}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto flex flex-col gap-4 sm:gap-6">
        <h2 className="text-lg sm:text-xl font-bold mb-2">Available Lessons</h2>
        {chapter.lessons.length === 0 && (
          <p className="text-center text-default-500 py-6 sm:py-10 italic text-sm sm:text-base">No lessons available in this chapter yet.</p>
        )}
        
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {chapter.lessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              isPressable 
              className={`p-2 sm:p-3 transition-all hover:translate-x-1 ${lesson.completed ? 'bg-success-50/30' : ''}`}
              onClick={() => router.push(`/lesson/${lesson.id}`)}
            >
              <CardBody className="flex flex-row items-center justify-between p-3 sm:p-4">
                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="p-2 sm:p-3 bg-primary-100 rounded-xl sm:rounded-2xl flex-shrink-0">
                    {getLessonIcon(lesson.type)}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <h3 className="font-bold text-base sm:text-lg capitalize">{lesson.type} Practice</h3>
                      {lesson.completed && (
                        <Chip size="sm" color="success" variant="flat" startContent={<CheckCircle2 size={12} />}>
                          Done
                        </Chip>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-default-500">{lesson.contentJson?.description || 'Build your skills'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-xs font-bold text-primary">+{lesson.xpReward} XP</span>
                    <span className="text-xs font-bold text-warning">+{lesson.coinReward} Coins</span>
                  </div>
                  <Button 
                    isIconOnly 
                    color={lesson.completed ? 'success' : 'primary'} 
                    variant={lesson.completed ? 'flat' : 'solid'}
                    radius="full"
                    size="md"
                  >
                    {lesson.completed ? <CheckCircle2 size={18} /> : <Play size={18} className="ml-0.5" />}
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
