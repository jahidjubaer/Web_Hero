// normally we use dot notation for object ;
const employee = {
    name: 'Jahid Hasan',
    id: '222-115-116',
    1: 'express', // there 1 as key 
    "dept-name": 'cse', // dept-name key there have a special char '-' generate error ;
}

// if we want to dot notation for 1 and dept-name it will give an error ; so what we can do ? bracket notation
console.log(employee[1]);
console.log(employee['dept-name']);

// we use bracket notation in for in loop for object 
for(keys in employee){
    console.log(employee[keys]);
}



