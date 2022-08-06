<template>
  <nuxt-link
    class="flex flex-col justify-between rounded-3x hover:bg-grayscale-1 dark-hover:bg-grayscale-6 transition duration-300 ease-in-out"
    :to="`/article/${slug}`"
  >
    <div>
      <div class="article-cover relative w-full">
        <img class="w-full h-3/5 object-cover rounded-3xl" :src="cover" :alt="title" />
        <!-- <div
          class="overlay bg-grayscale-8 opacity-0 absolute inset-0 w-full h-full"
        ></div> -->
      </div>
      <div class="p-6">
        <nuxt-link
          class="flex items-center callout col-span-3 lg:col-span-8"
          :to="`/category/${category.slug}`"
        >
          {{ category.title }}
        </nuxt-link>
        <h2 class="h2 mt-6 flex-shrink">{{ title }}</h2>
        <h2 class="mt-8">{{ excerpt }}</h2>
      </div>


    </div>
    <div class="flex items-center p-6 -mt-6">
      <img
        class="w-8 h-8 object-cover rounded-full"
        :src="author.picture.url"
        :alt="author.name"
      />
      <div class="ml-2">
        <p
          class="text-sm text-grayscale-7 dark:text-grayscale-2 font-normal leading-normal"
        >
          {{ author.name }}
        </p>
        <p
          class="text-xs text-grayscale-5 dark:text-grayscale-4 leading-relaxed"
        >
          {{ date | formatDate }}
        </p>
      </div>
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
    excerpt: {
      type: String,
      default: null,
    },
    date: {
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
    author: {
      type: Object,
      default: null,
    },
  },
}
</script>
