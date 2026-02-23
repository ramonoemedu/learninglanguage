'use client'
import { useEffect } from "react"

interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  maxWidth?: string
}

export default function BaseModal({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-md",
}: BaseModalProps) {

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
      />

      {/* Panel */}
      <div
        className={`relative z-10 w-full ${maxWidth} mx-4
        bg-white/80 dark:bg-[#050b14]/90
        backdrop-blur-2xl
        border border-slate-200/80 dark:border-slate-800/80
        shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.15)]
        rounded-2xl
        animate-in zoom-in-95 fade-in duration-300`}
      >
        {children}
      </div>
    </div>
  )
}


