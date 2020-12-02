import { createSEOMeta } from './utils/seo'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Archivil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Archivil' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@fajarafriansh' },
      ...createSEOMeta({
        title: 'Archivil',
        description:
          'Get to know all about Civil Engineering and its related in tiny bits of info',
        image: '/archivil-card.png',
        url: process.env.HOST_NAME,
      }),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism-tomorrow.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/filters',
    { src: '~/plugins/vue-unicons', mode: 'client' },
    '~/plugins/vue-js-modal',
    '~/plugins/disqus',
    '~/plugins/vue-instantsearch'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/svg',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/apollo', '@nuxtjs/markdownit'],
  // modules: ['@nuxtjs/apollo', '@nuxtjs/markdownit', '@nuxtjs/sitemap'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  purgeCSS: {
    whitelist: ['dark-mode'],
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHCMS_ENDPOINT || 'http://localhost:3000/',
      },
    },
  },

  markdownit: {
    html: true,
    injected: true,
    use: ['markdown-it-prism'],
  },

  pwa: {
    manifest: {
      name: 'Archivil',
    },
  },

  // sitemap: {
  //   hostname: process.env.HOST_NAME,
  //   routes: [],
  // },

  env: {
    baseUrl: process.env.HOST_NAME,
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaSearchApiKey: process.env.ALGOLIA_SEARCH_API_KEY
  },
}
