const collage = {
    name : 'AAC',
    founder : 'Abu Abbas',
    event : ['21 feb', 'sports', 'running'],
    result : {
        gpa: 'gpa5',
        rank: 'Top 5',
        girls: {
            passed : '50%',
            isA : true,
        }
    }
}

console.log(collage.name);
console.log(collage.result.girls.isA);
console.log(collage);

// delete a property 
delete collage.name;
console.log(collage);

// modify value 
collage.event[2] = 'dancing';
console.log(collage.event);
