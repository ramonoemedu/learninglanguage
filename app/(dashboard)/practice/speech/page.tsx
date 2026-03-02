// app/(dashboard)/practice/speech/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { Mic2, ArrowLeft, Activity, Sparkles, CheckCircle2, AlertCircle, RefreshCw, Volume2, Square, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Card, CardBody, Progress, Spinner } from '@heroui/react'

interface Phrase {
  word: string
  romanization: string
  translation: string
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
  const [targetPhrase, setTargetPhrase] = useState<Phrase>({ word: '', romanization: '', translation: '' })
  const [status, setStatus] = useState<'idle' | 'listening' | 'analyzing' | 'success' | 'fail' | 'error' | 'loading'>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('')

  const [currentLevel, setCurrentLevel] = useState(1)
  const [phrasePool, setPhrasePool] = useState<Phrase[]>([])
  const [showDetails, setShowDetails] = useState(false)

  const recognitionRef = useRef<any>(null)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition()
      recognition.continuous = true; recognition.interimResults = true; recognition.lang = 'zh-CN'
      recognition.onstart = () => { setStatus('listening'); setIsRecording(true) }
      recognition.onresult = (event: any) => {
        let currentTranscript = ''; for (let i = 0; i < event.results.length; i++) { currentTranscript += event.results[i][0].transcript }
        setTranscript(currentTranscript)
      }
      recognition.onerror = (event: any) => { setErrorMessage(`Signal Error: ${event.error}`); setStatus('error'); setIsRecording(false) }
      recognition.onend = () => setIsRecording(false)
      recognitionRef.current = recognition
    }
  }, [])

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices()
      setVoices(allVoices)

      if (!selectedVoiceURI && allVoices.length > 0) {
        const meijia = allVoices.find(v => v.name.includes('Meijia') || v.lang.includes('zh-TW'))
        const zhVoice = allVoices.find(v => v.lang.includes('zh') || v.lang.includes('cmn'))
        const defaultVoice = meijia || zhVoice || allVoices[0]
        if (defaultVoice) setSelectedVoiceURI(defaultVoice.voiceURI)
      }
    }
    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
  }, [selectedVoiceURI])

  const fetchPhrases = async () => {
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch(`/api/practice/phrases?level=${currentLevel}&lang=zh`)
      if (!res.ok) throw new Error('Failed to sync phrase matrix.')
      const data = await res.json()
      if (data.phrases && data.phrases.length > 0) {
        setPhrasePool(data.phrases)
        setTargetPhrase(data.phrases[0])
        setStatus('idle')
      } else {
        throw new Error('No phrases found for this level.')
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Could not load matrix.')
      setStatus('error')
    }
  }

  useEffect(() => { fetchPhrases() }, [currentLevel])

  const playTargetAudio = () => {
    if (typeof window === 'undefined' || !targetPhrase.word) return
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(targetPhrase.word)
    utterance.lang = 'zh-CN'
    utterance.rate = playbackSpeed

    const voice = voices.find(v => v.voiceURI === selectedVoiceURI)
    if (voice) utterance.voice = voice

    window.speechSynthesis.speak(utterance)
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      setTranscript(''); setScore(null); setErrorMessage('')
      recognitionRef.current?.start()
    } catch (err) {
      setErrorMessage('Mic access denied.'); setStatus('error')
    }
  }

  const stopRecording = () => {
    if (recognitionRef.current) recognitionRef.current.stop()
    if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
    setIsRecording(false)
    if (transcript) analyzePronunciation(transcript)
    else setStatus('idle')
  }

  const analyzePronunciation = (input: string) => {
    setStatus('analyzing')
    setTimeout(() => {
      const target = targetPhrase.word.replace(/[，。？！]/g, '')
      const normalizedInput = input.replace(/[，。？！]/g, '')
      let matches = 0
      target.split('').forEach(char => { if (normalizedInput.includes(char)) matches++ })
      const finalScore = Math.min(100, Math.round((matches / target.length) * 100))
      setScore(finalScore); setStatus(finalScore >= 70 ? 'success' : 'fail')
      setShowDetails(true)
    }, 1200)
  }

  const generateNewPhrase = () => {
    if (phrasePool.length <= 1) { fetchPhrases(); return }
    let newPhrase = targetPhrase
    while (newPhrase.word === targetPhrase.word) {
      newPhrase = phrasePool[Math.floor(Math.random() * phrasePool.length)]
    }
    setTargetPhrase(newPhrase)
    setScore(null); setTranscript(''); setStatus('idle'); setErrorMessage('')
    setShowDetails(false)
  }

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-2 bg-white/40 dark:bg-white/5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-lg">
          <div className="md:col-span-4 relative group">
            <select value={currentLevel} onChange={(e) => setCurrentLevel(Number(e.target.value))} className="w-full bg-white dark:bg-[#050b14] border-2 border-transparent hover:border-sky-500/30 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest outline-none appearance-none cursor-pointer transition-all">
              {stages.map(s => <option key={s.num} value={s.num}>{`${s.level} - ${s.title}`}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
          </div>
          <div className="md:col-span-4 relative group">
            <select value={selectedVoiceURI} onChange={(e) => setSelectedVoiceURI(e.target.value)} className="w-full bg-white dark:bg-[#050b14] border-2 border-transparent hover:border-sky-500/30 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest outline-none appearance-none cursor-pointer transition-all">
              {voices.filter(v => v.lang.includes('zh') || v.lang.includes('cmn') || v.name.includes('Chinese')).map(v => (
                <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />
          </div>
          <div className="md:col-span-4 flex items-center gap-2 p-1 bg-white dark:bg-[#050b14] rounded-xl border-2 border-transparent">
            {[0.5, 1.0, 1.5, 2.0].map((s) => (
              <button key={s} onClick={() => setPlaybackSpeed(s)} className={`flex-1 px-3 py-2 rounded-lg text-[10px] font-black transition-all ${playbackSpeed === s ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-500 hover:bg-sky-500/10'}`}>{s}x</button>
            ))}
          </div>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Card className="lg:col-span-7 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-[40px] shadow-2xl overflow-hidden min-h-[450px]">
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
                <>
                  <div className="space-y-6">
                    <span className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em]">Target Matrix</span>

                    <div className="space-y-4">
                      <div className="text-5xl sm:text-7xl font-black tracking-tighter leading-tight">{targetPhrase.word}</div>

                      <div className="space-y-1 relative">
                        <div className={`space-y-1 transition-all duration-300 ${showDetails ? 'blur-0' : 'blur-md select-none pointer-events-none'}`}>
                          <div className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400 italic tracking-wide">
                            "{targetPhrase.translation}"
                          </div>
                          {targetPhrase.romanization && (
                            <div className="text-base sm:text-lg font-mono font-bold text-sky-500/80 dark:text-sky-400/80 tracking-widest">
                              {targetPhrase.romanization}
                            </div>
                          )}
                        </div>
                        {!showDetails && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button onClick={() => setShowDetails(true)} className="px-6 py-2 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/20 font-bold text-xs uppercase tracking-widest hover:bg-sky-500/20 transition-all">
                              Reveal
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <button onClick={playTargetAudio} className="mx-auto flex items-center gap-3 px-8 py-3 rounded-full bg-sky-500 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 transition-all">
                      <Volume2 size={18} /> Listen to Signal
                    </button>
                  </div>

                  <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800" />

                  <div className="space-y-4 w-full">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Signal</span>
                    <div className={`text-2xl font-bold min-h-[40px] ${status === 'listening' ? 'text-sky-500 animate-pulse' : 'text-slate-600 dark:text-slate-300'}`}>
                      {transcript || (status === 'listening' ? 'Capturing Waves...' : status === 'analyzing' ? 'Verifying Patterns...' : 'Awaiting Input...')}
                    </div>
                  </div>
                </>
              )}
            </CardBody>
          </Card>

          <div className="lg:col-span-5 space-y-8">
            <Card className="transition-all duration-500 bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-[40px] p-8 shadow-xl">
              <CardBody className="flex flex-col items-center gap-8">
                <button onClick={isRecording ? stopRecording : startRecording} disabled={status === 'loading' || status === 'analyzing'} className="relative w-36 h-36 rounded-full flex items-center justify-center transition-all duration-500 bg-sky-500 shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:scale-105 active:scale-95">
                  {status === 'analyzing' ? <Spinner size="lg" color="white" /> : isRecording ? <Square className="text-white fill-white" size={32} /> : <Mic2 size={56} className="text-white" />}
                  {isRecording && <span className="absolute inset-[-15px] rounded-full border-2 border-rose-500 animate-ping opacity-20" />}
                </button>
                <div className="text-center space-y-3">
                  <span className="text-sm font-black uppercase tracking-[0.2em]">{status === 'listening' ? 'Stop Recording' : 'Push to Speak'}</span>
                  {errorMessage && <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest text-center">{errorMessage}</p>}
                </div>
              </CardBody>
            </Card>
            <Button onClick={generateNewPhrase} disabled={status === 'loading' || status === 'analyzing'} className="w-full h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 font-black uppercase tracking-widest text-xs hover:bg-sky-500 hover:text-white transition-all shadow-md group">
              <RefreshCw size={16} className="mr-2 group-hover:rotate-180 transition-transform duration-700" /> New Neural Pattern
            </Button>

            <AnimatePresence>{score !== null && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
                  <CardBody className="space-y-6">
                    <div className="space-y-2 text-center">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Accuracy Score</span>
                        <div className={`flex items-center gap-2 ${score >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
                          <span className="text-3xl font-black">{score}%</span>
                        </div>
                      </div>
                      <Progress value={score} color={score >= 70 ? 'success' : 'warning'} className="h-2.5" aria-label={`Accuracy score: ${score}%`} />
                    </div>
                    <div className="text-left space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pinyin</p>
                        <p className="font-mono font-bold text-sky-500/80 dark:text-sky-400/80 tracking-widest text-lg">
                          {targetPhrase.romanization}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Translation</p>
                        <p className="font-medium text-slate-500 dark:text-slate-400 italic text-lg">
                          "{targetPhrase.translation}"
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            )}</AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}
