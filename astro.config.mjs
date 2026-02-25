// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load .env so PUBLIC_YOUTUBE_API_KEY is available when define runs
  const env = loadEnv(mode, process.cwd(), '');
  const publicYouTubeApiKey = env.PUBLIC_YOUTUBE_API_KEY || process.env.PUBLIC_YOUTUBE_API_KEY || '';

  // Base path: in CI (e.g. GitHub Actions) use /ktca-website/ for GitHub Pages. Otherwise ASTRO_BASE or / for localhost and katica.co.uk.
  const base = process.env.CI === 'true' ? '/ktca-website/' : (env.ASTRO_BASE || process.env.ASTRO_BASE || (mode === 'development' ? '/' : '/'));

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
