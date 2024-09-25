import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
    })
    nuxtApp.vueApp.use(vuetify)
})


// import { defineNuxtPlugin } from '#app'
// import { createVuetify } from 'vuetify'
// import 'vuetify/styles'
//
// export default defineNuxtPlugin(nuxtApp => {
//     const vuetify = createVuetify()
//     nuxtApp.vueApp.use(vuetify)
// })