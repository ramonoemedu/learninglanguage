// app/(dashboard)/practice/chat/page.tsx
'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Button, Input, Card, CardBody, Avatar, Chip, Spinner } from '@heroui/react'
import { Send, User, Bot, Loader2, MessageSquareText, ChevronLeft, Sparkles, Activity, Zap, Terminal } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useUserStore } from '@/lib/stores/authStore'

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
  const { user } = useUserStore()

  const targetLang = 'zh'
  const nativeLang = user?.nativeLanguage || 'en'

  useEffect(() => {
    if (messages.length === 0 && !streaming) {
      setMessages([{ role: 'assistant', content: `Neural link established. I am your linguistic training unit. What protocol shall we initiate? 你好，我是你的语言训练导师。你想练习什么？` }])
    }
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: newMessages.slice(0, -1),
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
        setError('Uplink failed. Please retry signal.')
        setStreaming(false)
        return
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantResponse = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

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
    } catch (err) {
      console.error('SSE streaming error:', err)
      setError('Neural interference detected. Connection unstable.')
    } finally {
      setStreaming(false)
    }
  }, [messages, streaming, dailyLimitReached, user, targetLang, nativeLang])

  return (
    <div className="relative h-[calc(100vh-140px)] flex flex-col overflow-hidden rounded-[32px] bg-slate-50 dark:bg-[#030712] border border-slate-200/80 dark:border-slate-800/80">
      
      {/* 1. AI BACKGROUND & AMBIENT EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-sky-500 blur-[120px] rounded-full" 
        />
      </div>

      {/* 2. HUD HEADER */}
      <header className="relative z-10 flex items-center justify-between p-4 sm:p-6 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-4">
          <Link href="/practice">
            <button className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all">
              <ChevronLeft size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-sky-500" />
            </button>
          </Link>
          <div className="flex flex-col">
            <h1 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-2">
              Neural Tutor <span className="text-sky-500 font-bold text-xs px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 uppercase tracking-[0.2em]">Live</span>
            </h1>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Activity size={10} className="text-emerald-500" /> Matrix Linked
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end mr-2">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Signal Quota</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">20 / 20</span>
          </div>
          <Chip 
            startContent={<Zap size={12} className="fill-current" />}
            size="sm" 
            className={`font-black uppercase tracking-widest text-[10px] ${dailyLimitReached ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}
            variant="flat"
          >
            {dailyLimitReached ? 'EXHAUSTED' : 'Sync Active'}
          </Chip>
        </div>
      </header>

      {/* 3. CHAT INTERFACE */}
      <main className="relative z-10 flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-3 max-w-[85%] sm:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <Avatar 
                  size="sm" 
                  radius="lg"
                  className={msg.role === 'user' ? 'bg-sky-500' : 'bg-slate-200 dark:bg-slate-800'}
                  icon={msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  src={msg.role === 'user' ? user?.avatarUrl || undefined : undefined}
                />
                <div className="space-y-1">
                  <div className={`flex items-center gap-2 mb-1 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      {msg.role === 'user' ? 'Learner Node' : 'AI Instructor'}
                    </span>
                  </div>
                  <Card
                    className={`border transition-all duration-300 ${
                      msg.role === 'user'
                        ? 'bg-sky-500 border-sky-400 text-white rounded-tr-none shadow-lg shadow-sky-500/10'
                        : 'bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-slate-200 rounded-tl-none shadow-xl'
                    }`}
                  >
                    <CardBody className="p-4 sm:p-5 text-sm font-medium leading-relaxed">
                      {msg.content}
                    </CardBody>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {streaming && messages[messages.length - 1]?.role === 'assistant' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <Loader2 className="animate-spin text-sky-500" size={16} />
              </div>
              <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl rounded-tl-none p-4">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-sky-500/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-sky-500/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-sky-500/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={chatEndRef} />
      </main>

      {/* 4. FOOTER INPUT */}
      <footer className="relative z-10 p-4 sm:p-6 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border-t border-slate-200/80 dark:border-slate-800/80">
        {dailyLimitReached && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-rose-500 mb-4">
            <Terminal size={12} />
            <span className="text-[10px] font-black uppercase tracking-widest">{error}</span>
          </motion.div>
        )}
        <form 
          onSubmit={(e) => { e.preventDefault(); sendMessage(inputMessage); }} 
          className="flex gap-3 max-w-5xl mx-auto"
        >
          <div className="relative flex-1 group">
            <Input
              value={inputMessage}
              onValueChange={setInputMessage}
              placeholder={dailyLimitReached ? "Transmission protocol suspended..." : "Initialize input sequence..."}
              className="w-full"
              classNames={{
                input: "text-sm font-medium",
                inputWrapper: "h-14 bg-white dark:bg-[#030712] border-2 border-slate-200 dark:border-slate-800 rounded-2xl group-hover:border-sky-500/50 group-focus-within:border-sky-500 transition-all shadow-inner"
              }}
              isDisabled={streaming || dailyLimitReached}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
              <Terminal size={16} />
            </div>
          </div>
          <Button 
            type="submit" 
            isIconOnly 
            isDisabled={!inputMessage.trim() || streaming || dailyLimitReached} 
            className={`h-14 w-14 rounded-2xl transition-all duration-300 ${
              inputMessage.trim() && !streaming ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 hover:-translate-y-0.5' : 'bg-slate-100 dark:bg-white/5 text-slate-400'
            }`}
          >
            {streaming ? <Spinner size="sm" color="white" /> : <Send size={20} />}
          </Button>
        </form>
        <div className="mt-4 flex justify-center items-center gap-6 opacity-40">
           <div className="flex items-center gap-1.5">
             <Sparkles size={10} />
             <span className="text-[8px] font-bold uppercase tracking-[0.2em]">AI Generation Active</span>
           </div>
           <div className="w-[1px] h-2 bg-slate-400" />
           <div className="flex items-center gap-1.5">
             <Terminal size={10} />
             <span className="text-[8px] font-bold uppercase tracking-[0.2em]">SSL Encryption Secure</span>
           </div>
        </div>
      </footer>
    </div>
  )
}
