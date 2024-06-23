import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import * as path from 'path';
import tailwind from 'tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});