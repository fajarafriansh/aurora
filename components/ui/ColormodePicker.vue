<template>
	<button class="flex items-center ml-8 text-2xl text-grayscale-5 dark:text-grayscale-4 hover:text-primary-2 dark-hover:text-primary-1 focus:outline-none" @click="toggle">
		<ion-icon v-if="this.$colorMode.preference == 'light'" name="moon-outline"></ion-icon>
		<ion-icon v-else name="sunny-outline"></ion-icon>
	</button>
</template>

<script>
export default {
	methods: {
		toggle() {
			this.$colorMode.preference = this.$colorMode.value  === 'light' ? 'dark' : 'light'
		}
	}
}
</script>
