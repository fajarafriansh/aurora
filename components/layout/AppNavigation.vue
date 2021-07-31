<template>
  <header
    class="fixed top-0 z-20 w-full py-3 transition duration-300 ease-out transform translate-y-0 border-b h-17 bg-grayscale-1 dark:bg-grayscale-6 border-grayscale-2 dark:border-grayscale-6"
    :class="[
      { 'transform -translate-y-full shadow-none': !showNavbar },
      lastScrollPosition > 10 ? 'shadow-lg' : '',
    ]"
  >
    <div class="container flex items-center justify-between mx-auto">
      <nuxt-link
        to="/"
        class="flex items-center justify-start w-10 h-10 md:w-34"
      >
        <Logo />
      </nuxt-link>
      <div class="flex items-center justify-end w-full ml-4 lg:w-1/3">
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
