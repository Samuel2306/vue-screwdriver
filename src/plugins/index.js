import util from '../vue-util-plugin'
import filters from '../vue-filters-plugin'
import directives from '../vue-directives-plugin'

export default {
  util: util,
  filters: filters,
  directives: directives,
  install: function(Vue, options){
    util.install()
    filters.install()
    directives.install()
  }
}
