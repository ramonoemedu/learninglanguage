'use client'

import Link from 'next/link'
import { MessageSquareText, Mic2, Headphones, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PracticeHubPage() {
  const router = useRouter()

  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between px-2">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()} 
            className="p-2 hover:bg-gray dark:hover:bg-dark-2 rounded-xl transition-colors text-dark-4"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-black text-dark dark:text-white uppercase tracking-tight">Practice Arena</h1>
            <p className="text-dark-5 dark:text-dark-6 font-bold uppercase text-xs mt-1">Refine your skills with AI</p>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        <button
          onClick={() => router.push('/practice/chat')}
          className="group rounded-[32px] bg-white dark:bg-gray-dark border-2 border-stroke dark:border-stroke-dark p-8 text-center transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/5 active:scale-95"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-[24px] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <MessageSquareText size={40} className="text-primary" />
          </div>
          <h2 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-2">AI Tutor Chat</h2>
          <p className="text-sm font-bold text-dark-5 dark:text-dark-6 leading-relaxed px-4">
            Practice conversations with your personal AI language tutor.
          </p>
        </button>

        <div className="group rounded-[32px] bg-white dark:bg-gray-dark border-2 border-stroke dark:border-stroke-dark p-8 text-center opacity-60 cursor-not-allowed">
          <div className="w-20 h-20 bg-blue/10 rounded-[24px] flex items-center justify-center mx-auto mb-6 grayscale">
            <Mic2 size={40} className="text-blue" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="bg-gray-2 dark:bg-dark-3 text-dark-4 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Coming Soon</span>
            <h2 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-2">Speech Lab</h2>
          </div>
          <p className="text-sm font-bold text-dark-5 dark:text-dark-6 leading-relaxed px-4">
            Improve your pronunciation and speaking fluency with feedback.
          </p>
        </div>

        <div className="group rounded-[32px] bg-white dark:bg-gray-dark border-2 border-stroke dark:border-stroke-dark p-8 text-center opacity-60 cursor-not-allowed">
          <div className="w-20 h-20 bg-warning/10 rounded-[24px] flex items-center justify-center mx-auto mb-6 grayscale">
            <Headphones size={40} className="text-warning" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="bg-gray-2 dark:bg-dark-3 text-dark-4 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Coming Soon</span>
            <h2 className="text-xl font-black text-dark dark:text-white uppercase tracking-tight mb-2">Audio Immersive</h2>
          </div>
          <p className="text-sm font-bold text-dark-5 dark:text-dark-6 leading-relaxed px-4">
            Train your ear to understand native speakers in various scenarios.
          </p>
        </div>
      </main>
    </div>
  )
}
