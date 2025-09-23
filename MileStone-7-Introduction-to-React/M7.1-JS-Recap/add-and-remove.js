// array of object;

const products = [
  { name: "mobile", brand: "apple", price: 15000, color: "red" },
  { name: "laptop", brand: "hp", price: 150000, color: "black" },
  { name: "mobile", brand: "samsung", price: 10000, color: "white" },
  { name: "laptop", brand: "dell", price: 100050, color: "black" },
  { name: "mobile", brand: "honor", price: 20000, color: "red" },
];


const newData = { name: "laptop", brand: "dell", price: 50000, color: "black" }; 
// how can i add to new data in products ; 
// we can push this data ; to the products; 
products.push(newData); 
// console.log(products);

// but if we want a new array and we want data the products data into it how can we do that ? spread ; 
const newProductArray = [...products, newData]; 
// console.log(newProductArray);

// now if we want to remove the dell laptop from this array how can we do that ; 
const remainingArray = products.filter(data => data.brand !== "dell"); 
console.log(remainingArray);


