import VueClipboard from 'vue-clipboard2'
import VueScrollLock from 'v-scroll-lock'  // 在打开模态浮层的时候防止下层的元素滚动
import VueClickOutside from 'v-click-outside'  // 在打开模态浮层的时候防止下层的元素滚动
export default {
  install: function(Vue, options){
    Vue.use(VueClipboard)
    Vue.use(VueScrollLock)
    Vue.use(VueClickOutside)
  }
}
