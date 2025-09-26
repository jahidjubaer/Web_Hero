// import useState ;
import { useState } from "react";

export default function Counter() {
  // use useState ;
  const [count, setCount] = useState(0);

  //   handle add button ;
  const handleBtn = () => {
    // count is predefine value : 0 ;
    // we set the set count ;
    const newCnt = count + 1;
    setCount(newCnt);
  };

  //   css styling ;
  const counterStyle = {
    padding: "20px",
    border: "solid red 2px",
    margin: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={counterStyle}>
      <h4>count : {count} </h4>
      <button onClick={handleBtn}>Add</button>
    </div>
  );
}
