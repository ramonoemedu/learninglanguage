// components/lesson/Speaking.tsx
'use client'

import { Button, Card, CardBody, Progress, Spinner } from '@heroui/react'
import { Mic, StopCircle, CheckCircle2, AlertCircle, Volume2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface SpeakingProps {
  question: {
    prompt: string
    correctAnswer: string
    romanization?: string
    audioUrl?: string
    languageCode: string
  }
  onAnswer: (answer: string) => void
  disabled?: boolean
}

export default function Speaking({ question, onAnswer, disabled }: SpeakingProps) {
  const [recording, setRecording] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [feedback, setFeedback] = useState<{ score: number, transcript: string, feedback: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioBlob) {
      if (audioRef.current) {
        audioRef.current.src = URL.createObjectURL(audioBlob)
      }
    }
  }, [audioBlob])

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
        setRecording(false)
        await sendAudioForPronunciation(blob)
      }

      recorder.start()
      setRecording(true)
      setMediaRecorder(recorder)
    } catch (err) {
      console.error('Error starting recording:', err)
      setError('Could not access microphone. Please ensure permissions are granted.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach(track => track.stop()); // Stop microphone access
    }
  }

  const sendAudioForPronunciation = async (blob: Blob) => {
    setLoading(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('audio', blob, 'recording.webm')
      formData.append('targetText', question.correctAnswer)
      formData.append('language', question.languageCode)

      const res = await fetch('/api/ai/pronounce', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get pronunciation feedback.')
      }
      setFeedback(data)
      onAnswer(data.transcript) // Pass the transcript as the user's answer
    } catch (err: any) {
      console.error('Error sending audio:', err)
      setError(err.message)
      setFeedback(null)
    } finally {
      setLoading(false)
    }
  }

  const playCorrectAudio = async () => {
    // Implement playing the correct audio here, similar to FlashCard component
    // Could use question.audioUrl if pre-generated or call /api/ai/tts
    // For now, simple console log
    console.log("Playing correct pronunciation audio for:", question.correctAnswer)
  }

  return (
    <div className="w-full flex flex-col items-center gap-10 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold">{question.prompt}</h2>

      <Card className="w-full min-h-[150px] border-2 border-default-100 bg-default-50/50 shadow-none flex flex-col items-center justify-center p-10">
        <span className="text-5xl mb-2 font-black">{question.correctAnswer}</span>
        {question.romanization && <p className="text-default-400 text-xl">{question.romanization}</p>}
        
        <div className="mt-6 flex gap-4">
            <Button 
                size="sm" 
                variant="flat" 
                color="secondary" 
                startContent={<Volume2 size={18} />}
                onClick={playCorrectAudio}
                isDisabled={disabled}
            >
                Hear Native
            </Button>
            {recording ? (
                <Button 
                    color="danger" 
                    onClick={stopRecording} 
                    startContent={<StopCircle size={24} />} 
                    isDisabled={disabled}
                >
                    Stop Recording
                </Button>
            ) : (
                <Button 
                    color="primary" 
                    onClick={startRecording} 
                    startContent={loading ? <Spinner size="sm" color="white" /> : <Mic size={24} />} 
                    isDisabled={disabled || loading}
                >
                    {loading ? 'Analyzing...' : 'Start Recording'}
                </Button>
            )}
        </div>
        {error && <p className="text-sm text-danger mt-4">{error}</p>}
      </Card>

      {feedback && (
        <Card className="w-full mt-6 p-4">
          <CardBody className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {feedback.score >= 70 ? (
                <CheckCircle2 size={24} className="text-success" />
              ) : (
                <AlertCircle size={24} className="text-danger" />
              )}
              <span className="font-bold text-xl">Score: {feedback.score}/100</span>
            </div>
            <p className="text-sm text-default-500">You said: "{feedback.transcript}"</p>
            <p className="text-sm">{feedback.feedback}</p>
          </CardBody>
        </Card>
      )}
    </div>
  )
}
