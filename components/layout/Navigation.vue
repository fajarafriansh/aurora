<template>
  <header
    class="top-0 absolute z-50 w-full bg-white py-2 border-b border-gray-300"
  >
    <div
      class="container mx-auto px-4 flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex items-center justify-between lg:w-auto lg:static lg:justify-start"
      >
        <span class="text-3xl text-black font-semibold">Aurora</span>
        <button
          class="cursor-pointer text-6xl leading-none lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          =
        </button>
      </div>
      <div
        class="lg:flex items-center mt-2 lg-mt-0 space-y-2 lg:space-y-0 lg:space-x-10 text-lg font-semibold"
        :class="{ hidden: !showMenu, block: showMenu }"
      >
        <nuxt-link
          to="/about"
          class="flex flex-col text-black no-underline hover:text-blue-400"
          >About
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="flex flex-col text-black no-underline hover:text-blue-400"
          >Category
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="flex flex-col text-black no-underline hover:text-blue-400"
          >Contact
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
