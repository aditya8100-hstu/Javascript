function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  let result = factorialize(5);
  document.write("The result is : " +result);