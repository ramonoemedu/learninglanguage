import { config } from 'dotenv';
config({ path: '.env.local' });
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  if (!email) {
    console.log('Usage: npx ts-node scripts/set-admin.ts <email>');
    return;
  }

  console.log(`Promoting ${email} to admin...`);
  
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { role: 'admin' }
    });
    console.log(`✅ User ${user.name} (${user.email}) is now an ADMIN.`);
  } catch (error) {
    console.error('Error updating user. Make sure the email exists.', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();