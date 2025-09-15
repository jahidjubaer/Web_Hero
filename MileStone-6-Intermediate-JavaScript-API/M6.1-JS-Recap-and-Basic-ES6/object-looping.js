const employee = {
  name: "jahid hasan",
  salary: 1500,
  designation: "software engineer ",
  experience: 1,
};

// we can use for in loop ; we get the key of object 
for(const keys in employee){
    console.log(keys);
    const value = employee[keys];
    console.log(value);
}

// we also find the keys first and then for of loop

const keys = Object.keys(employee);
for(const key of keys){
    console.log(employee[key]);
    
}