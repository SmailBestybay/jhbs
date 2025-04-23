import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*", base: "./src/content/works" }),
  schema: ({image}) => z.object({
    cover: image(),
    coverAlt: z.string(),
    tags: z.array(z.enum(['all', 'web', 'brand'])).min(1, {
      message: "At least one category tag is required.",
    }).max(5, {
      message: "Maximum of 5 category tags allowed.",
    }).refine((tags) => new Set(tags).size === tags.length, {
      message: "Category tags must be unique.",
    }),
  })
});

export const collections = { works };
