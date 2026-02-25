// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // Load .env so PUBLIC_YOUTUBE_API_KEY is available when define runs
  const env = loadEnv(mode, process.cwd(), '');
  const publicYouTubeApiKey = env.PUBLIC_YOUTUBE_API_KEY || process.env.PUBLIC_YOUTUBE_API_KEY || '';

  // Base path: .astro-base file (created in CI) overrides everything for GitHub Pages. Else / for localhost and katica.co.uk.
  const baseFile = join(process.cwd(), '.astro-base');
  const base = existsSync(baseFile)
    ? readFileSync(baseFile, 'utf8').trim()
    : (env.ASTRO_BASE || process.env.ASTRO_BASE || (mode === 'development' ? '/' : '/'));

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
