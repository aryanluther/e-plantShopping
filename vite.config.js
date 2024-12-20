import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


export default defineConfig({
  base: "/shoppingreact",
  plugins: [react()],
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
  },
})