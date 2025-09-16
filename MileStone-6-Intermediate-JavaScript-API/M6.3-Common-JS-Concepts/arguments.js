// 
function add(num1, num2) {
    console.log(num1, num2);
    // but there is and powerful thing that can take all the arguments ; 
    console.log(arguments);
    // what is this ; its and array like object ; so you cant use like array ; 
    // but what we can to do : spread the array like object and take this in a array ; 
    // this is how it we get a new array ; and do all the operation as array; 
    const value = [...arguments]; 

    console.log(value);  
}

add(12, 4, 3, 23, 44, 34, 34, ); 
// here i pass to many arguments over needed; 
// after the 2nd value it will ignore all the value ; 