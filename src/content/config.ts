// Import z for zod, to eliminate duplicative type declarations.
// You declare a validator once and Zod will automatically infer the static TypeScript type.
import { z, defineCollection } from 'astro:content';
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    topic: z.string(),
    image: z.string().optional(),
    alt: z.string().optional(),
    pubDate: z.date(),
  }),
});

export const collections = { blog };