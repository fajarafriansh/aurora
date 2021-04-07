<template>
  <main>
    <CategoryDropdownSection />
    <div
      class="bg-grayscale-3 dark:bg-grayscale-8 lg:bg-grayscale-2 lg:dark:bg-grayscale-7 py-24 border-t border-grayscale-3 dark:border-grayscale-6"
    >
      <div class="container mx-auto">
        <h1 class="h1 text-center">{{ page.title }}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="max-w-screen-md mx-auto lg:pt-16 pb-16">
        <div
          class="prose lg:prose-lg dark:prose-dark"
          v-html="$md.render(page.content.markdown)"
        ></div>
      </div>
    </div>
    <FeaturedPostSection />
  </main>
</template>

<script>
import getPage from '~/queries/getPage'
import { createSEOMeta } from '~/utils/seo'

export default {
  async asyncData({ app, route, error }) {
    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: getPage,
        variables: {
          slug: route.params.page,
        },
      })
      return {
        page: data.page,
      }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page not found',
      })
    }
  },
  head() {
    const title = `${this.page.title} - Archivil`
    const url = this.page.slug

    return {
      title,
      meta: createSEOMeta({ title, url }),
    }
  },
}
</script>
