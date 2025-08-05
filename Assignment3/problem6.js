/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

let Salary = startingSalary;
for(let i = 1; i <= experience; i++){
    Salary += (5 / 100) * Salary;
}
console.log(Salary.toFixed(2));
