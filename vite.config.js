import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://theforgedigital.in',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString().split('T')[0],
      readable: true,
    }),
  ],
  css: {
    transformer: 'postcss',
  },
  build: {
    cssMinify: 'lightningcss',
    cssTarget: ['safari14', 'ios14', 'chrome80'],
  },
})
