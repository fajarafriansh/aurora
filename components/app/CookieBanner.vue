<template>
  <div
    v-if="isOpen"
    class="fixed bottom-0 left-0 lg:flex items-center p-4 bg-gray-100 shadow-sm justify-center w-full"
  >
    <div class="text-5xl pb-2 leading-none">
      🍪
    </div>
    <div class="lg:mx-8">
      <p>
        Can I use cookies for analytics? Read
        <nuxt-link class="text-link" to="/kebijakan-privasi">the privacy policy</nuxt-link>
        for more information.
      </p>
    </div>
    <div class="flex justify-center mt-4 lg:mt-0">
      <div class="button ml-2 md:ml-0" @click="accept">Yes, sure</div>
      <div class="button md:ml-2" @click="deny">&times;</div>
    </div>
  </div>
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
  data() {
    return {
      isOpen: false,
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    },
    accept() {
      if (process.browser) {
        bootstrap().then(gtag => {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', true)
          location.reload()
        })
      }
    },
  },
}
</script>
