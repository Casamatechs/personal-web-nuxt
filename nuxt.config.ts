// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    highlight: true,
  },
  eslint: {
    lintOnStart: false,
  },
  modules: ['@nuxt/content', '@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
