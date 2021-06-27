//Lets try to reverse a String by javascript function

let str = "Aditya";  //input a string
document.write("The inputed string is : " +str +"<br>");

str2 = str.split("");  //split the string into different parts
document.write("The splited string is : " +str2+"<br>");

str3 = str2.reverse(); //reverse the string 
document.write("The reversed splited string is : " +str3+"<br>");
 
str4 = str3.join("");  //join the string
document.write("The reversed string is : " +str4);