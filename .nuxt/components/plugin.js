import Vue from 'vue'

const components = {
  AtomIncrementerDigits: () => import('../../components/atom/IncrementerDigits.vue' /* webpackChunkName: "components/atom-incrementer-digits" */).then(c => c.default || c),
  AtomPercentageBar: () => import('../../components/atom/PercentageBar.vue' /* webpackChunkName: "components/atom-percentage-bar" */).then(c => c.default || c),
  AtomTaskPriority: () => import('../../components/atom/TaskPriority.vue' /* webpackChunkName: "components/atom-task-priority" */).then(c => c.default || c),
  MoleculesAbout: () => import('../../components/molecules/About.vue' /* webpackChunkName: "components/molecules-about" */).then(c => c.default || c),
  OrganismsCard: () => import('../../components/organisms/Card.vue' /* webpackChunkName: "components/organisms-card" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
