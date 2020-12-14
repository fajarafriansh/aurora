<template>
  <Disqus
    v-if="data"
    :identifier="`archivil-${data.slug}`"
    :url="`${baseUrl}/article/${data.slug}`"
    :title="data.title"
  />
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      baseUrl: process.env.baseUrl,
    }
  },
}
</script>
