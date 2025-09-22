console.log("one");
console.log("two");
printThree();
console.log("four");
console.log("five");
function printThree() {
  console.log("three");
}
// print all the thing sync but if we fetch a api it will async

console.log("one");
console.log("two");
printThree();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("four");
console.log("five");
function printThree() {
  console.log("three");
}

// look at here if it will async after print three it will print the data form api ;
// but here after print all one to five then the data print from api ;

// we can sync fetch ; that is diff thing ;

// now to to async;

console.log("one");
console.log("two");
// here all the thing print but three will print after 5s -> 5000ms ;
setTimeout(printThree, 5000);
console.log("four");
console.log("five");
function printThree() {
  console.log("three");
}
