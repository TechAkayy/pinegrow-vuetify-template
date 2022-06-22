// import devtools from '@vue/devtools'
// if (process.env.NODE_ENV === 'development') {
// 	devtools.connect(/* host, port */)
// }

import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'

loadFonts()

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')
