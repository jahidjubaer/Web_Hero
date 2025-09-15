// lets mixed up all the thing; 
const students = [
    {id: '222-115-116', name: 'Rakib', number: 90, },
    {id: '222-115-117', name: 'Shakib', number: 54, },
    {id: '222-115-118', name: 'Ruhan', number: 20, },
    {id: '222-115-119', name: 'Nabib', number: 95, },
]

// lets print the name of student ; 
const studentName = students.map(nam => nam.name);
console.log(studentName);

const goodStudent = students.filter(nam => nam.number >= 80);
console.log(goodStudent);

// if we want only name of good student ; 
console.log(goodStudent.map(nam => nam.name));

// if i want only the first who is good student ; 
console.log(students.find(nam => nam.number >= 80));



