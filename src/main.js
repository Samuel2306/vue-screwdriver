import Vue from 'vue'
import App from './App.vue'

import plugins from 'src/plugins/index.js'
Vue.use(plugins)
new Vue({
  el: '#app',
  render: h => h(App)
})
