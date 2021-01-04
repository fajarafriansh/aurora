import Vue from 'vue'
import VueGtag from 'vue-gtag'

const getGDPR = localStorage.getItem('GDPR:accepted')

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.GA_MEASUREMENT_ID },
      appName: process.env.GA_APP_NAME,
      bootstrap: getGDPR === 'true',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
