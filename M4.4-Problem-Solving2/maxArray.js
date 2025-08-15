// find the max value in array 
// lets write a function 

function maxItem(array) {
    let maxNumber = array[0];
    for (const item of array) {
        if(item > maxNumber) maxNumber = item;
    }
    return maxNumber;
}

const number = [4, 23, 5, 6, 34, 5];
console.log(maxItem(number));
