import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

const app = createApp(App)
const elements = [
    router,
    store,//store应该放router后面
    Equal
]
elements.forEach(el => {
    app.use(el)
})

app.mount('#app')
