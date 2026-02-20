// lib/stores/authStore.ts
import { create } from 'zustand'

interface Language {
  name: string
  flag: string
}

interface EnrolledLanguage {
  id: string
  languageCode: string
  currentStage: number
  currentChapter: number
  xpInLanguage: number
  language: Language
}

interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  nativeLanguage?: string
  role?: string
  plan?: string
  streakDays: number
  coins: number
  xpTotal: number
  enrolledLanguages: EnrolledLanguage[]
}

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))
