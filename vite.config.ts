import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@/images', replacement: '/public/images/' },
      { find: '@/icons', replacement: '/public/icons' },
    ],
  },
});
