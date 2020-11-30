<template>
  <div>
    <nuxt-link
      v-if="type === 'internal'"
      :to="to"
      class="flex items-center text-grayscale-5 dark:text-grayscale-4 hover:text-primary-2 dark-hover:text-primary-1 transition duration-150 ease-in-out"
      :class="classes + ' ' + wideButton"
    >
      <slot></slot>
    </nuxt-link>

    <a
      v-else
      rel="noopener"
      target="_blank"
      :href="to"
      class="flex items-center text-grayscale-5 dark:text-grayscale-4 hover:text-primary-2 dark-hover:text-primary-1 transition duration-150 ease-in-out"
      :class="classes + ' ' + wideButton"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'internal',
    },
    as: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: null,
    },
    wide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      if (this.as === 'button') {
        return 'block text-center font-semibold rounded-lg border-2 border-grayscale-4 dark:border-grayscale-5 hover:text-primary-2 dark-hover:text-primary-1 hover:border-primary-2 dark-hover:border-primary-1'
      }
      return 'font-medium'
    },
    wideButton() {
      if (this.wide) {
        return 'px-4 py-2'
      }
      return 'p-2'
    },
  },
}
</script>
