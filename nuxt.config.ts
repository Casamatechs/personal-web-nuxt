// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: '',
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['ts', 'elixir'],
        },
      },
    },
  },
  eslint: {
    lintOnStart: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  ssr: true,
  plugins: [
    {
      src: '~/plugins/vercel.ts',
      mode: 'client',
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
