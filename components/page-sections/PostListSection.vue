<template>
  <section>
    <section-header>Post List</section-header>
    <div class="mt-6 space-y-8">
      <ArticleCard
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :slug="article.slug"
        :cover="article.coverImage"
        :description="article.excerpt"
        :author="article.author"
        :date="article.date"
        :category="article.category"
      />
    </div>
    <div class="flex justify-center mt-12">
      <link-primary :to="`/slug`">
        <span
          class="flex-1 py-1 border-b-3 border-primary-1 hover:border-primary-2 text-xl"
        >
          See all stories
        </span>
      </link-primary>
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
