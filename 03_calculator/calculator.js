function Calculator(){

  var result = 0;

  this.value = function(){
    return result;
  };

  this.add = function (num){
    return result += num
  }

  this.subtract = function (num){
    return result -= num
  }

}
/* Function passes spec without this but is needed to create the object "calculator" from the "Calculator" prototype.

var calculator = new Calculator(); */
