<template>
  <main>
    <CategoriesSection />
    <div class="container mx-auto">
      <div class="mt-6 lg:mt-10 lg:flex">
        <PostListSection class="lg:w-2/3" :articles="posts" />
        <SidebarSection class="lg:w-1/3 mt-8 lg:mt-0 lg:pl-14" />
      </div>
    </div>
    <NewsletterSection />
  </main>
</template>

<script>
import getPosts from '~/queries/getPosts'

export default {
  apollo: {
    posts: {
      prefetch: true,
      query: getPosts,
    },
  },
}
</script>
