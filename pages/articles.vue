<template>
  <main>
    <CategoryDropdownSection />
    <div class="container mx-auto">
      <section-header class="mt-12">All Articles</section-header>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-6 lg:mt-10"
      >
        <ArticleCardSimple
          v-for="article in posts"
          :key="article.title"
          :title="article.title"
          :slug="article.slug"
          :cover="article.coverImage.url"
          :description="article.excerpt"
          :date="article.date"
          :category="article.category"
          :author="article.author"
        />
      </div>
    </div>
    <FeaturedPostSection class="mt-16" />
  </main>
</template>

<script>
import getAllPosts from '~/queries/getAllPosts'
import { createSEOMeta } from '~/utils/seo'

export default {
  apollo: {
    posts: {
      prefetch: true,
      query: getAllPosts,
    },
  },
  head() {
    const title = 'All Articles - Archivil'
    const url = '/articles'

    return {
      title,
      meta: createSEOMeta({ title, url }),
    }
  },
}
</script>
