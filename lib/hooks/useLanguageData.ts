import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Chapter {
  id: string
  chapterNum: number
  title: string
}

interface Stage {
  id: string
  stageNumber: number
  title: string
  unlockXp: number
  chapters: Chapter[]
}

interface Language {
  id: string
  code: string
  name: string
  flag: string
  stages: Stage[]
}

interface UserProgress {
  currentStage: number
  currentChapter: number
  xpInLanguage: number
  completedLessonIds: string[]
}

export function useLanguage(langCode: string, fallbackData?: Language) {
  return useSWR<Language>(
    langCode ? `/api/languages/${langCode}` : null,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
      dedupingInterval: 60000, // 1 minute
    }
  )
}

export function useUserProgress(langCode: string, fallbackData?: UserProgress) {
  return useSWR<UserProgress>(
    langCode ? `/api/users/me/progress/${langCode}` : null,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
      dedupingInterval: 10000, // 10 seconds
    }
  )
}
