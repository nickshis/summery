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
        afandi: resolve(__dirname, 'pages/afandi/index.html'),
        diwali: resolve(__dirname, 'pages/diwali/index.html'),
        teresa: resolve(__dirname, 'pages/teresa/index.html'),
        learneng: resolve(__dirname, 'pages/learneng/index.html')
      },
    },
  },
})