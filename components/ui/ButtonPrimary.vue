<template>
  <button
    :type="type"
    class="bg-primary-2 dark:bg-primary-1 text-grayscale-7 font-semibold text-center rounded-lg border-2 border-transparent hover:border-primary-3 hover:bg-primary-3 dark-hover:border-primary-2 dark-hover:bg-primary-2 transition duration-150 ease-in-out focus:outline-none"
    :class="wideButton"
    @click="this.function"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    wide: {
      type: Boolean,
      default: true,
    },
    function: {
      type: Function,
      default: () => {}
    },
  },
  computed: {
    wideButton() {
      if (this.wide) {
        return 'px-4 py-2'
      } else {
        return 'p-2'
      }
    },
  },
}
</script>
