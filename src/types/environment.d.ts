declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SENTRY_ENVIRONMENT: string;
      SENTRY_DSN: string;
    }
  }
}

export {};
