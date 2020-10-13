<template>
  <div id="footer" class="w-full pt-16 pb-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-3 md:col-gap-12">
        <div class="w-12 lg:w-48">
          <nuxt-link to="/">
            <Logo :responsive="true" />
          </nuxt-link>
        </div>
        <div class="flex justify-center mt-8 md:row-span-2 md:mt-0">
          <nuxt-link to="/" class="block py-1">Stories</nuxt-link>
          <nuxt-link to="/" class="block py-1 ml-4">RSS</nuxt-link>
        </div>
        <div class="flex justify-end mt-8 row-span-2 md:row-span-3 md:mt-0">
          <nuxt-link to="/" class="block py-1">TW</nuxt-link>
          <nuxt-link to="/" class="block py-1 ml-4">IG</nuxt-link>
        </div>
      </div>
      <div class="text-sm mt-8 text-center">
        <p>
          &copy; 2018-present Aurora by
          <a
            rel="noopener"
            target="_blank"
            href="https://twitter.com/fajarafriansh"
            class="outbound-link underline"
          >
            Fajar Afriansh
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
