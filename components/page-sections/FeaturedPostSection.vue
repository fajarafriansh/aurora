<template>
  <section class="bg-light dark:bg-dark py-10">
    <div class="container mx-auto">
      <section-header>Featured Posts</section-header>
      <div class="flex mt-6 space-x-6 overflow-auto lg:overflow-hidden">
        <ArticleCardSimple
          v-for="article in postShow.posts"
          :key="article.title"
          :title="article.title"
          :slug="article.slug"
          :cover="article.coverImage.url"
          :description="article.excerpt"
          :date="article.date"
          :category="article.category"
          class="w-3/4 md:w-64 lg:w-1/4 lg:w-1/4 flex-shrink-0 lg:flex-shrink"
        />
      </div>
    </div>
  </section>
</template>

<script>
import getFeaturedPosts from '~/queries/getFeaturedPosts'

export default {
  apollo: {
    postShow: {
      prefetch: true,
      query: getFeaturedPosts,
    },
  },
}
</script>
