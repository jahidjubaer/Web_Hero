import "./App.css";
import Navbar from "./components/navbar/Navbar";

import Pricing from "./components/pricing/pricing";

const pricingPromise = fetch("./pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Pricing pricingPromise={pricingPromise}></Pricing>
     
    </>
  );
}

export default App;
