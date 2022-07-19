<template>
	<div class="min-h-screen max-w-5xl mx-auto flex flex-col px-5 py-8 md:py-10">
		<PercentageBar :total="total" />
		<section class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20">
			<div class="flex flex-col w-full lg:w-1/2">
				<fieldset>
					<div class="text-base font-medium text-gray-900" aria-hidden="true">Marque as opções abaixo:</div>
					<div class="mt-4 space-y-4">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input @click="setSupport()" v-model="support" id="support" name="support" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
							</div>
							<div class="ml-3 text-sm">
								<label for="support" class="font-medium text-gray-700">Suporte</label>
								<p class="text-gray-500">Marque esse campo caso a tarefa a seguir seja a customização de um clube, ou alteração de qualquer coisa que fuja do tema padrão dos clubes.</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input @click="setFeature()" v-model="feature" id="feature" name="feature" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
							</div>
							<div class="ml-3 text-sm">
								<label for="feature" class="font-medium text-gray-700">Feature</label>
								<p class="text-gray-500">Marque esse campo caso a tarefa a seguir seja a implementação de uma nova funcionalidade ou botão dentro do master 2.</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input @click="setBugfix()" v-model="bugfix" id="bugfix" name="bugfix" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
							</div>
							<div class="ml-3 text-sm">
								<label for="bugfix" class="font-medium text-gray-700">Bugfix</label>
								<p class="text-gray-500">Marque esse campo caso a tarefa a seguir seja a resolução de um bug na plataforma.</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input @click="setHotfix()" v-model="hotfix" id="hotfix" name="hotfix" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
							</div>
							<div class="ml-3 text-sm">
								<label for="hotfix" class="font-medium text-gray-700">Hotfix</label>
								<p class="text-gray-500">Marque esse campo caso a tarefa a seguir seja a resolução de um bug urgente que impede o usuário ou cliente de acessar o clube.</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input @click="setInnovation()" v-model="innovation" id="innovation" name="innovation" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
							</div>
							<div class="ml-3 text-sm">
								<label for="innovation" class="font-medium text-gray-700">inovação</label>
								<p class="text-gray-500">Marque esse campo caso a tarefa a seguir seja uma nova inovação para o produto e plataforma.</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input @click="setTime()" v-model="time" id="time" name="time" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
							</div>
							<div class="ml-3 text-sm">
								<label for="time" class="font-medium text-gray-700">Tempo de impedimento</label>
								<p class="text-gray-500">Marque esse campo caso a tarefa a seguir esteja a muito tempo parada por algum impedimento.</p>
							</div>
						</div>
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input @click="setUnsatisfied()" v-model="unsatisfied" id="unsatisfied" name="unsatisfied" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
							</div>
							<div class="ml-3 text-sm">
								<label for="unsatisfied" class="font-medium text-gray-700">Cliente Insatisfeito</label>
								<p class="text-gray-500">Marque esse campo caso a tarefa a seguir vá diminuir a satisfação do cliente caso não seja realizada o mais breve possível.</p>
							</div>
						</div>
					</div>
				</fieldset>
				<TaskPriority :total="total" />

				<div class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-title font-rajdhani">
					<IncrementerDigits :digits="total" />
				</div>

				<button
					id="button"
					class="button completed"
					@click="reset()"
				>
					<span>Resetar</span>
				</button>
			</div>
			<Card id="card" class="w-full lg:w-1/2" />
		</section>
	</div>
</template>

<script lang='ts'>
	import Vue from 'vue';
	import IncrementerDigits from '~/components/atom/IncrementerDigits.vue';
	import TaskPriority from '~/components/atom/TaskPriority.vue';
	import PercentageBar from '@/components/atom/PercentageBar.vue';
	import Card from '~/components/organisms/Card.vue';

	interface Head {
		title: string;
	}

	export default Vue.extend({
		head (): Head {
			return {
				title: 'Task Calculator',
			};
		},
		components: {
			IncrementerDigits,
			TaskPriority,
			Card,
			PercentageBar,
		},
		data () {
			return {
				support: false,
				feature: false,
				bugfix: false,
				hotfix: false,
				innovation: false,
				time: false,
				unsatisfied: false,
				total: 0,
			};
		},
		methods: {
			setSupport() {
				this.total += this.support ? -1 : 1
			},
			setFeature() {
				this.total += this.feature ? -2 : 2
			},
			setBugfix() {
				this.total += this.bugfix ? -3 : 3
			},
			setHotfix() {
				this.total += this.hotfix ? -5 : 5
			},
			setInnovation() {
				this.total += this.innovation ? -4 : 4
			},
			setTime() {
				this.total += this.time ? -8 : 8
			},
			setUnsatisfied() {
				this.total += this.unsatisfied ? -13 : 13
			},
			reset() {
				this.total = 0;
				this.support = false;
				this.feature = false;
				this.bugfix = false;
				this.hotfix = false;
				this.innovation = false;
				this.time = false;
				this.unsatisfied = false;
			}
		},
	});
</script>
