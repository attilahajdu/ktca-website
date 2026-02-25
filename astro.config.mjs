// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load .env so PUBLIC_YOUTUBE_API_KEY is available when define runs
  const env = loadEnv(mode, process.cwd(), '');
  const publicYouTubeApiKey = env.PUBLIC_YOUTUBE_API_KEY || process.env.PUBLIC_YOUTUBE_API_KEY || '';

  // Use root base in dev so http://localhost:4321/ works; use /ktca-website/ for production (GitHub Pages)
  const base = mode === 'development' ? '/' : '/ktca-website/';

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
