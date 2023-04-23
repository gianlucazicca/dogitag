/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0c0c0d',
        light: '#ffffff',
        primary: {
          950: '#0B0B0B',
          900: '#141414',
          800: '#3f3f3f',
          700: '#5a5a5a',
          600: '#727272',
          500: '#888888',
          400: '#9e9e9e',
          300: '#b5b5b5',
          200: '#cccccc',
          100: '#e3e3e3',
          50: '#fdfdfd;',
        },
        gray: {
          900: '#18181B',
          800: '#27272A',
          700: '#3f3f46',
          600: '#52525B',
          500: '#71717A',
          400: '#a1a1aa',
          300: '#D4d4d8',
          200: '#e4e4e7',
          100: '#f4f4f5',
          50: '#fafafa',
        },
      },
      fontFamily: {
        sans: 'KrossNeueGrotesk, Helvetica, Arial, sans-serif',
      },
    },
  },
  plugins: [],
};
