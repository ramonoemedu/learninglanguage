// components/lesson/FillInBlank.tsx
'use client'

import { Button, Input } from '@heroui/react'
import { useState } from 'react'

interface FillInBlankProps {
  question: {
    prompt?: string
    blankedSentence: string
    correctAnswer: string
    hint?: string
    options?: string[] // Optional, for drag-and-drop or selection blanks
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
}

export default function FillInBlank({ question, onAnswer, selectedAnswer, disabled }: FillInBlankProps) {
  const [showHint, setShowHint] = useState(false)
  const [inputValue, setInputValue] = useState(selectedAnswer)

  const sentenceParts = question.blankedSentence.split('___')

  const handleInputChange = (value: string) => {
    setInputValue(value)
    onAnswer(value)
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold">{question.prompt || "Fill in the blank"}</h2>
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <div className="text-3xl font-bold text-center">
          {sentenceParts[0]}
          <Input
            type="text"
            value={inputValue}
            onValueChange={handleInputChange}
            placeholder="..."
            className="inline-block w-32 mx-2 text-center text-3xl font-bold"
            classNames={{
              inputWrapper: "h-auto p-0",
              input: "py-0 text-3xl",
            }}
            isDisabled={disabled}
          />
          {sentenceParts[1]}
        </div>

        {question.hint && !showHint && (
          <Button variant="ghost" size="sm" onClick={() => setShowHint(true)} isDisabled={disabled}>
            💡 Hint (-5 coins)
          </Button>
        )}
        {showHint && question.hint && (
          <p className="text-default-500 text-sm italic">{question.hint}</p>
        )}
      </div>
    </div>
  )
}
