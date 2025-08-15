// find the max of three number
let rana = 93;
let rakib = 89;
let ruhi = 59;

// without using function
if(rana > rakib && rana > ruhi){
    console.log('ruhi get the apple');
}
else if(rakib > rana && rakib > ruhi){
    console.log('Rakib will get the apple');
}
else{
    console.log('ruhi wil get the apple');
    
}

// with function 
function getMax(rana, rakib, ruhi) {
    if(rana > rakib && rana > ruhi){
    return rana;
}
else if(rakib > rana && rakib > ruhi){
    return rakib;
}
else{
    return ruhi;
    
}
}

console.log(getMax(rana, ruhi, rakib));
