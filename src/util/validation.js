// 验证某个字符是否是中文
function checkIsChinese(char){
  let Expression = /[\u4E00-\u9FA5]/;
  if(Expression.test(char)){
    return true;
  }else{
    return false;
  }
}
// 验证一段字符串中是否有中文
function checkIsContainedChinese(str){
  let ret = false;
  for(let i = 0; i < str.length; i++){
    if(checkIsChinese(str[i])){
      return true
    }
  }
  return ret;
}

// 验证电话号码
function checkPhone(phone){
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)
}
// 验证email
function checkEmail(email){
  return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
}
// 验证身份证号码
function checkIDCard(IDCard){
  return /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(IDCard)
}

function checkPlateNumber(plateNumber) {
  const plateNumberReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$/;
  return plateNumberReg.test(plateNumber);
}


const validation = {
  checkPhone: checkPhone,
  checkEmail: checkEmail,
  checkIDCard: checkIDCard,
  checkIsChinese: checkIsChinese,
  checkIsContainedChinese: checkIsContainedChinese,
  checkPlateNumber: checkPlateNumber,
}

export default validation
