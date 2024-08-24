import { defineNuxtPlugin, useRuntimeConfig } from '#app';

import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const axiosInstance = axios.create({
    baseURL: 'https://super.taxxpay.com.br/graphql',
  })

  return {
    provide: {
      axios: axiosInstance
    }
  }
})