import Notification from './Notification';
import Message from './Message';
// import '../assets/scss/base.scss';

export default {
  install: function(Vue, options){
    Notification.install(Vue, options);
    Message.install(Vue, options);
  },
  Notification,
  Message,
}
