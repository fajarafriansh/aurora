<template>
  <main>
    <CategoriesSection />
    <div class="container">
      <div class="mt-6 lg:mt-10 lg:flex">
        <PostListSection class="lg:w-2/3" :articles="posts" />
        <SidebarSection class="mt-8 lg:w-1/3 lg:mt-0 lg:pl-14" />
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
