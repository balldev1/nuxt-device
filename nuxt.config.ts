// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '~/plugins/three-background.js'
  ],

  modules: ["@nuxt/image"]
})