<template>
	<section id="about" class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-16">
		<header class="w-full pb-6 border-b-2 border-background">
			<h2 class="text-xl text-blue font-semibold text-center">
				Peso
			</h2>
		</header>
		<main class="flex flex-col flex-1 justify-center items-center mt-6">
			<img :src="`icons/anchor.svg`" alt="Body" style="min-height: 70px; max-width: 50%;">
			<h1 class="font-semibold text-3xl text-title mt-6 mb-2">
				Sobre o peso
			</h1>
			<p class="text-center text-base leading-6">
				<ul>
					<li>Suporte 1+</li>
					<li>Feature 2+</li>
					<li>Bugfix 3+</li>
					<li>Hotfix 5+</li>
					<li>Inovação 4+</li>
					<li>Tempo de impedimento 8+</li>
					<li>Cliente Insatisfeito 13+</li>
				</ul>
			</p>
		</main>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		methods: {

		},
	});
</script>
