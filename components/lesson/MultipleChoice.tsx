// components/lesson/MultipleChoice.tsx
'use client'

import { Button, Card, CardBody } from '@heroui/react'

interface MultipleChoiceProps {
  question: {
    prompt: string
    options: string[]
    translation?: string
    image?: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
}

export default function MultipleChoice({ question, onAnswer, selectedAnswer, disabled }: MultipleChoiceProps) {
  return (
    <div className="w-full flex flex-col items-center gap-10 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold">{question.prompt}</h2>

      {question.image && (
        <Card className="w-full max-w-sm aspect-video border-2 border-default-100 overflow-hidden">
          <img 
            src={question.image} 
            alt="Question visual" 
            className="w-full h-full object-cover"
          />
        </Card>
      )}

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
