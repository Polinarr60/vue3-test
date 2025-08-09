import './assets/global.scss'

import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { queryClient } from './lib/query-client'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(VueQueryPlugin, {
  queryClient,
})

app.use(router)

app.mount('#app')
