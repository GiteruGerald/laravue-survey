import { createApp } from 'vue'
// import './style.css'
import './main.css'

import App from './App.vue'
import store from './store'

createApp(App)
    .use(store)
    .mount('#app')
