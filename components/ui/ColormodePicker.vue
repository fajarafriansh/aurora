<template>
  <div>
    <button
      class="flex items-center text-2xl text-grayscale-5 dark:text-grayscale-4 hover:text-primary-2 dark-hover:text-primary-1 focus:outline-none"
      @click="toggle"
    >
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <unicon v-if="this.$colorMode.preference == 'light'" name="moon" />
        <unicon v-else name="sun" />
      </transition>
    </button>
    <transition
      leave-active-class="transition ease-in duration-100"
      leave-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        v-show="overlay"
        class="fixed min-h-screen inset-0 z-40"
        :class="
          this.$colorMode.preference == 'light'
            ? 'bg-grayscale-2'
            : 'bg-grayscale-8'
        "
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
    }
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
      this.overlay = true
      setTimeout(() => {
        this.overlay = false
      }, 300)
    },
  },
}
</script>
