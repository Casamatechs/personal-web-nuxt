// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    highlight: true,
  },
  eslint: {
    lintOnStart: false,
  },
  modules: ['@nuxt/content', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
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
