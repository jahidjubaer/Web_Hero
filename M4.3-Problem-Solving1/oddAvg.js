// what we have to do 
// simple we have to find out the avg of odd number in a array
function oddAvg(array) {
    let sum = 0;
    let len = 0;
    for(item of array){
        if(item % 2 === 1){
            sum += item;
            len++;
        }
    }
    let avg = sum / len;
    return avg;
}

const array = [3, 7, 4, 34, 73, 5];
console.log(oddAvg(array));

// we can also solve in any many other ways . lets see

function oddAvg2(array) {
    let oddArray = [];
    for(item of array){
        if(item % 2 === 1) oddArray.push(item);
    }
    let sum = 0;
    for(item of oddArray){
        sum += item;
    }
    const avg = sum / oddArray.length;
    return avg;
}

console.log(oddAvg2(array));

