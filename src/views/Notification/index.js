import CustomNotification from './Notification'

export default {
  install: function(Vue, options){
    Vue.prototype.$notify = function(props){
      const Instance = new Vue({
        render (h) {
          return h(CustomNotification, {
            props: props
          })
        }
      });
      console.log(1);
      console.log(Instance);
      const component = Instance.$mount();
      component.vueComponentCaller = this;
      document.body.appendChild(component.$el)
    }
  }
}
