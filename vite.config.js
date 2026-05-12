import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// Import blog post slugs for sitemap generation
// This runs at build time (Node), not in the browser
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// Inline blog slugs (mirrors src/blog/posts.js slugs)
// Update this array when adding new blog posts
const blogSlugs = [
  'best-ats-resume-format-2026',
  'why-ats-rejects-resumes',
  'resume-mistakes-freshers-make',
  'resume-for-software-engineers',
]

const blogRoutes = ['/blog', ...blogSlugs.map((s) => `/blog/${s}`)]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://theforgedigital.in',
      dynamicRoutes: blogRoutes,
      changefreq: 'weekly',
      priority: 0.8,
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
