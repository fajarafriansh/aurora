<template>
  <div>
    <button
      v-if="as === 'button'"
      :type="type"
      class="bg-grayscale-6 text-center text-grayscale-4 font-semibold rounded-lg border-2 border-transparent hover:border-primary-1 hover:text-primary-1 transition duration-150 ease-in-out focus:outline-none"
      :class="wideButton + ' ' + classes"
      @click="action"
    >
      <slot></slot>
    </button>

    <nuxt-link
      v-else-if="as === 'link'"
      :to="to"
      class="block bg-grayscale-6 text-center text-grayscale-4 font-semibold rounded-lg border-2 border-transparent hover:border-primary-1 hover:text-primary-1 transition duration-150 ease-in-out"
      :class="wideButton"
    >
      <slot></slot>
    </nuxt-link>

    <a
      v-else
      rel="noopener"
      target="_blank"
      :href="to"
      class="block bg-grayscale-6 text-center text-grayscale-4 font-semibold rounded-lg border-2 border-transparent hover:border-primary-1 hover:text-primary-1 transition duration-150 ease-in-out"
      :class="wideButton"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'button',
    },
    wide: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: null,
    },
    classes: {
      type: String,
      default: null,
    },
    action: {
      type: Function,
      default: null,
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
