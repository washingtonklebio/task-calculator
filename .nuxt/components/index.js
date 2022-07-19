export { default as AtomIncrementerDigits } from '../../components/atom/IncrementerDigits.vue'
export { default as AtomPercentageBar } from '../../components/atom/PercentageBar.vue'
export { default as AtomTaskPriority } from '../../components/atom/TaskPriority.vue'
export { default as MoleculesAbout } from '../../components/molecules/About.vue'
export { default as OrganismsCard } from '../../components/organisms/Card.vue'

export const LazyAtomIncrementerDigits = import('../../components/atom/IncrementerDigits.vue' /* webpackChunkName: "components/atom-incrementer-digits" */).then(c => c.default || c)
export const LazyAtomPercentageBar = import('../../components/atom/PercentageBar.vue' /* webpackChunkName: "components/atom-percentage-bar" */).then(c => c.default || c)
export const LazyAtomTaskPriority = import('../../components/atom/TaskPriority.vue' /* webpackChunkName: "components/atom-task-priority" */).then(c => c.default || c)
export const LazyMoleculesAbout = import('../../components/molecules/About.vue' /* webpackChunkName: "components/molecules-about" */).then(c => c.default || c)
export const LazyOrganismsCard = import('../../components/organisms/Card.vue' /* webpackChunkName: "components/organisms-card" */).then(c => c.default || c)
