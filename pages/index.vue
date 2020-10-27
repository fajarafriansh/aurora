<template>
  <main>
    <section>
      <CategoriesSection :categories="categories" />
    </section>
    <div class="container mx-auto">
      <div class="mt-6 lg:mt-10 lg:flex">
        <section class="lg:w-2/3">
          <PostListSection :articles="posts" />
        </section>
        <aside class="lg:w-1/3 mt-8 lg:mt-0 lg:pl-14">
          <!-- <SidebarSection :showcase="articles[0]" :topics="categories" /> -->
        </aside>
      </div>
    </div>
    <NewsletterSection />
  </main>
</template>

<script>
import getPosts from '~/queries/getPosts'
import getCategories from '~/queries/getCategories'

export default {
  apollo: {
    posts: {
      prefetch: true,
      query: getPosts,
    },
    categories: {
      prefetch: true,
      query: getCategories,
    },
  },
}
</script>
