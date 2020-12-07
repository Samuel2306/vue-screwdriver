import libPlugin from './lib'
import utilPlugin from './vue-util-plugin'
import filtersPlugin from './vue-filters-plugin'
import directivesPlugin from './vue-directives-plugin'


export {
  libPlugin,
  utilPlugin,
  filtersPlugin,
  directivesPlugin
}

const install = function(Vue, options){
  libPlugin.install(Vue, options)
  utilPlugin.install(Vue, options)
  filtersPlugin.install(Vue, options)
  directivesPlugin.install(Vue, options)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install: install
}
