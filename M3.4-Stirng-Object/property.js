const subject = {
    name : 'bangla',
    teacher : 'Fahim sir',
    duration : 4,
    exam : {
        time : 10,
        date : 'july 23',
        topic : ['math', 'math3', 'math3'],
    },
    'fav book': ['bangla', 'english', 'math'] //this you cant access with dot notation 
}

// dot notation 
console.log(subject);
console.log(subject.name);

// bracket notation 
console.log(subject['teacher']);

// fav book ;
console.log(subject['fav book']);

// you can also keep in variable and then just the variable 
let book = 'fav book';
console.log(subject[book]);