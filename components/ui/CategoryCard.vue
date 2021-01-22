<template>
  <nuxt-link
    class="lg:p-2 relative"
    :to="`/category/${slug}`"
    :class="widthClasses"
  >
    <img
      class="w-full h-full object-cover rounded-lg"
      :src="cover"
      :alt="title"
      loading="lazy"
    />
    <div class="absolute inset-0 mx-auto lg:p-2" :class="borderClasses">
      <div
        class="category-card flex items-center justify-center w-full h-full rounded-lg border-2 border-transparent hover:border-primary-2 dark-hover:border-primary-1 transition duration-150 ease-in-out"
      >
        <div
          class="backdrop-blur20 text-grayscale-2 text-sm lg:text-base font-medium text-center rounded-md py-2 px-4"
        >
          {{ title }}
        </div>
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
    cover: {
      type: String,
      default: null,
    },
    widthClasses: {
      type: String,
      default: null,
    },
    borderClasses: {
      type: String,
      default: null,
    },
  },
}
</script>
