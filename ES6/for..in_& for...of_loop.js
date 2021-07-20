const digits = [5,8,4,9,10];

for(const index in digits){
    if(digits[index]===9){
        continue;
    }
    console.log("for...in Loop: " +digits[index]);
}

for(const index of digits){
    if(index===9){
        continue;
    }
    console.log("for...of Loop: " +index);
}