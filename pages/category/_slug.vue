<template>
  <main>
    <CategoryDropdownSection />
    <div class="container mx-auto">
      <div class="relative -mx-4 lg:mx-0">
        <img
          :src="category.coverImage ? category.coverImage.url : '/banner.jpg'"
          :alt="category.title"
          class="w-full h-32 lg:h-68 object-cover lg:rounded-b-md"
          loading="lazy"
        />
        <div
          class="flex flex-row lg:flex-col items-center lg:justify-center absolute inset-0 w-full lg:w-68 h-32 lg:h-68 backdrop-blur lg:rounded-bl-md"
        >
          <img
            :src="category.coverImage ? category.coverImage.url : '/banner.jpg'"
            :alt="category.title"
            class="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded-md lg:rounded-lg ml-6 lg:ml-0"
            loading="lazy"
          />
          <span
            class="text-21 md:text-24 text-grayscale-2 font-medium md:font-semibold leading-normal tracking-normal lg:mt-6 ml-6 lg:ml-0"
          >
            {{ category.title }}
          </span>
        </div>
      </div>
    </div>
    <div v-if="posts.length > 0" class="container mx-auto">
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
          <div class="text-xl md:text-3xl font-semibold text-center">
            Sorry. No posts in this category yet
          </div>
          <div class="w-full flex items-center mt-6">
            <SearchBox class="flex-1 flex-shrink" />
            <button-primary class="ml-2">Search</button-primary>
          </div>
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
import getCategory from '~/queries/getCategory'
import { createSEOMeta } from '~/utils/seo'

export default {
  async asyncData({ app, route, error }) {
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: getCategory,
        variables: {
          slug: route.params.slug,
        },
      })
      return {
        category: data.category,
        posts: data.category.posts,
      }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page not found',
      })
      // redirect('/404')
    }
  },
  head() {
    const title = `${this.category.title} - Archivil`
    const url = this.category.slug
    const image = this.category.coverImage
      ? this.category.coverImage.url
      : `${process.env.baseUrl}/banner.jpg`

    return {
      title,
      meta: createSEOMeta({ title, image, url }),
    }
  },
}
</script>
