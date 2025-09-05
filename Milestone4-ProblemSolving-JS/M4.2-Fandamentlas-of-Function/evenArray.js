// return all the even number in array using function 

function evenArray(array) {
    let evenarray = [];
    for(item of array){
        if(item %  2 === 0) {
            evenarray.push(item);
        }
    }
    return evenarray;
}

// sum of even array 
function sumOfEvenArray(array) {
    let sum = 0;
    for(item of array){
        if(item % 2 === 0){
            sum += item;
        }
    }
    return sum;
}

let array = [3, 5, 3, 6, 23, 5, 8, 12];

// call even array function and print it;
console.log(evenArray(array));
// call sum of even array 
console.log(sumOfEvenArray(array));
