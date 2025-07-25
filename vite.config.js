import { defineConfig } from 'vite';

// Configurazione Vite per il progetto Curriculum Vitae
export default defineConfig({
  // Directory di base per il progetto
  root: '.',
  
  // Directory di build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ottimizzazione per la produzione
    minify: 'terser',
    sourcemap: false,
    // Configurazione per i chunk
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['tailwindcss']
        }
      }
    }
  },
  
  // Server di sviluppo
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Preview server
  preview: {
    port: 4173,
    open: true
  },
  
  // CSS configuration
  css: {
    // Nessuna configurazione PostCSS necessaria
  },
  
  // Plugin configuration
  plugins: [],
  
  // Ottimizzazioni
  optimizeDeps: {
    include: []
  }
});