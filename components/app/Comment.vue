<template>
	<div class="container mx-auto">
		<Disqus
			v-if="data"
			:identifier="`archivil-${data.slug}`"
			:url="process.env.HOST_NAME + '/' + data.slug"
			:title="data.title"
		/>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			require: true,
		},
	},
}
</script>
