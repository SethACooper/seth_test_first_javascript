
function setSomePropertiesOn(object){
  object.x=7;
  object.y=8;
  //object["y"]=8; also works

  object.onePlus = function (num){
    return num + 1;
  }

};
