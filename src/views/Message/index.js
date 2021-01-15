import CustomMessage from './Message'

export default {
  install: function(Vue, options){
    Vue.prototype.$msg = function(props){
      const Instance = new Vue({
        render (h) {
          return h(CustomMessage, {
            props: props
          })
        }
      });

      const component = Instance.$mount();
      component.vueComponentCaller = this;
      document.body.appendChild(component.$el)
    }
  }
}
