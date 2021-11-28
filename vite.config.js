import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactSvgPlugin({ defaultExport: 'component' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
