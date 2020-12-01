<template>
  <button
    :type="type"
    class="flex items-center justify-center text-grayscale-5 dark:text-grayscale-4 font-semibold hover:text-primary-2 dark-hover:text-primary-1 transition duration-150 ease-in-out focus:outline-none"
    :class="buttonClasses + ' ' + wideButton"
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
    as: {
      type: String,
      default: 'button',
    },
    wide: {
      type: Boolean,
      default: true,
    },
    function: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    buttonClasses() {
      if (this.as === 'button') {
        return 'bg-grayscale-3 dark:bg-grayscale-6 rounded-lg border-2 border-transparent hover:border-primary-2 dark-hover:border-primary-1'
      }
      return ' '
    },
    wideButton() {
      if (this.as === 'button') {
        if (this.wide) {
          return 'px-4 py-2'
        }
        return 'p-2'
      }
      return ' '
    },
  },
}
</script>
