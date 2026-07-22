import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor';
            if (id.includes('react-router-dom')) return 'router';
            if (id.includes('@supabase/supabase-js')) return 'supabase';
            if (id.includes('zod') || id.includes('clsx') || id.includes('tailwind-merge')) return 'utils';
          }
          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
})