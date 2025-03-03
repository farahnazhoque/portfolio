import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
  
const __dirname = dirname(fileURLToPath(import.meta.url))
=======

>>>>>>> 4123f32ed9326c4a17709a8d6143b0dc3401b246

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base: '/',
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
  },
=======
  base: '/portfolio/',

>>>>>>> 4123f32ed9326c4a17709a8d6143b0dc3401b246
})
