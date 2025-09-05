// add function 
function add (number1, number2){
    let sum = number1+ number2;
    console.log('sum is '+ sum);
    // return value from function 
    return sum;
}

// function call 
add(45, 33);

// lets store the return value in a variable 
let answer = add(45, 12);
console.log(answer);

// a function for multiple table 
function multipleTable(number){
    for(let i = 1; i <= 10; i++){
        console.log(number, '*', i, '=', number * i);
    }
}

multipleTable(3);
multipleTable(5);


