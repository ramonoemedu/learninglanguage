// app/practice/page.tsx
'use client'

import { Button, Card, CardHeader, CardBody } from '@heroui/react'
import Link from 'next/link'
import { MessageSquareText, Mic2, Headphones } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PracticeHubPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <header className="max-w-4xl mx-auto flex items-center justify-between py-4 sm:py-6 mb-6 sm:mb-10">
        <h1 className="text-xl sm:text-3xl font-bold">Practice Hub</h1>
        <Button variant="ghost" onClick={() => router.back()} size="sm">Back</Button>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Card 
          isPressable
          onClick={() => router.push('/practice/chat')}
          className="p-4 sm:p-6 flex flex-col items-center text-center hover:bg-default-50 transition-colors"
        >
          <CardHeader className="flex flex-col items-center">
            <MessageSquareText size={36} className="text-primary mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-2xl font-bold">AI Tutor Chat</h2>
          </CardHeader>
          <CardBody className="p-0">
            <p className="text-sm sm:text-base text-default-500">Practice conversations with your personal AI language tutor.</p>
          </CardBody>
        </Card>

        <Card 
          isPressable
          // onClick={() => router.push('/practice/speak')} // Future link
          className="p-4 sm:p-6 flex flex-col items-center text-center hover:bg-default-50 transition-colors opacity-70 cursor-not-allowed"
        >
          <CardHeader className="flex flex-col items-center">
            <Mic2 size={36} className="text-secondary mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-2xl font-bold">Speaking Practice</h2>
          </CardHeader>
          <CardBody className="p-0">
            <p className="text-sm sm:text-base text-default-500">Improve your pronunciation and speaking fluency.</p>
          </CardBody>
        </Card>

        <Card 
          isPressable
          // onClick={() => router.push('/practice/listen')} // Future link
          className="p-4 sm:p-6 flex flex-col items-center text-center hover:bg-default-50 transition-colors opacity-70 cursor-not-allowed"
        >
          <CardHeader className="flex flex-col items-center">
            <Headphones size={36} className="text-warning mb-3 sm:mb-4" />
            <h2 className="text-lg sm:text-2xl font-bold">Listening Exercises</h2>
          </CardHeader>
          <CardBody className="p-0">
            <p className="text-sm sm:text-base text-default-500">Train your ear to understand native speakers.</p>
          </CardBody>
        </Card>

        {/* Add more practice modes here */}
      </main>
    </div>
  )
}
