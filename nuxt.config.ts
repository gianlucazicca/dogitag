// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  plugins: [
  ],
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
  ],
  devtools: {
    enabled: true,
  },

  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/scan': { ssr: false },
    '/scan/test': { ssr: false },
  },
});
