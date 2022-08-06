<template>
  <main>
    <div class="container mx-auto">
      <div class="relative flex flex-col justify-center items-center w-full h-48 bg-indigo-500 mt-4 rounded-3xl border-0">
        <h1 class="h1">Blog</h1>
        <SearchBox class="flex-1 w-1/2 absolute -bottom-10" />
      </div>
      <CategoryDropdownSection class="mt-20" />
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6 lg:mt-10"
      >
        <ArticleCardSimple
          v-for="article in posts"
          :key="article.title"
          :title="article.title"
          :slug="article.slug"
          :cover="article.coverImage.url"
          :excerpt="article.excerpt"
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
