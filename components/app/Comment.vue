<template>
	<div class="container mx-auto">
		<Disqus
			v-if="article"
			:identifier="`archivil-${article.title}`"
			:url="process.env.HOST_NAME + '/' + article.slug"
			:title="article.title"
		/>
	</div>
</template>
