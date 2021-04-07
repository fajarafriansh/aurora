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
      <section-header class="mt-10">Topics for You</section-header>
      <client-only>
        <div class="flex flex-wrap mt-4 -mx-2">
          <TrendingTopicCard
            v-for="topic in topics.slice(0, 4)"
            :key="topic.title"
            :title="topic.title"
            :slug="topic.slug"
            :cover="topic.coverImage"
            :posts="topic.posts"
          />
        </div>
      </client-only>
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
  created() {
    this.randomize()
  },
  methods: {
    randomize() {
      if (this.topics) {
        for (let i = this.topics.length - 1; i > 0; i--) {
          const randomIndex = Math.floor(Math.random() * i)
          const temp = this.topics[i]
          this.$set(this.topics, i, this.topics[randomIndex])
          this.$set(this.topics, randomIndex, temp)
        }
      }
    },
  },
}
</script>
