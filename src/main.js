import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const application = createApp(App)
application.use(router)
application.mount('#app')
