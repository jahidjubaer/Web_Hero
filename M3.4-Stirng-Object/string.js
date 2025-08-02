// you declear string in many ways .
var name = 'jahid hasan';
var city = "Sylhet";
var address = `jalalnoghar, sylhet`;

// object 
let food = new String('Apple');

// you may check the type 
console.log(typeof name);
console.log(typeof city);
console.log(typeof address);
console.log(typeof food);

// string is like array but there have a question , 
// array i s mutable - means it index can be change but 
// string is immutable - means it's index value cannot be change ;
// mutable 
let numbers = [4, 3, 2, 6, 4, 0];
console.log(numbers);
numbers[1] = 5;
console.log(numbers);
// here index 1 value will replace with 3

let city2 = 'Dhaka';
console.log(city2);
city2[1] = 'R';
console.log(city2);
// here index 1 value will not change . 
