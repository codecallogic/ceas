export {
  validateDate,
  validateIsEmail,
  isNumber,
  validateIsPhoneNumber
}

const checkValue = (str, max) => {
  if (str.charAt(0) !== '0' || str == '00') {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
  };
  return str;
}

const validateDate = (e, caseType, key, reduxMethod) => {
  let name = document.getElementById(key)
  let input = e.target.value

  name.onkeydown = function(event){
    if(event.keyCode == 8){
      if(input.length == 1) return (reduxMethod(caseType, key, ''), name.classList.remove("field-red"))
      return reduxMethod(caseType, key, input.substr(0, input.length - 1))
    }
  }
  
  name.classList.remove("field-red")
  
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  var values = input.split('/').map(function(v) {
    return v.replace(/\D/g, '')
  });
  if (values[0]) values[0] = checkValue(values[0], 12);
  if (values[1]) values[1] = checkValue(values[1], 31);
  var output = values.map(function(v, i) {
    return v.length == 2 && i < 2 ? v + '/' : v;
  });
  input = output.join('').substr(0, 10);

  reduxMethod(caseType, key, input)

  let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/

  if(!date_regex.test(input)){
    name.classList.add("field-red");
    if(input == '') name.classList.remove("field-red")
    return
  }
}

const validateIsEmail = (type) => {
  const input = document.getElementById(type)
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g
  return regex.test(input.value)
}

const isNumber = (data) => {
  let reg = new RegExp(/[0-9\-\(\)\+\s]+/gm)
  return reg.test(data)
}

const validateIsPhoneNumber = (type, caseType, reducerKey, method) => {
  const input = document.getElementById(type)
  const cleanNum = input.value.toString().replace(/\D/g, '');

  input.onkeydown = function(event){
    if(event.keyCode == 8){
      if(cleanNum.length == 1) return method(caseType, reducerKey, '')
      return method(caseType, reducerKey, cleanNum.substr(0, cleanNum.length - 0))
    }
  }

  const match = cleanNum.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);

  if (match) {
    return  method(caseType, reducerKey, ('(' + match[1] + ') ' + (match[2] ? match[2] + "-" : "") + match[3]));
  }

  return null;
}