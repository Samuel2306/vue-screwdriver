import {
  identifier
} from '../util'
const emptyDataArr = [null, 'null', undefined, 'undefined', NaN, /^(\s)+$/]
const filters = {
  /**
   * 处理空值的过滤器
   * @param value：属性值
   * @param defaultValue：空值的替代文案
   * @param additionalEmptyDataArr：用户自定义的空值,
   *  1、固定值
   *  2、正则表达式，正则表达式匹配的就是空值
   *  3、函数，如果是函数返回是true说明是空值
   */
  formatterEmptyData: function(value, defaultValue, additionalEmptyDataArr){
    let res = value
    defaultValue = defaultValue || ''
    additionalEmptyDataArr = additionalEmptyDataArr || []
    let emptyList = emptyDataArr.concat(additionalEmptyDataArr)
    for (let i = 0; i < emptyList.length; i++){
      let option = emptyList[i]
      if(identifier.isFunction(option)){
        if(option(value)){
          res = defaultValue
          break
        }
      }else if(identifier.isRegExp(option)){
        if(option.test(value)){
          res = defaultValue
          break
        }
      }else{
        if(value === option){
          res = defaultValue
          break
        }
      }
    }

    return res
  },
  /**
   * 格式化金额，将金额每三位加个逗号
   * @param value
   * @param before: 前置处理函数
   * @param after: 后置处理函数
   * @returns {string}
   */
  formatterMoney: function(value, before, after){
    if(before && identifier.isFunction(before)){
      value = before(value)
    }
    let str = value.toString();
    let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    str = str.replace(reg,"$1,");
    if(after && identifier.isFunction(after)){
      str = after(str)
    }
    return str
  }
}


export default {
  install: function(Vue, options){
    for(let prop in filters){
      Vue.filter('swd' + prop[0].toUpperCase() + prop.substring(1), filters[prop])
    }
  }
}
