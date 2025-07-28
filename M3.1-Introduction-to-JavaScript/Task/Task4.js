// What will be the result of the following codes:
//var a = isNaN(‘11’);
// var a = isNaN(2-10);
// Explain your answers.

var a = isNaN('11');
console.log(a);
// in '' its represent a string but it can converted in number in javascript so answer will false , i mean '11' is  a number . where isNaN() cheek is not a number; 

var a = isNaN(2 - 10);
console.log(a);
// 2 - 10 = -8 , which is a number , so it returns false , i mean -8 is a number. 