<template>
  <client-only>
    <ais-instant-search
      v-click-outside="closeAutocomplete"
      :search-client="searchClient"
      index-name="netlify_aurora"
    >
      <ais-autocomplete>
        <div slot-scope="{ indices, refine }">
          <div class="relative">
            <div
              class="relative text-grayscale-5 dark:text-grayscale-4 text-sm lg:text-base"
            >
              <div
                class="flex items-center justify-center w-12 absolute inset-0 py-2 px-3"
              >
                <unicon name="search" />
              </div>
              <input
                ref="search"
                v-model="keywords"
                type="search"
                placeholder="Search (Press ''/'' to focus)"
                class="w-full bg-grayscale-1 dark:bg-grayscale-6 rounded-md border-2 border-grayscale-3 dark:border-grayscale-5 placeholder-current outline-none focus:border-primary-2 dark-focus:border-primary-1 pl-12 pr-4 py-2"
                @focus="isFocus = true"
                @input="refine($event.currentTarget.value)"
                @blur="isFocus = false"
                @keydown.esc="blurInput"
              />
            </div>
            <div
              v-if="keywords && !hideAutocomplete"
              class="w-full bg-grayscale-1 dark:bg-grayscale-6 absolute z-50 border-2 border-primary-2 dark:border-primary-1 rounded-lg transform translate-y-2"
            >
              <div v-if="indices[0].hits.length > 0" class="flex-col">
                <nuxt-link
                  v-for="hit in indices[0].hits.slice(0, 5)"
                  :key="hit.objectID"
                  class="block w-full hover:text-primary-1 py-2 px-4 cursor-pointer"
                  :to="hit.url"
                  @click.native="goToBlog"
                >
                  <ais-highlight attribute="title" :hit="hit" />
                </nuxt-link>
              </div>
              <span v-else class="flex justify-center py-4">
                No results found.
              </span>
            </div>
          </div>
        </div>
      </ais-autocomplete>
    </ais-instant-search>
  </client-only>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'

export default {
  data() {
    return {
      searchClient: algoliasearch(
        process.env.algoliaAppId,
        process.env.algoliaSearchApiKey
      ),
      keywords: '',
      hideAutocomplete: false,
      isFocus: false,
    }
  },
  watch: {
    keywords(value) {
      if (value) {
        this.hideAutocomplete = false
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.focusInput)
  },
  destroyed() {
    window.removeEventListener('keydown', this.focusInput)
  },
  methods: {
    focusInput(e) {
      if (e.keyCode === 191) {
        if (!this.isFocus) {
          e.preventDefault()
        }
        this.$refs.search.focus()
      }
    },
    blurInput() {
      this.$refs.search.blur()
      this.hideAutocomplete = true
    },
    goToBlog() {
      this.keywords = ''
    },
    closeAutocomplete() {
      this.hideAutocomplete = true
    },
  },
}
</script>
