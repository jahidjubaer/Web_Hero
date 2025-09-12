// es-6 -> ecma stick 6

// what happen if we want to access the number before initialize 
// console.log(number);
// ReferenceError: Cannot access 'number' before initialization

const number = 10 ;
// number = 40; //it will give an error 
// we can't change the value of number ; bz of const variable 

let point = 49;
point = 30;
console.log(point); 
// with using let we can change the value .

// for const here is another thing we can change the value of array and object  ? not really  
// what that mean we can add or remove the value of an array not change the excisting value ;

const friendList = ['rakib', 'shakib'];
friendList.push('ahmed');
console.log(friendList);
// we can add easily and also the inner value of an array ;
friendList[1] = 'ahmed';
console.log(friendList);

// but we can't change the array ;
// friendList = ['rahul', 'rajib'];
// console.log(friendList);

// for an object it will go same thing 
 
 


