<template>
  <main class="mt-20 lg:mt-32">
    <div class="container mx-auto">
      <Hero
        :key="articles[1].title"
        :title="articles[1].title"
        :cover="articles[1].cover"
        :description="articles[1].description"
        :author="articles[1].author"
        :date="articles[1].date.toLocaleDateString()"
      />
      <div class="mt-10 lg:flex lg:space-x-8">
        <section class="lg:w-2/3">
          <h3 class="text-2xl font-semibold">All Stories</h3>
          <div class="mt-4 space-y-4">
            <ArticleCard
              v-for="article in articles"
              :key="article.title"
              :title="article.title"
              :cover="article.cover"
              :description="article.description"
              :author="article.author"
              :date="article.date.toLocaleDateString()"
            />
          </div>
        </section>
        <aside class="lg:w-1/3 mt-8 lg:mt-0">
          <h3 class="text-2xl font-semibold">Popular</h3>
          <div class="mt-4 space-y-4">
            <SidebarList
              v-for="article in articles"
              :key="article.title"
              :title="article.title"
              :author="article.author"
            />
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  asyncData() {
    const articles = [
      {
        title: 'How to make your articles Vuetiful',
        cover: '/img.jpg',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: '/oni.jpg',
        },
        date: new Date(),
      },
      {
        title: 'How to make your articles Vuetiful',
        cover: '/img.jpg',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: '/oni.jpg',
        },
        date: new Date(),
      },
      {
        title: 'How to make your articles Vuetiful',
        cover: '/img.jpg',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: '/oni.jpg',
        },
        date: new Date(),
      },
    ]

    return { articles }
  },
}
</script>
