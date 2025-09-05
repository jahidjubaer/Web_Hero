let number = [1, 2, 3, 4, 5, 6];
let reverse = [];
console.log(number);


// using unshift 
for(let i = 0; i < number.length; i++){
    reverse.unshift(number[i]);
}
console.log(reverse);

// using reverse loop 
reverse = [];
for(let i = number.length - 1; i >= 0; i--){
    reverse.push(number[i]);
}
console.log(reverse);

// using for of
reverse = [];
// i forget if i just unshift n i can get the value. no need to number[n];
for(n of number){
    reverse.unshift(n);
}
console.log(reverse);

// we can also reverse using while loop 
// the shortcut 
console.log(number.reverse()); 

