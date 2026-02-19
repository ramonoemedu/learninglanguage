'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Languages, Rocket, BookOpen, MessageSquare, Trophy, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border-b border-default-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Languages className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg sm:text-2xl font-black tracking-tight text-primary">LearningLanguage</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/login">
                <Button variant="light" className="font-semibold text-sm sm:text-base px-2 sm:px-4">Log In</Button>
              </Link>
              <Link href="/register">
                <Button color="primary" className="font-bold text-sm sm:text-base shadow-lg shadow-primary/20 px-3 sm:px-6">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 px-4 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold mb-6 sm:mb-8 border border-primary/20">
              <Rocket size={14} className="sm:size-16" />
              <span>Next-Gen Language Learning Platform</span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-black mb-6 sm:mb-8 leading-[1.1] tracking-tight text-zinc-900 dark:text-white">
              Master Any Language <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                The Natural Way
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              From baby steps to expert mastery. Powered by AI to help you learn Chinese, English, or Khmer through immersive, structured journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" color="primary" className="w-full sm:w-64 h-14 sm:h-16 text-lg font-bold shadow-xl shadow-primary/30 group">
                  Start Learning for Free
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="bordered" className="w-full sm:w-64 h-14 sm:h-16 text-lg font-bold border-2">
                How it works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Structured Lessons", desc: "Carefully curated paths from basics to advanced concepts." },
              { icon: MessageSquare, title: "AI Practice Chat", desc: "Real-time conversation practice with intelligent feedback." },
              { icon: Trophy, title: "Gamified Progress", desc: "Stay motivated with streaks, achievements, and leaderboards." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800 border border-default-100 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 px-4 border-t border-default-100 bg-slate-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Languages className="text-primary w-5 h-5" />
            <span className="font-bold tracking-tight">LearningLanguage</span>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            © 2026 LearningLanguage. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}