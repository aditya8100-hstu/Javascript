//Destructuring from an array

const array = [1,2,3,4,5];
const[x,y,z] = array;
const[a,,b,,c] = array;
console.log(a,b,c);
console.log(x,y,z);

//Destructuring from an object

const obj = {
    name : "Aditya Chakrabortty",
    Sesion: 2018,
    ID: 1802042,
    Dept: "CSE"
};
const{name,Sesion,Dept} = obj;
console.log(name,Sesion,Dept);
