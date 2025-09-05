function isEven(number) {
    if(number % 2 == 0) return true;
    else return false;
}

function isOdd(number) {
    if(number % 2 == 1) return true;
    // no need to use else . bz when if condition will true it return . it don't come to the what have in next .
     return false;
}

console.log(isEven(5));
console.log(isOdd(9));
