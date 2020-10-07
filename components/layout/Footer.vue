<template>
  <div class="w-full pt-16 pb-8 bg-gradient-to-r from-gray-2 to-gray-1">
    <div class="container mx-auto grid md:grid-cols-2 md:col-gap-12">
      <div class="w-48">
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
      </div>
      <div class="flex mt-8 md:row-span-2 md:mt-0">
        <div class="w-1/2">
          <h5 class="h5 uppercase">Content</h5>
          <ul class="mt-4 text-base">
            <li>
              <nuxt-link to="/" class="block py-1">Stories</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="block py-1">RSS</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-1/2">
          <h5 class="h5 uppercase">Links</h5>
          <ul class="mt-4">
            <li>
              <a rel="noopener" target="_blank" href="/" class="block py-1">
                Twitter
              </a>
            </li>
            <li>
              <a rel="noopener" target="_blank" href="/" class="block py-1">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-sm mt-8">
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
