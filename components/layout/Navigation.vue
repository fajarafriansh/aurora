<template>
  <header
    class="top-0 absolute z-50 w-full bg-white py-2 border-b border-gray-300"
  >
    <div
      class="container mx-auto flex flex-wrap items-center justify-between text-black"
    >
      <div
        class="w-full relative flex items-center justify-between lg:w-auto lg:static lg:justify-start"
      >
        <span class="text-2xl lg:text-3xl font-semibold">Aurora</span>
        <button
          class="cursor-pointer lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          <HumburgerButton />
        </button>
      </div>
      <nav
        class="lg:flex items-center mt-2 lg:mt-0 py-4 lg-mt-0 space-y-2 lg:space-y-0 lg:space-x-6 text-xl leading-none font-semibold"
        :class="{ hidden: !showMenu, block: showMenu }"
      >
        <nuxt-link
          to="/about"
          class="flex flex-col p-2 md:px-4 lg:px-6 hover:text-violet-4 transition ease-in-out duration-150"
          >About
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="flex flex-col p-2 md:px-4 lg:px-6 hover:text-violet-4 transition ease-in-out duration-150"
          >Category
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="flex flex-col p-2 md:px-4 lg:px-6 hover:text-violet-4 transition ease-in-out duration-150"
          >Contact
        </nuxt-link>
      </nav>
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
