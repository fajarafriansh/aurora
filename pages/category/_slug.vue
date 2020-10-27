<template>
  <div>
    {{ category.title }}

    <div v-for="post in posts">
      <nuxt-link :to="'/article/' + post.slug">
        {{ post.title }}
      </nuxt-link>
    </div>
  </div>
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
      redirect('/blog')
    }
  }
}
</script>
