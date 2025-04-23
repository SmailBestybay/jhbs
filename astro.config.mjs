// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://smailbestybay.github.io/',
  base: 'jhbs',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});