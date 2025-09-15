const employee = {
  name: "jahid hasan",
  salary: 1500,
  designation: "software engineer ",
  experience: 1,
};

// if we seal the object we cant delete or add new valuer , but we can modify the value ;

// seal 
Object.seal(employee)

// delete
delete employee.experience;

// add new
employee.location = "Sylhet";

// modify
employee.salary += 2000;
console.log(employee);