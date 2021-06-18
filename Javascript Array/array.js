/* In this code we will learn about arrray in Javascript 

In array we can store various of data like string, number etc at a time */

var myArray = ["one",1]; //in this way you can decleare a array
document.write("The myArray element is : " +myArray+ "<br><br>");

var myArray1 = [["one",1],["two",2]]; //Nest one Array within Another Array. This is also called multidimentonal array
document.write("The munlti-dimentional myArray1 element is : " +myArray1+"<br><br>");

var firstData = myArray[0];
document.write("The first data of myArray is : " +firstData+ "<br><br>");

myArray[0]= "two";
document.write("The new myArray element is : " +myArray+ "<br><br>");

var myData = myArray1[1][1];
document.write("The second element of second multidimentional array is : " +myData+ "<br><br>") //Access Multi-Dimensional Arrays With Indexes

myArray1.push(["three",3]); //push or add any data in the end
document.write("The new array is: " +myArray1+  "<br><br>");

var newArray = myArray1.pop(); //pop or delete any data fron the end
document.write("The new array is: " +myArray1+ "<br><br>");

var newArray1 = myArray1.shift(); //delete data from the first
document.write("The new array is: " +myArray1+ "<br><br>");

var newArray2 = myArray1.unshift(["two"]); //add data in the first
document.write("The new array is: " +newArray2+ "<br><br>");



