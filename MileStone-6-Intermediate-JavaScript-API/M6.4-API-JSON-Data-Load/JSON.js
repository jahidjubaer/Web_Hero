// create a object ; 
const person = {
    name : "jahid Hasan",
    age : 21,
    isRich : false,
    isStudent: true, 
    University: 'MetroPolitan University', 
    city: "sylhet",
    language: "bangla",
}

// we can convert this object into json. how ; 
const convertJSON = JSON.stringify(person);
console.log(convertJSON);

// we can also do reverse i mean , json to object; 
const convertObject = JSON.parse(convertJSON);
console.log(convertObject);
