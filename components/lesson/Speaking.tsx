// components/lesson/Speaking.tsx
'use client'

import { Button, Card, CardBody, Progress, Spinner } from '@heroui/react'
import { Mic, Square, CheckCircle2, AlertCircle, Volume2, Sparkles, Activity, Headphones, Play } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SpeakingProps {
  question: {
    prompt?: string
    correctAnswer: string
    romanization?: string
    pinyin?: string
    audioUrl?: string
    languageCode: string
    word?: string
  }
  onAnswer: (answer: string) => void
  disabled?: boolean
  playTTS: (text: string, forceSpeed?: number) => Promise<void>
}

export default function Speaking({ question, onAnswer, disabled, playTTS }: SpeakingProps) {
  const [recording, setRecording] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [feedback, setFeedback] = useState<{ score: number, transcript: string, feedback: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isPlayingNative, setIsPlayingNative] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playNativeAudio = async () => {
    if (isPlayingNative) return
    setIsPlayingNative(true)
    try {
      await playTTS(question.word || question.correctAnswer)
    } catch (err) {
      console.error('TTS error:', err)
    } finally {
      setIsPlayingNative(false)
    }
  }

  const startRecording = async () => {
    setFeedback(null)
    setError('')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      const audioChunks: BlobPart[] = []

      recorder.ondataavailable = (event) => {
        audioChunks.push(event.data)
      }

      recorder.onstop = async () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm; codecs=opus' })
        setAudioBlob(blob)
        setLoading(true)
        setRecording(false)
        await sendAudioForPronunciation(blob)
      }

      recorder.start()
      setRecording(true)
      setMediaRecorder(recorder)
    } catch (err) {
      setError('Neural sensor blocked. Check mic permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach(track => track.stop())
    }
  }

  const sendAudioForPronunciation = async (blob: Blob) => {
    setLoading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('audio', blob, 'recording.webm')
      formData.append('targetText', question.word || question.correctAnswer)
      formData.append('language', question.languageCode)

      const res = await fetch('/api/ai/pronounce', { method: 'POST', body: formData })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Signal analysis failed.')
      setFeedback(data)
      onAnswer(data.transcript)
    } catch (err: any) {
      setError(err.message)
      setFeedback(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-700">

      {/* HUD Label */}
      <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
        <Activity size={12} className="text-indigo-500 animate-pulse" />
        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.3em]">Vocal Calibration</span>
      </div>

      <Card className="w-full max-w-lg bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-3xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[40px] overflow-hidden">
        <CardBody className="flex flex-col items-center justify-center p-10 sm:p-16">

          <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">{question.prompt || "Speak the sentence"}</h2>
          <motion.p
            animate={{ scale: isPlayingNative ? 1.05 : 1 }}
            className="text-sky-500 dark:text-sky-400 text-3xl sm:text-4xl font-black mb-4 tracking-tight"
          >
            {question.pinyin || question.correctAnswer}
          </motion.p>
          {/* 1. PRONUNCIATION HIERARCHY */}
          <motion.p
            animate={{ scale: isPlayingNative ? 1.05 : 1 }}
            className="text-sky-500 dark:text-sky-400 text-3xl sm:text-4xl font-black mb-4 tracking-tight"
          >
            {question.pinyin || question.romanization}
          </motion.p>

          <span className="text-6xl sm:text-7xl font-black text-slate-900 dark:text-white mb-12">
            {question.word || question.correctAnswer}
          </span>

          {/* 2. THE SHADOWING CONSOLE */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={playNativeAudio}
                className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isPlayingNative ? 'bg-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.5)]' : 'bg-slate-100 dark:bg-slate-800 hover:bg-sky-500/10'}`}
              >
                <Volume2 className={isPlayingNative ? 'text-white' : 'text-sky-500'} size={24} />
                {isPlayingNative && <span className="absolute inset-0 rounded-full border-2 border-sky-500 animate-ping opacity-40" />}
              </button>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Listen</span>
            </div>

            <div className="h-12 w-[1px] bg-slate-200 dark:bg-slate-800" />

            <div className="flex flex-col items-center gap-2">
              {recording ? (
                <button
                  onClick={stopRecording}
                  className="relative w-20 h-20 rounded-full bg-rose-500 flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.4)] animate-pulse"
                >
                  <Square className="text-white fill-current" size={32} />
                  <div className="absolute inset-[-8px] rounded-full border-2 border-rose-500/30 animate-ping" />
                </button>
              ) : (
                <button
                  onClick={startRecording}
                  disabled={loading || disabled}
                  className="w-20 h-20 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:-translate-y-1 transition-all disabled:opacity-50"
                >
                  {loading ? <Spinner color="white" /> : <Mic size={32} />}
                </button>
              )}
              <span className="text-[9px] font-black text-sky-500 uppercase tracking-widest mt-1">
                {recording ? 'Stop' : loading ? 'Analyzing...' : 'Speak Now'}
              </span>
            </div>
          </div>

          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold text-rose-500 mt-8 uppercase tracking-widest flex items-center gap-2">
              <AlertCircle size={14} /> {error}
            </motion.p>
          )}
        </CardBody>
      </Card>

      {/* 3. INTELLIGENT FEEDBACK */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-lg p-6 rounded-3xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${feedback.score >= 70 ? 'bg-emerald-500/20' : 'bg-amber-500/20'}`}>
                  {feedback.score >= 70 ? <CheckCircle2 className="text-emerald-500" size={18} /> : <Activity className="text-amber-500" size={18} />}
                </div>
                <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">Signal Analysis</h3>
              </div>
              <span className={`text-2xl font-black ${feedback.score >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>{feedback.score}%</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Decoded Input</span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">"{feedback.transcript}"</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">{feedback.feedback}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
