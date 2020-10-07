<template>
  <div class="md:w-1/2 lg:w-full px-4 pt-10 lg:pt-6">
    <nuxt-link
      class="flex flex-col-reverse lg:flex-row text-gray-800 rounded shadow-md"
      :to="`/${slug}`"
    >
      <div class="w-full lg:w-2/3 p-6">
        <header class="text-2xl font-bold">{{ title }}</header>
        <p class="mt-4">{{ description }}</p>
        <footer class="flex items-center mt-6">
          <img
            class="w-12 h-12 object-cover rounded-full border-3 border-teal-500"
            :src="author.image"
            :alt="author.name"
          />
          <div class="ml-6">
            <p class="text-base font-semibold">{{ author.name }}</p>
            <p class="text-sm">{{ date | formatDate }}</p>
          </div>
        </footer>
      </div>
      <img
        class="w-full lg:w-1/3 h-48 lg:h-auto object-cover"
        :src="cover"
        :alt="title"
      />
    </nuxt-link>
  </div>
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
    cover: {
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
