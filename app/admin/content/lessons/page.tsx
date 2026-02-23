// app/admin/content/lessons/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Spinner, Tooltip } from '@heroui/react'
import { Plus, Edit2, Trash2, Eye, Cpu, Globe, Layers, BookOpen, Zap, Coins, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Language {
  id: string
  code: string
  name: string
}

interface Stage {
  id: string
  language: Language
  stageNumber: number
  title: string
}

interface Chapter {
  id: string
  stage: Stage
  chapterNum: number
  title: string
}

interface Lesson {
  id: string
  chapter: Chapter
  type: string
  contentJson: any
  xpReward: number
  coinReward: number
}

export default function AdminLessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null)
  const [newLesson, setNewLesson] = useState({
    chapterId: '', type: 'vocab', contentJson: {}, xpReward: 10, coinReward: 5
  })
  const router = useRouter()

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) setIsModalOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [lessonsRes, chaptersRes] = await Promise.all([
        fetch('/api/admin/content/lessons'),
        fetch('/api/admin/content/chapters')
      ])

      if (!lessonsRes.ok) throw new Error('Failed to fetch lessons')
      if (!chaptersRes.ok) throw new Error('Failed to fetch chapters')

      const lessonsData = await lessonsRes.json()
      const chaptersData = await chaptersRes.json()

      setLessons(lessonsData)
      setChapters(chaptersData)
    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditingLesson(null)
    setNewLesson({ chapterId: '', type: 'vocab', contentJson: {}, xpReward: 10, coinReward: 5 })
    setIsModalOpen(true)
  }

  const openEditModal = (lesson: Lesson) => {
    setEditingLesson(lesson)
    setNewLesson({
      chapterId: lesson.chapter.id,
      type: lesson.type,
      contentJson: lesson.contentJson,
      xpReward: lesson.xpReward,
      coinReward: lesson.coinReward,
    })
    setIsModalOpen(true)
  }

  const handleSaveLesson = async () => {
    try {
      let res
      const payload = {
        ...newLesson,
        contentJson: typeof newLesson.contentJson === 'string' && newLesson.contentJson.length > 0
          ? JSON.parse(newLesson.contentJson)
          : newLesson.contentJson,
        xpReward: Number(newLesson.xpReward),
        coinReward: Number(newLesson.coinReward),
      }

      if (editingLesson) {
        res = await fetch(`/api/admin/content/lessons/${editingLesson.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch('/api/admin/content/lessons', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      if (!res.ok) throw new Error('Failed to save lesson')
      fetchData()
      setIsModalOpen(false)
    } catch (err) {
      console.error('Error saving lesson:', err)
    }
  }

  const handleDeleteLesson = async (id: string) => {
    if (!confirm(`Are you sure you want to delete lesson with ID: ${id}?`)) return
    try {
      const res = await fetch(`/api/admin/content/lessons/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete lesson')
      fetchData()
    } catch (err) {
      console.error('Error deleting lesson:', err)
    }
  }

  const lessonTypes = ['vocab', 'grammar', 'listen', 'speak', 'write', 'read', 'dialogue']

  const totalPages = Math.ceil(lessons.length / itemsPerPage)
  const currentLessons = lessons.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Shared Input Styles for the Modal
  const inputBase = "w-full bg-white/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 focus:border-sky-500 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] outline-none transition-all duration-300 rounded-xl h-12 px-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"

  // Helper for rendering glowing type badges
  const renderTypeBadge = (type: string) => {
    const typeMap: Record<string, string> = {
      vocab: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]',
      grammar: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]',
      listen: 'bg-sky-500/10 border-sky-500/30 text-sky-600 dark:text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.1)]',
      speak: 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.1)]',
      dialogue: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.1)]',
      write: 'bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.1)]',
      read: 'bg-teal-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.1)]'
    }
    const style = typeMap[type] || 'bg-slate-500/10 border-slate-500/30 text-slate-600 dark:text-slate-400'
    return (
      <span className={`inline-flex px-2.5 py-1 rounded-md border text-[10px] font-bold uppercase tracking-widest ${style}`}>
        {type}
      </span>
    )
  }

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">

      {/* --- HUD Page Header --- */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 dark:bg-sky-400/10 rounded-lg border border-sky-500/20 text-sky-500 dark:text-sky-400">
              <Cpu size={20} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Lesson Modules</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400">Interactive Content Registry</p>
            <div className="hidden sm:block w-32 h-px bg-gradient-to-r from-sky-500/20 to-transparent dark:from-sky-400/20" />
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="group flex items-center gap-2 h-10 px-4 bg-sky-500 text-white text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 ease-out hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
        >
          <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
          Append Module
        </button>
      </header>

      {/* --- Glassmorphic Data Table --- */}
      {loading ? (< div className="flex flex-col h-full w-full items-center justify-center gap-4 animate-in fade-in duration-300">
        <div className="relative">
          <Spinner size="lg" color="primary" />
          <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full animate-pulse" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 animate-pulse">
          Fetching Telemetry...
        </span>
      </div>) : (
        <div className="w-full overflow-x-auto bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Protocol / Routing</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Stage Vector</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Chapter Node</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Payload Type</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Telemetry (Rewards)</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap text-right">Overrides</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
              {currentLessons.map((lesson) => (
                <tr key={lesson.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                      <Globe size={14} className="text-sky-500 dark:text-sky-400" />
                      {lesson.chapter.stage.language.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                      <Layers size={12} /> Stage {lesson.chapter.stage.stageNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <BookOpen size={14} className="text-slate-400" />
                      Chapter {lesson.chapter.chapterNum}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {renderTypeBadge(lesson.type)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-sky-500 dark:text-sky-400">
                        <Zap size={12} />
                        {lesson.xpReward} XP
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500 dark:text-amber-400">
                        <Coins size={12} />
                        {lesson.coinReward} Cr
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      <Tooltip
                        content="Preview Simulation"
                        classNames={{
                          base: "bg-white/90 dark:bg-[#050b14]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-white shadow-[0_0_15px_rgba(56,189,248,0.15)]",
                        }}
                      >
                        <button
                          onClick={() => router.push(`/lesson/${lesson.id}`)}
                          className="p-1.5 rounded-md text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10 transition-colors"
                        >
                          <Eye size={16} />
                        </button>
                      </Tooltip>
                      <button
                        onClick={() => openEditModal(lesson)}
                        className="p-1.5 rounded-md text-slate-400 hover:text-sky-500 hover:bg-sky-500/10 dark:hover:bg-sky-400/10 transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteLesson(lesson.id)}
                        className="p-1.5 rounded-md text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 dark:hover:bg-rose-500/10 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* --- Pagination Controls --- */}
      {!loading && lessons.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, lessons.length)} of {lessons.length} Modules
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/50 dark:bg-[#050b14]/50 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/50 dark:bg-[#050b14]/50 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Page {currentPage}</span>
              <span className="text-xs text-slate-400">/ {totalPages}</span>
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/50 dark:bg-[#050b14]/50 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* --- User's Custom Modal Implementation (Untouched visually except for outer container) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-[#030712]/60 backdrop-blur-md animate-in fade-in duration-300" />
          <div className="relative z-10 w-full max-w-2xl mx-4 bg-white/80 dark:bg-[#050b14]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.15)] rounded-2xl animate-in zoom-in-95 fade-in duration-300">

            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {editingLesson ? 'Edit Lesson' : 'Add New Lesson'}
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mt-1">
                Module Configuration
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Chapter</label>
                <select className={inputBase} value={newLesson.chapterId} onChange={e => setNewLesson({ ...newLesson, chapterId: e.target.value })}>
                  <option value="" disabled>Select Chapter</option>
                  {chapters.map(ch => (
                    <option key={ch.id} value={ch.id}>{ch.stage.language.name} - Stage {ch.stage.stageNumber} - Ch {ch.chapterNum}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Type</label>
                <select className={inputBase} value={newLesson.type} onChange={e => setNewLesson({ ...newLesson, type: e.target.value })}>
                  {lessonTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Content JSON</label>
                <textarea
                  className={`${inputBase} h-auto py-3 font-mono text-xs`}
                  rows={8}
                  value={typeof newLesson.contentJson === 'string' ? newLesson.contentJson : JSON.stringify(newLesson.contentJson, null, 2)}
                  onChange={e => {
                    try {
                      setNewLesson({ ...newLesson, contentJson: JSON.parse(e.target.value) })
                    } catch {
                      setNewLesson({ ...newLesson, contentJson: e.target.value })
                    }
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">XP Reward</label>
                  <input type="number" value={newLesson.xpReward} onChange={e => setNewLesson({ ...newLesson, xpReward: Number(e.target.value) })} className={inputBase} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Coin Reward</label>
                  <input type="number" value={newLesson.coinReward} onChange={e => setNewLesson({ ...newLesson, coinReward: Number(e.target.value) })} className={inputBase} />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Abort
              </button>
              <button onClick={handleSaveLesson} className="px-6 py-2 rounded-xl text-sm font-bold bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300">
                Execute Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}