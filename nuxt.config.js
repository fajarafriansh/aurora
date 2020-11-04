import { createSEOMeta } from "./utils/seo"

export default {
  env: {
    baseUrl: process.env.HOST_NAME,
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Archivil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...createSEOMeta({
        title: "Archivil",
        description: "Get to know all about Engineering and its related in tiny bits of info",
        image: "https://a.storyblok.com/f/83078/500x500/cb27fcd15a/naruto-avatar.jpg",
        url: process.env.HOST_NAME,
      }),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism-tomorrow.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/filters.js',
    { src: '~/plugins/vue-unicons', mode: 'client' },
    '~/plugins/vue-js-modal.js',
    '~/plugins/disqus',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/svg',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
  },

  markdownit: {
    html: true,
    injected: true,
    use: ['markdown-it-prism'],
  },

  sitemap: {
    hostname: process.env.HOST_NAME,
    routes: [],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  purgeCSS: {
    whitelist: ['dark-mode'],
  },
}
