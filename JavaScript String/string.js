/* Now we Learn about String and how to use string in Javascript */

var myName = "Aditya Chakrabortty"; //define string 
document.write(myName + "<br><br>");

var myStr1 = "I am a \"double quoted\" string inside \"double quotes\"."; //escaping literal quotes
document.write(myStr1+ "<br><br>");

var myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>'; //Quoting Strings with Single Quotes
document.write(myStr2 + "<br><br>");

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; //Escape Sequences in Strings
document.write(myStr3 + "<br><br>");

var myStr4="This is the start." + " This is the end."; //Concatenating Strings with Plus Operator
document.write(myStr4 + "<br><br>");

var myStr5= "This is the first sentence."; 
myStr5+= " This is the second sentence." //Concatenating Strings with the Plus Equals Operator
document.write(myStr5 + "<br><br>");

var myName = " Aditya Chakrabortty";
var myStr6 =" My name is " +myName+ " and I am well!"; //Constructing Strings with Variables
document.write(myStr6 + "<br><br>");

var someAdjective = "so much excitinng";
var myStr7 = "Learning to code is "; //Appending Variables to Strings
myStr7 += someAdjective;
document.write(myStr7 + "<br><br>");

var stringLength = "Aditya Chakrabortty"
document.write("The string length is : " +stringLength.length + "<br>"); //count string length
document.write("The first letter is : " +stringLength[0]+"<br>");
document.write("The last letter is : " +stringLength[stringLength.length-1]);







