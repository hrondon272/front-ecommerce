import './assets/main.css'

import { createApp } from 'vue'

import Counter from './examples/CompositionCounter.vue'

const app = createApp(Counter)
app.mount('#app')
