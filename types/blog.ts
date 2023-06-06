import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface BlogPostMetadata extends ParsedContent {
  date: string;
}
