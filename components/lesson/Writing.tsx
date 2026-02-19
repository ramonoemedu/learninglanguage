// components/lesson/Writing.tsx
'use client'

import { Button, Textarea, Card, CardBody, Spinner } from '@heroui/react'
import { useState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'

interface WritingProps {
  question: {
    prompt: string
    correctAnswer: string
    targetLanguage: string
    nativeLanguage: string
  }
  onAnswer: (answer: string, score?: number) => void
  disabled?: boolean
}

export default function Writing({ question, onAnswer, disabled }: WritingProps) {
  const [userText, setUserText] = useState('')
  const [loading, setLoading] = useState(false)
  const [aiFeedback, setAiFeedback] = useState<{ score: number, feedback: string, correctedText: string } | null>(null)
  const [error, setError] = useState('')

  const handleGradeWriting = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/ai/grade-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userText,
          prompt: question.prompt,
          targetLanguage: question.targetLanguage,
          nativeLanguage: question.nativeLanguage,
          correctAnswer: question.correctAnswer,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to grade writing.')
      }

      setAiFeedback(data)
      onAnswer(userText, data.score) // Pass user's text and AI score back
    } catch (err: any) {
      console.error('Error grading writing:', err)
      setError(err.message || 'An error occurred while grading your writing.')
      setAiFeedback(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-center">{question.prompt}</h2>

      <div className="w-full max-w-2xl flex flex-col gap-4">
        <Textarea
          value={userText}
          onValueChange={setUserText}
          placeholder="Write your answer here..."
          minRows={5}
          maxRows={10}
          isDisabled={disabled || loading || aiFeedback !== null}
          className="text-lg"
        />
        {error && <p className="text-sm text-danger">{error}</p>}
        {!aiFeedback && (
          <Button
            color="primary"
            onClick={handleGradeWriting}
            isLoading={loading}
            isDisabled={disabled || userText.trim().length < 5} // Min length for grading
            className="w-full font-bold text-lg h-12"
          >
            {loading ? 'Grading...' : 'Submit & Get Feedback'}
          </Button>
        )}

        {aiFeedback && (
          <Card className="w-full mt-6 p-4">
            <CardBody className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {aiFeedback.score >= 70 ? (
                  <CheckCircle2 size={24} className="text-success" />
                ) : (
                  <AlertCircle size={24} className="text-danger" />
                )}
                <span className="font-bold text-xl">Score: {aiFeedback.score}/100</span>
              </div>
              <div>
                <h3 className="font-bold text-md mb-1">Feedback:</h3>
                <p className="text-sm text-default-700">{aiFeedback.feedback}</p>
              </div>
              <div>
                <h3 className="font-bold text-md mb-1">Corrected Version:</h3>
                <p className="text-sm text-default-700 italic">{aiFeedback.correctedText}</p>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  )
}
