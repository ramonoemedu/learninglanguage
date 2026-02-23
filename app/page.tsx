'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Languages, BookOpen, MessageSquare, ChevronRight, Globe2, Sparkles, Cpu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ThemeToggleSwitch } from '@/components/Layouts/header/theme-toggle'

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
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white overflow-hidden font-sans relative transition-colors duration-500 selection:bg-sky-500/30">

      {/* ========================================================= */}
      {/* 1. MOUSE GLOW EFFECT */}
      {/* ========================================================= */}
      {mounted && (
        <div
          className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 mix-blend-screen dark:mix-blend-lighten"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), transparent 40%)`
          }}
        />
      )}

      {/* ========================================================= */}
      {/* 2. 3D FUTURE AI BACKGROUND (Light & Dark Compatible) */}
      {/* ========================================================= */}
      <div className="fixed inset-0 overflow-hidden [perspective:1000px] -z-20 pointer-events-none">

        {/* Top/Bottom fades so the grid blends smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50 dark:from-[#030712] dark:via-transparent dark:to-[#030712] z-10 transition-colors duration-500" />

        {/* The Glowing Horizon Line */}
        <div className="absolute top-[45%] left-0 right-0 h-[2px] bg-sky-500/20 dark:bg-sky-500/30 blur-[4px] z-10" />

        {/* LIGHT MODE: The 3D Moving Perspective Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 80px"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute w-[200%] h-[150%] left-[-50%] bottom-[-40%] [transform:rotateX(75deg)] z-0 dark:hidden opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px), 
              linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* DARK MODE: The 3D Moving Perspective Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 80px"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute w-[200%] h-[150%] left-[-50%] bottom-[-40%] [transform:rotateX(75deg)] z-0 hidden dark:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px), 
              linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)
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
                className="absolute bg-sky-400 dark:bg-sky-400 rounded-full"
                style={{
                  left: `${randomX}%`,
                  bottom: '-5%',
                  width: randomSize,
                  height: randomSize,
                  boxShadow: '0 0 15px 2px rgba(56, 189, 248, 0.4)'
                }}
                animate={{
                  y: ['0vh', '-120vh'],
                  x: [`0px`, `${Math.random() * 80 - 40}px`],
                  opacity: [0, 0.6, 0],
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

      {/* --- Navigation --- */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50"
      >
        <div className="relative rounded-2xl p-[1px] overflow-hidden shadow-lg dark:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
          {/* Animated Border Spin */}
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#38bdf8_100%)] opacity-30 dark:opacity-70" />

          {/* Glass Navbar */}
          <div className="relative h-16 bg-white/80 dark:bg-[#030712]/90 backdrop-blur-2xl rounded-2xl flex justify-between items-center px-4 sm:px-6">

            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-all duration-300">
                <Languages className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block">
                Learning<span className="text-sky-500 dark:text-sky-400">Language</span>
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-white transition-colors">Features</Link>
              <Link href="#method" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-white transition-colors">Method</Link>
              <Link href="#pricing" className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-white transition-colors">Pricing</Link>
            </div>

            {/* Actions & Theme Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggleSwitch />
              <Link href="/login" className="hidden sm:block">
                <button className="h-10 px-4 rounded-xl text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                  Log In
                </button>
              </Link>
              <Link href="/register">
                <button className="h-10 px-5 bg-sky-500 text-white font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 transition-all duration-300 ease-out">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">

            {/* HUD Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 mb-8 backdrop-blur-md shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest">Next-Generation Language AI</span>
            </motion.div>

            {/* Hero Text */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-lg">
              Master Any <br className="hidden sm:block" />
              <span className="relative whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-blue-600">
                  Language
                </span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-4">
              The natural path from baby steps to fluency. Powered by intelligent neural networks for immersive journeys in Chinese, English, and Khmer.
            </motion.p>

            {/* Hero CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4">

              <Link href="/register" className="w-full sm:w-auto block">
                <button className="group relative w-full sm:w-64 h-14 flex items-center justify-center gap-2 bg-sky-500 text-white rounded-xl shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                  <span className="text-sm font-bold tracking-wide">Initialize Training</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/system-specs" className="w-full sm:w-auto block">
                <button className="group relative w-full sm:w-64 h-14 flex items-center justify-center gap-3 bg-white/50 dark:bg-[#050b14]/50 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white dark:hover:bg-slate-800/40 hover:border-sky-500/50 dark:hover:border-sky-400/50 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  <Cpu size={16} className="text-slate-500 dark:text-slate-400 group-hover:text-sky-500 dark:group-hover:text-sky-400 group-hover:scale-110 transition-all duration-300 ease-out" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300">
                    View System Specs
                  </span>
                  {/* Subtle Corner Brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-sky-500/0 group-hover:border-sky-500/50 rounded-tl-xl transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-sky-500/0 group-hover:border-sky-500/50 rounded-br-xl transition-colors duration-300" />
                </button>
              </Link>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Features Preview (Bento Cards) --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Dynamic Processing", desc: "Curated levels that dynamically adapt to your neural acquisition rate.", color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10", glow: "hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]" },
              { icon: MessageSquare, title: "Conversational AI", desc: "Real-time voice synthesis and chat agents that correct you instantly.", color: "text-fuchsia-600 dark:text-fuchsia-400", bg: "bg-fuchsia-500/10", glow: "hover:border-fuchsia-500/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]" },
              { icon: Globe2, title: "Cultural Matrix", desc: "Deep-learning models that understand nuances, slang, and context.", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10", glow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`group p-8 rounded-2xl bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 hover:-translate-y-1 transition-all duration-300 ease-out shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.02)] ${feature.glow}`}
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`${feature.color} w-7 h-7`} />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}