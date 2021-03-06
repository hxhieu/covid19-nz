import { styles } from './plugins/element-ui'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  mode: 'spa',
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'COVID-19 Board',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00c2ba', height: '4px' },
  /*
   ** Global CSS
   */
  css: styles,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/vuex-persist', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        component: 'fas',
        icons: [
          'faBookmark',
          'faMapMarkedAlt',
          'faUser',
          'faVenusMars',
          'faCalendarAlt',
          'faExclamationTriangle',
          'faExternalLinkAlt',
          'faTimesCircle',
          'faThLarge',
          'faThList',
          'faQuestionCircle',
        ],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        component: 'fab',
        icons: ['faFacebookSquare', 'faTwitterSquare'],
      },
    ],
  },
  pwa: {
    meta: {
      name: 'COVID-19 Board',
      ogSiteName: 'COVID-19 Board',
      ogHost: 'https://covid19board.web.app',
      ogImage: {
        path: '/img/overview.jpg',
        type: 'image/jpeg',
        width: 480,
        height: 333,
      },
    },
    manifest: {
      name: 'COVID-19 Board',
      short_name: 'COVID-19 Board',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: isProduction
      ? `https://asia-east2-covid19board${
          process.env.APP_ENV ? `-${process.env.APP_ENV}` : ''
        }.cloudfunctions.net/api`
      : 'http://localhost:5001/covid19board/asia-east2/api',
  },
  styleResources: {
    // your settings here
    scss: ['./assets/scss/*.scss'],
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) { },
  },
}
