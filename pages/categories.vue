<template>
  <main>
    <CategoryDropdownSection :categories="posts" />
    <section class="container mx-auto">
      <div class="relative -mx-4 lg:-mx-0">
        <img :src="category.cover" :alt="category.title" class="w-full h-32 lg:h-68 object-cover lg:rounded-b-md">
        <div class="flex flex-row lg:flex-col items-center lg:justify-center absolute inset-0 w-full lg:w-68 h-32 lg:h-68 backdrop-blur lg:rounded-bl-md">
          <img :src="category.cover" :alt="category.title" class="w-14 h-14 lg:w-16 lg:h-16 object-cover rounded-md lg:rounded-lg ml-6 lg:ml-0">
          <span class="text-21 md:text-24 text-grayscale-2 font-medium md:font-semibold leading-normal tracking-normal lg:mt-6 ml-6 lg:ml-0">{{ category.title }}</span>
        </div>
      </div>
    </section>
    <section class="container mx-auto mt-2 lg:mt-6">
      <div class="flex lg:flex-wrap items-center -mx-2 overflow-x-scroll lg:overflow-x-hidden">
        <div v-for="category in posts" :key="category.title" class="p-2">
          <nuxt-link to="/" class="flex items-center bg-grayscale-6 rounded-full border-2 border-transparent hover:border-primary-1">
            <img :src="category.cover" :alt="category.title" class="w-8 h-8 object-cover rounded-full">
            <div class="text-body-2 font-medium lowercase flex-shrink px-3">{{ '#' + category.title }}</div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <div class="container mx-auto">
      <section-header class="mt-12">Post List</section-header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-10 ">
        <ArticleCardSimple
          v-for="article in posts"
          :key="article.title"
          :title="article.title"
          :cover="article.cover"
          :description="article.description"
          :date="article.date.toLocaleDateString()"
          :category="article.category"
        />
      </div>
    </div>
    <NewsletterSection />
  </main>
</template>

<script>
import getPosts from '~/queries/getPosts'
import getCategories from '~/queries/getCategories'

export default {
  asyncData() {
    const category =
      {
        title: 'Category',
        cover: '/oni.jpg',
      }

    const posts = [
      {
        title: 'Cartegory 1',
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
        title: 'Cartegory 2',
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
        title: 'Cartegory 3',
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
        title: 'Lecture Notes',
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
        title: 'Cartegory 1',
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
        title: 'Cartegory 2',
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
        title: 'Cartegory 3',
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
        title: 'Lecture Notes',
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

    return { category, posts }
  },
  // apollo: {
  //   posts: {
  //     prefetch: true,
  //     query: getPosts,
  //   },
  //   categories: {
  //     prefetch: true,
  //     query: getCategories,
  //   },
  // },
}
</script>
