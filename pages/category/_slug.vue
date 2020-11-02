<template>
  <main>
    <CategoryDropdownSection />
    <div class="container mx-auto">
      <div class="relative -mx-4 lg:mx-0">
        <img :src="category.coverImage.url" :alt="category.title" class="w-full h-32 lg:h-68 object-cover lg:rounded-b-md">
        <div class="flex flex-row lg:flex-col items-center lg:justify-center absolute inset-0 w-full lg:w-68 h-32 lg:h-68 backdrop-blur lg:rounded-bl-md">
          <img :src="category.coverImage.url" :alt="category.title" class="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded-md lg:rounded-lg ml-6 lg:ml-0">
          <span class="text-21 md:text-24 text-grayscale-2 font-medium md:font-semibold leading-normal tracking-normal lg:mt-6 ml-6 lg:ml-0">{{ category.title }}</span>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <section-header class="mt-12">Post List</section-header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-6 lg:mt-10 ">
        <ArticleCardSimple
          v-for="article in posts"
          :key="article.title"
          :title="article.title"
          :slug="article.slug"
          :cover="article.coverImage.url"
          :description="article.excerpt"
          :date="article.date"
          :category="article.category"
        />
      </div>
    </div>
    <FeaturedPostSection class=" mt-16" />
  </main>
</template>

<script>
import getCategory from '~/queries/getCategory'

export default {
  async asyncData({ app, route, redirect }) {
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
    }catch(error) {
      console.log('error', error)
      redirect('/404')
    }
  }
}
</script>
