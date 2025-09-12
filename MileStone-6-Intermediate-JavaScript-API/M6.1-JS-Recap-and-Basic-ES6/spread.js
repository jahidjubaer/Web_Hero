// what if we want to find the max number form array , 
// we need to run a loop but in general we can find max or min using function 
console.log(Math.max(4, 5, 3, 6, 2));

// but what if we want to find max number form array 
const number = [4, 2, 5, 9, 5, 2];
console.log(Math.max(number)); // it will return not a number why?
// bz will give an array in max function , we need to give number ; so how can give number from an array ?
// spread look the diff between array and spread array ;
console.log(number);
console.log(...number);

// so if we want to find the max form array we can write with spread array like that 
console.log(Math.max(...number));

// when we copy an array it will copy with ref. so when we change anything in copy array it also change the main array to solve this problem we can use spread.
const array1 = [4, 4, 6, 3, 6, 2,];
const copyArray = array1;
copyArray.push(5);
console.log(array1); // see we push 5 into copyArray it also push in array1 ; so lets solve with spread

const copyArray2 = [...array1];
copyArray2.push(4, 3);
console.log(array1); // no change for pushing 4, 3 in copy array2
console.log(copyArray2);

// we can also add before and after multiple value of array . how ? 
const copyArray3 = [4, 3, ...array1, 5, 2];
console.log(copyArray3);

// we can pass arguments array 
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
const functionArg = [5, 3, 6];
console.log(add(4, 2, 6));
console.log(add(...functionArg));

// we can also spread in object ;
const employee = {name : 'ashik', id : 4234};
const employees = {...employee, salary: 5000};
console.log(employees);








