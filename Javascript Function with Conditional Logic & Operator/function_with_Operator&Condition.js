
//Comparison with the Equality Operator
function testEqual(val) {
    if (val==12) { 
      document.write ("The value is Equal <br><br>") ;
    }
   else{
    document.write ("The value is Not Equal <br><br>") ;
   }

  }
  
  testEqual("12");

  //Comparison with the Strict Equality Operator
  function testStrict(val) {
    if (val===12) { 
        document.write ("The value is Equal <br><br>") ;
    }
    else{
        document.write ("The value is Not Equal <br><br>") ;
    }
  }
  
  testStrict("12");

  //Comparison with the Inequality Operator
  function testNotEqual(val) {
    if (val != 99) { 
        document.write ("The value is Equal <br><br>") ;
    }
    else{
        document.write ("The value is Not Equal <br><br>") ;
    }
  }
  testNotEqual(10);

  //Comparison with the Strict Inequality Operator
  function testNotEqual(val) {
    if (val != 99) { 
        document.write ("The value is Equal <br><br>") ;
    }
    else{
        document.write ("The value is Not Equal <br><br>") ;
    }
  }
  testNotEqual("99");


  //Comparison with the Greater Than Operator
  function testGreaterThan(val) {
    if (val >100) {  
        document.write ("Over Than 100 <br><br>") ;
    }
  
    if (val >10) {  
        document.write ("Over Than 10 <br><br>") ;
    }
    else{
        document.write ("10 or Under <br><br>") ;
    }
  }
  testGreaterThan(10);


  //Comparison with the Greater Than Or Equal To Operator
  function testGreaterOrEqual(val) {
    if (val >=20) {  
        document.write ("20 or Over <br><br>") ;
    }
  
    if (val >=10) { 
        document.write ("10 or Over <br><br>") ;
    }

    else{
        document.write ("Less than 10 <br><br>") ;
    }
  }
  testGreaterOrEqual(10);

//Comparison with the Less Than Operator
  function testLessThan(val) {
    if (val < 25) {  // Change this line
        document.write ("Under 25 <br><br>") ;
        }
  
    if (val < 55) {  // Change this line
        document.write ("Under 55 <br><br>") ;
    }
  
    else{
        document.write ("55 or Over <br><br>") ;
    }
  }
  testLessThan(30);

//Comparison with the Less Than Or Equal To Operator
  function testLessOrEqual(val) {
    if (val <= 22) {  
        document.write ("Smaller Than or Equal to 12 <br><br>") ;
    }
  
    if (val <= 24) {  
        document.write ("Smaller Than or Equal to 24 <br><br>") ;
    }
  
    else{
        document.write ("More Than 24 <br><br>") ;
    }  }
  
  testLessOrEqual(23);


//Comparisons with the Logical And Operator
  function testLogicalAnd(val) {
    if (val <= 50 && val>=25) {
        document.write ("Yes <br><br>") ;
    }
    else{
        document.write ("No <br><br>") ;
    }
  }
  testLogicalAnd(10);


//Comparisons with the Logical Or Operator
  function testLogicalOr(val) {
    if (val<10 || val>20) {
        document.write ("Outside <br><br>");
    }
    else{
        document.write ("Inside <br><br>");
    }
  }
  testLogicalOr(15);