<template>
  <div>
    <nuxt-link
      :to="to"
      class="px-4 py-2 font-semibold transition ease-in-out duration-150"
      :class="linkClasses"
    >
      <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    as: {
      type: String,
      default: 'link',
    },
  },
  computed: {
    linkClasses() {
      if (this.as === 'link') {
        return 'text-green text-lg hover:text-violet-4'
      } else {
        return 'text-white bg-green text-lg rounded-full hover:bg-violet-4'
      }
    },
  },
}
</script>
