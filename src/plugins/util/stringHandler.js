/**
 * 将字符串转成驼峰模式
 * @param str: 原始字符串
 * @param Delimiter: 指定分隔符，默认是'_'
 * @returns {string}: 驼峰式的字符串
 */
function toCamelCased(str, Delimiter){
  if(str === '' || typeof str !== 'string'){
    return ''
  }
  Delimiter = Delimiter || '_'
  let arr = str.split(Delimiter);
  for(let i = 1; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
  }
  return arr.join("");
}


/**
 * 将驼峰式转换为特殊分隔符相连的形式，一般有'_', '-'等
 * @param str: 原始字符串
 * @param Delimiter: 指定的分隔符，默认是'_'
 * @returns {string}: 特殊分隔符相连的字符串
 */
function toKebabCase(str, Delimiter){
  if(str === '' || typeof str !== 'string'){
    return ''
  }
  return str.replace(/([A-Z])/g,Delimiter + "$1").toLowerCase();
}

// 字符串相关的处理函数
const stringHandler = {
  toCamelCased,
  toKebabCase,
}


export default stringHandler
