<template>
  <main>
    <CategoryDropdownSection />
    <div
      class="bg-grayscale-3 dark:bg-grayscale-8 lg:bg-grayscale-2 lg:dark:bg-grayscale-7 py-24 border-t border-grayscale-3 dark:border-grayscale-6"
    >
      <div class="container mx-auto">
        <h1 class="h1 text-center">About Us</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="max-w-screen-md mx-auto pt-4 lg:pt-16 pb-16">
        <div class="prose lg:prose-lg dark:prose-dark">
          <p>
            <strong>Archivil</strong> adalah sebuah portal Teknik Sipil
            berbahasa Indonesia. Kami fokus membahas berbagai hal seputar Teknik
            Sipil, Arsitektur, serta berbagai hal lainnya yang menarik untuk
            diberitakan.
          </p>
          <p>
            Mulai dibangun sejak sejak 22 Januari 2018 dengan nama awal
            <strong>Civil Portal</strong>, pada pertengahan 2019 kami memutuskan
            untuk vakum. Akhirnya pada akhir 2020 kami memutuskan untuk kembali
            dan mengganti nama menjadi <strong>Archivil</strong>.
          </p>
          <p>
            Kami hadir untuk membuat teknik sipil Indonesia menjadi lebih baik.
            Kami juga berusaha untuk memberikan solusi terhadap
            permasalahan-permasalahan mengenai teknik sipil maupun arsitektur.
          </p>
          <p>
            Ingin bergabung bersama kami atau ingin melakukan kerjasama? Silakan
            hubungi kami melalui halaman
            <nuxt-link to="/contact">Contact Us</nuxt-link>.
          </p>
          <p class="mt-8">
            Kami bukanlah yang terbaik, tetapi kami selalu berusaha menghadirkan
            solusi yang terbaik.
          </p>
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
    const title = 'About Us - Archivil'
    const url = '/about'

    return {
      title,
      meta: createSEOMeta({ title, url }),
    }
  },
}
</script>
