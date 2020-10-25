import 'babel-polyfill'
import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)

import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar';
app.component('Dialog', Dialog)
app.component('Button', Button)
app.component('Toolbar', Toolbar)

//import 'primevue/resources/themes/saga-blue/theme.css'
//import 'primevue/resources/themes/vela-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

app.mount('#app')
