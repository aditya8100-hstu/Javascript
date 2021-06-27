function student(){           //contructor without parameter
    this.name = "Aditya";
    this.age = 23;
    this.Address = "Bangladesh";
}
document.write("I am " +student.name+ " and I am " +student.age+ " years old <br>" ); //The value is undefined . We have to copy all the value of "student" to a new variable and then can print it through the new variable 
let student1 = new student();
document.write("I am " +student1.name+ " and I am " +student1.age+ " years old <br>" );  //We can print conatructor value in this way
student1.name = "Rahim"; //Update constructor value
student1.age = 24;
document.write("I am " +student1.name+ " and I am " +student1.age+ " years old <br>" );


function newstudent(name , age){       //contructor with parameter
    this.name = name;
    this.age = age;
    this.Address = "Bangladesh";
}
let student2 = new newstudent("Karim" , 24);
let student3 = new newstudent("Jadu" , 25);
document.write("I am " +student2.name+ " and I am " +student2.age+ " years old <br>" );
document.write("I am " +student3.name+ " and I am " +student3.age+ " years old <br>" );





