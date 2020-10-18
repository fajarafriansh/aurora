<template>
  <div>
    <nuxt-link
      v-if="type === 'internal'"
      :to="to"
      class="font-semibold transition duration-150 ease-in-out"
      :class="classes + ' ' + wideButton"
    >
      <slot></slot>
    </nuxt-link>

    <a
      v-else
      rel="noopener"
      target="_blank"
      :href="to"
      class="font-semibold transition duration-150 ease-in-out"
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
      default: 'internal'
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
        return 'block bg-primary-1 text-grayscale-7 text-center rounded-lg border-2 border-transparent hover:border-primary-2 hover:bg-primary-2'
      } else {
        return 'text-primary-1 hover:text-primary-2'
      }
    },
    wideButton() {
      if (this.as === 'button') {
        if (this.wide) {
          return 'px-4 py-2'
        } else {
          return 'p-2'
        }
      } else {
        return ' '
      }
    },
  },
}
</script>
