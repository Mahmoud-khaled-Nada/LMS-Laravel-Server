import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: {
        main: 'resources/js/app.tsx',
        style: 'resources/css/app.css',
      },
      refresh: true,
    }),
    react(),
  ],
});
