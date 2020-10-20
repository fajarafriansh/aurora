<template>
  <main>
    <div class="bg-grayscale-3 dark:bg-grayscale-8 lg:bg-grayscale-2 lg:dark:bg-grayscale-7 py-6 lg:pt-8 lg:pb-12">
      <div class="container mx-auto grid grid-cols-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-2">
        <img
          class="flex items-center w-10 h-10 lg:w-14 lg:h-14 object-cover rounded-lg"
          src="/oni.jpg"
          alt="title"
        />
        <p class="flex items-center callout col-span-3 lg:col-span-8">Fashion</p>
        <p class="flex items-center justify-end text-body-2 col-span-2 lg:col-span-3">{{ new Date() | formatDate }}</p>
        <h1 class="h1 col-start-auto col-span-6 lg:col-start-2 lg:col-span-11 mt-6 lg:mt-0">How to make your articles Vuetiful, and its so ease. Just try it sometime</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <article class="article max-w-screen-md mx-auto py-8 text-grayscale-7 dark:text-grayscale-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </article>
    </div>
    <FeaturedPostSection :posts="posts" />
  </main>
</template>

<script>
export default {
  asyncData() {
    const posts = [
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
    ]

    return { posts }
  },
}
</script>
