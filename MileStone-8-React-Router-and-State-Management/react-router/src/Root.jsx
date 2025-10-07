import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        {/* outlet for router  */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
