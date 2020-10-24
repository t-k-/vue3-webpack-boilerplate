import 'babel-polyfill'
import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
app.component('Dialog', Dialog)
app.component('Button', Button)

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

app.mount('#app')
