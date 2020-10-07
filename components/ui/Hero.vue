<template>
  <nuxt-link
    class="flex flex-col lg:flex-row text-black rounded-md shadow-lg"
    :to="`/${slug}`"
  >
    <img
      class="w-full lg:w-7/12 h-56 lg:h-100 object-cover rounded-t-md lg:rounded-t-none lg:rounded-l-md"
      :src="cover"
      :alt="title"
    />
    <div class="p-6 md:p-10 flex flex-col justify-between">
      <div>
        <header>
          <p class="text-sm font-semibold text-teal-500">
            {{ date | formatDate }}
          </p>
          <h3 class="h3 mt-2">{{ title }}</h3>
        </header>
        <p class="mt-4">{{ description }}</p>
      </div>
      <footer class="flex items-center mt-6 lg:-ml-20">
        <img
          class="w-20 h-20 object-cover rounded-full border-3 border-teal-500 shadow-lg"
          :src="author.image"
          :alt="author.name"
        />
        <div class="ml-6">
          <p class="text-base font-semibold">{{ author.name }}</p>
          <p class="text-sm">
            {{ date | formatDate }}
          </p>
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
