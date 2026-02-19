// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'

const DynamicProviders = dynamic(() => import('./providers').then((mod) => mod.Providers), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LearningLanguage - Learn Any Language, The Natural Way',
  description: 'AI-powered language learning platform from Baby Steps to Expert.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DynamicProviders>
          {children}
        </DynamicProviders>
      </body>
    </html>
  )
}