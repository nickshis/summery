// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        england: resolve(__dirname, 'pages/england/index.html'),
        africa: resolve(__dirname, 'pages/africa/index.html'),
        afandi: resolve(__dirname, 'pages/afandi/index.html')
      },
    },
  },
})