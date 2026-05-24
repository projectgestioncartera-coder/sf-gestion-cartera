import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['axios']
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    cors: true
  },
  preview: {
    port: 4173
  }
})
