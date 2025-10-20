import {  StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./layout/Roots.jsx";
import Home from "./components/Home.jsx";
import Login from "./auth/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      { 
        index: true, Component: Home,
      },

      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
