<template>
  <main>
    <CategoryDropdownSection :categories="posts" />
    <div class="container mx-auto py-12 lg:py-20 text-grayscale-7 dark:text-grayscale-2">
      <div class="max-w-screen-md mx-auto relative flex items-start justify-center">
        <div class="flex justify-center absolute inset-0 -z-10">
          <span class="text-grayscale-2 dark:text-grayscale-6 text-12xl md:text-14xl lg:text-18xl font-semibold leading-none">404</span>
        </div>
        <div class="flex flex-col items-center justify-center mt-12 md:mt-14 lg:mt-20">
          <span class="text-xl md:text-3xl font-semibold text-center">Oops! We can't find that page</span>
          <div class="w-full flex items-center mt-6">
            <SearchBox :search="fetchSuggestions" class="flex-1" />
            <button-primary class="ml-2">Search</button-primary>
          </div>
          <div class="flex items-center justify-center mt-6">
            <span class="w-12 border-b border-grayscale-4 dark:border-grayscale-5"></span>
            <span class="ml-2 mr-2">or</span>
            <span class="w-12 border-b border-grayscale-4 dark:border-grayscale-5"></span>
          </div>
          <link-secondary to="/" as="button"class="flex flex-grow-0 mt-6">Back to Home</link-secondary>
        </div>
      </div>
    </div>
    <FeaturedPostSection :posts="posts" />
  </main>
</template>

<script>
export default {
  asyncData() {
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
    ]

    return { posts }
  },
  methods: {
    async fetchSuggestions(searchInput) {

    },
  },
}
</script>
