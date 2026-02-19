// components/lesson/FlashCard.tsx
'use client'

import { Button, Card, CardBody, Spinner } from '@heroui/react'
import { Volume2, Volume1 } from 'lucide-react'
import { useState } from 'react'

interface FlashCardProps {
  question: {
    word: string
    romanization: string
    ipa?: string
    translation: string
    options: string[]
    correctAnswer: string
    // audioUrl?: string // Now dynamically generated or fetched
    languageCode: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
}

export default function FlashCard({ question, onAnswer, selectedAnswer, disabled }: FlashCardProps) {
  const [isAudioLoading, setIsAudioLoading] = useState(false)

  const playAudio = async (speed: number = 1) => {
    setIsAudioLoading(true)
    try {
      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: question.word, 
          voice: 'nova', // Default voice for now
          speed: speed,
          // vocabId: question.vocabId // Pass vocabId if you want to store it
        }),
      })
      const data = await res.json()
      if (res.ok && data.audioUrl) {
        const audio = new Audio(data.audioUrl)
        audio.playbackRate = speed
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

  return (
    <div className="w-full flex flex-col items-center gap-10 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold">What does this word mean?</h2>

      <Card className="w-full min-h-[300px] border-2 border-default-100 bg-default-50/50 shadow-none">
        <CardBody className="flex flex-col items-center justify-center p-10">
          <span className="text-7xl mb-4 font-black">{question.word}</span>
          <p className="text-default-400 text-2xl font-medium mb-8">{question.romanization}</p>
          
          <div className="flex gap-4 mb-2">
            <Button 
              size="sm" 
              variant="flat" 
              color="primary" 
              startContent={isAudioLoading ? <Spinner size="sm" color="white" /> : <Volume2 size={18} />}
              onClick={() => playAudio(1)}
              className="font-bold"
              isDisabled={isAudioLoading}
            >
              Normal
            </Button>
            <Button 
              size="sm" 
              variant="flat" 
              color="secondary" 
              startContent={isAudioLoading ? <Spinner size="sm" color="white" /> : <Volume1 size={18} />}
              onClick={() => playAudio(0.7)}
              className="font-bold"
              isDisabled={isAudioLoading}
            >
              Slow
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {question.options.map((option) => (
          <Button 
            key={option} 
            variant="bordered" 
            className={`h-20 text-xl font-bold border-2 transition-all ${
              selectedAnswer === option 
                ? 'border-primary bg-primary-50 text-primary' 
                : 'border-default-100 bg-background hover:border-primary-200'
            }`}
            onClick={() => onAnswer(option)}
            isDisabled={disabled}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}
