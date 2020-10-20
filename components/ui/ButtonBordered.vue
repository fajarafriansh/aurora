<template>
  <button
    :type="type"
    class="text-center text-grayscale-5 dark:text-grayscale-4 font-medium rounded-lg border-2 border-grayscale-4 dark:border-grayscale-5 hover:text-primary-2 dark-hover:text-primary-1 hover:border-primary-2 dark-hover:border-primary-1 transition duration-150 ease-in-out focus:outline-none"
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
