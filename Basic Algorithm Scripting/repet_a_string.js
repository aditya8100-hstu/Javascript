//Solve by General Method

function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}
var b = repeatStringNumTimes("abc ", 3);
document.write(b);

document.write("<br>")



////Solve by .repeat Method
function repeatStringNumTimes(str, num) {
   return  str.repeat(num);
}

var a = repeatStringNumTimes("abc ", 2);
document.write(a);