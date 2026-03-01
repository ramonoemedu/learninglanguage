import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
})

export function useLesson(lessonId: string | null, fallbackData?: any) {
  return useSWR(
    lessonId ? `/api/lessons/${lessonId}` : null,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 10000, // 10 seconds
    }
  )
}

export function useChapterLessons(chapterId: string | null, fallbackData?: any) {
  return useSWR(
    chapterId ? `/api/chapters/${chapterId}/lessons` : null,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  )
}

export function useAdminLessons(fallbackData?: any) {
  return useSWR(
    '/api/admin/content/lessons',
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 30000, // 30 seconds
    }
  )
}
