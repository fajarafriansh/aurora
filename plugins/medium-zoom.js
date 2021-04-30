import Vue from 'vue'
import mediumZoom from 'medium-zoom'

const initZoom = () => {
  mediumZoom('#app img:not(.medium-zoom-image)')
}

mounted() {
  initZoom()
}

updated() {
  initZoom()
}
