// app/(dashboard)/practice/speech/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Mic2, ArrowLeft, Activity, Sparkles, CheckCircle2, AlertCircle, RefreshCw, Volume2, Square, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Card, CardBody, Spinner } from '@heroui/react'

// 1. Defined the strict Phrase interface
interface Phrase {
  word: string
  translation: string
  pinyin: string
}

const stages = [
  { num: 1, level: 'A0', title: 'Baby' }, { num: 2, level: 'A1', title: 'Toddler' },
  { num: 3, level: 'A1+', title: 'Child' }, { num: 4, level: 'A2', title: 'Student' },
  { num: 5, level: 'A2+', title: 'Traveler' }, { num: 6, level: 'B1', title: 'Conversationalist' },
  { num: 7, level: 'B1+', title: 'Reader' }, { num: 8, level: 'B2', title: 'Professional' },
  { num: 9, level: 'C1', title: 'Advanced' }, { num: 10, level: 'C2', title: 'Expert' }
]

export default function SpeechLabPage() {
  const router = useRouter()
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [score, setScore] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'listening' | 'analyzing' | 'success' | 'fail' | 'error' | 'loading'>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)

  // 2. State is now powered entirely by the Phrase object
  const [targetPhrase, setTargetPhrase] = useState<Phrase>({ word: '', translation: '', pinyin: '' })
  const [currentLevel, setCurrentLevel] = useState(1)
  const [phrasePool, setPhrasePool] = useState<Phrase[]>([])

  const recognitionRef = useRef<any>(null)
  const finalTranscriptRef = useRef('')

  // --- AUDIO & MIC ENGINES ---

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = 'zh-CN'

      recognition.onstart = () => {
        setStatus('listening')
        setIsRecording(true)
        finalTranscriptRef.current = ''
      }

      recognition.onresult = (event: any) => {
        let interimTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscriptRef.current += event.results[i][0].transcript
          } else {
            interimTranscript += event.results[i][0].transcript
          }
        }
        setTranscript(interimTranscript || finalTranscriptRef.current)
      }

      recognition.onerror = (event: any) => {
        setErrorMessage(`Signal Error: ${event.error}`); setStatus('error'); setIsRecording(false)
      }

      recognition.onend = () => {
        setIsRecording(false)
        if (finalTranscriptRef.current) {
          analyzePronunciation(finalTranscriptRef.current)
        } else {
          setStatus('idle')
        }
      }
      recognitionRef.current = recognition
    }
  }, [targetPhrase.word])

  const fetchPhrases = async () => {
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch(`/api/practice/phrases?level=${currentLevel}&lang=zh`)
      if (!res.ok) throw new Error('Failed to fetch phrases.')
      const data = await res.json()
      if (data.phrases && data.phrases.length > 0) {
        setPhrasePool(data.phrases)
        setTargetPhrase(data.phrases[0])
        setStatus('idle')
      } else {
        throw new Error('No phrases found.')
      }
    } catch (err: any) {
      console.warn("API failed, loading fallback phrases.", err)
      const fallbackPhrases: Phrase[] = [
        { word: "你好吗？", translation: "How are you?", pinyin: "Nǐ hǎo ma?" },
        { word: "很高兴认识你。", translation: "Nice to meet you.", pinyin: "Hěn gāoxìng rènshí nǐ." },
        { word: "我们去吃饭吧。", translation: "Let's go eat.", pinyin: "Wǒmen qù chīfàn ba." }
      ]
      setPhrasePool(fallbackPhrases)
      setTargetPhrase(fallbackPhrases[0])
      setStatus('idle')
    }
  }

  useEffect(() => { fetchPhrases() }, [currentLevel])

  // Fixed: Listen button now clears queue and hunts for a Chinese voice
  const playTargetAudio = () => {
    if (typeof window === 'undefined' || !targetPhrase.word) return
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(targetPhrase.word)
    utterance.lang = 'zh-CN'
    utterance.rate = playbackSpeed

    const voices = window.speechSynthesis.getVoices()
    const zhVoice = voices.find(voice => voice.lang.includes('zh') || voice.lang.includes('cmn') || voice.name.includes('Chinese'))
    if (zhVoice) utterance.voice = zhVoice

    window.speechSynthesis.speak(utterance)
  }

  const startRecording = () => {
    setTranscript(''); setScore(null); setErrorMessage('')
    if (recognitionRef.current) recognitionRef.current.start()
  }

  const stopRecording = () => {
    if (recognitionRef.current) recognitionRef.current.stop()
  }

  const analyzePronunciation = (input: string) => {
    setStatus('analyzing')
    setTimeout(() => {
      const target = targetPhrase.word.replace(/[，。？！.,!?]/g, '')
      const normalizedInput = input.replace(/[，。？！.,!?]/g, '')
      let matches = 0
      target.split('').forEach(char => { if (normalizedInput.includes(char)) matches++ })
      const finalScore = Math.min(100, Math.round((matches / target.length) * 100))
      setScore(finalScore)
      setStatus(finalScore >= 70 ? 'success' : 'fail')
    }, 1200)
  }

  // Fixed: Now correctly checks against the targetPhrase.word
  const generateNewPhrase = () => {
    if (phrasePool.length <= 1) {
      fetchPhrases()
      return
    }
    let newPhrase = targetPhrase
    while (newPhrase.word === targetPhrase.word) {
      newPhrase = phrasePool[Math.floor(Math.random() * phrasePool.length)]
    }
    setTargetPhrase(newPhrase)
    setScore(null); setTranscript(''); setStatus('idle'); setErrorMessage('')
  }

  // --- UI RENDER ---

  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full overflow-hidden rounded-[32px] bg-slate-50 dark:bg-[#030712] p-4 sm:p-8 2xl:p-12 text-slate-900 dark:text-white">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
        <header className="flex items-center gap-6">
          <button onClick={() => router.back()} className="group w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-sky-500 transition-all shadow-sm">
            <ArrowLeft size={20} className="text-slate-500 group-hover:text-sky-500" />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-black uppercase tracking-tighter">Speech <span className="text-sky-500">Lab</span></h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protocol: Live Matrix Sync</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 bg-white/40 dark:bg-white/5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-lg">
          <div className="relative group">
            <select value={currentLevel} onChange={(e) => setCurrentLevel(Number(e.target.value))} disabled={status === 'listening' || status === 'analyzing'} className="w-full bg-white dark:bg-[#050b14] border-2 border-transparent hover:border-sky-500/30 disabled:opacity-50 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest outline-none appearance-none cursor-pointer transition-all">
              {stages.map(s => <option key={s.num} value={s.num}>{`${s.level} - ${s.title}`}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
          </div>
          <div className="flex items-center gap-2 p-1 bg-white dark:bg-[#050b14] rounded-xl border-2 border-transparent">
            {[0.5, 1.0, 1.5, 2.0].map((s) => (
              <button key={s} onClick={() => setPlaybackSpeed(s)} disabled={status === 'listening' || status === 'analyzing'} className={`flex-1 px-3 py-2 rounded-lg text-[10px] font-black transition-all disabled:opacity-50 ${playbackSpeed === s ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-500 hover:bg-sky-500/10'}`}>{s}x</button>
            ))}
          </div>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Panel: Display */}
          <Card className="lg:col-span-7 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-transparent rounded-[40px] shadow-2xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] overflow-hidden min-h-[450px]">
            <CardBody className="p-10 flex flex-col items-center justify-center text-center space-y-10">
              {status === 'loading' && <Spinner label="Syncing New Matrix..." color="primary" />}
              {status === 'error' && (
                <div className="flex flex-col items-center gap-6">
                  <AlertCircle size={40} className="text-rose-500" />
                  <p className="text-sm font-bold text-rose-500 uppercase tracking-widest">{errorMessage}</p>
                  <Button onClick={fetchPhrases} className="font-bold uppercase tracking-widest text-xs h-12 bg-sky-500/10 text-sky-500 border border-sky-500/20">Retry Sync</Button>
                </div>
              )}
              {status !== 'loading' && status !== 'error' && (
                <AnimatePresence mode="wait">
                  <motion.div key={targetPhrase.word} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="w-full space-y-10">

                    {/* The Word, Translation, and Pinyin */}
                    <div className="space-y-4">
                      <span className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em]">Target Matrix</span>
                      <div className="text-5xl sm:text-7xl font-black tracking-tighter leading-tight text-slate-900 dark:text-white">{targetPhrase.word}</div>

                      <div className="flex flex-col items-center gap-1 mt-2">
                        <div className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400 italic tracking-wide">
                          "{targetPhrase.translation}"
                        </div>
                        {targetPhrase.pinyin && (
                          <div className="text-base sm:text-lg font-mono font-bold text-sky-500/80 dark:text-sky-400/80 tracking-widest">
                            {targetPhrase.pinyin}
                          </div>
                        )}
                      </div>

                      <button onClick={playTargetAudio} disabled={status === 'listening' || status === 'analyzing'} className="mx-auto flex items-center gap-3 px-8 py-3 mt-6 rounded-full bg-sky-500 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 transition-all">
                        <Volume2 size={18} /> Listen to Signal
                      </button>
                    </div>

                    <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800" />

                    <div className="space-y-4 w-full">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Signal</span>
                      <div className={`text-2xl font-bold min-h-[40px] ${status === 'listening' ? 'text-sky-500' : 'text-slate-600 dark:text-slate-300'}`}>
                        {transcript || (status === 'listening' ? 'Capturing Waves...' : 'Awaiting Input...')}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </CardBody>
          </Card>

          {/* Right Panel: Restored the complete dynamic states */}
          <div className="lg:col-span-5 space-y-8 flex flex-col">
            {status !== 'loading' && status !== 'error' && (
              <Card className="flex-1 transition-all duration-500 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-transparent rounded-[40px] p-8 shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)] min-h-[450px] flex items-center justify-center">
                <CardBody className="flex flex-col items-center justify-center gap-8 w-full">

                  {status === 'analyzing' && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-6">
                      <Spinner size="lg" color="primary" />
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-sky-500 animate-pulse text-center">Analyzing Signal Matrix...</span>
                    </motion.div>
                  )}

                  {(status === 'success' || status === 'fail') && score !== null && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-8 w-full">
                      <div className={`relative flex items-center justify-center w-40 h-40 rounded-full border-8 shadow-2xl ${status === 'success' ? 'border-emerald-500/20 shadow-emerald-500/10' : 'border-amber-500/20 shadow-amber-500/10'}`}>
                        <div className="flex flex-col items-center">
                          <span className="text-5xl font-black text-slate-900 dark:text-white">{score}%</span>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Match Rate</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${status === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-amber-500/10 border-amber-500/20 text-amber-500'}`}>
                        {status === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                        <span className="text-[10px] font-black uppercase tracking-widest">{status === 'success' ? 'Matrix Synchronized' : 'Sub-optimal Match'}</span>
                      </div>
                      <div className="w-full space-y-3 mt-4">
                        <Button onClick={generateNewPhrase} className="w-full h-14 bg-sky-500 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-lg shadow-sky-500/20 hover:-translate-y-1 transition-all">
                          Next Sequence <RefreshCw size={16} className="ml-2" />
                        </Button>
                        <Button onClick={() => { setStatus('idle'); setTranscript(''); setScore(null); }} className="w-full h-14 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
                          Retry Signal
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {(status === 'idle' || status === 'listening') && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-10">
                      <button onClick={isRecording ? stopRecording : startRecording} className={`relative flex items-center justify-center w-32 h-32 rounded-full transition-all duration-500 shadow-2xl ${isRecording ? 'bg-rose-500 hover:bg-rose-600 shadow-[0_0_40px_rgba(244,63,94,0.5)] animate-pulse' : 'bg-sky-500 hover:bg-sky-600 shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:-translate-y-2'}`}>
                        {isRecording ? <Square size={40} className="text-white fill-white" /> : <Mic2 size={48} className="text-white" />}
                      </button>
                      <div className="text-center space-y-2">
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{isRecording ? 'Recording Active' : 'Initialize Mic'}</p>
                        {isRecording && (
                          <div className="flex items-center justify-center gap-2">
                            <Activity size={16} className="text-rose-500 animate-bounce" />
                            <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Capturing Audio Matrix</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                </CardBody>
              </Card>
            )}

            {(status === 'idle' || status === 'listening') && (
              <Button
                onClick={generateNewPhrase}
                // FIXED: Removed the impossible 'analyzing' check
                isDisabled={status === 'listening'}
                className="w-full h-14 bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-slate-300 dark:hover:bg-white/20 transition-all"
              >
                Skip Pattern <ChevronDown size={16} className="ml-2 -rotate-90" />
              </Button>
            )}

          </div>
        </main>
      </div>
    </div>
  )
}