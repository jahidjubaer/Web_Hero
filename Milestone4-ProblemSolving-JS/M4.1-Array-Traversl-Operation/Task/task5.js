// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

let original = [1, 3, 4];
let copy = Array.from(original);
copy[0] = 99; 
console.log(original);
console.log(copy);
