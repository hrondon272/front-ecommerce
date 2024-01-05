import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Counter from './Counter.vue'
import router from './router'

import './assets/main.css'

const app = createApp(Counter)

app.use(createPinia())
app.use(router)

app.mount('#app')