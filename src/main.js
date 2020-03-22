import Vue from 'vue'
import App from './App.vue'
import router from './router'
import work from '../work.js'
import projects from '../projects.js'

Vue.config.productionTip = false

let data = {
  work: work,
  projects: projects,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
