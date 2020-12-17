<template>
  <header
    class="top-0 h-17 fixed z-20 w-full bg-grayscale-1 dark:bg-grayscale-6 py-3 border-b border-grayscale-2 dark:border-grayscale-6 transform translate-y-0 transition duration-300 ease-out"
    :class="[
      { 'transform -translate-y-full shadow-none': !showNavbar },
      lastScrollPosition > 10 ? 'shadow-lg' : '',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <nuxt-link
        to="/"
        class="flex items-center justify-start h-10 w-10 md:w-34"
      >
        <Logo />
      </nuxt-link>
      <div class="flex items-center justify-end ml-4">
        <SearchBox class="flex-1 max-w-sm" />
        <ColormodePicker class="ml-4 lg:ml-8" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/svg/archivil-logo.svg?inline'

export default {
  components: { Logo },
  data() {
    return {
      showMenu: false,
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    onScroll() {
      const currentScrollPosition = window.pageYOffset

      if (currentScrollPosition < 0) {
        return
      }

      this.showNavbar = currentScrollPosition < this.lastScrollPosition

      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>
