// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    { src: '~/assets/styles/globals.scss', lang: 'sass' },
  ],
  build: {
    transpile: ['bootstrap']
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://super.taxxpay.com.br/graphql'
    }
  },
  plugins: [
    '@/plugins/axios',
    //'@/plugins/swiper',
  ],
})
