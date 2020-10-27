<template>
  <div class="relative text-grayscale-5 dark:text-grayscale-4 text-sm lg:text-base">
    <div class="flex items-center justify-center w-12 absolute inset-0 py-2 px-3">
      <unicon name="search" />
    </div>
    <input
      v-model="searchInput"
      ref="search"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @keydown.esc="blurInput"
      placeholder="Search (Press ''/'' to focus)"
      class="w-full bg-grayscale-1 dark:bg-grayscale-6 rounded-md border-2 border-grayscale-3 dark:border-grayscale-5 placeholder-current outline-none focus:border-primary-2 dark-focus:border-primary-1 pl-12 pr-4 py-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    searchInput: '',
    isFocus: false,
  }),
  mounted() {
    window.addEventListener('keydown', this.focusInput)
  },
  destroyed() {
    window.removeEventListener('keydown', this.focusInput)
  },
  methods: {
    focusInput(e) {
      if (e.keyCode === 191) {
        if (!this.isFocus) {
          e.preventDefault()
        }
        this.$refs.search.focus()
      }
    },
    blurInput() {
      this.$refs.search.blur()
    }
  },
}
</script>
