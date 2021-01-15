import Notification from './Notification';
import Message from './Message';
import Loading from './Loading';

export default {
  install: function(Vue, options){
    Notification.install(Vue, options);
    Message.install(Vue, options);
    Loading.install(Vue, options);
  },
  Notification,
  Message,
}
