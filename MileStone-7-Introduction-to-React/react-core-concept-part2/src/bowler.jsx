import { useState } from "react";

export default function Bowler() {
  const [ball, setBall] = useState(0);
  const [over, setOver] = useState(0);
  const [wicket, setWicket] = useState(0);

//   handleBall btn ; 
  const handleBall = () => {
    let updateBall = ball + 1;
    let updateOver = over;
    if (updateBall >= 6) {
      updateOver += 1;
      updateBall = 0;
    }
    setBall(updateBall);
    setOver(updateOver);
  };

//   handle wicket btn; 
  const handleWicket = () => {
    let updateWicket = wicket + 1; 
    setWicket(updateWicket); 
  };


  return (
    <div>
      <h1>Wicket : {wicket}</h1>
      <h2>
        Over: {over}.{ball}
      </h2>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleWicket}>Wicket</button>
      <button>No ball</button>
      <button>Wide</button>
    </div>
  );
}
