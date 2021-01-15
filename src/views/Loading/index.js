import loading from './loading.js'

export default {
  install: function (Vue, options) {
    let loadingComponent = loading.init(Vue);
    Vue.$loading = Vue.prototype.$loading = {
      open: (str) => {
        loadingComponent.open(str);
      },
      close: () => {
        loadingComponent.close();
      }
    }
  }
}
