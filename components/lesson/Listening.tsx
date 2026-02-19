// components/lesson/Listening.tsx
'use client'

import { Button, Card, CardBody, Input, Spinner } from '@heroui/react'
import { Volume2, Play } from 'lucide-react'
import { useState } from 'react'

interface ListeningProps {
  question: {
    prompt: string
    audioUrl: string
    options?: string[]
    correctAnswer: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
  showOptions?: boolean
}

export default function Listening({ question, onAnswer, selectedAnswer, disabled, showOptions = true }: ListeningProps) {
  const [isAudioLoading, setIsAudioLoading] = useState(false)
  const [inputValue, setInputValue] = useState(selectedAnswer) // For input type questions

  const playAudio = async () => {
    setIsAudioLoading(true)
    try {
      // For now, assume audioUrl is directly playable, or use /api/ai/tts if needed for dynamic generation
      // If audioUrl is empty in seed, we could use the /api/ai/tts route to generate for the correctAnswer
      let finalAudioUrl = question.audioUrl;
      if (!finalAudioUrl) {
        // Fallback to generating audio for the correct answer if no audioUrl provided
        const res = await fetch('/api/ai/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            text: question.correctAnswer, 
            voice: 'nova', 
            speed: 1.0,
          }),
        })
        const data = await res.json()
        if (res.ok && data.audioUrl) {
          finalAudioUrl = data.audioUrl
        } else {
          console.error('Failed to get audio from TTS:', data.error)
          return
        }
      }

      const audio = new Audio(finalAudioUrl)
      audio.play()
    } catch (error) {
      console.error('Error playing audio:', error)
    } finally {
      setIsAudioLoading(false)
    }
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
    onAnswer(value)
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold">{question.prompt}</h2>

      <Card className="w-full min-h-[150px] border-2 border-default-100 bg-default-50/50 shadow-none flex items-center justify-center p-10">
        <Button 
          isIconOnly 
          size="lg" 
          color="primary" 
          className="w-24 h-24 text-2xl"
          onClick={playAudio}
          isDisabled={isAudioLoading || disabled}
          startContent={isAudioLoading ? <Spinner size="md" color="white" /> : <Volume2 size={36} />}
        />
      </Card>

      {showOptions && question.options ? (
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
      ) : (
        <Input
          type="text"
          label="Your Answer"
          placeholder="Type what you heard..."
          value={inputValue}
          onValueChange={handleInputChange}
          className="w-full max-w-md"
          isDisabled={disabled}
        />
      )}
    </div>
  )
}
