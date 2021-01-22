<template>
  <div class="w-1/2 p-2">
    <nuxt-link
      class="w-full flex flex-col items-center rounded-lg bg-grayscale-2 dark:bg-grayscale-7 p-4 hover:bg-grayscale-1 dark-hover:bg-grayscale-6 transition duration-300 ease-in-out"
      :to="`/topic/${slug}`"
    >
      <img
        class="w-14 h-14 object-cover rounded-full shadow-md"
        :src="cover ? cover.url : '/topic.png'"
        :alt="slug"
        loading="lazy"
      />
      <h4
        class="text-base text-grayscale-7 dark:text-grayscale-2 font-medium lowercase leading-relaxed tracking-normal mt-2"
        :title="`#${slug}`"
      >
        {{ `#${slug}` | truncate(13) }}
      </h4>
      <p class="text-sm mt-2">
        {{ `${posts.length} post${posts.length > 1 ? 's' : ''}` }}
      </p>
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
    posts: {
      type: Array,
      default: null,
    },
  },
}
</script>
