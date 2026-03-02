// app/api/users/me/route.ts
import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check if Prisma is available
    if (!prisma) {
      console.error('❌ Prisma database client not initialized - DATABASE_URL may not be configured')
      return NextResponse.json(
        { error: 'Database service unavailable. Please ensure DATABASE_URL is set in your Vercel environment variables.' },
        { status: 503 }
      )
    }

    const supabase = await createClient()
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: authUser.id },
      include: {
        userLanguages: {
          include: {
            // Include language basic details
          }
        },
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Manually get language details
    const userWithLangs = {
      ...user,
      enrolledLanguages: await Promise.all(
        user.userLanguages.map(async (ul) => {
          const lang = await prisma!.language.findUnique({
            where: { code: ul.languageCode },
          })
          return { ...ul, language: lang }
        })
      )
    }

    return NextResponse.json(userWithLangs)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
