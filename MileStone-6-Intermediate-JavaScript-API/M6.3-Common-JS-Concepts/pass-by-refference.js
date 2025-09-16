// in normal function ; 
function multiply(num1, num2){

    //here i change the value of num1 , and num2 , which form x and y ; 
    // but it will not effected on x and y ; 
    num1 = 34 ; 
    num2 = num2 / 2; 
    const multi = num1 * num2; 
    return multi; 
}
const x = 5, y = 9; 

// before pass the value of x y ; 
console.log("before pass the value of x y ", x, y);

const ans = multiply(x, y);
console.log(ans);

// after pass the value of x y ; the value will same , no change there; 
// bz primitive type data only pass the value not the reference ; 
console.log("after pass the value of x y ", x, y);

function totalExp(person1, person2) {

    person1.exp = 0; 
    person2.exp = 30000; 
    const totalValue = person1.exp + person2.exp;
    return totalValue;
}

// what if it was an object; 
const jahid = {name: 'manik', exp: 40000};
const rakib = {name: 'rakib', exp: 50000}; 

// before function call ;
console.log("value of exp before function call ", jahid.exp, rakib.exp);
const ansValue = totalExp(jahid, rakib); 

// after function call ;
console.log("value of exp after function call ", jahid.exp, rakib.exp);
// why there changed? bz in non- primitive value it will pass the ref; 
