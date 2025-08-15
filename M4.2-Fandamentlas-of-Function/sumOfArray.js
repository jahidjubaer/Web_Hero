function sumOfArray(array) {
    sum = 0;
    for(item of array){
        sum += item;
    }
    return sum;
}

let array = [3, 5, 3, 34, 23, 64, 43];
console.log(sumOfArray(array));