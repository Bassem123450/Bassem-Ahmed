import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ['react', 'react-dom'],
          motionVendor: ['framer-motion'],
          iconVendor: ['react-icons']
        }
      }
    }
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false
  }
});
