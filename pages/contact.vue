<template>
  <main>
    <CategoryDropdownSection />
    <div
      class="bg-grayscale-3 dark:bg-grayscale-8 lg:bg-grayscale-2 lg:dark:bg-grayscale-7 py-24 border-t border-grayscale-3 dark:border-grayscale-6"
    >
      <div class="container mx-auto">
        <h1 class="h1 text-center">Contact Us</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="max-w-screen-md mx-auto lg:pt-16 pb-16">
        <div class="prose lg:prose-lg dark:prose-dark">
          <p>
            For partnership inquiries or cooperation request, you can contact us
            by filling the form below.
          </p>
        </div>
        <ContactForm />
        <div class="prose lg:prose-lg dark:prose-dark mt-10">
          <span class="text-sm">
            We will protect your data in accordance with our
            <nuxt-link
              class="text-primary-2 dark:text-primary-1 hover:text-primary-3 dark-hover:text-primary-2 font-medium transition duration-150 ease-in-out"
              to="/kebijakan-privasi"
            >
              privacy policy
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
    <FeaturedPostSection />
  </main>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'

export default {
  head() {
    const title = 'Contact Us - Archivil'
    const url = '/contact'

    return {
      title,
      meta: createSEOMeta({ title, url }),
    }
  },
}
</script>
