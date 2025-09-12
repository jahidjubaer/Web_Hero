// arrow function 

// function declaration
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5,3));

// function expression 
const multiply = function(num1, num2){
    return num1 * num2;
}
console.log(multiply(4, 2));

// arrow function 
const add = (num1, num2) => num1 + num2;
console.log(add(5, 3));

// arrow function is more effective for one line we can also write multi line code .
const sumAll = (num1, num3) => {
    const add = num1 + num3;
    const multi = num1 * num3;
    return multi ;
}

console.log(sumAll(4, 2));
