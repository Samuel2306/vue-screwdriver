const toString = Object.prototype.toString

function isType(type){
  return function(target){
    let res = toString.call(target)
    return res.substring(8, res.length - 1).toLowerCase() === type.toString()
  }
}

function getType(target){
  let res = toString.call(target)
  return res.substring(8, res.length - 1).toLowerCase()
}

const identifier = {
  isType: isType,
  getType: getType,
  isString: isType('string'),
  isNumber: isType('number'),
  isBoolean: isType('boolean'),
  isObject: isType('object'),
  isArray: isType('array'),
  isUndefined: isType('undefined'),
  isNull: isType('null'),
  isRegExp: isType('regexp'),
  isFunction: isType('function'),
}


export default identifier
