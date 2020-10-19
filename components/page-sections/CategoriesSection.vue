<template>
  <div class="bg-grayscale-7 py-2">
    <div class="container mx-auto">
      <div class="flex items-center mt-2">
        <button-bordered
          v-show="!showLess"
          class="mr-4"
          :wide="false"
          :function="viewLess"
        >
          <CloseButton class="h-4" />
        </button-bordered>
        <p class="text-sm font-medium uppercase leading-none tracking-wider">Categories</p>
      </div>
      <div class="flex items-start justify-between space-x-2 lg:space-x-4 overflow-x-auto" :class="overflowClasses">
        <div class="flex items-center justify-start -mx-1 lg:-mx-2 mt-2" :class="wrapClasses">
          <CategoryCard
            v-for="category in displayCategories"
            :key="category.title"
            :title="category.title"
            :cover="category.cover"
            :widthClasses="widthClasses"
            :borderClasses="borderClasses"
          />
        </div>
        <button v-show="showLess" class="w-12 h-14 lg:w-16 lg:h-20 bg-grayscale-6 rounded-lg mt-4 p-2 lg:p-4 text-center text-sm lg:text-base font-semibold focus:outline-none border-2 border-transparent hover:border-primary-1 hover:text-primary-1 transition duration-150 ease-in-out" @click="viewAll">All ...</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      showLess: true,
    }
  },
  computed: {
    displayCategories() {
      if (this.showLess) {
        return this.categories.slice(0, 6)
      } else {
        return this.categories
      }
    },
    wrapClasses() {
      if (!this.showLess) {
        return 'flex-wrap'
      }
    },
    widthClasses() {
      if (!this.showLess) {
        return 'w-1/2 h-20 md:w-1/4 p-2'
      } else {
        return 'w-36 h-18 px-1 py-2'
      }
    },
    borderClasses() {
      if (!this.showLess) {
        return 'p-2'
      } else {
        return 'px-1 py-2'
      }
    },
    overflowClasses() {
       if (!this.showLess) {
        return 'overflow-x-hidden'
      }
    }
  },
  methods: {
    viewAll() {
      this.showLess = !this.showLess
    },
    viewLess() {
      this.showLess = !this.showLess
    }
  },
}
</script>
