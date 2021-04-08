import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniMoon,
  uniSun,
  uniTwitter,
  uniInstagram,
  uniFacebookF,
  uniLinkedinAltMonochrome,
  uniRedditAlienAlt,
  uniCommentDots,
  uniUpload,
  uniSearch,
  uniArrowLeft,
  uniEllipsisH,
  uniFileTimes,
  uniTimes,
  uniCalendarAlt,
  uniRedo,
  uniEnvelopes,
} from 'vue-unicons/dist/icons'
// import 'vue-unicons/dist/vue-unicons-ssr.css'

Unicon.add([
  uniSun,
  uniMoon,
  uniTwitter,
  uniInstagram,
  uniFacebookF,
  uniLinkedinAltMonochrome,
  uniRedditAlienAlt,
  uniCommentDots,
  uniUpload,
  uniSearch,
  uniArrowLeft,
  uniEllipsisH,
  uniFileTimes,
  uniTimes,
  uniCalendarAlt,
  uniRedo,
  uniEnvelopes,
])
Vue.use(Unicon, {
  fill: 'currentColor',
})
