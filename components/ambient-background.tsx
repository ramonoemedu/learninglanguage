'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion' // Assuming motion is needed for AmbientBackground

export function AmbientBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-500/5 dark:bg-[#020617] transition-colors duration-1000">
      
      {/* 1. Subtle Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-10%)',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />

      {/* 2. Neural Network Points (Subtle dots) */}
      <div 
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.2) 1px, transparent 0)`,
          backgroundSize: '2rem 2rem',
        }}
      />

      {/* 3. Cinematic Breathing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-[120px] animate-orb-breathe" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[120px] animate-orb-breathe-reverse" />
      
      {/* 4. Interactive Mouse Glow (Very faint, elegant) */}
      <div
        className="absolute inset-0 z-10 opacity-40"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.03), transparent 60%)`
        }}
      />

      {/* 5. Tiny Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/30 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, "-20px", "0px"],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

    </div>
  );
}