// components/lesson/FlashCard.tsx
'use client'

import { Card, CardBody, Spinner } from '@heroui/react'
import { Volume2, Volume1, Mic, StopCircle, CheckCircle2, Sparkles, AlertCircle, Activity } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FlashCardProps {
  question: {
    word: string
    romanization: string
    ipa?: string
    translation: string
    options: string[]
    correctAnswer: string
    languageCode: string
  }
  onAnswer: (answer: string) => void
  selectedAnswer: string
  disabled?: boolean
}

export default function FlashCard({ question, onAnswer, selectedAnswer, disabled }: FlashCardProps) {
  const [isAudioLoading, setIsAudioLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Recording states
  const [recording, setRecording] = useState(false)
  const [loadingAnalysis, setLoadingAnalysis] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [feedback, setFeedback] = useState<{ score: number, transcript: string, feedback: string } | null>(null)

  const playAudio = async (speed: number = 1) => {
    if (isAudioLoading) return
    setIsAudioLoading(true)
    setIsPlaying(true)
    try {
      const res = await fetch('/api/ai/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: question.word, 
          voice: 'nova',
          speed: speed,
        }),
      })
      const data = await res.json()
      if (res.ok && data.audioUrl) {
        const audio = new Audio(data.audioUrl)
        audio.playbackRate = speed
        audio.onended = () => setIsPlaying(false)
        audio.play()
      }
    } catch (error) {
      setIsPlaying(false)
    } finally {
      setIsAudioLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => playAudio(1), 500)
    return () => clearTimeout(timer)
  }, [question.word])

  // 🎙️ MIC LOGIC FOR SHADOWING
  const startRecording = async () => {
    setFeedback(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      const audioChunks: BlobPart[] = []

      recorder.ondataavailable = (event) => audioChunks.push(event.data)
      recorder.onstop = async () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm; codecs=opus' })
        setRecording(false)
        analyzePronunciation(blob)
      }

      recorder.start()
      setRecording(true)
      setMediaRecorder(recorder)
    } catch (err) {
      console.error("Microphone access denied")
    }
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach(track => track.stop())
    }
  }

  const analyzePronunciation = async (blob: Blob) => {
    setLoadingAnalysis(true)
    try {
      const formData = new FormData()
      formData.append('audio', blob, 'recording.webm')
      formData.append('targetText', question.word)
      formData.append('language', question.languageCode)

      const res = await fetch('/api/ai/pronounce', { method: 'POST', body: formData })
      const data = await res.json()
      if (res.ok) setFeedback(data)
    } catch (err) {
      console.error("Analysis failed")
    } finally {
      setLoadingAnalysis(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700">
      
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20">
        <Sparkles size={12} className="text-sky-500" />
        <span className="text-[10px] font-black text-sky-600 dark:text-sky-400 uppercase tracking-[0.3em]">Neural Pattern Matching</span>
      </div>

      <Card className="w-full max-w-lg bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-3xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden">
        <CardBody className="flex flex-col items-center justify-center p-10 sm:p-16">
          <motion.p className="text-sky-500 dark:text-sky-400 text-3xl sm:text-4xl font-black mb-4 tracking-tight">
            {question.romanization}
          </motion.p>

          <motion.span className="text-6xl sm:text-8xl font-black text-slate-900 dark:text-white mb-10 drop-shadow-xl text-center">
            {question.word}
          </motion.span>
          
          {/* THE SHADOWING CONSOLE */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={() => playAudio(1)}
                className={`relative group w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-sky-500 shadow-lg' : 'bg-slate-100 dark:bg-slate-800 hover:bg-sky-500/10'}`}
              >
                {isAudioLoading ? <Spinner size="sm" /> : <Volume2 className={isPlaying ? 'text-white' : 'text-sky-500'} size={24} />}
                {isPlaying && <span className="absolute inset-0 rounded-full border-2 border-sky-500 animate-ping opacity-40"></span>}
              </button>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Listen</span>
            </div>

            <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-800" />

            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={recording ? stopRecording : startRecording}
                disabled={loadingAnalysis}
                className={`group w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                  recording ? 'bg-rose-500 border-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.4)]' : 
                  loadingAnalysis ? 'bg-slate-100 dark:bg-slate-800 border-transparent' :
                  'bg-slate-100 dark:bg-slate-800 border-transparent hover:border-emerald-500/30 hover:bg-emerald-500/10'
                }`}
              >
                {loadingAnalysis ? <Spinner size="sm" /> : recording ? <StopCircle className="text-white" size={24} /> : <Mic className="text-slate-400 group-hover:text-emerald-500" size={24} />}
              </button>
              <span className={`text-[9px] font-bold uppercase tracking-widest ${recording ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`}>
                {recording ? 'Stop' : 'Repeat'}
              </span>
            </div>

            <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-800" />

            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={() => playAudio(0.6)}
                className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center hover:bg-amber-500/10 transition-all text-slate-400 hover:text-amber-500"
              >
                <Volume1 size={20} />
              </button>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Slow</span>
            </div>
          </div>

          {/* Feedback Area */}
          <AnimatePresence>
            {feedback && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 w-full text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {feedback.score >= 70 ? <CheckCircle2 className="text-emerald-500" size={16} /> : <Activity className="text-amber-500" size={16} />}
                  <span className={`font-black text-xl ${feedback.score >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>Accuracy: {feedback.score}%</span>
                </div>
                <p className="text-xs text-slate-500 italic">"{feedback.feedback}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardBody>
      </Card>

      <div className="w-full max-w-xl space-y-4">
        <div className="flex items-center gap-2 px-2">
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Decode Meaning</span>
          <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((option, i) => (
            <motion.div key={option} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.05 }}>
              <button 
                onClick={() => onAnswer(option)}
                disabled={disabled}
                className={`w-full h-20 text-xl font-bold rounded-2xl border-2 transition-all duration-300 ${selectedAnswer === option ? 'bg-sky-500 border-sky-400 text-white shadow-xl -translate-y-1' : 'bg-white/50 dark:bg-white/5 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-sky-500/50'}`}
              >
                {option}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
