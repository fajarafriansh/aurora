<template>
  <nuxt-link class="flex items-start space-x-4" :to="`/${slug}`">
    <h1 class="text-5xl font-semibold leading-none">0{{ index }}</h1>
    <div>
      <h1 class="text-lg font-semibold mb-2">{{ title }}</h1>
      <p class="text-sm text-gray-600">{{ author.name }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    author: {
      type: Object,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
  },
}
</script>
