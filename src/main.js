import Vue from 'vue'
import App from './App.vue'

import vuePlugins from './plugins/index.js'
import {
  utilPlugin
} from './plugins/index.js'
Vue.use(utilPlugin)
Vue.use(vuePlugins)
new Vue({
  el: '#app',
  render: h => h(App)
})
