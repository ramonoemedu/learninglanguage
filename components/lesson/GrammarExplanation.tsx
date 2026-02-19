// components/lesson/GrammarExplanation.tsx
'use client'

import { Button, Card, CardBody, Spinner, Tooltip } from '@heroui/react'
import { BookOpenText, Info } from 'lucide-react'
import { useState } from 'react'

interface GrammarExplanationProps {
  topic: string // The grammar topic to explain
  targetLanguage: string
  nativeLanguage: string
  disabled?: boolean
}

export default function GrammarExplanation({ topic, targetLanguage, nativeLanguage, disabled }: GrammarExplanationProps) {
  const [explanation, setExplanation] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchExplanation = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/ai/explain?topic=${encodeURIComponent(topic)}&targetLanguage=${targetLanguage}&nativeLanguage=${nativeLanguage}`)
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch explanation.')
      }
      setExplanation(data.explanation)
    } catch (err: any) {
      console.error('Error fetching grammar explanation:', err)
      setError(err.message || 'Failed to load grammar explanation.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in fade-in duration-500">
      <Tooltip content={`Get an AI explanation for "${topic}"`}>
        <Button
          color="secondary"
          variant="flat"
          onClick={fetchExplanation}
          isLoading={loading}
          isDisabled={disabled || explanation !== null}
          startContent={loading ? <Spinner size="sm" color="white" /> : <BookOpenText size={20} />}
        >
          {explanation ? 'Explanation Loaded' : `Explain "${topic}"`}
        </Button>
      </Tooltip>

      {error && <p className="text-sm text-danger">{error}</p>}

      {explanation && (
        <Card className="w-full max-w-2xl mt-4 p-4">
          <CardBody className="flex flex-col gap-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Info size={20} />
              Explanation:
            </h3>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p>{explanation}</p>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  )
}
