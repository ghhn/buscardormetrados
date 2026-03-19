import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    assetsDir: '',
<<<<<<< HEAD
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@supabase')) return 'supabase';
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('lucide-react')) return 'ui-vendor';
            return 'vendor';
          }

          if (id.includes('src/data/mockDB_1')) return 'catalog-hospital';
          if (id.includes('src/data/mockDB_contingencia')) return 'catalog-contingencia';
          if (id.includes('src/data/hvacData')) return 'catalog-hvac';
        },
      },
    },
=======
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
  },
  server: {
    host: true,
  }
})
