import "./App.css";
import Bowler from "./bowler";
import Counter from "./counter";

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
