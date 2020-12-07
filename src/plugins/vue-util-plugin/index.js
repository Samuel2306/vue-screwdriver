import {
  identifier,
  validation,
  stringHandler,
} from '../util'

export default {
  install: function(Vue, options){
    Vue.prototype.$identifier = identifier
    Vue.prototype.$validation = validation
    Vue.prototype.$stringHandler = stringHandler
  }
}
