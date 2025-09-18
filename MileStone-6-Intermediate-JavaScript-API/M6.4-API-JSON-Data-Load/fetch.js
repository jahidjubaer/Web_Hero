// fetch -> request to the server for data ;
fetch("https://jsonplaceholder.typicode.com/posts") // it will return a promise ;
  .then((response) => response.json()) // then return a response ; then we converted this response into json -> it will return a promise ; 
  .then((data) => console.log(data)); // if there have data it will give those data and we can console this data ; 
