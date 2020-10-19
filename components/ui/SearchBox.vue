<template>
  <div class="relative text-grayscale-4 text-sm lg:text-base">
    <CloseButton class="absolute left-0 inset-y-1/2 h-10 p-2 mr-3 transform -translate-y-1/2" />
    <input
      v-model="searchInput"
      ref="search"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @keydown.esc="blurInput"
      placeholder="Search (Press ''/'' to focus)"
      class="w-full bg-grayscale-6 rounded-md border-2 border-grayscale-5 placeholder-current outline-none focus:border-primary-1 pl-12 pr-4 py-2"
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
