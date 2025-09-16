/*
in js this is 8 type of false value ; without them all the value is true in js ; 
1.false
2.0 (zero)
3.-0 (negative zero)
4.0n (BigInt zero)
5."" (empty string)
6.null
7.undefined
8.NaN
*/ 

let number = 0; 
number = -0;
number = "";
number = null; 
number = undefined; 
number = NaN; 
number = false; 
//  all the value is false value; 
number = " " // look here empty string with white space this a true value ; 
number = "Jahid";
number = []; 
number = {}; 
number = true ; 
number = 19; 
// here all the value is true; 

if(number){
    console.log(number, "is a truthy");
}
else{
    console.log("number is falsy");
}

// what is i want to false value in if block; we can use ! ; 
// ! -> logical not ; 
if(!number){
    console.log("false value form if block");
}

// capture all the value to boolean ; 
if(!!number === true){
    console.log('true value');
    
}