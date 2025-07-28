import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

// Configurazione Vite per il progetto Curriculum Vitae
export default defineConfig({
  // Base path per GitHub Pages (cambia 'Curriculum-Vitae-Valerio-Di-Felice' con il nome del tuo repository)
  base: process.env.NODE_ENV === 'production' ? '/Curriculum-Vitae-Valerio-Di-Felice/' : '/',
  
  // Directory di base per il progetto
  root: '.',
  
  // Directory di build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ottimizzazione per la produzione
    minify: 'terser',
    sourcemap: false,
    // Configurazione per i chunk e multi-page
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html')
      },
      output: {
        manualChunks: {
          vendor: ['tailwindcss']
        }
      }
    },
    // Copia file aggiuntivi
    copyPublicDir: true
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
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  
  // Directory pubblica per file statici
  publicDir: 'public',
  
  // Plugin configuration
  plugins: [],
  
  // Ottimizzazioni
  optimizeDeps: {
    include: []
  }
});