function tensTime(number) {
    const result = number * 10;
    // return the result 
    return result;
    // after return something this block will not work
}

function cutHalf(number) {
    const result = number / 2;
    return result;
}

// you need to console log , bz in function we did't console log
console.log(tensTime(4));

// we can also keep the return value in a variable 
// and then print the value 
let result = cutHalf(199);
console.log(result);
