import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useRoute } from "vue-router";
import store from './store'

import './assets/main.css'

const app = createApp(App)

app.use(router)
useRoute().push('/')
app.use(store)

app.mount('#app')
