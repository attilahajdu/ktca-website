// @ts-check
// Used only in CI for GitHub Pages: ensures base is /ktca-website/ so asset paths are correct.
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const publicYouTubeApiKey = env.PUBLIC_YOUTUBE_API_KEY || process.env.PUBLIC_YOUTUBE_API_KEY || '';
  const siteOrigin = env.SITE_ORIGIN || process.env.SITE_ORIGIN || '';

  return {
    site: 'https://attilahajdu.github.io',
    base: '/ktca-website/',
    vite: {
      base: '/ktca-website/',
      define: {
        'import.meta.env.PUBLIC_YOUTUBE_API_KEY': JSON.stringify(publicYouTubeApiKey),
        'import.meta.env.SITE_ORIGIN': JSON.stringify(siteOrigin),
      },
    },
    experimental: {
      staticImportMetaEnv: true,
    },
  };
});
