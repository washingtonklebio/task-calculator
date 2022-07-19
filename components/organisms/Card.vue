<template>
	<div class="bg-secondary rounded-md flex flex-1 w-full mt-8 lg:mt-0 shadow-sm">
		<About v-if="true" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	import About from '~/components/molecules/About.vue';

	export default Vue.extend({
		components: {
			About,
		},
	});
</script>
