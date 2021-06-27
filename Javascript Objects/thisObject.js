/*If the variable name changes, any code referencing the original name would need to be updated as well. 
In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.
That means if the object name is changed then we don't have to change all the object name 
which we use in our code if we use "this" keyword. */

let student = {
    firstName : "Aditya",
    lastName : "Chakrabortty",
    age : 23,
    address : "Rangpur",

    sentence: function()
        {return "I am " +this.firstName+ " " +this.lastName+ " and I'm " +this.age+ "years old"
    }  
        
   /* sentence:function(){
        return "I am " +student.firstName+ " " +student.lastName+ " and I'm " +student.age+ "years old"
    } */

};

newline = student.sentence();
document.write(newline +"<br>");

document.write(student.address); 
