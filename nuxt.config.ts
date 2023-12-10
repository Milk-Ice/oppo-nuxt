// https://nuxt.com/docs/api/configuration/nuxt-config
// import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
  // reset.css
  css: [
    'normalize.css',
    '@/assets/css/global.scss',
    '~/assets/cus-font/iconfont.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/variables.scss' as *;"
        }
      }
    }
  }
})
