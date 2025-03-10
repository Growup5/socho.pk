import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    plugins: [
      tailwindcss(),
    ],
    base: '/',
  };
});