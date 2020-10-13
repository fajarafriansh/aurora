<template>
  <section class="w-full">
    <section-header>Post List</section-header>
    <div class="mt-6 space-y-8">
      <ArticleCard
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :cover="article.cover"
        :description="article.description"
        :author="article.author"
        :date="article.date.toLocaleDateString()"
        :category="article.category"
      />
    </div>
    <div class="flex justify-center mt-12">
      <aurora-link :to="`/slug`" as="link">
        <span class="flex-1 py-1 border-b-3">See all stories</span>
      </aurora-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: null,
    },
  },
}
</script>
