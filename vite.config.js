import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ohmytsVite } from '@ohmyts/vite'
const r = (p) => resolve(__dirname, p)
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://open.duyiedu.com',
        changeOrigin: true,
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  },
  plugins: [react(),
  ]
})

