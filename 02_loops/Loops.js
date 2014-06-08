function repeat (string,counter){
  var result =  '';
  for (var i = 0; i < counter; i++) {
    result += string;
  }
  return result;
}


function join (array,delimiter){
  var string = '';
  if (delimiter == undefined){
    delimiter='';
  }
  for (var i = 0; i < array.length; i++) {
    string += array[i]
    if (array.length > 1 && i < array.length -1){
      string += delimiter;
    }
  };
  return string;
}

function sum (array){
  var result = 0
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  };
  return result
}

function paramify(hash){
  var array = [];
  var result = '';
  for(key in hash){
    if(hash.hasOwnProperty(key)){
      array.push(key);
    }
  }
  array.sort();
  if (array.length > 0){
    for (var i = 0; i < array.length; i++) {
      result = result + array[i] + "=" + hash[array[i]];
      if(array.length > 1 && i < array.length -1){
        result += "&"
      }
    }
  }
  return result;
}

function factorial(num){
  var result = 1;
  if (num > 0){
    for (var i = num; i > 0; i--) {
      result  *= num;
      num--;
    };
  }
  return result;
}

function concat_string(args){
  var argArray = arguments;
  var string ='';
  for (var i = 0; i < argArray.length; i++) {
    string  += argArray[i];
  };
  return string;
}
