// default parameter
function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(add(3,4));

// but what if will give more than 2 arguments 
console.log(add(4, 5, 2, 5)); // nothing just skip after 2nd arguments 
// but if we give less then 2 arguments 
console.log(add(3));
// it will return a nan - not a number and parameter 3 undefined ;
// thats why we have to use default parameter , if will pass arguments it will take that or it will calculate with default parameter 
console.log(add()); // it will return 0;

//  for add, sub we can set default parameter -> 0 , multiple -> 1 , and string -> '' empty string and for object and array empty object and empty array 


