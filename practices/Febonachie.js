'use strict'

function Fabonache(n){
  if(n == 1){
    return 0;
  }else if(n == 2){
    return 1;
  }else{
    return Fabonache(n-1)+Fabonache(n-2);
  }
}
function Febonachie(num){
  var num = Fabonache(num);
  return num;
}
//var num = Fabonache(10);
//console.log(num);
/*
*  if the result is right ,it equal to 55
* */
module.exports = Febonachie;
