import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME',
          dest: '.',
        },
        {
          src: 'dist/index.html',
          dest: '.',
          rename: '404.html',
        },
      ],
    }),
    react(),
    tailwindcss()
  ],
})
