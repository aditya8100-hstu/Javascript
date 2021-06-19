/* Here you can learn about the basic Objects of Javascript */

// Build Objects and Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "the drink": "water"
  };
  var hatValue = testObj.hat;      
  var shirtValue = testObj.shirt; 
  var drinkValue = testObj["the drink"]; 

document.write("The value of testObj is : " +hatValue + " , " +shirtValue+ " , " +drinkValue +"<br><br>");

document.write("All values of testObj is : " +Object.values(testObj) +"<br><br>");

var updateValue = testObj.hat = "Porkpie Cap"; //Update object property
document.write("The update value is: " +Object.values(testObj) +"<br><br>");

var newProperty = testObj.bark = "bow bow"; //Add new properties to the js objects
document.write("The new property is : "+Object.values(testObj) +"<br><br>");

delete testObj.bark; //Delete properties
document.write("After Delation the new object is : " ,Object.values(testObj)+"<br></br>");

//Testing Objects for Properties
if(testObj.hasOwnProperty("hat")){
    document.write("Found<br><br>");
}else{
    document.write("Not Found<br><br>");
}




