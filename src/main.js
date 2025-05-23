import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/styles/reset.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import directives from './directives'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(directives)

app.mount('#app')
