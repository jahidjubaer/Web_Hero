// why we need destructing
const products = {product: 'iron', price: 1400, };

// so if we want to access the price of products we have to write ;
// console.log(products.price);

// let we give 30% a discount now new need to added our new price 
// const discountPrice = products.price * 0.7;
// const vat = products.price * 0.15 ;
// const payBill = discountPrice + vat;
// console.log(payBill);

// products.price write every time it's kind of pain write ;
// we can find a solution with variable ;

// const price = products.price
// const discountPrice = price * 0.7;
// const vat = price * 0.15 ;
// const payBill = discountPrice + vat;
// console.log(payBill);

// but there have better solution ? destructing 
const {brand, price, model} = {brand : 'realMe', price: 17000, mode: 'c23'};
// here which we write in left side it's will works as variable ;
// another way to destructing

const numbers = {subject: 'Math', number: 49, grade: 'C'};
const {subject, number, } = numbers;


// we can also destructing array 
const friends = ['rahul', 'rakib', 'shakib', 'akib'];
const [first, second] = friends;