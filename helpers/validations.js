const checkValue = (str, max) => {
  if (str.charAt(0) !== '0' || str == '00') {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
  };
  return str;
}

const handleDate = (e, key, reduxMethod) => {
  let name = document.getElementById(e.target.name)
  let input = e.target.value

  name.onkeydown = function(event){
    if(event.keyCode == 8){
      if(input.length == 1) return (reduxMethod(key, ''), name.classList.remove("field-red"))
      return reduxMethod(key, input.substr(0, input.length - 1))
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

  reduxMethod(key, input)

  let date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/

  if(!date_regex.test(input)){
    name.classList.add("field-red");
    if(input == '') name.classList.remove("field-red")
    return
  }
}

export {
  handleDate
}