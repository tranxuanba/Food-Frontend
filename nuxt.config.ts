import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    plugins: [vuetify()]
  }
})
