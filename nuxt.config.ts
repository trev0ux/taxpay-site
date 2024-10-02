// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Taxpay | Sua empresa com mais caixa',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1',
      meta: [
        { name: 'description', content: 'TEst' },
        { name: 'keywords', content: 'parkeerfaciliteit,Terschelling,Vlieland' },
        { name: 'author', content: 'Double Design & Development' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  css: [
    { src: '~/assets/styles/globals.scss', lang: 'sass' },
  ],
  build: {
    transpile: ['bootstrap']
  },
  modules: ['@nuxt/icon', '@nuxt/image', '@pinia/nuxt'],
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