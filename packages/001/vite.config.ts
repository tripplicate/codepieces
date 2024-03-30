import { URL, fileURLToPath } from 'node:url';

import ViteVuePlugin from '@vitejs/plugin-vue';
import PostcssAutoprefixerPlugin from 'autoprefixer';
import PostcssNestedPlugin from 'postcss-nested';
import { defineConfig } from 'vite';
import { compression as ViteCompressionPlugin } from 'vite-plugin-compression2';

export default defineConfig({
  server: {
    port: 8080,
    strictPort: true,
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        PostcssAutoprefixerPlugin(),
        PostcssNestedPlugin()
      ],
    },
  },
  plugins: [
    ViteVuePlugin(),
    ViteCompressionPlugin()
  ],
});
