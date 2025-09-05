// array is start with 0  indexing , 0,1,2,3,4..
// when you find 3rd value of this array you are looking for 2th index . lets see...

let numbers = [1, 4, 2, 5, 5, 7, 2];
console.log(numbers[2]); // output will : 2 , which is on 2 index 

// you can also put into a variable 
let fourth = numbers[3];
console.log(fourth);

// you can also update the value of a index 
numbers[4] = 10;
console.log(numbers);

// you can traverse the array with loop;
let len = numbers.length;
// using loop i traverse the array and add 2 with every element of array ;
for(let i = 0; i < len ; i++){
    numbers[i] += 2;
}
// this is an interesting thing in c++ for print a array i must have to use a loop;
// but in js i just need tho console.log how cool 
console.log(numbers);