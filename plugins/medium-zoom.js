import Vue from 'vue'
import mediumZoom from 'medium-zoom'

new Vue({
  mounted() {
    mediumZoom('.prose img:not(.medium-zoom-image)')
  }
})

// const initZoom = () => {
//   mediumZoom('#app img:not(.medium-zoom-image)')
// }

// Vue.mixin({
//   mounted() {
//     initZoom()
//   },
//   updated() {
//     initZoom()
//   },
// })
