<template>
  <aside class="lg:pb-20">
    <section-header>Showcase</section-header>
    <div class="mt-6">
      <ShowcaseCard
        v-for="post in postShow.posts"
        :key="post.title"
        :title="post.title"
        :slug="post.slug"
        :cover="post.coverImage.url"
        :author="post.author"
        :category="post.category"
      />
    </div>
    <div class="lg:sticky lg:top-0 lg:pt-1">
      <section-header class="mt-10">Trending Topics</section-header>
      <div class="flex flex-wrap mt-4 -mx-2">
        <TrendingTopicCard
          v-for="topic in topics"
          :key="topic.title"
          :title="topic.title"
          :slug="topic.slug"
          :cover="topic.coverImage"
          :posts="topic.posts"
        />
      </div>
    </div>
  </aside>
</template>

<script>
import getShowcasePost from '~/queries/getShowcasePost'
import getTopics from '~/queries/getTopics'

export default {
  apollo: {
    postShow: {
      prefetch: true,
      query: getShowcasePost,
    },
    topics: {
      prefetch: true,
      query: getTopics,
    },
  },
}
</script>
