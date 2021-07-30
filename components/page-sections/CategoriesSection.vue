<template>
  <section
    class="
      py-2
      transition
      duration-75
      ease-in-out
      bg-grayscale-2
      dark:bg-grayscale-7
    "
  >
    <div class="container">
      <div class="flex items-center mt-2">
        <button-bordered
          v-show="!showLess"
          class="mr-4"
          :wide="false"
          :function="viewLess"
        >
          <unicon name="times" height="20" width="20" />
        </button-bordered>
        <span
          class="
            text-sm
            font-medium
            leading-none
            tracking-wider
            uppercase
            text-grayscale-5
            dark:text-grayscale-4
          "
        >
          Categories
        </span>
      </div>
      <div
        class="
          flex
          items-start
          justify-between
          space-x-2
          overflow-x-auto
          lg:space-x-4
        "
        :class="overflowClasses"
      >
        <div
          class="flex items-center justify-start w-full mt-2 -mx-1 lg:-mx-2"
          :class="wrapClasses"
        >
          <CategoryCard
            v-for="category in categories"
            :key="category.title"
            :title="category.title"
            :slug="category.slug"
            :cover="category.coverImage.url"
            :width-classes="widthClasses"
            :border-classes="borderClasses"
            class="lg:w-1/6 lg:h-24"
          />
        </div>
        <button
          v-show="showLess"
          class="
            w-12
            p-2
            mt-4
            text-sm
            font-semibold
            text-center
            border-2 border-transparent
            rounded-lg
            h-14
            lg:w-16 lg:h-20
            bg-grayscale-3
            dark:bg-grayscale-6
            lg:p-4 lg:text-base
            text-grayscale-5
            dark:text-grayscale-4
            focus:outline-none
            hover:border-primary-2 hover:text-primary-2
            dark-hover:border-primary-1 dark-hover:text-primary-1
          "
          @click="viewAll"
        >
          All ...
        </button>
      </div>
    </div>
  </section>
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
  data() {
    return {
      showLess: true,
    }
  },
  computed: {
    displayCategories() {
      if (this.showLess) {
        if (this.categories.length > 6) {
          return this.categories.slice(0, 6)
        }
      }
      return this.categories
    },
    wrapClasses() {
      if (!this.showLess) {
        return 'flex-wrap'
      }
      return ' '
    },
    widthClasses() {
      if (!this.showLess) {
        return 'w-1/2 h-20 md:w-1/4 p-2'
      }
      return 'w-36 h-18 px-1 py-2'
    },
    borderClasses() {
      if (!this.showLess) {
        return 'p-2'
      }
      return 'px-1 py-2'
    },
    overflowClasses() {
      if (!this.showLess) {
        return 'overflow-x-hidden'
      }
      return ' '
    },
  },
  methods: {
    viewAll() {
      this.showLess = !this.showLess
    },
    viewLess() {
      this.showLess = !this.showLess
    },
  },
}
</script>
