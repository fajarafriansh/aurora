<template>
  <div class="">
    <nuxt-link
      class="
        article-card
        flex flex-col
        transition
        duration-300
        ease-in-out
        rounded-lg
        bg-grayscale-2
        dark:bg-grayscale-7
        lg:ml-22 lg:relative
        hover:bg-grayscale-1
        dark-hover:bg-grayscale-6
      "
      :to="`/blog/${slug}`"
    >
      <div class="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
        <div class="flex items-center justify-start">
          <img
            class="
              object-cover
              w-8
              h-8
              rounded-md
              lg:w-14 lg:h-14 lg:rounded-lg lg:absolute lg:inset-0 lg:-ml-22
            "
            :src="category.coverImage.url"
            :alt="category.title"
          />
          <div
            class="
              hidden
              callout-shape
              text-grayscale-2
              dark:text-grayscale-7
              lg:block
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="
                absolute
                inset-0
                transform
                -rotate-90
                -translate-x-4
                translate-y-4
                fill-current
              "
            >
              <path
                d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"
              />
            </svg>
          </div>
          <p class="ml-4 callout lg:ml-0">{{ category.title }}</p>
        </div>
        <p class="text-body-2">{{ date | formatDate }}</p>
      </div>
      <div class="relative w-full article-cover">
        <img
          class="object-cover w-full h-48 md:h-auto"
          :src="cover.url"
          :alt="title"
        />
        <div
          class="
            absolute
            inset-0
            w-full
            h-full
            opacity-0
            overlay
            bg-grayscale-8
          "
        ></div>
      </div>
      <div class="w-full p-6">
        <h2 class="h2">{{ title }}</h2>
        <p class="hidden mt-8 lg:block">{{ description }}</p>
        <footer class="flex items-center mt-8">
          <img
            class="object-cover w-8 h-8 rounded-full"
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
