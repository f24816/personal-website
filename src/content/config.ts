// Import z for zod, to eliminate duplicative type declarations.
// You declare a validator once and Zod will automatically infer the static TypeScript type.
import { z, defineCollection } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    // Add fields relevant to your pages collection
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const test = defineCollection({
  type: 'content',
  schema: z.object({
    // Add fields relevant to your test collection
    name: z.string().optional(),
    value: z.any().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    topic: z.string(),
    revision: z.number().optional(),
    image: z.string().optional(),
    alt: z.string().optional(),
    toc: z.boolean().optional().default(false),
    pubDate: z.date(),
  }),
});

export const collections = { blog };