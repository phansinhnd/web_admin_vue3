// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    // store: true,
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    modules: ['@pinia/nuxt'
    ],
    runtimeConfig: {
        public: {
            // @ts-ignore
            apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
        },
    },
    css: [
        '@/assets/fonts/iconQLBCDP/style.css',
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/scss/main.scss'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    plugins: [
        { src: '~/plugins/vue-toastification.js', mode: 'client' },
        '~/plugins/axios.js',
        '~/plugins/ult.js',
        '~/plugins/ultilities.js',
    ],
})