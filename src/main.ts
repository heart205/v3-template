import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './assets/css/normalize.css'
import './assets/theme/theme.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
