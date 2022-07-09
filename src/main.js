// import devtools from '@vue/devtools'
// if (process.env.NODE_ENV === 'development') {
// 	devtools.connect(/* host, port */)
// }

import 'uno.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import App from './App.vue'

loadFonts()

const app = createApp(App)

app.use(createHead())
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
