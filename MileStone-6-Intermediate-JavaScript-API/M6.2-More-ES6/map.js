// what is map -> map returns a callback function for each of array ;

const numbers = [44, 23, 6, 34, 2];
// what we can do if we want to double each elements ? loop ?

// here is empty array to push double number ; 
const doubleNumber = [];
for(item of numbers){
    console.log(item * 2);

    item = item * 2;
    doubleNumber.push(item);
}
console.log(doubleNumber);


// we can do it more efficiently using map . how ?
function doubleIt(num){
    return num * 2;
}

console.log( numbers.map(doubleIt));

// we can do it more easy way ;
console.log(numbers.map(num => num * 2)); // write function in map ;

const friends = ['rahul', 'rafsan', 'nokib', 'babul'];
console.log(friends.map(name => name.length)); // return the length of name ; 

friends.map((name, index) => {
    console.log(name);
    console.log(index);
} );

numbers.map((num, index) => {
    console.log(num * index);  
});

// lets work with index ; 
console.log(friends.map(name => name[0]));
console.log(friends.map(name => name[0].toUpperCase()));







