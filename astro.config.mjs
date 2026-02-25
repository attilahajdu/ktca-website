// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load .env so PUBLIC_YOUTUBE_API_KEY is available when define runs
  const env = loadEnv(mode, process.cwd(), '');
  const publicYouTubeApiKey = env.PUBLIC_YOUTUBE_API_KEY || process.env.PUBLIC_YOUTUBE_API_KEY || '';

  // Base path: ASTRO_BASE only in CI for GitHub Pages (/ktca-website/). Default is / so localhost and future custom domain (e.g. katica.co.uk) work at root.
  const base = process.env.ASTRO_BASE || (mode === 'development' ? '/' : '/');

  return {
    site: 'https://attilahajdu.github.io',
    base,
    experimental: {
      staticImportMetaEnv: true,
    },
    vite: {
      define: {
        'import.meta.env.PUBLIC_YOUTUBE_API_KEY': JSON.stringify(publicYouTubeApiKey),
      },
    },
  };
});
