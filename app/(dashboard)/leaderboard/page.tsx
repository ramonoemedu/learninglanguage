// app/leaderboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button, Card, CardBody, Spinner, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Trophy, Crown, ArrowDown, ArrowUp, Sparkles, Medal } from 'lucide-react'

interface LeaderboardEntry {
  userId: string
  languageCode: string
  weekStart: string
  xpEarned: number
  rank: number
  user: {
    id: string
    name: string
    avatarUrl: string | null
    xpTotal: number
  }
  language: {
    name: string
    flag: string
  }
}

interface Language {
  code: string
  name: string
  flag: string
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch('/api/languages')
        const data = await res.json()
        setLanguages(data)
        if (data.length > 0) {
          setSelectedLanguageCode(data[0].code) // Default to first language
        }
      } catch (err) {
        console.error('Failed to load languages', err)
      }
    }
    fetchLanguages()
  }, [])

  useEffect(() => {
    if (!selectedLanguageCode) return

    const fetchLeaderboard = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/leaderboard?langCode=${selectedLanguageCode}`)
        const data = await res.json()
        setLeaderboard(data)
      } catch (err) {
        console.error('Failed to load leaderboard', err)
      } finally {
        setLoading(false)
      }
    }
    fetchLeaderboard()
  }, [selectedLanguageCode])

  const handleLanguageSelect = (key: string | number) => {
    setSelectedLanguageCode(key as string)
  }

  const getLeaderboardHeader = () => {
    const startOfWeek = new Date()
    startOfWeek.setUTCHours(0, 0, 0, 0)
    startOfWeek.setUTCDate(startOfWeek.getUTCDate() - (startOfWeek.getUTCDay() + 6) % 7) // Monday start of week
    return `Weekly Leaderboard: ${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-[#030712] p-4 sm:p-8">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <header className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <button className="group w-12 h-12 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center hover:border-sky-500 transition-all shadow-sm hover:-translate-y-0.5">
                <ChevronLeft size={20} className="text-slate-500 group-hover:text-sky-500 transition-colors" />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
                Global <span className="text-sky-500">Rankings</span>
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Updates</span>
              </div>
            </div>
          </div>
          <Dropdown>
            <DropdownTrigger>
              <button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/50 transition-all text-sm font-bold text-slate-700 dark:text-slate-200 hover:-translate-y-0.5 shadow-sm">
                <span className="text-lg">{languages.find(l => l.code === selectedLanguageCode)?.flag}</span>
                <span className="uppercase tracking-wide">{languages.find(l => l.code === selectedLanguageCode)?.name}</span>
                <ArrowDown size={14} className="opacity-50" />
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Select Language"
              selectedKeys={selectedLanguageCode ? new Set([selectedLanguageCode]) : new Set()}
              onAction={handleLanguageSelect}
              selectionMode="single"
              className="dark:bg-[#050b14] border border-slate-800"
            >
              {languages.map(lang => (
                <DropdownItem key={lang.code} startContent={<span className="text-lg">{lang.flag}</span>} className="data-[hover=true]:bg-sky-500/10 data-[hover=true]:text-sky-500">
                  {lang.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </header>

        <main className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <Sparkles size={14} className="text-sky-500" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{getLeaderboardHeader()}</h2>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-64 bg-white/40 dark:bg-white/5 rounded-[32px] border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xl">
              <Spinner size="lg" color="primary" />
            </div>
          ) : leaderboard.length === 0 ? (
            <Card className="bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-[32px] shadow-xl">
              <CardBody className="text-center p-12 text-slate-500 dark:text-slate-400">
                <Trophy size={48} className="mx-auto mb-4 text-slate-300 dark:text-slate-700" />
                <p className="text-sm font-medium">No data signals detected for {languages.find(l => l.code === selectedLanguageCode)?.name} this cycle.</p>
                <p className="text-xs mt-2 opacity-70 uppercase tracking-widest">Be the first to synchronize.</p>
              </CardBody>
            </Card>
          ) : (
            <Table
              aria-label="Weekly Leaderboard"
              removeWrapper
              classNames={{
                wrapper: "bg-white/70 dark:bg-[#050b14]/70 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-[32px] shadow-xl dark:shadow-[0_0_40px_rgba(56,189,248,0.05)] p-4 sm:p-6",
                th: "bg-transparent text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] h-12 border-b border-slate-200/50 dark:border-slate-800/50",
                td: "py-4 group-data-[first=true]:first:before:rounded-tl-lg group-data-[first=true]:last:before:rounded-tr-lg group-data-[last=true]:first:before:rounded-bl-lg group-data-[last=true]:last:before:rounded-br-lg",
                tr: "hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-slate-800/50 last:border-0 data-[hover=true]:bg-slate-50/50 dark:data-[hover=true]:bg-white/5"
              }}
            >
              <TableHeader>
                <TableColumn>RANK</TableColumn>
                <TableColumn>OPERATOR</TableColumn>
                <TableColumn className="hidden sm:table-cell">CYCLE XP</TableColumn>
                <TableColumn className="hidden md:table-cell">TOTAL XP</TableColumn>
              </TableHeader>
              <TableBody>
                {leaderboard.map((entry, index) => (
                  <TableRow key={entry.userId} className="group">
                    <TableCell>
                      <div className={`flex items-center gap-3 font-black text-lg ${entry.rank === 1 ? 'text-yellow-500' : entry.rank === 2 ? 'text-slate-400' : entry.rank === 3 ? 'text-amber-600' : 'text-slate-500 dark:text-slate-600'}`}>
                        {entry.rank === 1 && <Crown size={20} className="fill-yellow-500 animate-pulse" />}
                        {entry.rank === 2 && <Medal size={18} className="fill-slate-300" />}
                        {entry.rank === 3 && <Medal size={18} className="fill-amber-600" />}
                        <span className="w-6 text-center">{entry.rank}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <div className={`p-0.5 rounded-full ${entry.rank <= 3 ? 'bg-gradient-to-tr from-sky-500 to-indigo-500' : 'bg-slate-200 dark:bg-slate-800'}`}>
                          <div className="p-0.5 bg-white dark:bg-[#050b14] rounded-full">
                            <Avatar src={entry.user.avatarUrl || undefined} name={entry.user.name} size="sm" />
                          </div>
                        </div>
                        <span className={`font-bold text-sm ${entry.rank <= 3 ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>{entry.user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="flex items-center gap-2 text-emerald-500 font-black text-sm tracking-wide">
                        <ArrowUp size={14} strokeWidth={3} /> {entry.xpEarned}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="font-mono font-medium text-slate-400 dark:text-slate-500">{entry.user.xpTotal.toLocaleString()}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </main>
      </div>
    </div>
  )
}
