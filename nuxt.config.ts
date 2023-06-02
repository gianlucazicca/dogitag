// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/supabase',
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
});
