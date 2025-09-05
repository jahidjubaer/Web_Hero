let number = 423;
let newNumber = number;
console.log(newNumber);

newNumber = 41;
console.log(number);
console.log(newNumber);

let array = [3, 2, 5, 2, 5, 3];
let newArray = array;
console.log(array);
console.log(newArray);
// array copy ? but when we change the an element problem comes 
// if i change copy array or original array both will change . why ?
// cz in javascript array and obj is non-premmitive 
// it keep the same ref for both of this array . let see and when solve the problem 
newArray[1] = 29;
console.log(array);
console.log(newArray);
// where you can you see both changed 

// solution-1 : loop push - its create a new array not ref previous array 
// before into it we have to empty of declare new array 
newArray = [];
for (const value of array) {
    newArray.push(value);
}
newArray[1] = 34;
console.log(array);
console.log(newArray); // only change newArray

// solution-2 : build-in method 
newArray = [];
newArray = Array.from(array);

console.log(newArray);

// solution-3 : concat 
newArray = [] + array;

console.log(newArray);

// solution -4 : ...array-name - we will learn next how its works 
newArray = [...array];
console.log(newArray);


