/*  Here yuou can know about Javascript loops like for , while , do while and so on*/

//Iterate with JavaScript While Loops
document.write("Useing while Loop : ");
var myArray = [];
var i=5
while(i>=0){
  myArray.push(i);
  document.write(i+ " ");
  i--
}
document.write("<br><br>");

//Iterate with JavaScript For Loops
document.write("Useing for Loop : ");
var myArray = [];
for ( var i=1;i<=5;i++){
  myArray.push(i);
  document.write(i + " ");
}
document.write("<br><br>");

//Iterate Odd Numbers With a For Loop
document.write("Print odd number useing for Loop : ");
var myArray = [];
for (var i=1 ; i<=9 ; i=i+2){
  myArray.push(i);
  document.write(i + " ");
}
document.write("<br><br>");

//Count Backwards With a For Loop
document.write("Print odd number in backwards useing for Loop : ");
var myArray = [];
for(var i=9;i>=1;i=i-2){
  myArray.push(i);
  document.write(i + " ");
}
document.write("<br><br>");


//Iterate Through an Array with a For Loop
var total = 0;
for (var i = 0; i < myArray.length; i++) {
  total += myArray[i];
}
document.write("The result is : " +total);
document.write("<br><br>");

//Nesting For Loops
function multiplyAll(arr) {
    var product = 1;
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    document.write("The multiplication result is : " +product);
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  document.write("<br><br>");


//Iterate with JavaScript Do...While Loops
  var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
  document.write(i);
}while (i <= 10);




