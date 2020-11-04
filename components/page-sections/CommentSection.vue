<template>
	<div class="container mx-auto">
		<div class="max-w-screen-md mx-auto">
			<Comment :data="data" />
		</div>
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
