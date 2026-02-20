'use client'

import { Button } from '@heroui/react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Languages, Rocket, BookOpen, MessageSquare, Trophy, ChevronRight, Globe2, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    // Track mouse movement for the glow effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    // Forcing a dark/deep-blue background so the futuristic grid and glow are highly visible
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden font-sans relative">

      {/* ========================================================= */}
      {/* 1. MOUSE GLOW EFFECT */}
      {/* ========================================================= */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), transparent 40%)`
          }}
        />
      )}

      {/* ========================================================= */}
      {/* 2. 3D FUTURE AI BACKGROUND (Guaranteed Visible) */}
      {/* ========================================================= */}
      <div className="fixed inset-0 overflow-hidden [perspective:1000px] -z-20 pointer-events-none">

        {/* Top fade so the grid blends into the darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] z-10" />

        {/* The Glowing Horizon Line */}
        <div className="absolute top-[45%] left-0 right-0 h-[2px] bg-sky-500/30 blur-[4px] z-10" />

        {/* The 3D Moving Perspective Grid - Hardcoded cyan colors for guaranteed visibility */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 80px"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute w-[200%] h-[150%] left-[-50%] bottom-[-40%] [transform:rotateX(75deg)] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.2) 1px, transparent 1px), 
              linear-gradient(to bottom, rgba(56, 189, 248, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* 3. Floating AI Neural Particles */}
      {mounted && (
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
          {[...Array(30)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomDuration = Math.random() * 15 + 10;
            const randomDelay = Math.random() * -20;
            const randomSize = Math.random() * 3 + 1;

            return (
              <motion.div
                key={i}
                className="absolute bg-sky-400 rounded-full"
                style={{
                  left: `${randomX}%`,
                  bottom: '-5%',
                  width: randomSize,
                  height: randomSize,
                  boxShadow: '0 0 15px 2px rgba(56, 189, 248, 0.6)'
                }}
                animate={{
                  y: ['0vh', '-120vh'],
                  x: [`0px`, `${Math.random() * 80 - 40}px`],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "linear",
                }}
              />
            )
          })}
        </div>
      )}
      {/* ========================================================= */}

      {/* Navigation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50"
      >
        <div className="relative rounded-full p-[1px] overflow-hidden shadow-2xl shadow-sky-500/10">
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#38bdf8_100%)] opacity-70" />
          <div className="relative h-16 bg-[#030712]/80 backdrop-blur-xl rounded-full flex justify-between items-center px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-full flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-all duration-300">
                <Languages className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white hidden sm:block">
                Learning<span className="text-sky-400">Language</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</Link>
              <Link href="#method" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Method</Link>
              <Link href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center gap-2">
              <Link href="/login" className="hidden sm:block">
                <Button variant="light" size="sm" className="font-medium text-sm text-slate-300 rounded-full hover:bg-slate-800 px-4">Log In</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-500/30 px-5 rounded-full hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">

            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-8 border border-sky-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.1)]">
              <Sparkles size={16} className="text-sky-400 animate-pulse" />
              <span>Next-Generation Language AI</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-lg">
              Master Any <br className="hidden sm:block" />
              <span className="relative whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">Language</span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-normal leading-relaxed px-4">
              The natural path from baby steps to fluency. Powered by intelligent neural networks for immersive journeys in Chinese, English, and Khmer.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full sm:w-auto">
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" className="bg-sky-500 text-white w-full sm:w-64 h-14 text-base font-semibold shadow-[0_0_30px_rgba(56,189,248,0.3)] group rounded-full border border-sky-400/50 hover:bg-sky-400 transition-all">
                  Initialize Training
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform ml-1" />
                </Button>
              </Link>
              <Button size="lg" variant="bordered" className="text-white border-slate-700 w-full sm:w-64 h-14 text-base font-medium border-2 rounded-full hover:bg-slate-800/50 backdrop-blur-sm transition-colors">
                View System Specs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Dynamic Processing", desc: "Curated levels that dynamically adapt to your neural acquisition rate.", color: "text-sky-400", bg: "bg-sky-500/10", border: "hover:border-sky-500/50" },
              { icon: MessageSquare, title: "Conversational AI", desc: "Real-time voice synthesis and chat agents that correct you instantly.", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "hover:border-fuchsia-500/50" },
              { icon: Globe2, title: "Cultural Matrix", desc: "Deep-learning models that understand nuances, slang, and context.", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/50" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800 ${feature.border} hover:bg-slate-900/60 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`${feature.color} w-7 h-7`} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}