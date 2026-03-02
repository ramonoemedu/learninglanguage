'use client'

import { useState, useEffect } from 'react'
import { Button, Card, CardHeader, CardBody, Divider, Spinner, Progress } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, ChevronLeft, Globe2 } from 'lucide-react'

interface Language {
  id: string
  code: string
  name: string
  flag: string
}

export default function OnboardingPage() {
  const [languages, setLanguages] = useState<Language[]>([])
  const [nativeLang, setNativeLang] = useState('')
  const [targetLang, setTargetLang] = useState('')
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch('/api/languages')
        const data = await res.json()
        setLanguages(data)
      } catch (err) {
        console.error('Failed to load languages', err)
      } finally {
        setInitialLoading(false)
      }
    }
    fetchLanguages()
  }, [])

  const handleOnboarding = async () => {
    if (!nativeLang || !targetLang) return
    setLoading(true)

    try {
      const res = await fetch('/api/users/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nativeLanguage: nativeLang,
          targetLanguage: targetLang,
        }),
      })

      if (!res.ok) throw new Error('Failed to save onboarding data')

      router.push('/dashboard')
      router.refresh()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <Spinner size="lg" color="primary" />
          <p className="text-default-500 animate-pulse">Setting up your experience...</p>
        </div>
      </div>
    )
  }

  const progressValue = step === 1 ? 50 : 100

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl">
        {/* Progress header */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Setup your profile</h1>
              <p className="text-default-500">Step {step} of 2</p>
            </div>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              {progressValue}% Complete
            </div>
          </div>
          <Progress
            value={progressValue}
            className="h-2"
            color="primary"
            aria-label={`Profile setup progress: ${progressValue}%`}
            classNames={{
              indicator: "bg-gradient-to-r from-primary to-primary-400"
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-none shadow-xl shadow-black/5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
              <CardHeader className="flex flex-col items-start px-8 pt-8 pb-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                  <Globe2 size={24} />
                </div>
                <h2 className="text-2xl font-bold">
                  {step === 1 ? 'What is your native language?' : 'What language do you want to learn?'}
                </h2>
                <p className="text-default-500">
                  {step === 1
                    ? 'Select the language you are most comfortable with.'
                    : 'Choose your first target language. You can add more later.'}
                </p>
              </CardHeader>

              <CardBody className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(step === 1 ? languages : languages.filter(l => l.code !== nativeLang)).map(lang => {
                    const isSelected = (step === 1 && nativeLang === lang.code) || (step === 2 && targetLang === lang.code)

                    return (
                      <Card
                        key={lang.code}
                        isPressable
                        className={`relative overflow-hidden p-6 flex flex-row items-center gap-4 border-2 transition-all duration-200 group ${isSelected
                            ? 'border-primary bg-primary-50 dark:bg-primary-900/20'
                            : 'border-default-100 bg-white dark:bg-zinc-800 hover:border-primary-200'
                          }`}
                        onClick={() => {
                          if (step === 1) {
                            setNativeLang(lang.code)
                          } else {
                            setTargetLang(lang.code)
                          }
                        }}
                      >
                        <span className="text-4xl group-hover:scale-110 transition-transform">{lang.flag}</span>
                        <div className="flex flex-col items-start">
                          <span className="font-bold text-lg">{lang.name}</span>
                          <span className="text-xs text-default-400 uppercase tracking-wider">{lang.code}</span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                      </Card>
                    )
                  })}
                </div>

                <div className="flex justify-between mt-12 gap-4">
                  {step === 2 ? (
                    <Button
                      variant="light"
                      startContent={<ChevronLeft size={20} />}
                      onClick={() => { setStep(1); setTargetLang(''); }}
                      className="font-medium"
                    >
                      Back
                    </Button>
                  ) : <div />}

                  {step === 1 ? (
                    <Button
                      color="primary"
                      className="px-8 font-bold h-12 shadow-lg shadow-primary/20"
                      isDisabled={!nativeLang}
                      onClick={() => setStep(2)}
                      endContent={<ChevronRight size={20} />}
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      className="px-8 font-bold h-12 shadow-lg shadow-primary/20"
                      isDisabled={!targetLang}
                      isLoading={loading}
                      onClick={handleOnboarding}
                    >
                      Start My Journey
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>

        <p className="text-center mt-8 text-sm text-default-400">
          Join 10,000+ students learning daily
        </p>
      </div>
    </div>
  )
}
