// nested object ;
const employee = {
  name: "Jahid Hasan",
  id: "222-115-116",
  family: {
    title: "hasan",
    mother: {
      motherName: "justna begum",
      age: "50",
    },
  },
  1: "express", // there 1 as key
  "dept-name": "cse", // dept-name key there have a special char '-' generate error ;
};

// access motherName
console.log(employee.family.mother.motherName);
// access title
console.log(employee.family.title);

// what if if there have no data in mother object and i want ot access mother name ; it will generate an error
// so what is the solution
console.log(employee.family.mother?.motherName); // for using ? it will not give error but return undefine ;
