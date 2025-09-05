let rana = 56;
let rakib = 70;

// without function 
if(rana > rakib){
    console.log('rana will get the apple');
}
else{
    console.log('rakib will get the apple');
}

// write in a function 
function getMax(num1, num2) {
    if(num1 > num2) return num1;
    return num2;
}

console.log(getMax(rakib, rana));
