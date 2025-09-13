import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        styles: resolve(__dirname, 'src/styles.ts'),
      },
      name: 'FancyUI',
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        if (name === 'styles') return `${name}.${format}.js`
        return `${name}.${format}.js`
      },
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-dom/client',
        '@radix-ui/react-dialog',
        '@radix-ui/react-popover',
        '@radix-ui/react-slot',
        'class-variance-authority',
        'clsx',
        'date-fns',
        'react-day-picker',
      ],
      output: [
        {
          format: 'es',
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'styles') return 'styles.es.js'
            return 'index.es.js'
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'style.css'
            }
            return assetInfo.name || '[name].[ext]'
          },
        },
        {
          format: 'cjs',
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'styles') return 'styles.cjs.js'
            return 'index.cjs.js'
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'style.css'
            }
            return assetInfo.name || '[name].[ext]'
          },
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'react/jsx-runtime',
          },
        },
      ],
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})
