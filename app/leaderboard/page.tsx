// app/leaderboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button, Card, CardBody, Spinner, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Trophy, Crown, ArrowDown, ArrowUp } from 'lucide-react'

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
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 text-center sm:text-left">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-0">
          <Link href="/dashboard">
            <Button variant="light" isIconOnly size="sm">
              <ChevronLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold">Leaderboard</h1>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" endContent={<ArrowDown size={14} />} size="sm">
              {languages.find(l => l.code === selectedLanguageCode)?.flag} {languages.find(l => l.code === selectedLanguageCode)?.name}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Select Language" 
            selectedKeys={selectedLanguageCode ? new Set([selectedLanguageCode]) : new Set()}
            onAction={handleLanguageSelect}
            selectionMode="single"
          >
            {languages.map(lang => (
              <DropdownItem key={lang.code} startContent={<span className="text-lg">{lang.flag}</span>}>
                {lang.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </header>

      <main className="max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6">
        <h2 className="text-base sm:text-xl font-semibold text-default-600 text-center sm:text-left">{getLeaderboardHeader()}</h2>
        {loading ? (
          <div className="flex items-center justify-center h-40 sm:h-64">
            <Spinner size="lg" />
          </div>
        ) : leaderboard.length === 0 ? (
          <Card>
            <CardBody className="text-center p-6 sm:p-8 text-default-500 text-sm sm:text-base">
              No one has earned XP in {languages.find(l => l.code === selectedLanguageCode)?.name} this week yet. Be the first!
            </CardBody>
          </Card>
        ) : (
          <Table aria-label="Weekly Leaderboard">
            <TableHeader>
              <TableColumn>RANK</TableColumn>
              <TableColumn>PLAYER</TableColumn>
              <TableColumn className="hidden sm:table-cell">XP EARNED THIS WEEK</TableColumn>
              <TableColumn className="hidden md:table-cell">TOTAL XP</TableColumn>
            </TableHeader>
            <TableBody>
              {leaderboard.map((entry, index) => (
                <TableRow key={entry.userId}>
                  <TableCell>
                    <div className="flex items-center gap-1 sm:gap-2">
                      {entry.rank === 1 && <Crown size={18} className="text-yellow-500 fill-yellow-500" />}
                      {entry.rank}.
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Avatar src={entry.user.avatarUrl || undefined} name={entry.user.name} size="sm" />
                      <span className="font-medium text-sm sm:text-base">{entry.user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div className="flex items-center gap-1 sm:gap-2 text-primary-500 font-bold text-sm sm:text-base">
                      <ArrowUp size={14} /> {entry.xpEarned}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-sm sm:text-base">{entry.user.xpTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </main>
    </div>
  )
}
