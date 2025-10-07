import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Root from "./Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Project from "./pages/Project";

// creating a router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello form react router</h1>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <h1>About Section</h1>,
//   },
//   // component if i use component just i have to write the name of component
//   {
//     path: "app",
//     Component: App,
//   },
// ]);

// here is a nested router ;
const newRouter = createBrowserRouter([
  {
    // root path
    path: "/",
    Component: Root,
    children: [
      // by defualt show home ;
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "home", Component: Home },
      { path: "blog", Component: Blog },
      { path: "profile", Component: Profile },
      { path: "project", Component: Project },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* router provider */}
    {/* <RouterProvider router={router}></RouterProvider> */}
    <RouterProvider router={newRouter}></RouterProvider>
  </StrictMode>
);
