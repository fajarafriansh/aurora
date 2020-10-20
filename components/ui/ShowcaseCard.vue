<template>
  <nuxt-link
    class="flex flex-col rounded-lg bg-grayscale-2 dark:bg-grayscale-7 shadow-md hover:shadow-lg hover:bg-grayscale-1 dark-hover:bg-grayscale-6 transition duration-300 ease-in-out"
    :to="`/${slug}`"
  >
    <div class="flex items-center justify-between px-4 py-3">
      <div class="flex items-center justify-start">
        <img
          class="w-8 h-8 object-cover rounded-md lg:rounded-lg"
          :src="author.image"
          :alt="title"
        />
        <p class="callout ml-4">{{ category }}</p>
      </div>
      <p class="text-body-2">UP</p>
    </div>
    <div class="article-cover relative w-full">
      <img
        class="w-full h-48 md:h-auto object-cover"
        :src="cover"
        :alt="title"
      />
      <div class="overlay bg-grayscale-8 opacity-0 absolute inset-0 w-full h-full"></div>
    </div>
    <div class="w-full p-6">
      <h3 class="h3">{{ title }}</h3>
      <p class="text-body-2 mt-8">16 Comments</p>
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
    category: {
      type: String,
      default: null,
    },
    author: {
      type: Object,
      default: null,
    },
  },
}
</script>
