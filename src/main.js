import './assets/main.css'

import { createApp } from 'vue'
// i18n
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

// i18n
import en from './locales/en.js'
import zh from './locales/zh.js'
import cn from './locales/cn.js'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.language, // 设置默认语言
  messages: {
    en,
    zh,
    cn
  }
})

const app = createApp(App)


app.use(router).use(i18n)

app.mount('#app')


