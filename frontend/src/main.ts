import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import '@/input.css'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init()
