<template>
  <main>
    <CategoryDropdownSection />
    <div
      class="bg-grayscale-3 dark:bg-grayscale-8 lg:bg-grayscale-2 lg:dark:bg-grayscale-7 py-6 lg:pt-8 lg:pb-12 border-t border-grayscale-3 dark:border-grayscale-6"
    >
      <div
        class="container mx-auto grid grid-cols-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-2"
      >
        <img
          class="flex items-center w-10 h-10 lg:w-14 lg:h-14 object-cover rounded-lg"
          :src="category.coverImage.url"
          :alt="category.title"
        />
        <nuxt-link
          class="flex items-center callout col-span-3 lg:col-span-8"
          :to="`/category/${category.slug}`"
        >
          {{ category.title }}
        </nuxt-link>
        <p
          class="flex items-center justify-end text-body-2 col-span-2 lg:col-span-3"
        ></p>
        <h1
          class="h1 col-start-auto col-span-6 lg:col-start-2 lg:col-span-11 mt-6 lg:mt-0"
        >
          {{ article.title }}
        </h1>
        <div
          class="flex items-center col-start-auto col-span-6 lg:col-start-2 lg:col-span-11 mt-6"
        >
          <div class="flex items-center">
            <div class="flex items-center">
              <unicon name="calendar-alt" />
            </div>
            <div class="flex items-center ml-3">
              <span>{{ article.date | formatDate }}</span>
            </div>
          </div>
          <dropdown class="ml-12" width="56">
            <template #trigger>
              <div
                class="flex items-center hover:text-primary-2 dark-hover:text-primary-1"
              >
                <div class="flex items-center">
                  <unicon name="upload" />
                </div>
                <div class="flex items-center ml-3">
                  <span class="hidden md:block">Share</span>
                </div>
              </div>
            </template>
            <template #content>
              <div class="grid grid-cols-3 gap-4">
                <a
                  class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75"
                  :href="`https://twitter.com/intent/tweet?text=${article.title} ${baseUrl}/${article.slug}`"
                  alt="Share to Twitter"
                  target="_blank"
                >
                  <unicon name="twitter" />
                </a>
                <a
                  class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75"
                  :href="`http://www.facebook.com/share.php?u=${baseUrl}/${article.slug}`"
                  alt="Share to Facebook"
                  target="_blank"
                >
                  <unicon name="facebook-f" />
                </a>
                <a
                  class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75"
                  href="#"
                  alt="Share to Twitter"
                >
                  <unicon name="linkedin-alt" icon-style="monochrome" />
                </a>
                <a
                  class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-blue-400 hover:bg-opacity-75"
                  href="#"
                  alt="Share to Twitter"
                >
                  <unicon name="reddit-alien-alt" />
                </a>
              </div>
            </template>
          </dropdown>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="max-w-screen-md mx-auto py-4 lg:py-16">
        <article
          class="prose lg:prose-lg dark:prose-dark"
          v-html="$md.render(article.content.markdown)"
        ></article>
        <div class="flex flex-wrap mt-16 -mx-2">
          <div v-for="topic in topics" :key="topic.slug" class="p-2">
            <nuxt-link
              class="flex item-center bg-grayscale-7 border-2 border-transparent hover:border-primary-2 rounded-full"
              :to="`/topic/${topic.slug}`"
            >
              <img
                class="flex items-center w-8 h-8 object-cover rounded-full"
                :src="topic.coverImage ? topic.coverImage.url : '/topic.png'"
                :alt="topic.slug"
              />
              <span class="flex items-center mx-2">
                {{ `#${topic.slug}` }}
              </span>
            </nuxt-link>
          </div>
        </div>
        <Comment :data="article" class="mt-16" />
      </div>
    </div>
    <FeaturedPostSection />
  </main>
</template>

<script>
import getArticle from '~/queries/getArticle'
import { createSEOMeta } from '~/utils/seo'

export default {
  async asyncData({ app, route, error }) {
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
        topics: data.post.topics,
      }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page not found',
      })
    }
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
    }
  },
  head() {
    const title = this.article.title
    const url = this.article.slug
    const description = this.article.excerpt
    const image = this.article.coverImage.url

    return {
      title,
      meta: createSEOMeta({ title, description, image, url }),
    }
  },
}
</script>
