<template>
  <client-only>
    <ais-instant-search
      v-click-outside="closeAutocomplete"
      :search-client="searchClient"
      index-name="netlify_aurora"
    >
      <ais-autocomplete>
        <div slot-scope="{ indices, refine }">
          <div>
            <input
              v-model="keywords"
              type="search"
              placeholder="Search"
              @input="refine($event.currentTarget.value)"
            >
            <div v-if="keywords && !hideAutocomplete">
              <a 
                v-for="hit in indices[0].hits"
                :key="hit.objectID"
                @click="goToBlog(hit.objectID)"
              >
                <ais-highlight attribute="title" :hit="hit" />
              </a>
            </div>
          </div>
        </div>
      </ais-autocomplete>
    </ais-instant-search>
    <!-- <div
      class="relative text-grayscale-5 dark:text-grayscale-4 text-sm lg:text-base"
    >
      <div
        class="flex items-center justify-center w-12 absolute inset-0 py-2 px-3"
      >
        <unicon name="search" />
      </div>
      <input
        ref="search"
        v-model="searchInput"
        type="search"
        placeholder="Search (Press ''/'' to focus)"
        class="w-full bg-grayscale-1 dark:bg-grayscale-6 rounded-md border-2 border-grayscale-3 dark:border-grayscale-5 placeholder-current outline-none focus:border-primary-2 dark-focus:border-primary-1 pl-12 pr-4 py-2"
        @focus="isFocus = true"
        @blur="isFocus = false"
        @keydown.esc="blurInput"
      />
    </div> -->
    
  </client-only>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'

export default {
  data () {
    return {
      searchClient: algoliasearch(
        process.env.algoliaAppId,
        process.env.algoliaSearchApiKey
      ),
      keywords: '',
      hideAutocomplete: false
    }
  },
  watch: {
    keywords (value) {
      if (value) {
        this.hideAutocomplete = false
      }
    }
  },
  methods: {
    goToBlog (blogId) {
      this.keywords = ''
      this.$router.push({
        name: 'blog-id',
        params: {
          id: blogId
        }
      })
    },
    closeAutocomplete () {
      this.hideAutocomplete = true
    }
  }
}
</script>

<!-- <script>
export default {
  data: () => ({
    searchInput: '',
    isFocus: false,
  }),
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
    },
  },
}
</script> -->
