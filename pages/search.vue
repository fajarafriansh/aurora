<template>
  <ais-instant-search-ssr>
    <aisSearchBox />
    <aisStats />
    <aisRefinementList attribute="brand" />
    <ais-hits>
      <template slot="item" slot-scope="{ item }">
        <p>
          <aisHighlight attribute="name" :hit="item" />
        </p>
        <p>
          <aisHighlight attribute="brand" :hit="item" />
        </p>
      </template>
    </ais-hits>
    <aisPagination />
  </ais-instant-search-ssr>
</template>

<script>
import {
  AisInstantSearchSsr,
  AisRefinementList,
  AisHits,
  AisHighlight,
  AisSearchBox,
  AisStats,
  AisPagination,
  createServerRootMixin,
} from 'vue-instantsearch'
import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(
  process.env.algoliaAppId,
  process.env.algoliaSearchApiKey,
)

export default {
  components: {
    AisInstantSearchSsr,
    AisRefinementList,
    AisHits,
    AisHighlight,
    AisSearchBox,
    AisStats,
    AisPagination,
  },
  mixins: [
    createServerRootMixin({
      searchClient,
      indexName: 'netlify_aurora',
    }),
  ],
  serverPrefetch() {
    return this.instantsearch.findResultsState(this).then(algoliaState => {
      this.$ssrContext.nuxt.algoliaState = algoliaState
    })
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css',
        },
      ],
    }
  },
  beforeMount() {
    const results =
      this.$nuxt.context.nuxtState.algoliaState || window.__NUXT__.algoliaState

    this.instantsearch.hydrate(results)
  },
}
</script>
