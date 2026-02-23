'use client'

import { useState, useEffect } from 'react'
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Spinner, Button, useDisclosure
} from '@heroui/react'
import { PlusIcon, EditIcon, TrashIcon, Languages, Globe } from 'lucide-react'

interface Language {
  id: string
  code: string
  name: string
  flag: string
  active: boolean
}

export default function AdminLanguagesPage() {
  const [languages, setLanguages] = useState<Language[]>([])
  const [loading, setLoading] = useState(true)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [editingLang, setEditingLang] = useState<Language | null>(null)
  const [formData, setFormData] = useState({ code: '', name: '', flag: '', active: true })

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onOpenChange();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onOpenChange]);

  const fetchLanguages = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/content/languages')
      const data = await res.json()
      setLanguages(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchLanguages() }, [])

  const handleSave = async () => {
    try {
      const method = editingLang ? 'PATCH' : 'POST'
      const url = editingLang
        ? `/api/admin/content/languages/${editingLang.code}`
        : '/api/admin/content/languages'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) throw new Error('Operation failed')

      fetchLanguages()
      onOpenChange()
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (code: string) => {
    if (!confirm('Delete this language? This will break linked content.')) return
    await fetch(`/api/admin/content/languages/${code}`, { method: 'DELETE' })
    fetchLanguages()
  }

  const openModal = (lang?: Language) => {
    if (lang) {
      setEditingLang(lang)
      setFormData({ code: lang.code, name: lang.name, flag: lang.flag, active: lang.active })
    } else {
      setEditingLang(null)
      setFormData({ code: '', name: '', flag: '', active: true })
    }
    onOpen()
  }

  const inputBase = "w-full bg-white/50 dark:bg-[#030712]/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 focus:border-sky-500 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)] outline-none transition-all duration-300 rounded-xl h-12 px-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-500">
            <Globe size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Language Matrix</h1>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Supported Locales</p>
          </div>
        </div>
        <Button onPress={() => openModal()} className="bg-indigo-500 text-white font-bold uppercase tracking-widest text-xs h-10 shadow-lg shadow-indigo-500/20" startContent={<PlusIcon size={16} />}>
          Add Locale
        </Button>
      </header>

      {loading ? (< div className="flex flex-col h-full w-full items-center justify-center gap-4 animate-in fade-in duration-300">
        <div className="relative">
          <Spinner size="lg" color="primary" />
          <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full animate-pulse" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 animate-pulse">
          Fetching Telemetry...
        </span>
      </div>) :
        (
          <div className="w-full overflow-hidden bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm">
            <Table aria-label="Languages" removeWrapper classNames={{ th: "bg-transparent text-[10px] font-black text-slate-400 uppercase tracking-widest", td: "py-4" }}>
              <TableHeader>
                <TableColumn>LOCALE</TableColumn>
                <TableColumn>CODE</TableColumn>
                <TableColumn>STATUS</TableColumn>
                <TableColumn align="end">ACTIONS</TableColumn>
              </TableHeader>
              <TableBody>
                {languages.map((lang) => (
                  <TableRow key={lang.id} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-bold text-slate-700 dark:text-slate-200">{lang.name}</span>
                      </div>
                    </TableCell>
                    <TableCell><span className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{lang.code}</span></TableCell>
                    <TableCell>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${lang.active ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-500/10 text-slate-500'}`}>
                        {lang.active ? 'Active' : 'Inactive'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button isIconOnly size="sm" variant="light" onPress={() => openModal(lang)}><EditIcon size={16} /></Button>
                        <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => handleDelete(lang.code)}><TrashIcon size={16} /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div onClick={() => onOpenChange()} className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300" />
          <div className="relative z-10 w-full max-w-lg mx-4 bg-white/80 dark:bg-[#050b14]/90 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl dark:shadow-[0_0_40px_rgba(56,189,248,0.15)] rounded-2xl animate-in zoom-in-95 fade-in duration-300">

            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {editingLang ? 'Edit Locale' : 'New Locale'}
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mt-1">
                Language Configuration
              </p>
            </div>

            {/* Body */}
            <div className="px-6 py-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Name</label>
                <input type="text" placeholder="e.g. French" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={inputBase} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">ISO Code</label>
                <input type="text" placeholder="e.g. fr" value={formData.code} onChange={e => setFormData({ ...formData, code: e.target.value })} disabled={!!editingLang} className={`${inputBase} disabled:opacity-50 disabled:cursor-not-allowed`} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Flag Emoji</label>
                <input type="text" placeholder="e.g. 🇫🇷" value={formData.flag} onChange={e => setFormData({ ...formData, flag: e.target.value })} className={inputBase} />
              </div>

              <label className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-slate-800/80 cursor-pointer hover:border-sky-500/50 transition-colors">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Active Status</span>
                <input
                  type="checkbox"
                  checked={formData.active}
                  onChange={e => setFormData({ ...formData, active: e.target.checked })}
                  className="w-5 h-5 rounded border-slate-300 text-sky-500 focus:ring-sky-500 bg-white dark:bg-slate-800"
                />
              </label>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end gap-3">
              <button onClick={() => onOpenChange()} className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} className="px-6 py-2 rounded-xl text-sm font-bold bg-sky-500 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-sky-400 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300">
                Save Locale
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}