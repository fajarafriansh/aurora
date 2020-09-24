<template>
  <div class="mt-4">
    <section>
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Articles</h1>
        <div class="mt-4 space-y-4">
          <ArticleCard
            v-for="article in articles"
            :key="article.title"
            :title="article.title"
            :description="article.description"
            :author="article.author"
            :date="article.date.toLocaleDateString()"
          />
        </div>
        <div class="w-1/3">
          <SidebarList
            v-for="article in articles"
            :key="article.title"
            :title="article.title"
            :author="article.author"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    const articles = [
      {
        title: 'How to make your articles Vuetiful',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: 'https://wallpaperaccess.com/full/2866246.jpg',
        },
        date: new Date(),
      },
      {
        title: 'How to make your articles Vuetiful',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: 'https://wallpaperaccess.com/full/2866246.jpg',
        },
        date: new Date(),
      },
      {
        title: 'How to make your articles Vuetiful',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: 'https://wallpaperaccess.com/full/2866246.jpg',
        },
        date: new Date(),
      },
    ]

    return { articles }
  },
}
</script>
