# Learn Flow (A0 to C2) and Lesson JSON Format

## Flow Overview
- Languages are seeded with stages and chapters.
- Stages map to CEFR levels and titles:
  - A0 - Baby
  - A1 - Toddler
  - A1+ - Child
  - A2 - Student
  - A2+ - Traveler
  - B1 - Conversationalist
  - B1+ - Reader
  - B2 - Professional
  - C1 - Advanced
  - C2 - Expert
- Data hierarchy: Language -> Stage -> Chapter -> Lesson
- Lessons are fetched by ID from the API and rendered by the lesson player.

## Where the Data Comes From
- Stages and chapters are seeded in prisma/seed.ts.
- Lessons live in the Prisma Lesson table and are returned by app/api/lessons/[id]/route.ts.
- The lesson player reads contentJson.questions and renders based on question.type.

## Lesson JSON Format
The lesson player expects contentJson with a questions array. Each question has a type plus fields used by that type.

### Common Question Fields
- type: flashcard | multiple-choice | listening | fill-in-the-blank | speaking | writing | reading | dialogue
- word
- romanization or pinyin
- translation
- options
- correctAnswer
- prompt
- audioUrl
- languageCode
- nativeLanguage
- targetLanguage

### Speaking Example
{
  "questions": [
    {
      "type": "speaking",
      "word": "ModuleWord-11",
      "prompt": "Sync ModuleWord-11",
      "options": ["ModuleWord-16 (zh)", "ModuleWord-11 (zh)"],
      "translation": "ModuleWord-11 (zh)",
      "languageCode": "zh",
      "romanization": "ModuleWord-11",
      "correctAnswer": "ModuleWord-11",
      "nativeLanguage": "en",
      "targetLanguage": "zh"
    }
  ]
}

### Reading Example
{
  "questions": [
    {
      "type": "reading",
      "passage": "Short reading passage here...",
      "comprehensionQuestions": [
        {
          "question": "What is the main idea?",
          "options": ["A", "B", "C", "D"],
          "correctAnswer": "A"
        }
      ]
    }
  ]
}

### Dialogue Example
{
  "questions": [
    {
      "type": "dialogue",
      "scenario": "Ordering at a cafe",
      "initialDialogue": [
        { "role": "assistant", "content": "Hello, how can I help you?" }
      ]
    }
  ]
}

## Important Notes
- Lesson table field lesson.type can be "speak", but the player uses question.type ("speaking").
- If a question type is missing or mismatched, the player may render nothing.

## Troubleshooting
- Missing source map files (e.g., LayoutGroupContext.mjs.map) are harmless and do not break the app.
- If the dashboard shows inactive languages, filter by language.active in the client.
- Prisma connection pool timeouts can happen with PgBouncer if the connection limit is too high.
