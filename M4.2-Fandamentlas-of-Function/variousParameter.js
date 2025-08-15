// check whether string length is even
function isStrSizeEven(str) {
    const len = str.length;
    console.log(len);

    if(len % 2 == 0) return true;
    return false;
}

console.log(isStrSizeEven('dhaka'));

// double the number based on condition 
function double(number, isDouble) {
    if(isDouble) {
        return number * 2;
    }
    return number * 3
}

console.log(double(42, true));
console.log(double(42, false));

// check the number of elements of array 
function NumberOfElements(array) {
    const len = array.length;
    return len;
}

console.log(NumberOfElements([3, 5, 2, 3, 5]));



