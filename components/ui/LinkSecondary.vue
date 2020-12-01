<template>
  <div>
    <nuxt-link
      v-if="type === 'internal'"
      :to="to"
      class="flex items-center justify-center text-grayscale-5 dark:text-grayscale-4 hover:text-primary-2 dark-hover:text-primary-1 transition duration-150 ease-in-out"
      :class="classes + ' ' + wideButton"
    >
      <slot></slot>
    </nuxt-link>

    <a
      v-else
      rel="noopener"
      target="_blank"
      :href="to"
      class="flex items-center justify-center text-grayscale-5 dark:text-grayscale-4 hover:text-primary-2 dark-hover:text-primary-1 transition duration-150 ease-in-out"
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
      default: 'link',
    },
    to: {
      type: String,
      default: null,
    },
    wide: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classes() {
      if (this.as === 'button') {
        return 'block bg-grayscale-2 dark:bg-grayscale-6 font-semibold rounded-lg border-2 border-transparent hover:border-primary-1'
      }
      return 'font-medium'
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
