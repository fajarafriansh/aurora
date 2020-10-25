<template>
  <div class="">
    <nuxt-link
      class="article-card flex flex-col rounded-lg shadow-md bg-grayscale-2 dark:bg-grayscale-7 lg:ml-22 lg:relative hover:shadow-lg hover:bg-grayscale-1 dark-hover:bg-grayscale-6 transition duration-300 ease-in-out"
      :to="`/${slug}`"
    >
      <div class="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
        <div class="flex items-center justify-start">
          <img
            class="w-8 h-8 lg:w-14 lg:h-14 object-cover rounded-md lg:rounded-lg lg:absolute lg:inset-0 lg:-ml-22"
            :src="category.coverImage.url"
            :alt="category.title"
          />
          <div class="callout-shape text-grayscale-2 dark:text-grayscale-7 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current transform -rotate-90 absolute inset-0 -translate-x-4 translate-y-4"
            >
              <path
                d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"
              />
            </svg>
          </div>
          <p class="callout ml-4 lg:ml-0">{{ category.title }}</p>
        </div>
        <p class="text-body-2">{{ date | formatDate }}</p>
      </div>
      <div class="article-cover relative w-full">
        <img
          class="w-full h-48 md:h-auto object-cover"
          :src="cover.url"
          :alt="title"
        />
        <div class="overlay bg-grayscale-8 opacity-0 absolute inset-0 w-full h-full"></div>
      </div>
      <div class="w-full p-6">
        <h2 class="h2">{{ title }}</h2>
        <p class="mt-8 hidden lg:block">{{ description }}</p>
        <footer class="flex items-center mt-8">
          <img
            class="w-8 h-8 object-cover rounded-full"
            :src="author.picture.url"
            :alt="author.name"
          />
          <div class="ml-4">
            <p class="callout">{{ author.name }}</p>
          </div>
        </footer>
      </div>
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
      type: Object,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    category: {
      type: Object,
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
