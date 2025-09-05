// lets see how to swap the value of variable 

let a = 34, b = 'hi';

// using temp variable 
let temp = a;
a = b;
b = temp;
console.log(a, b);

// i don't know whats the name of method but you can swap like this
[a, b] = [b, a];
console.log(a, b);


