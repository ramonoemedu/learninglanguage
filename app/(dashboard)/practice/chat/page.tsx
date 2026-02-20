// app/practice/chat/page.tsx
'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Button, Input, Card, CardBody, Avatar, Chip, Spinner } from '@heroui/react'
import { Send, User, Bot, Loader2, MessageSquareText } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useUserStore } from '@/lib/stores/authStore' // Assuming an auth store for user data

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [dailyLimitReached, setDailyLimitReached] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const chatEndRef = useRef<HTMLDivElement>(null)
  const { user } = useUserStore() // Get user from global store

  const targetLang = 'zh' // Placeholder, should come from user settings
  const nativeLang = user?.nativeLanguage || 'en'

  useEffect(() => {
    // Initial greeting from AI
    if (messages.length === 0 && !streaming) {
      setMessages([{ role: 'assistant', content: `Hello! I am your Chinese teacher. What would you like to practice today? 你想练习什么？` }])
    }
    // Scroll to bottom on new message
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || streaming || dailyLimitReached) return
    setError('')
    setStreaming(true)

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInputMessage('')

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: newMessages.slice(0, -1), // Send history without the current message
          targetLang,
          nativeLang,
        }),
      })

      if (response.status === 429) {
        setDailyLimitReached(true)
        setError((await response.json()).error)
        setStreaming(false)
        return
      }

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
        // SSE messages start with "data: " and end with "\n\n"
        const lines = chunk.split('\n').filter(line => line.startsWith('data: '))
        for (const line of lines) {
          const content = line.substring(6) // Remove "data: "
          assistantResponse += content
          setMessages((prev) => {
            const lastMessage = prev[prev.length - 1]
            if (lastMessage && lastMessage.role === 'assistant') {
              return [...prev.slice(0, -1), { ...lastMessage, content: assistantResponse }]
            }
            return [...prev, { role: 'assistant', content: assistantResponse }] // Fallback
          })
        }
      }
    } catch (err) {
      console.error('SSE streaming error:', err)
      setError('An unexpected error occurred during chat.')
    } finally {
      setStreaming(false)
    }
  }, [messages, streaming, dailyLimitReached, user, targetLang, nativeLang])

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-3 sm:p-4 border-b border-default-200">
        <Link href="/dashboard">
          <Button variant="light" isIconOnly size="sm">
            <MessageSquareText size={20} />
          </Button>
        </Link>
        <h1 className="text-lg sm:text-xl font-bold">AI Tutor Chat</h1>
        <Chip size="sm" color={dailyLimitReached ? 'danger' : 'success'} variant="flat">
          {dailyLimitReached ? 'Limit Reached' : '20 msgs left today (free)'} {/* Placeholder */}
        </Chip>
      </header>

      <main className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <Card
              className={`max-w-[80%] sm:max-w-[70%] ${
                msg.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-default-100 rounded-bl-none'
              }`}
            >
              <CardBody className="p-2 sm:p-3 text-xs sm:text-sm">
                {msg.content}
              </CardBody>
            </Card>
          </div>
        ))}
        {streaming && messages[messages.length - 1]?.role === 'assistant' && (
          <div className="flex justify-start">
            <Card className="bg-default-100 rounded-bl-none">
              <CardBody className="p-2 sm:p-3 text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                <Loader2 className="animate-spin" size={14} />
                <span>AI is typing...</span>
              </CardBody>
            </Card>
          </div>
        )}
        <div ref={chatEndRef} />
      </main>

      <footer className="p-3 sm:p-4 border-t border-default-200">
        {dailyLimitReached && (
          <p className="text-danger text-center mb-2 text-xs sm:text-sm">{error}</p>
        )}
        <form 
          onSubmit={(e) => { e.preventDefault(); sendMessage(inputMessage); }} 
          className="flex gap-2"
        >
          <Input
            value={inputMessage}
            onValueChange={setInputMessage}
            placeholder={dailyLimitReached ? "Daily limit reached." : "Type your message..."}
            className="flex-1"
            size="md"
            isDisabled={streaming || dailyLimitReached}
          />
          <Button type="submit" isIconOnly color="primary" isDisabled={!inputMessage.trim() || streaming || dailyLimitReached} size="md">
            <Send size={20} />
          </Button>
        </form>
      </footer>
    </div>
  )
}