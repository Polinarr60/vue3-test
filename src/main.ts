import './assets/global.css'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { queryClient } from './lib/query-client'
import router from './router'
import MainPage from './pages/MainPage.vue'

const app = createApp(MainPage)

app.use(VueQueryPlugin, {
  queryClient,
})

app.use(router)

app.mount('#app')
