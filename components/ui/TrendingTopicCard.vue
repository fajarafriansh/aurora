<template>
  <div class="w-1/2 p-2">
    <nuxt-link
      class="article-card w-full flex flex-col items-center rounded-lg bg-grayscale-7 p-4 hover:shadow-lg hover:bg-grayscale-6 transition duration-300 ease-in-out"
      :to="`/${slug}`"
    >
      <!-- <div class="flex flex-col items-center"> -->
        <img
          class="w-14 h-14 object-cover rounded-full "
          :src="cover"
          :alt="title"
        >
        <h4 class="h4 mt-2">#{{ title }}</h4>
        <p class="text-sm mt-2">16 posts</p>
      <!-- </div> -->
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
    cover: {
      type: String,
      default: null,
    },
  },
}
</script>
