// components/lesson/Reading.tsx
'use client'

import { Button, Card, CardBody, Spinner } from '@heroui/react'
import { Volume2 } from 'lucide-react'
import { useState } from 'react'

interface ReadingQuestion {
  question: string
  options: string[]
  correctAnswer: string
}

interface ReadingProps {
  question: {
    prompt?: string
    passage: string
    comprehensionQuestions: ReadingQuestion[]
    languageCode: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string // This will hold the selected comprehension answer
  disabled?: boolean
}

export default function Reading({ question, onAnswer, selectedAnswer, disabled }: ReadingProps) {
  const [isAudioLoading, setIsAudioLoading] = useState(false)
  const [currentComprehensionQuestionIndex, setCurrentComprehensionQuestionIndex] = useState(0)

  const currentComprehensionQuestion = question.comprehensionQuestions[currentComprehensionQuestionIndex]

  const playPassageAudio = async () => {
    setIsAudioLoading(true)
    try {
      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: question.passage,
          voice: 'nova',
          speed: 1.0,
        }),
      })
      const data = await res.json()
      if (res.ok && data.audioUrl) {
        const audio = new Audio(data.audioUrl)
        audio.play()
      } else {
        console.error('Failed to get audio:', data.error)
      }
    } catch (error) {
      console.error('Error playing audio:', error)
    } finally {
      setIsAudioLoading(false)
    }
  }

  const handleComprehensionAnswer = (answer: string) => {
    onAnswer(answer) // Pass the selected answer for checking
  }

  // This component will manage its own internal state for advancing comprehension questions
  // The overall lesson engine will only check the final combined answer.
  // For simplicity here, we assume the lesson engine only calls onAnswer once for the final check.
  // A more complex implementation would involve internal state for individual question checks.

  return (
    <div className="w-full flex flex-col items-center gap-10 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-center">{question.prompt || "Read the passage"}</h2>

      <Card className="w-full max-w-2xl border-2 border-default-100 bg-default-50/50 shadow-none">
        <CardBody className="flex flex-col gap-4 p-8">
          <p className="text-lg leading-relaxed text-left">{question.passage}</p>
          <div className="flex justify-center mt-4">
            <Button
              size="sm"
              variant="flat"
              color="primary"
              startContent={isAudioLoading ? <Spinner size="sm" color="white" /> : <Volume2 size={18} />}
              onClick={playPassageAudio}
              className="font-bold"
              isDisabled={isAudioLoading || disabled}
            >
              Read Aloud
            </Button>
          </div>
        </CardBody>
      </Card>

      {currentComprehensionQuestion && (
        <div className="w-full max-w-2xl flex flex-col items-center text-center gap-6 mt-6">
          <h3 className="text-xl font-bold">{currentComprehensionQuestion.question}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {currentComprehensionQuestion.options.map((option) => (
              <Button
                key={option}
                variant="bordered"
                className={`h-16 text-lg font-bold border-2 transition-all ${selectedAnswer === option
                    ? 'border-primary bg-primary-50 text-primary'
                    : 'border-default-100 bg-background hover:border-primary-200'
                  }`}
                onClick={() => handleComprehensionAnswer(option)}
                isDisabled={disabled}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
