declare global {
  interface Env {
    GITHUB_TOKEN?: string;
    ENVIRONMENT?: string;
    GITHUB_STATS_KV?: KVNamespace;
  }
}

// Cloudflare Workers types
interface ScheduledEvent {
  scheduledTime: number;
  cron: string;
}

export {};