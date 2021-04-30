import Vue from 'vue'
import zoom from 'medium-zoom'

const initZoom = () => {
  zoom('img:not(.medium-zoom-image)')
}

mounted() {
  initZoom()
}

updated() {
  initZoom()
}
