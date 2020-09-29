<template>
  <nuxt-link
    class="flex flex-col md:flex-row text-black rounded shadow-lg"
    :to="`/${slug}`"
  >
    <img
      class="w-full md:w-7/12 h-56 lg:h-100 object-cover"
      :src="cover"
      :alt="title"
    />
    <div class="p-8 flex flex-col justify-between">
      <div>
        <header>
          <p class="text-sm font-semibold text-teal-500 mt-1">
            {{ date | formatDate }}
          </p>
          <h2 class="text-3xl font-bold mt-2">{{ title }}</h2>
        </header>
        <p class="mt-4">{{ description }}</p>
      </div>
      <footer class="flex items-center mt-6 transform -translate-x-50">
        <img
          class="w-20 h-20 object-cover rounded-full border-4 border-teal-500"
          :src="author.image"
          :alt="author.name"
        />
        <div class="ml-6">
          <p class="text-xl font-bold">{{ author.name }}</p>
        </div>
      </footer>
    </div>
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
