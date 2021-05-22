require('dotenv').config()

module.exports = {
    telemetry: false,

    modern: process.env.NODE_ENV === 'production' ? 'client' : false,

    srcDir: 'src/',
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'Youtube Clone',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A small project I did to teach myself server side rendering with NUXTjs and Laravel APIs' },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' }
        ],
        link: [
            { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        bodyAttrs: {
            class: 'bg-gray-100'
        }
    },

    publicRuntimeConfig: {
        gtagId: process.env.GOOGLE_ANALYTICS_ID
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/css/tailwind.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/filters',
        { src: '@/plugins/observer', mode: 'client' },
        { src: '@/plugins/analytics', mode: 'client' }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.BASE_URL
    },

    loading: {
        color: '#FF0000',
        throttle: 300
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
