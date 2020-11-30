<template>
  <div id="footer" class="w-full pt-24 pb-8">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-3">
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-center justify-start h-10 w-34">
            <Logo class="not-responsive" />
          </nuxt-link>
        </div>
        <div
          class="row-start-2 col-span-2 lg:row-start-auto lg:col-auto flex flex-wrap items-center justify-center mt-6 lg:mt-0 text-base"
        >
          <link-secondary type="internal" to="/about" class="p-1">
            About
          </link-secondary>
          <link-secondary type="internal" to="/blog" class="p-1 ml-4 lg:ml-6">
            Articles
          </link-secondary>
          <link-secondary type="internal" to="/about" class="p-1 ml-4 lg:ml-6">
            RSS
          </link-secondary>
          <link-secondary type="internal" to="/about" class="p-1 ml-4 lg:ml-6">
            Contact
          </link-secondary>
        </div>
        <div class="flex items-center justify-end">
          <link-bordered type="outbound" as="button" to="https://twitter.com">
            <unicon name="twitter" height="20" width="20" />
          </link-bordered>
          <link-bordered
            type="outbound"
            as="button"
            to="https://instgram.com"
            class="ml-4"
          >
            <unicon name="instagram" height="20" width="20" />
          </link-bordered>
        </div>
      </div>
      <div class="text-sm mt-6 lg:mt-8 text-center">
        <p>
          &copy; 2018-present Archivil by
          <a
            rel="noopener"
            target="_blank"
            href="https://twitter.com/fajarafriansh"
            class="outbound-link underline"
          >Fajar Afriansh</a
          >. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/assets/svg/archivil-logo.svg?inline'

export default {
  components: { Logo },
}
</script>
