// scripts/delete-mixed-language-vocab.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteMixedLanguageVocab() {
  console.log('--- Starting to delete mixed-language vocabulary for Chinese (zh) ---');

  try {
    const chineseRegex = /[\u4e00-\u9fa5]/; // Matches any Chinese character

    let totalDeleted = 0;
    for (let difficulty = 1; difficulty <= 5; difficulty++) { // A0 to A2+
      console.log(`\n--- Processing Level ${difficulty} ---`);

      const allZhVocab = await prisma.vocabulary.findMany({
        where: {
          languageId: 'zh',
          difficulty: difficulty,
        },
        select: {
          id: true,
          word: true,
          romanization: true,
          translation: true,
        }
      });

      console.log(`Fetched ${allZhVocab.length} items for Level ${difficulty}.`);

      const itemsToDelete = allZhVocab.filter(item => {
        const containsChinese = chineseRegex.test(item.word);
        // Debugging: Log the word and the regex test result
        console.log(`  Word: "${item.word}", Contains Chinese: ${containsChinese}`);
        return !containsChinese; // We want to delete items that do NOT contain Chinese characters
      });

      if (itemsToDelete.length === 0) {
        console.log(`No mixed-language items found for Level ${difficulty}.`);
        continue;
      }

      console.log(`Found ${itemsToDelete.length} mixed-language items to delete for Level ${difficulty}:`);
      for (const item of itemsToDelete) {
        console.log(`  - Deleting: "${item.word}" (ID: ${item.id}) - Romanization: "${item.romanization}", Translation: "${item.translation}"`);
        await prisma.vocabulary.delete({
          where: { id: item.id },
        });
        totalDeleted++;
      }
      console.log(`Deleted ${itemsToDelete.length} items from Level ${difficulty}.`);
    }

    console.log(`\n--- Deletion Process Finished ---`);
    if (totalDeleted > 0) {
      console.log(`Successfully deleted ${totalDeleted} mixed-language vocabulary items.`);
    } else {
      console.log('No mixed-language vocabulary items were found or deleted.');
    }

  } catch (e) {
    console.error('An error occurred during the deletion process:', e);
    throw e;
  }
}

deleteMixedLanguageVocab()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('\nScript failed.');
    await prisma.$disconnect();
    process.exit(1);
  });
