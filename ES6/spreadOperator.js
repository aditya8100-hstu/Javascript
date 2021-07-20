const array1 = [1,2,3,4,5,6];
const array2 = [...array1];
console.log(array2);

const array3 = [7,8,9,10];

const array4 = [...array2 , ...array3];
console.log(array4);