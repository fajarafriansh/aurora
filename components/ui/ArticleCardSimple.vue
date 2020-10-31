<template>
  <nuxt-link
    class="flex flex-col justify-between rounded-lg bg-grayscale-2 dark:bg-grayscale-7 hover:bg-grayscale-1 dark-hover:bg-grayscale-6 transition duration-300 ease-in-out"
    :to="'/' + slug"
  >
    <div>
      <p class="callout px-6 py-4">{{ category.title }}</p>
      <div class="article-cover relative w-full">
        <img
          class="w-full h-40 object-cover"
          :src="cover"
          :alt="title"
        />
        <div class="overlay bg-grayscale-8 opacity-0 absolute inset-0 w-full h-full"></div>
      </div>
      <h4 class="h4 p-6 flex-shrink">{{ title }}</h4>
    </div>
    <p class="text-body-2 p-6 -mt-6">16 Comments</p>
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
      type: Object,
      default: null,
    },
  },
}
</script>
