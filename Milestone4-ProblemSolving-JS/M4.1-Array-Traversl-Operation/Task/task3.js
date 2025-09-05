// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var str = ''

for(const item of numbers){
    str += item;
}

console.log(str);