<template>
  <main>
    <section>
      <CategoriesSection :categories="categories" />
    </section>
    <div class="container mx-auto">
      <div class="mt-6 lg:mt-10 lg:flex">
        <section class="lg:w-2/3">
          <PostListSection :articles="articles" />
        </section>
        <aside class="lg:w-1/3 mt-8 lg:mt-0 lg:pl-14">
          <SidebarSection :showcase="articles[0]" :topics="categories" />
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
        title: 'How to make your articles Vuetiful, and its so ease. Just try it sometime',
        cover: '/img.jpg',
        description:
          'This article guides you through all the steps to make an article shine with your favourite framework, Vue',
        author: {
          name: 'Naruto Uzumaki',
          image: '/oni.jpg',
        },
        date: new Date(),
        category: "Fashion",
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
        category: "Fashion",
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
        category: "Fashion",
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
        category: "Fashion",
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
        category: "Fashion",
      },
    ]

    const categories = [
      {
        title: 'Lecture Notes',
        cover: '/oni.jpg',
      },
      {
        title: 'Food',
        cover: '/oni.jpg',
      },
      {
        title: 'Travel',
        cover: '/oni.jpg',
      },
      {
        title: 'Sport',
        cover: '/oni.jpg',
      },
      {
        title: 'Nature',
        cover: '/oni.jpg',
      },
      {
        title: 'Game',
        cover: '/oni.jpg',
      },
      {
        title: 'Design',
        cover: '/oni.jpg',
      },
      {
        title: 'Film',
        cover: '/oni.jpg',
      },
    ]

    return { articles, categories }
  },
}
</script>
