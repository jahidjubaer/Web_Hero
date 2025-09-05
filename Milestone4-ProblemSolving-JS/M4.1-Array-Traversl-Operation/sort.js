let friends = ['abul', 'babul', 'kabul', 'rahul', 'nakul'];

// lets sort the array 
friends.sort() // thats it , nice ?
console.log(friends);

let number = [3, 4, 11, 1, 6, 3, 9, 10];
number.sort()
console.log(number);
// output : [1, 10, 11, 3, 3,  4,  6, 9]; but we did't want like this right ? 
// so why it happen ? cz javascript sorting method work char-wise; solution ?

// here is the solution 
// ascending 
number.sort(function (a, b) { return a - b});
console.log(number);
// now perfect right ? so how its works ? we will see next !

// descending
number.sort(function (a, b) { return b - a});
console.log(number);
