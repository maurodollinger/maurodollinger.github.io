module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myweb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    '@/assets/css/main.scss'
  ],
 // router: { base:'/myweb/'},
  /*
  ** Build configuration
  */
  plugins: ['~plugins/vue-scrollto.js','~plugins/vue-in-viewport-directive.js'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
     /* if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
