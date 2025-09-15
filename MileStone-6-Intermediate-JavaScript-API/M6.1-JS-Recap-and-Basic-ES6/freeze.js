const employee = {
  name: "jahid hasan",
  salary: 1500,
  designation: "software engineer ",
  experience: 1,
};

// delete
delete employee.experience;

// add new
employee.location = "Sylhet";

// modify
employee.salary += 2000;
console.log(employee);

// here we delete, add, and modify but if we freeze the object it will not gonna change

// freeze
Object.freeze(employee);

// delete
delete employee.experience;

// add new
employee.location = "Sylhet";

// modify
employee.salary += 2000;
console.log(employee);
