import { Suspense } from "react";
import "./App.css";
import Bowler from "./bowler";
import Counter from "./counter";
import User from "./user";

// fetch the data: we can do it in two way normal fetch and arrow function ;
// we need not to get the data we need promise ;

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// with arrow function ;
// need to call this into App function ; 
// const userData = async() =>  {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

function App() {
  // event handler ;
  function handleClick() {
    alert("button1 clicked");
  }

  // arrow function ;
  const handleClick3 = () => {
    alert("button 3 clicked");
  };
  // parameter pass ;
  const handleClick4 = (num) => {
    const newNumber = num + 4;
    alert(newNumber);
  };
  return (
    <>
      <h1>Vite + React</h1>

      {/* wrap the data loading component under suspense call the promise ;
      fallback working until load the data  */}
      <Suspense fallback={<h2>Loading.....</h2>}>
        <User fetchUser={fetchUser}></User>
      </Suspense>

      <Bowler></Bowler>
      <Counter></Counter>
      {/* 1 way to handle event  */}
      <button onClick={handleClick}>button1</button>
      {/* 2. inline function  */}
      <button
        onClick={function () {
          alert("button2 clicked");
        }}
      >
        button2
      </button>
      {/* 3. with arrow function ; on can also use inline arrow */}
      <button onClick={handleClick3}>button3</button>
      {/* if need to pass parameter ;
      how its work 1. when we click it call the arrow function ; which with empty parameter ; 
      into that there have a expression ; then expression wil exc and pass the parameter ; 
      what will be the problem if ; we call directly handleClick; it will exc before -> click; 
        */}
      <button onClick={() => handleClick4(5)}>button4</button>
    </>
  );
}

export default App;
