<template>
  <aside>
    <section-header>Showcase</section-header>
    <div class="mt-6 space-y-4">
      <ShowcaseCard
        v-for="post in posts"
        :key="post.title"
        :title="post.title"
        :slug="post.slug"
        :cover="post.coverImage.url"
        :author="post.author"
        :category="post.category"
      />
    </div>
    <!-- <section-header class="mt-10">Trending Topics</section-header>
    <div class="flex flex-wrap mt-4 -mx-2">
      <TrendingTopicCard
        v-for="topic in topics"
        :key="topic.title"
        :title="topic.title"
        :cover="topic.cover"
      />
    </div> -->
  </aside>
</template>

<script>
import getShowcasePost from '~/queries/getShowcasePost'

export default {
  apollo: {
    posts: {
      prefetch: true,
      query: getShowcasePost,
    },
  },
  // props: {
  //   showcase: {
  //     type: Object,
  //     default: null,
  //   },
  //   topics: {
  //     type: Array,
  //     default: null,
  //   },
  // },
}
</script>
