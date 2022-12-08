
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ohmytsVite } from '@ohmyts/vite'
const r = (p) => resolve(__dirname, p)
// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
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
  plugins: [react(), ohmytsVite({
    target: '/api',
    rootDir: r('@types'),
    proxyOptions: {
      target: 'https://autumnfish.cn',
    },
  }),]
})


if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;