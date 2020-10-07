<template>
  <main class="mt-20 lg:mt-32">
    <div class="container mx-auto">
      <section>
        <Hero
          :key="articles[1].title"
          :title="articles[1].title"
          :cover="articles[1].cover"
          :description="articles[1].description"
          :author="articles[1].author"
          :date="articles[1].date.toLocaleDateString()"
        />
      </section>
      <div class="mt-10 lg:flex lg:space-x-8">
        <section class="lg:w-2/3">
          <section-header>All Stories</section-header>
          <div class="flex flex-wrap -mx-4">
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
          <div class="flex justify-center mt-12">
            <aurora-link :to="`/slug`" as="link">
              <span class="flex-1 py-1 border-b-3">See all stories</span>
            </aurora-link>
          </div>
        </section>
        <aside class="lg:w-1/3 mt-8 lg:mt-0">
          <section-header>Popular</section-header>
          <div class="mt-6 space-y-4">
            <SidebarList
              v-for="(article, index) in articles"
              :key="article.title"
              :title="article.title"
              :author="article.author"
              :index="index + 1"
            />
          </div>
        </aside>
      </div>
    </div>
    <NewsletterSection />
  </main>
</template>

<script>
export default {
  asyncData() {
    const articles = [
      {
        title: 'How to make your articles Vuetiful, and its so ease',
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
