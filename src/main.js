import { createApp } from 'vue'
import store from './store'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

const app = createApp(App)
app.use(ElementUI)
app.use(store)

app.mount('#app')
