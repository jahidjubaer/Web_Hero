let sentence = 'i am learning web dev';
let reverse = ' ';
for(letter of sentence){
    // idea is very simple , put the letter before reverse string ;
    // like this , learning - l - el - ael - rael - nrael - inrael - ninrael - gninreal;
    reverse = letter + reverse;
}
// reverse using for loop
console.log(reverse);
let rev = ' ';
for(let i = 0; i < sentence.length ; i++){
    rev = sentence[i] + rev ;
}
console.log(rev);

// in shortcut or you can say built in function 
console.log(sentence.split('').reverse().join(''));
