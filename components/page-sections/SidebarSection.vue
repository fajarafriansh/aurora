<template>
  <aside>
    <section-header>Showcase</section-header>
    <div class="mt-6 space-y-4">
      <ShowcaseCard
        :key="showcase.title"
        :title="showcase.title"
        :cover="showcase.cover"
        :author="showcase.author"
        :category="showcase.category"
      />
    </div>
    <section-header class="mt-10">Trending Topics</section-header>
    <div class="flex flex-wrap mt-4 -mx-2">
      <TrendingTopicCard
        v-for="topic in topics"
        :key="topic.title"
        :title="topic.title"
        :cover="topic.cover"
      />
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    showcase: {
      type: Object,
      default: null,
    },
    topics: {
      type: Array,
      default: null,
    },
  },
}
</script>
