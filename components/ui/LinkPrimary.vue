<template>
  <span>
    <nuxt-link
      v-if="type === 'internal'"
      :to="to"
      class="transition duration-150 ease-in-out"
      :class="classes + ' ' + wideButton"
    >
      <slot></slot>
    </nuxt-link>

    <a
      v-else
      rel="noopener"
      target="_blank"
      :href="to"
      class="transition duration-150 ease-in-out"
      :class="classes + ' ' + wideButton"
    >
      <slot></slot>
    </a>
  </span>
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
      default: false,
    },
  },
  computed: {
    classes() {
      if (this.as === 'button') {
        return 'block bg-primary-2 dark:bg-primary-1 text-grayscale-7 text-center font-semibold rounded-lg border-2 border-transparent hover:border-primary-3 dark-hover:border-primary-2 hover:bg-primary-3 dark-hover:bg-primary-2'
      }
      return 'text-primary-2 dark:text-primary-1 hover:text-primary-3 dark-hover:text-primary-2 font-medium'
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
