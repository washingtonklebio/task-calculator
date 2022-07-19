<template>
	<div class="flex justify-between items-center pb-5 border-b-2 border-gray-line mt-8 lg:mt-14 font-medium">
		<p class="text-lg">
			Peso atual
		</p>
		<p class="text-2xl">
			{{ percentage }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'TaskPriority',
		props: {
			total: { type: Number, required: true },
		},
		computed: {
			percentage() {
				if (this.total == 0) {
					return '';
				}

				if (this.total >= 23) {
					return 'Urgente';
				}

				if (this.total >= 18 && this.total < 23) {
					return 'Alta';
				}

				if (this.total >= 14 && this.total < 18) {
					return 'Média';
				}

				if (this.total < 14) {
					return 'Baixa';
				}
			}
		}
	});
</script>
