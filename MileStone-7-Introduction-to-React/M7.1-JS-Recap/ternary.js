// 
const isActive = true; 

const greenUser = () => console.log("green user");
const userHide = () => console.log("user hide");

// using ternary call the function 
isActive ? greenUser() : userHide(); 

// what if i just want if it will true just call greenUser i mean no else condition ; 
isActive && greenUser(); 

isActive || greenUser(); 
// if is active value will false ; then it will works ; 