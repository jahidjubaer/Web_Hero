// indexof - find the index from array 
let foods = ['rice', 'dal', 'snacks', 'pizza'];
console.log(foods.indexOf('pizza'));

// you can also keep this index in a variable 
let pizzaIndex = foods.indexOf('pizza');
console.log(pizzaIndex);

// in array there have many more built-in function like , join, concat, slice and other lets try some 
// join 
let friends = ['jakir', 'rassel', 'hira'];
// here i join friends and food array in once and keep in new joinArray
let joinArray = friends.join(foods);
console.log(joinArray);