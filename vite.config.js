import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for Vercel deployment, '/Ali-Mehdi-Portfolio/' for GitHub Pages
  base: '/',
})

