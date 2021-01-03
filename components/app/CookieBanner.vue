<template>
  <div
    v-if="isOpen"
    class="fixed bottom-0 left-0 lg:flex items-center p-4 bg-grayscale-1 dark:bg-grayscale-6 shadow-sm justify-center w-full"
  >
    <div class="text-5xl text-center pb-2 lg:pb-0 leading-none">🍪</div>
    <div class="lg:mx-8">
      <p class="text-grayscale-5 dark:text-grayscale-4 text-center">
        Can I use cookies for analytics? Read
        <link-primary to="/kebijakan-privasi">
          the privacy policy
        </link-primary>
        for more information.
      </p>
    </div>
    <div class="flex justify-center mt-4 lg:mt-0">
      <button-bordered :function="accept">
        Yes, sure
      </button-bordered>
      <button-bordered
        class="ml-4"
        :wide="false"
        :function="deny"
      >
        <unicon name="times" height="20" width="20" />
      </button-bordered>
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
        bootstrap().then((gtag) => {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', true)
          location.reload()
        })
      }
    },
  },
}
</script>
