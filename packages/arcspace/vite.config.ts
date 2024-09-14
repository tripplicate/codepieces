import { join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import ViteVuePlugin from '@vitejs/plugin-vue'
import PostcssAutoprefixerPlugin from 'autoprefixer'
import PostcssNestedPlugin from 'postcss-nested'
import { defineConfig, loadEnv } from 'vite'
import { compression as ViteCompressionPlugin } from 'vite-plugin-compression2'

const TEMP_DIR = '.temp'
const CACHE_DIR = '.vite'

export default defineConfig(({ mode }) => {
  const {
    VITE_HOST,
    VITE_PORT,
    VITE_PROXY_ADDR,
  } = loadEnv(mode, '.', 'VITE')

  return {
    envPrefix: 'CLIENT',
    server: {
      host: VITE_HOST,
      port: Number.parseInt(VITE_PORT),
      strictPort: true,
      proxy: {
        '/api': {
          target: VITE_PROXY_ADDR,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    cacheDir: join(TEMP_DIR, CACHE_DIR),
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [
          PostcssAutoprefixerPlugin({
            env: mode,
          }),
          PostcssNestedPlugin(),
        ],
      },
    },
    plugins: [
      ViteVuePlugin(),
      ViteCompressionPlugin({
        algorithm: 'brotliCompress',
      }),
    ],
  }
})
