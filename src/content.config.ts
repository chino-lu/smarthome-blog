import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    readMinutes: z.number(),
    address: z.string(), // KNX-style group address used as the post's visual eyebrow, e.g. "1/1/1"
    sources: z.string(),
    image: z.string(),      // path under /public, e.g. "/images/post-1.svg"
    imageAlt: z.string(),
  }),
});

export const collections = { blog };
