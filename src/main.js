import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})


createApp(App).use(store)
    .use(router)
    .use(vuetify)
    .mount('#app')
