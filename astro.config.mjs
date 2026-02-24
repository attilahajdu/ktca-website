// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://attilahajdu.github.io',
  base: '/ktca-website/',
  experimental: {
    staticImportMetaEnv: true,
  },
  vite: {
    define: {
      'import.meta.env.PUBLIC_YOUTUBE_API_KEY': JSON.stringify(process.env.PUBLIC_YOUTUBE_API_KEY || ''),
    },
  },
});
