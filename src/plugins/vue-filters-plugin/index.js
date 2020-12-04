import {
  identifier
} from '../util'
const emptyDataArr = [null, 'null', undefined, 'undefined', /^(\s)+$/]
const filters = {
  /**
   * 处理空值的过滤器
   * @param value：属性值
   * @param defaultValue：空值的替代文案
   * @param additionalEmptyDataArr：用户自定义的空值, 可以是正则表达式, 也可以是函数，如果是函数返回是true说明是空值
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
        if(value === option || !value){
          res = defaultValue
          break
        }
      }
    }

    return res
  }
}


export default {
  install: function(Vue, options){
    for(let prop in filters){
      Vue.filter('swd' + prop[0].toUpperCase() + prop.substring(1), filters[prop])
    }
  }
}
