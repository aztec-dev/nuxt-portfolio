// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content'],
  content: {
    highlight: {
      theme: 'nord',
      preload: [
        'ts',
        'js',
        'html',
        'css',
        'json',
        'yaml',
        'md',
        'markdown',
        'vue'
      ]
    }
  },
  devtools: { enabled: true }
})
