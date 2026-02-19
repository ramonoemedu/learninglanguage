// instrumentation.ts
import * as Sentry from '@sentry/nextjs'

export function register() {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    spotlight: process.env.NODE_ENV === 'development',
    integrations: [
      Sentry.consoleIntegration(),
    ],
  })
}