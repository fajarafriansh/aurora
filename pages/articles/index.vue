<template>
  <main>
    <CategoryDropdownSection />
    <div v-if="posts" class="container mx-auto">
      <section-header class="mt-12">Post List</section-header>
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
    <div
      v-else
      class="container mx-auto py-12 lg:py-20 text-grayscale-7 dark:text-grayscale-2"
    >
      <div
        class="max-w-screen-md mx-auto relative flex items-start justify-center"
      >
        <div class="flex justify-center absolute inset-0 -z-10">
          <span
            class="text-grayscale-2 dark:text-grayscale-6 text-12xl md:text-14xl lg:text-18xl font-semibold leading-none"
          >
            404
          </span>
        </div>
        <div
          class="flex flex-col items-center justify-center mt-12 md:mt-14 lg:mt-20"
        >
          <span class="text-xl md:text-3xl font-semibold text-center">
            Oops! We can't find that page
          </span>
          <!-- <div class="w-full flex items-center mt-6">
            <SearchBox :search="fetchSuggestions" class="flex-1" />
            <button-primary class="ml-2">Search</button-primary>
          </div> -->
          <div class="flex items-center justify-center mt-6">
            <span
              class="w-12 border-b border-grayscale-4 dark:border-grayscale-5"
            ></span>
            <span class="ml-2 mr-2">or</span>
            <span
              class="w-12 border-b border-grayscale-4 dark:border-grayscale-5"
            ></span>
          </div>
          <link-secondary to="/" as="button" class="flex flex-grow-0 mt-6">
            Back to Home
          </link-secondary>
        </div>
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
    const title = 'Articles'
    const url = '/articles'

    return {
      title,
      meta: createSEOMeta({ title, url }),
    }
  },
}
</script>
