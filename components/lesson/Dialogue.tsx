// components/lesson/Dialogue.tsx
'use client'

import { Button, Input, Card, CardBody, Avatar, Spinner } from '@heroui/react'
import { Send, User, Bot, Loader2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useUserStore } from '@/lib/stores/authStore' // Assuming an auth store for user data

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface DialogueProps {
  question: {
    prompt: string
    scenario: string
    initialDialogue: ChatMessage[]
    targetLanguage: string
    nativeLanguage: string
  }
  onAnswer: (answer: string) => void // onAnswer will be called when the dialogue is "finished" or turns are exhausted
  disabled?: boolean
}

export default function Dialogue({ question, onAnswer, disabled }: DialogueProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(question.initialDialogue)
  const [inputMessage, setInputMessage] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [error, setError] = useState('')

  const chatEndRef = useRef<HTMLDivElement>(null)
  const { user } = useUserStore() // Get user from global store

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || streaming || disabled) return
    setError('')
    setStreaming(true)

    const userMessage: ChatMessage = { role: 'user', content: text }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInputMessage('')

    try {
      const response = await fetch('/api/ai/dialogue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: newMessages,
          scenario: question.scenario,
          targetLanguage: question.targetLanguage,
          nativeLanguage: question.nativeLanguage,
        }),
      })

      if (!response.ok || !response.body) {
        setError('Failed to get response from AI. Please try again.')
        setStreaming(false)
        return
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantResponse = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]) // Add empty assistant message

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter(line => line.startsWith('data: '))
        for (const line of lines) {
          const content = line.substring(6)
          assistantResponse += content
          setMessages((prev) => {
            const lastMessage = prev[prev.length - 1]
            if (lastMessage && lastMessage.role === 'assistant') {
              return [...prev.slice(0, -1), { ...lastMessage, content: assistantResponse }]
            }
            return [...prev, { role: 'assistant', content: assistantResponse }]
          })
        }
      }
      onAnswer(inputMessage) // Indicate that a turn was completed
    } catch (err) {
      console.error('SSE streaming error:', err)
      setError('An unexpected error occurred during dialogue.')
    } finally {
      setStreaming(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-center">{question.prompt}</h2>
      <Card className="w-full max-w-2xl border-2 border-default-100 bg-default-50/50 shadow-none">
        <CardBody className="p-6">
          <p className="text-sm text-default-600 italic mb-4">Scenario: {question.scenario}</p>
          <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar 
                    isBordered 
                    size="sm" 
                    src={msg.role === 'user' ? user?.avatarUrl || undefined : undefined} // User's avatar
                    fallback={msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                    className={msg.role === 'user' ? 'bg-primary-100 text-primary-600' : 'bg-default-200 text-default-600'}
                  />
                  <Card
                    className={`max-w-full ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-default-100 rounded-bl-none'
                    }`}
                  >
                    <CardBody className="p-3 text-sm">
                      {msg.content}
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
            {streaming && (
              <div className="flex justify-start">
                <div className="flex items-start gap-3 max-w-[80%]">
                  <Avatar size="sm" fallback={<Bot size={18} />} className="bg-default-200 text-default-600" />
                  <Card className="bg-default-100 rounded-bl-none">
                    <CardBody className="p-3 text-sm flex items-center gap-2">
                      <Loader2 className="animate-spin" size={16} />
                      <span>AI is typing...</span>
                    </CardBody>
                  </Card>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </CardBody>
      </Card>

      <div className="w-full max-w-2xl flex flex-col gap-2">
        {error && <p className="text-danger text-center text-sm">{error}</p>}
        <form 
          onSubmit={(e) => { e.preventDefault(); sendMessage(inputMessage); }} 
          className="flex gap-2"
        >
          <Input
            value={inputMessage}
            onValueChange={setInputMessage}
            placeholder="Type your response..."
            className="flex-1"
            size="lg"
            isDisabled={streaming || disabled}
          />
          <Button type="submit" isIconOnly color="primary" isDisabled={!inputMessage.trim() || streaming || disabled}>
            <Send size={24} />
          </Button>
        </form>
      </div>
    </div>
  )
}