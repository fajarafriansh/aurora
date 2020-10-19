<template>
  <header class="top-0 h-17 absolute z-50 w-full bg-grayscale-6 py-3">
    <div
      class="container mx-auto flex items-center justify-between"
    >
      <nuxt-link to="/" class="flex items-center justify-start h-10 w-10 md:w-34">
        <Logo />
      </nuxt-link>
      <div class="flex items-center justify-end ml-6">
        <SearchBox :search="fetchSuggestions" class="flex-1 max-w-sm" />
        <button class="ml-8 text-grayscale-4">
          <CloseButton class="h-4" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "~/assets/svg/archivil-logo.svg?inline"

export default {
  components: { Logo },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
    async fetchSuggestions(searchInput) {

    },
  },
}
</script>
