import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages project site: change to '/your-repo-name/'
  // For user site (username.github.io): use '/'
  base: './',
})
