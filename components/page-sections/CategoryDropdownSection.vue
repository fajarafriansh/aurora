<template>
  <div class="bg-grayscale-2 dark:bg-grayscale-7 py-5">
    <div class="container mx-auto">
      <div class="flex items-center justify-between w-full">
        <link-secondary type="internal" to="/articles">
          <unicon name="arrow-left" />
          <span class="ml-2 font-medium">Back</span>
        </link-secondary>
        <div class="flex items-center justify-end">
          <button-secondary as="link" :function="show">
            <unicon name="ellipsis-h" />
            <span class="ml-2 font-medium">Categories</span>
          </button-secondary>
        </div>
      </div>
    </div>
    <modal name="categories" :width="800" :adaptive="true" :shift-y="0.2">
      <div class="p-4 md:p-8">
        <span
          class="text-grayscale-5 dark:text-grayscale-4 text-sm font-medium uppercase leading-none tracking-wider"
        >
          Categories
        </span>
        <div
          class="flex flex-wrap items-center justify-start -mx-1 lg:-mx-2 mt-2"
        >
          <CategoryCard
            v-for="category in categories"
            :key="category.title"
            :title="category.title"
            :slug="category.slug"
            :cover="category.coverImage.url"
            class="w-1/2 h-20 md:w-1/4 md:h-24 p-2"
          />
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import getCategories from '~/queries/getCategories'

export default {
  apollo: {
    categories: {
      prefetch: true,
      query: getCategories,
    },
  },
  // props: {
  //   categories: {
  //     type: Array,
  //     default: null,
  //   },
  // },
  methods: {
    show() {
      this.$modal.show('categories')
    },
    hide() {
      this.$modal.hide('categories')
    },
  },
}
</script>
