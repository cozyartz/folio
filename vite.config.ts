import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable minification for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
  },
  // Server configuration for development
  server: {
    port: 5173,
    host: true,
  },
  // Preview configuration
  preview: {
    port: 4173,
    host: true,
  },
});
