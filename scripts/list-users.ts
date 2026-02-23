import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- User Registry ---');
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, role: true }
  });
  console.table(users);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());