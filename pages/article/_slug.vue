<template>
  <main>
    <CategoryDropdownSection :categories="categories" />
    <div
      class="bg-grayscale-3 dark:bg-grayscale-8 lg:bg-grayscale-2 lg:dark:bg-grayscale-7 py-6 lg:pt-8 lg:pb-12"
    >
      <div class="container mx-auto grid grid-cols-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-2">
        <img
          class="flex items-center w-10 h-10 lg:w-14 lg:h-14 object-cover rounded-lg"
          :src="category.coverImage.url"
          alt="title"
        />
        <p class="flex items-center callout col-span-3 lg:col-span-8">
          {{ category.title }}
        </p>
        <p class="flex items-center justify-end text-body-2 col-span-2 lg:col-span-3">
          {{ article.date | formatDate }}
        </p>
        <h1 class="h1 col-start-auto col-span-6 lg:col-start-2 lg:col-span-11 mt-6 lg:mt-0">
          {{ article.title }}
        </h1>
        <div class="flex items-center col-start-auto col-span-6 lg:col-start-2 lg:col-span-11 mt-6">
          <div class="flex items-center">
            <div class="flex items-center">
              <unicon name="comment-dots" />
            </div>
            <div class="flex items-center ml-3">
              <span>3</span>
              <span class="hidden md:block ml-1">Comments</span>
            </div>
          </div>
          <dropdown class="ml-12" width="56">
            <template v-slot:trigger>
              <div class="flex items-center hover:text-primary-2 dark-hover:text-primary-1">
                <div class="flex items-center">
                  <unicon name="upload" />
                </div>
                <div class="flex items-center ml-3">
                  <span class="hidden md:block">Share</span>
                </div>
              </div>
            </template>
            <template v-slot:content>
              <div class="grid grid-cols-3 gap-4">
                <a class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75" href="#" alt="Share to Twitter">
                  <unicon name="twitter" />
                </a>
                <a class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75" href="#" alt="Share to Twitter">
                  <unicon name="facebook-f" />
                </a>
                <a class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75" href="#" alt="Share to Twitter">
                  <unicon name="linkedin-alt" icon-style="monochrome" />
                </a>
                <a class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75" href="#" alt="Share to Twitter">
                  <unicon name="reddit-alien-alt" />
                </a>
              </div>
            </template>
          </dropdown>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <article v-html="$md.render(article.content.markdown)" class="prose lg:prose-lg dark:prose-dark max-w-screen-md mx-auto py-4 lg:py-16">
      </article>
    </div>
    <FeaturedPostSection :posts="posts" />
  </main>
</template>

<script>
import getArticle from '~/queries/getArticle'
import getFeaturedPosts from '~/queries/getFeaturedPosts'
import getCategories from '~/queries/getCategories'

export default {
  async asyncData({ app, route, redirect }) {
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: getArticle,
        variables: {
          slug: route.params.slug,
        },
      })
      return {
        article: data.post,
        category: data.post.category,
      }
    }catch(error) {
      console.log('error', error)
      redirect('/404')
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: getFeaturedPosts,
    },
    categories: {
      prefetch: true,
      query: getCategories,
    },
  },
}
</script>
