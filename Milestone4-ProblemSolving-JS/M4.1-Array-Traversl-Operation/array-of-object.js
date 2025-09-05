const number = [3, 5, 3, 5, 2, 6] // that is an pretty simple array right ?
const friends = [{}, {}, {}] // what about that ? how it look likes ?

// lest explore 
// array of object 
const employees = [
    {name: 'jahid hasan', deg: 'Fontend Developer', salary: 25000},
    {name: 'Ridul', deg: 'Designer', salary: 3500},
    {name: 'Ruhit', deg: 'Backned', salary: 45000}
];

// how can it access this objet ? simple like an array 
console.log(employees); // it shows you the whole object 
console.log(employees[1]) // first employee details 

// but what if you want to access name or deg
console.log(employees[2].name)// it will show the name of third employee

// access with loop 
for(emp of employees){
    console.log(emp.name, emp.salary);
}
// you can access many more ways 
