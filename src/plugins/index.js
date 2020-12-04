import utilPlugin from './vue-util-plugin'
import filtersPlugin from './vue-filters-plugin'
import directivesPlugin from './vue-directives-plugin'

export {
  utilPlugin,
  filtersPlugin,
  directivesPlugin
}
export default {
  install: function(Vue, options){
    utilPlugin.install()
    filtersPlugin.install()
    directivesPlugin.install()
  }
}
