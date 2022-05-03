import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

const app = createApp(App)
const elements = [
    store,
    router,
    Equal
]
elements.forEach(el => {
    app.use(el)
})

app.mount('#app')
