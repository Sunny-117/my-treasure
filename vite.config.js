import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:5173/',
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  },
  plugins: [react()]
})

