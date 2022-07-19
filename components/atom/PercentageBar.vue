<template>
	<header class="pb-10 flex items-center">
		<p class="text-sm">
			Min 0
		</p>
		<div class="mx-4 lg:mx-6 flex-1 bg-secondary h-1 rounded-md">
			<div class="relative bg-green h-1 rounded-md" :style="{ width: `${(total * 100) / max}%` }">
				<p class="text-sm absolute -right-4 w-max top-2">
					{{ `Peso ${total} (${totalPercentage}%)` }}
				</p>
			</div>
		</div>
		<p class="text-sm">
			Max {{ max }}
		</p>
	</header>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'PercentageBar',
		props: {
			total: { type: Number, required: true },
		},
		data () {
			return {
				max: 26
			};
		},
		computed: {
			totalPercentage() {
				const percentage = (this.total * 100) / this.max;

				return percentage.toFixed(2);
			}
		}
	});
</script>
