<template>
	<Disqus
		v-if="data"
		:identifier="`archivil-${data.slug}`"
		:url="baseUrl + '/' + data.slug"
		:title="data.title"
	/>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: process.env.baseUrl,
    }
  },
	props: {
		data: {
			type: Object,
			require: true,
		},
	},
}
</script>
