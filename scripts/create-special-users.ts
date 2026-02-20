import { createClient } from '@supabase/supabase-js'
import { PrismaClient } from '@prisma/client'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const prisma = new PrismaClient()

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function createSpecialUser(email: string, name: string, role: string, plan: string, xp: number, coins: number) {
  console.log(`Creating user: ${email} (${role})...`)

  // 1. Check if user exists in Supabase Auth
  const { data: { users }, error: listError } = await supabase.auth.admin.listUsers()
  if (listError) {
    console.error('Error listing users:', listError)
    return
  }

  let authUser = users.find(u => u.email === email)

  if (!authUser) {
    const { data: { user }, error: createError } = await supabase.auth.admin.createUser({
      email,
      password: 'Password123!',
      email_confirm: true,
      user_metadata: { name, role }
    })

    if (createError) {
      console.error(`Error creating auth user ${email}:`, createError)
      return
    }
    authUser = user!
    console.log(`Auth user created: ${authUser.id}`)
  } else {
    console.log(`Auth user already exists: ${authUser.id}`)
  }

  // 2. Create or Update Prisma User
  const user = await prisma.user.upsert({
    where: { id: authUser.id },
    update: {
      role,
      plan,
      xpTotal: xp,
      coins: coins,
    },
    create: {
      id: authUser.id,
      email,
      name,
      role,
      plan,
      xpTotal: xp,
      coins: coins,
    },
  })

  console.log(`Prisma user ${role} successfully created/updated: ${user.email}`)
}

async function main() {
  // Admin account
  await createSpecialUser(
    'admin@learninglanguage.com',
    'Admin User',
    'admin',
    'pro',
    99999,
    10000
  )

  // Tester account
  await createSpecialUser(
    'tester@learninglanguage.com',
    'Tester Account',
    'tester',
    'tester',
    5000,
    500
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
