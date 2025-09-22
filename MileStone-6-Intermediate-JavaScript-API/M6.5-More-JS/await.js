// async way ;
function getData() {
  console.log("one");
  console.log("two");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log("got the data "));
  console.log("four");
  console.log("five");
}

getData();
console.log("-----------------------------------");

// lets made it in sync way ;
// function should me async function
async function getData2() {
  console.log("one");
  console.log("two");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data[0]);

  console.log("four");
  console.log("five");
}

getData2();

// if fetch url dose not valid ; we can use try and catch ; 
const dataLoad3 = async () => {
  console.log(1);
  console.log(2);

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data.length);
  } catch (error) {
    console.log("data got error 404");
  }

  console.log(3);
};

dataLoad3();
