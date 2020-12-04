import {
  identifier,
  validation,
} from '../util'

export default {
  install: function(Vue, options){
    console.log("install util-plugin")
    Vue.prototype.$identifier = identifier
    Vue.prototype.$validation = validation
  }
}
