/* Here you can learn about how to declare
 Javascript functions , local and global scope and return statement */

//Write Reusable JavaScript with Functions
function functionName(){
    document.write("I am Aditya Chakrabortty <br><br>");
}
functionName();

//Passing Values to Functions with Arguments
function functionWithArgs (a,b){
    var add = a+b;
    document.write("The value of addition is: " +add +"<br><br>");
  }
  functionWithArgs(1,2);

  // Global and Local Scope in Functions
var outerWear = "T-Shirt"; //This is a Global scope 
function myOutfit() {
   var outerWear = "sweater"; //This is a Local scope 
  document.write("The return statement is : " +outerWear +"<br><br>") ; //when you use global and local in one place then the local variable takes precedence over the global variable.
}
myOutfit();

//Using return statement
function timesFive (num){
    return num*5;
  }
  /*
  var multiplication  = timesFive(2);
  document.write("The value of multiplication is : " +multiplication);
   */
document.write("The value of multiplication is : " + timesFive(2));


