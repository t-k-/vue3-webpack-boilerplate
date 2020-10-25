import 'babel-polyfill'
import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

import Card from 'primevue/card';
app.component('Card', Card)

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

app.mount('#app')
