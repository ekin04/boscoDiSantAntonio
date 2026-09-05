import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogPostCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: () =>
        z.object({
            title: z.string(),
            excerpt: z.string(),
            categoria: z.array(z.string()),
            date: z.coerce.date(),
            thumbnail: z.string(),
            galleria: z.array(z.object({
                src: z.string(),
                alt: z.string(),
            }))
        }),
});

const categoryCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/categorie' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
    })
});

export const collections = {
    'blog': blogPostCollection,
    'categorie': categoryCollection
};
