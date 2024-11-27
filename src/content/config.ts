import { z, defineCollection } from 'astro:content';

const caroselloCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>
        z.object({
        title: z.string(),
        link: z.string(),
        image: image(),
    }),
});


const blogPostCollection = defineCollection({
    type: 'content',
    schema:() =>
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
})

const categoryCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
    })
})

export const collections = {
    'carosello': caroselloCollection,
    'blog': blogPostCollection,
    'categorie': categoryCollection
};