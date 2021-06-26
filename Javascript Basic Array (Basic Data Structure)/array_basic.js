//array define , retrieve data,

 let simpleArray = ['one', 2, 'three', true, false];
 console.log(simpleArray); //define a array
 document.write("The size of the array is : " +simpleArray.length+ "<br>");

 simpleArray[2] = 4;
 console.log(simpleArray); //Access an Array's Contents and change its value

 simpleArray.push("five",5); // push method (add element at the last)
 console.log("The new array after adding element at the last :" +simpleArray);

 simpleArray.unshift("six" , 6); //// pop method (add element at the first)
 console.log("The new array after ading element at the first: " +simpleArray);

 simpleArray.pop(); //pop method (delete from the last)
 console.log("The new array after deleting element at the last :" +simpleArray);

 simpleArray.shift(); //shift method (delete from the first)
 console.log("The new array after deleting element at the first :" +simpleArray);

 simpleArray.splice(4,2); //remove a group of items(the first index is "startIndex" and the second is "amountToDelete").[It has mainly 3 parameters.now we just look over 2 parameters and in next example we will look over on the 3rd parameter]
 console.log("The new array after removing items  :" +simpleArray);

 simpleArray.splice(1,1,"ten",10); //remove a group of items(the first index is "startIndex" and the second is "amountToDelete") [The 3rd parameter is which items you want to insert in the deleted place]
 console.log("The new array after removing and inserting items  :" +simpleArray);

 let newArray = simpleArray.slice(2,5); //Copy Array Items (It takes only 2 parameters. The first is the index at which to begin extraction, and the second is the index at which to stop extraction )
 console.log("The new array is  :" +newArray);

 let secondarray = [...newArray]; //Copy an Array with the Spread Operator
 console.log("The second new arrya is : " +secondarray);

 let thirdarray = ["nine" , 9 , ...secondarray , "twelve" , 12]; //Combine Arrays with the Spread Operator
 console.log("The third new array is : " +thirdarray);

 let fourtharray = [simpleArray , ...thirdarray]; //Combine Arrays with the Spread Operator
 console.log("The fourth array is : " +fourtharray);

 







