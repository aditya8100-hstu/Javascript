function palindrome(str) {
    let polishedString = str.replace(/\W+|_/g,"").toLowerCase();
    let reversedString = polishedString.split("").reverse().join("");
    console.log(reversedString , polishedString);
    if(reversedString === polishedString){
      return true;
    } else{
      return false;
    }
    
  }
  
  
  
  let result =  palindrome("A man, a plan, a canal. Panama");
  console.log(result);