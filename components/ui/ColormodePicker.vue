<template>
	<button class="flex items-center text-2xl text-grayscale-5 dark:text-grayscale-4 hover:text-primary-2 dark-hover:text-primary-1 focus:outline-none" @click="toggle">
		<unicon v-if="this.$colorMode.preference == 'light'" name="moon" />
		<unicon v-else name="sun" />
	</button>
</template>

<script>
export default {
	methods: {
		toggle() {
			this.$colorMode.preference = this.$colorMode.value  === 'light' ? 'dark' : 'light'
			this.$disqus.reset()
		},
	},
}
</script>
