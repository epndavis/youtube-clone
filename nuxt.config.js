export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Youtube Clone',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        bodyAttrs: {
            class: 'bg-gray-100'
        }
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~assets/css/tailwind.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/filters',
        { src: '@/plugins/observer', mode: 'client' }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: 'http://api.youtube-clone.test'
    },

    loading: {
        color: '#FF0000',
        throttle: 300
    },

    tailwindcss: {
        config: {
            theme: {
                inset: {
                    0: 0,
                    '1/2': '50%'
                },

                extend: {
                    width: {
                        '1/7': '14.2857143%',
                        '2/7': '28.5714286%',
                        '3/7': '42.8571429%',
                        '4/7': '57.1428571%',
                        '5/7': '71.4285714%',
                        '6/7': '85.7142857%'
                    },

                    cursor: {
                        none: 'none'
                    },

                    left: {
                        '1/2': '50%'
                    }
                }
            },

            variants: {
                scale: ['responsive', 'hover', 'focus', 'group-hover'],
                display: ['responsive', 'hover', 'focus', 'group-hover']
            },

            corePlugins: {
                container: false
            },

            plugins: [
                function ({ addComponents }) {
                    addComponents({
                        '.container': {
                            padding: '0  1.5rem',

                            'margin-left': 'auto',

                            'margin-right': 'auto',

                            maxWidth: '100%',

                            '@screen sm': {
                                maxWidth: '750px'
                            },
                            '@screen md': {
                                maxWidth: '980px'
                            },
                            '@screen lg': {
                                maxWidth: '1120px'
                            },
                            '@screen xl': {
                                maxWidth: '1400px'
                            }
                        }
                    })
                }
            ]
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
    }
}
