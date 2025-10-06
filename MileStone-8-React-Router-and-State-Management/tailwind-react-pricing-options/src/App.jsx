import axios from "axios";
import "./App.css";
import Marks from "./components/marks/Marks";
import Navbar from "./components/navbar/Navbar";

import Pricing from "./components/pricing/pricing";
import RunChart from "./components/run-charts/RunChart";

const pricingPromise = fetch("./pricingData.json").then((res) => res.json());
// using axios
const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Pricing pricingPromise={pricingPromise}></Pricing>
      <RunChart></RunChart>
      <Marks marksPromise={marksPromise}></Marks>
    </>
  );
}

export default App;
