import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sanity': {
        target: 'https://wlhjrl6.api.sanity.io',
        changeOrigin: true,
        secure: true,
        // ❌ REMOVE rewrite completely
      },
    },
  },
})