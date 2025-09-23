// array of object;

const products = [
  { name: "mobile", brand: "apple", price: 15000, color: "red" },
  { name: "laptop", brand: "hp", price: 150000, color: "black" },
  { name: "mobile", brand: "samsung", price: 10000, color: "white" },
  { name: "laptop", brand: "dell", price: 100050, color: "black" },
  { name: "mobile", brand: "honor", price: 20000, color: "red" },
];

// it will return a array of color ;
const productsColor = products.map((color) => color.color);
console.log(productsColor);

// forEach -> does'nt return anything ;
products.forEach((item) => console.log(item.price));

// filter() -> return a array , which i filter with condition;
const appleProduct = products.filter((item) => item.brand == "apple");
console.log(appleProduct);
// here will return bellow 15k phone ;
const lowerPricePhone = products.filter((item) => item.price <= 15000);
console.log(lowerPricePhone);

// find -> return one object ; 
const mobileProduct = products.find(item => item.name === "mobile"); 
console.log(mobileProduct);
// there have two product named mobile but find return first one ; 

