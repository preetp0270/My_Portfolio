import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match the GitHub repo name for project pages
  // Live site: https://preetp0270.github.io/My_Portfolio/
  base: '/My_Portfolio/',
})
