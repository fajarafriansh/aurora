import Vue from 'vue'
import VueGtag from 'vue-gtag'

const getGDPR = localStorage.getItem('GDPR:accepted')

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: 'G-JPR30SPHFF' },
      appName: 'Archivil',
      bootstrap: getGDPR === 'true',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
