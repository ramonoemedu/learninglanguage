'use client'

import { useState, useEffect } from 'react'
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Spinner, Button, Input, useDisclosure
} from '@heroui/react'
import { PlusIcon, EditIcon, TrashIcon, Database, Search, ChevronLeft, ChevronRight } from 'lucide-react'

interface Vocabulary {
  id: string
  word: string
  romanization: string
  translation: string
  difficulty: number
  language: { id: string, code: string, name: string }
}

export default function AdminVocabularyPage() {
  const [vocab, setVocab] = useState<Vocabulary[]>([])
  const [languages, setLanguages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [editingItem, setEditingItem] = useState<Vocabulary | null>(null)
  const [formData, setFormData] = useState({ word: '', romanization: '', translation: '', difficulty: 1, languageId: '' })
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onOpenChange();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onOpenChange]);

  useEffect(() => {
    setCurrentPage(1)
  }, [search])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [vRes, lRes] = await Promise.all([
        fetch('/api/admin/content/vocabulary'),
        fetch('/api/admin/content/languages')
      ])
      setVocab(await vRes.json())
      setLanguages(await lRes.json())
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  const handleSave = async () => {
    const method = editingItem ? 'PATCH' : 'POST'
    const url = editingItem ? `/api/admin/content/vocabulary/${editingItem.id}` : '/api/admin/content/vocabulary'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    fetchData()
    onOpenChange()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this word?')) return
    await fetch(`/api/admin/content/vocabulary/${id}`, { method: 'DELETE' })
    fetchData()
  }

  const openModal = (item?: Vocabulary) => {
    if (item) {
      setEditingItem(item)
      setFormData({
        word: item.word,
        romanization: item.romanization,
        translation: item.translation,
        difficulty: item.difficulty,
        languageId: item.language.id
      })
    } else {
      setEditingItem(null)
      setFormData({ word: '', romanization: '', translation: '', difficulty: 1, languageId: languages[0]?.id || '' })
    }
    onOpen()
  }

  const filteredVocab = vocab.filter(v =>
    v.word.toLowerCase().includes(search.toLowerCase()) ||
    v.translation.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredVocab.length / itemsPerPage)
  const currentVocab = filteredVocab.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const inputBase = "w-full bg-white/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 focus:border-sky-500 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] outline-none transition-all duration-300 rounded-xl h-12 px-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sky-500/10 rounded-lg border border-sky-500/20 text-sky-500">
            <Database size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Lexicon Database</h1>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Vocabulary Management</p>
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Input
            placeholder="Search words..."
            startContent={<Search size={16} />}
            value={search}
            onValueChange={setSearch}
            className="w-full sm:w-64"
          />
          <Button onPress={() => openModal()} className="bg-sky-500 text-white font-bold uppercase tracking-widest text-xs h-10 shadow-lg" startContent={<PlusIcon size={16} />}>
            Add Word
          </Button>
        </div>
      </header>

      {loading ? (< div className="flex flex-col h-full w-full items-center justify-center gap-4 animate-in fade-in duration-300">
        <div className="relative">
          <Spinner size="lg" color="primary" />
          <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full animate-pulse" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 animate-pulse">
          Fetching Telemetry...
        </span>
      </div>) : (
        <div className="w-full overflow-hidden bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm">
          <Table aria-label="Vocabulary" removeWrapper classNames={{ th: "bg-transparent text-[10px] font-black text-slate-400 uppercase tracking-widest", td: "py-4" }}>
            <TableHeader>
              <TableColumn>WORD</TableColumn>
              <TableColumn>ROMANIZATION</TableColumn>
              <TableColumn>TRANSLATION</TableColumn>
              <TableColumn>LANGUAGE</TableColumn>
              <TableColumn>LEVEL</TableColumn>
              <TableColumn align="end">ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
              {currentVocab.map((item) => (
                <TableRow key={item.id} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <TableCell><span className="text-lg font-bold">{item.word}</span></TableCell>
                  <TableCell><span className="font-mono text-slate-500">{item.romanization}</span></TableCell>
                  <TableCell>{item.translation}</TableCell>
                  <TableCell>
                    <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">
                      {item.language.code}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {Array.from({ length: item.difficulty }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button isIconOnly size="sm" variant="light" onPress={() => openModal(item)}><EditIcon size={16} /></Button>
                      <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => handleDelete(item.id)}><TrashIcon size={16} /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* --- Pagination Controls --- */}
      {!loading && filteredVocab.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredVocab.length)} of {filteredVocab.length} Entries
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

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div onClick={() => onOpenChange()} className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300" />
          <div className="relative z-10 w-full max-w-lg mx-4 bg-white/80 dark:bg-[#050b14]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.15)] rounded-2xl animate-in zoom-in-95 fade-in duration-300">

            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {editingItem ? 'Edit Word' : 'New Word'}
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mt-1">
                Lexicon Entry
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Word</label>
                <input type="text" placeholder="e.g. 你好" value={formData.word} onChange={e => setFormData({ ...formData, word: e.target.value })} className={inputBase} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Romanization</label>
                <input type="text" placeholder="e.g. nǐ hǎo" value={formData.romanization} onChange={e => setFormData({ ...formData, romanization: e.target.value })} className={inputBase} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Translation</label>
                <input type="text" placeholder="e.g. Hello" value={formData.translation} onChange={e => setFormData({ ...formData, translation: e.target.value })} className={inputBase} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Language</label>
                  <select className={inputBase} value={formData.languageId} onChange={e => setFormData({ ...formData, languageId: e.target.value })}>
                    {languages.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Difficulty (1-5)</label>
                  <input type="number" min="1" max="5" value={formData.difficulty} onChange={e => setFormData({ ...formData, difficulty: Number(e.target.value) })} className={inputBase} />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end gap-3">
              <button onClick={() => onOpenChange()} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} className="px-6 py-2 rounded-xl text-sm font-bold bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300">
                Save Word
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}