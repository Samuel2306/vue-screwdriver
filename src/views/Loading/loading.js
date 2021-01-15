/**
 *  @property loading组件
 *  @author feng.shen
 *  @description  预留props参数， 暴露open close方法
 */
import Loading from './Loading.vue'

Loading.init = (Vue, properties) => {
  const props = properties || {};

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Loading, {
        props: props
      })
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const loading = Instance.$children[0];

  return {
    open (str) {
      if(str){
        loading.setText(str);
      }else{
        loading.setText('');
      }
      if(loading.showLoading){
        return
      }
      loading.showLoading = true;
    },
    close () {
      loading.setText('');
      loading.showLoading = false;
    }
  }
};
export default Loading;
