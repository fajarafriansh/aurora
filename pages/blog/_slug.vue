<template>
  <main>
    <CategoryDropdownSection />
    <div
      class="bg-grayscale-1 dark:bg-grayscale-8 lg:bg-grayscale-2 lg:dark:bg-grayscale-7 py-6 lg:pt-8 lg:pb-12 border-t border-transparent lg:border-grayscale-3 dark:border-grayscale-6"
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
          class="flex items-center justify-between lg:justify-start col-start-auto col-span-6 lg:col-start-2 lg:col-span-11 mt-6"
        >
          <div class="flex items-center">
            <div class="flex items-center">
              <unicon name="calendar-alt" />
            </div>
            <div class="flex items-center ml-3">
              <span>{{ article.date | formatDate }}</span>
            </div>
          </div>
          <button
            type="button"
            class="flex items-center hover:text-primary-2 dark-hover:text-primary-1 ml-12 focus:outline-none"
            @click="show"
          >
            <div class="flex items-center">
              <unicon name="upload" />
            </div>
            <div class="flex items-center ml-3">
              <span class="hidden md:block">Share</span>
            </div>
          </button>
        </div>
      </div>
      <modal name="share" :width="400" :adaptive="true">
        <div class="p-6">
          <div class="w-full text-lg font-semibold text-center">Share</div>
          <div class="grid grid-cols-4 gap-4 mt-4">
            <a
              class="flex flex-col items-center"
              :href="`https://twitter.com/intent/tweet?text=${article.title} ${baseUrl}/article/${article.slug}`"
              title="Share to Twitter"
              target="_blank"
            >
              <div
                class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-twitter hover:bg-opacity-75"
              >
                <unicon name="twitter" />
              </div>
              <div class="mt-2 text-sm text-grayscale-6 dark:text-grayscale-3">
                Twitter
              </div>
            </a>
            <a
              class="flex flex-col items-center"
              :href="`http://www.facebook.com/share.php?u=${baseUrl}/article/${article.slug}`"
              title="Share to Facebook"
              target="_blank"
            >
              <div
                class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-facebook hover:bg-opacity-75"
              >
                <unicon name="facebook-f" />
              </div>
              <div class="mt-2 text-sm text-grayscale-6 dark:text-grayscale-3">
                Facebook
              </div>
            </a>
            <a
              class="flex flex-col items-center"
              :href="`https://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}/article/${
                article.slug
              }&title=${encodeURIComponent(article.title)}`"
              title="Share to LinkedIn"
              target="_blank"
            >
              <div
                class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-linkedin hover:bg-opacity-75"
              >
                <unicon name="linkedin-alt" icon-style="monochrome" />
              </div>
              <div class="mt-2 text-sm text-grayscale-6 dark:text-grayscale-3">
                LinkedIn
              </div>
            </a>
            <a
              class="flex flex-col items-center"
              :href="`http://www.reddit.com/submit?url=${baseUrl}/article/${
                article.slug
              }&title=${encodeURIComponent(article.title)}`"
              title="Share to Reddit"
              target="_blank"
            >
              <div
                class="flex items-center justify-center w-12 h-12 text-grayscale-1 p-2 rounded-md bg-reddit hover:bg-opacity-75"
              >
                <unicon name="reddit-alien-alt" />
              </div>
              <div class="mt-2 text-sm text-grayscale-6 dark:text-grayscale-3">
                Reddit
              </div>
            </a>
          </div>
        </div>
      </modal>
    </div>
    <div class="bg-grayscale-1 dark:bg-grayscale-8">
      <div class="container mx-auto">
        <div class="max-w-screen-md mx-auto py-8 lg:py-16">
          <article
            class="prose lg:prose-lg dark:prose-dark"
            v-html="$md.render(article.content.markdown)"
          ></article>
          <div class="flex flex-wrap mt-12 -mx-1 lg:-mx-2">
            <div v-for="topic in topics" :key="topic.slug" class="p-1 lg:p-2">
              <nuxt-link
                class="flex item-center bg-grayscale-2 dark:bg-grayscale-7 border-2 border-transparent hover:border-primary-3 dark-hover:border-primary-2 rounded-full"
                :to="`/topic/${topic.slug}`"
              >
                <img
                  class="flex items-center w-6 h-6 lg:w-8 lg:h-8 object-cover rounded-full"
                  :src="topic.coverImage ? topic.coverImage.url : '/topic.png'"
                  :alt="topic.slug"
                />
                <span class="flex items-center mx-2 text-sm lg:text-base">
                  {{ `#${topic.slug}` }}
                </span>
              </nuxt-link>
            </div>
          </div>
          <Comment :data="article" class="mt-16" />
        </div>
      </div>
    </div>
    <FeaturedPostSection />
  </main>
</template>

<script>
import getArticle from '~/queries/getArticle'
import { createSEOMeta } from '~/utils/seo'

const truncate = (value, length) => {
  if (value.length > length) {
    return value.substring(0, length - 3) + '...'
  }
  return value
}

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
      baseUrl: process.env.BASE_URL,
    }
  },
  head() {
    const title = this.article.title
    const url = `/blog/${this.article.slug}`
    const description = truncate(this.article.excerpt, 160)
    const image = this.article.coverImage.url

    return {
      title,
      meta: createSEOMeta({ title, description, image, url }),
    }
  },
  methods: {
    show() {
      this.$modal.show('share')
    },
    hide() {
      this.$modal.hide('share')
    },
  },
}
</script>
