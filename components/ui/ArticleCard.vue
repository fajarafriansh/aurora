<template>
  <nuxt-link class="flex text-gray-800 rounded shadow-md" :to="`/${slug}`">
    <div class="w-3/4 p-6">
      <header class="text-2xl font-bold">{{ title }}</header>
      <p class="mt-4">{{ description }}</p>
      <footer class="flex items-center mt-6">
        <img
          class="w-20 h-20 object-cover rounded-full border-4 border-teal-500"
          :src="author.image"
          :alt="author.name"
        />
        <div class="ml-6">
          <p class="text-xl font-bold">{{ author.name }}</p>
          <p class="text-sm mt-1">{{ date }}</p>
        </div>
      </footer>
    </div>
    <img
      class="w-1/4 h-auto object-cover"
      :src="author.image"
      :alt="author.name"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: {
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
