/*
*we create a new promise ; 
* call tow function resolve and reject and then with this function as parameter we write a function ; 
return with resolve and geData store a promise ; 
*/
const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);

  if (num > 5) {
    return resolve({ num: num });
  } else {
    return reject({ error: "it will give an error" });
  }
});
// get data store the promise and then. we can get console the promise or data .
// if it will return reject it will go to the catch and print the error ;

getData
  .then((data) => console.log(data))
  .catch((error) => console.log(error.error));
