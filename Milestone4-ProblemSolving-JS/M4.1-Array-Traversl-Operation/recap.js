// variable 
let number = 10;
console.log(number);
number = 50;
console.log(number); // let can be change 

const num = 50;
console.log(num); // number will not change 

// there have another variable but we don't use it : var

// variable type : 1. number , 2. string, 3. boolean
let marks = 30; // number
let strMark = 'I am GPA 5. hahah'; // string 
let isPass = true ; // boolean 

// array, object 
// array 
let marksArray = [35, 23, 12, 'Jahid'];
console.log(marksArray);

//object 
let marksObj ={
    bangla : 42,
    teacher : 'Robin',
    english : 523,
    teacher : 'Rashid'
}

console.log(marksObj);
console.log(marksObj.bangla);

// condition 
let price = 500;
if(price <= 1000){
    console.log('i will take it ');
}
else if(price <= 1200){
    console.log('i have to think');
}
else{
    console.log('i will not taking this');
}

// loop
// for-loop
for(let i = 1; i <= 50; i++){
    console.log('hey ki obosta');
}

// while-loop
let pushUp = 0;
while (pushUp < 10) {
    console.log('push up');   
    pushUp++;  
}

