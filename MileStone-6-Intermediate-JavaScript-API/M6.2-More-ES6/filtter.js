// it can conditional return like map ; 

const friends = ['rahul', 'rafsan', 'nib', 'babul']; 
// here is array ; if i want to just return which name length more then 4 ; how do i write it ; 
const goodName = friends.filter(name => name.length >= 4);
console.log(goodName);

const numbers = [21, 40, 80, 33, 53, 25];
const consider = numbers.filter(num => num >= 20 && num < 33);
const afterConsider = consider.map(num => {
    const need = 33 - num;
    const finalNumber = need + num;
    console.log(finalNumber);
    return need;
})

console.log(afterConsider);


