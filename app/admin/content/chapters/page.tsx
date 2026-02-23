// app/admin/content/chapters/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Spinner } from '@heroui/react'
import { Plus, Edit2, Trash2, BookOpen, Globe, Layers, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Language {
  id: string
  code: string
  name: string
  flag: string
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

export default function AdminChaptersPage() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [stages, setStages] = useState<Stage[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null)
  const [newChapter, setNewChapter] = useState({ stageId: '', chapterNum: 1, title: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const router = useRouter()

  // Close Modal on ESC
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
      const [chaptersRes, languagesRes] = await Promise.all([
        fetch('/api/admin/content/chapters'),
        fetch('/api/admin/content/languages')
      ])

      if (!chaptersRes.ok) throw new Error('Failed to fetch chapters')
      if (!languagesRes.ok) throw new Error('Failed to fetch languages')

      const chaptersData = await chaptersRes.json()
      const languagesData = await languagesRes.json()

      setChapters(chaptersData)
      setLanguages(languagesData)

      // Extract stages
      const allStages: Stage[] = [];
      languagesData.forEach((lang: Language) => {
        for (let i = 1; i <= 10; i++) {
          allStages.push({
            id: `${lang.code}-stage-${i}`,
            language: lang,
            stageNumber: i,
            title: `Stage ${i} Vector`
          })
        }
      })
      setStages(allStages)

    } catch (err) {
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const openAddModal = () => {
    setEditingChapter(null)
    setNewChapter({ stageId: '', chapterNum: 1, title: '' })
    setIsModalOpen(true)
  }

  const openEditModal = (chapter: Chapter) => {
    setEditingChapter(chapter)
    setNewChapter({ stageId: chapter.stage.id, chapterNum: chapter.chapterNum, title: chapter.title })
    setIsModalOpen(true)
  }

  const handleSaveChapter = async () => {
    try {
      let res
      if (editingChapter) {
        res = await fetch(`/api/admin/content/chapters/${editingChapter.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newChapter),
        })
      } else {
        res = await fetch('/api/admin/content/chapters', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newChapter),
        })
      }

      if (!res.ok) throw new Error('Failed to save chapter')
      fetchData()
      setIsModalOpen(false)
    } catch (err) {
      console.error('Error saving chapter:', err)
    }
  }

  const handleDeleteChapter = async (id: string) => {
    if (!confirm(`Are you sure you want to delete chapter with ID: ${id}?`)) return
    try {
      const res = await fetch(`/api/admin/content/chapters/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete chapter')
      fetchData()
    } catch (err) {
      console.error('Error deleting chapter:', err)
    }
  }

  // Pagination Logic
  const totalPages = Math.ceil(chapters.length / itemsPerPage)
  const currentChapters = chapters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Shared Modal Input Classes
  const inputBase = "w-full bg-white/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 focus:border-sky-500 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] outline-none transition-all duration-300 rounded-xl h-12 px-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">

      {/* --- HUD Page Header --- */}
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 dark:bg-sky-400/10 rounded-lg border border-sky-500/20 text-sky-500 dark:text-sky-400">
              <BookOpen size={20} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Chapter Index</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400">Curriculum Structure Management</p>
            <div className="hidden sm:block w-32 h-px bg-gradient-to-r from-sky-500/20 to-transparent dark:from-sky-400/20" />
          </div>
        </div>

        <button
          onClick={openAddModal}
          className="group flex items-center gap-2 h-10 px-4 bg-sky-500 text-white text-sm font-bold rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 ease-out hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
        >
          <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
          Append Chapter
        </button>
      </header>

      {/* --- Glassmorphic Data Table --- */}
      {loading ? (
        < div className="flex flex-col h-full w-full items-center justify-center gap-4 animate-in fade-in duration-300">
          <div className="relative">
            <Spinner size="lg" color="primary" />
            <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full animate-pulse" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 animate-pulse">
            Fetching Telemetry...
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="w-full overflow-x-auto bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Node ID</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Protocol (Lang)</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Stage Vector</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap text-center">Chapter Num</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap">Designation</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 whitespace-nowrap text-right">Overrides</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {currentChapters.map((chapter) => (
                  <tr key={chapter.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-mono tracking-tight text-slate-400 dark:text-slate-500">
                        {chapter.id.split('-').pop()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                        <Globe size={14} className="text-sky-500 dark:text-sky-400" />
                        {chapter.stage.language.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                        <Layers size={12} /> Stage {chapter.stage.stageNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-300 shadow-inner">
                        {chapter.chapterNum}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{chapter.title}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => openEditModal(chapter)}
                          className="p-1.5 rounded-md text-slate-400 hover:text-sky-500 hover:bg-sky-500/10 dark:hover:bg-sky-400/10 transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteChapter(chapter.id)}
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

          {/* --- Pagination Controls --- */}
          {chapters.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Displaying {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, chapters.length)} of {chapters.length} Nodes
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 disabled:opacity-30 disabled:hover:text-slate-500 transition-all shadow-sm"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex items-center gap-1.5 px-4 h-9 rounded-xl bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900 dark:text-white">Page {currentPage}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">/ {totalPages}</span>
                </div>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 disabled:opacity-30 disabled:hover:text-slate-500 transition-all shadow-sm"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- Custom Modal Layout --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-[#030712]/60 backdrop-blur-md animate-in fade-in duration-300" />
          <div className="relative z-10 w-full max-w-lg mx-4 bg-white/80 dark:bg-[#050b14]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.15)] rounded-2xl animate-in zoom-in-95 fade-in duration-300">

            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {editingChapter ? 'Modify Chapter Node' : 'Initialize Chapter Node'}
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mt-1">
                Curriculum Routing Config
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-6 flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                  Language Protocol
                </label>
                <select
                  className={inputBase}
                  value={newChapter.stageId ? newChapter.stageId.split('-')[0] : ''}
                  onChange={(e) => setNewChapter(prev => ({ ...prev, stageId: `${e.target.value}-stage-1` }))}
                  disabled={!!editingChapter}
                >
                  <option value="" disabled>Select Language</option>
                  {languages.map(lang => <option key={lang.code} value={lang.code}>{lang.name}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                  Stage Vector
                </label>
                <select
                  className={inputBase}
                  value={newChapter.stageId}
                  onChange={(e) => setNewChapter(prev => ({ ...prev, stageId: e.target.value }))}
                  disabled={!!editingChapter}
                >
                  {stages.filter(s => s.id.startsWith(newChapter.stageId.split('-')[0])).map(stage => (
                    <option key={stage.id} value={stage.id}>{stage.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Sequence #</label>
                  <input type="number" value={newChapter.chapterNum} onChange={e => setNewChapter({ ...newChapter, chapterNum: Number(e.target.value) })} className={inputBase} />
                </div>
                <div className="col-span-2 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">Designation</label>
                  <input type="text" placeholder="Enter title..." value={newChapter.title} onChange={e => setNewChapter({ ...newChapter, title: e.target.value })} className={inputBase} />
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Abort
              </button>
              <button onClick={handleSaveChapter} className="px-6 py-2 rounded-xl text-sm font-bold bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300">
                Execute Save
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}