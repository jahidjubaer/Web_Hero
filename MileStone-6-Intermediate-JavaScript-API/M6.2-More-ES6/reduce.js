// if i want to sum of array what if do or if i want the max value of array ? use loop right ? 
const numbers = [4, 5, 534, 6, 23, 34];
let sum = 0;

for(value of numbers){
    sum += value
}
console.log(sum);

// we can do it more easy way with reduce function ;
const sumArray = numbers.reduce((num, add) => num + add, 0); // look here , there need a acc and current value and need to write a primary value of current ; 
console.log(sumArray);

