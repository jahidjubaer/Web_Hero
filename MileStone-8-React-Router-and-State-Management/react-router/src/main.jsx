import { StrictMode, Suspense } from "react";
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
import User from "./pages/Users";
import User2 from "./pages/User2";
import UserData from "./components/UserData";
import Post from "./pages/Post";
import PostDisplay from "./components/PostDisplay";

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

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
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

      // data to load using loader ;
      {
        path: "user",
        Component: User,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      // data loading with suspense ;
      {
        path: "user2",
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <User2 userPromise={userPromise}></User2>
          </Suspense>
        ),
      },

      // route in dyanamic way
      {
        path: "user/:userId",
        Component: UserData,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: "/posts",
        Component: Post,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path : "posts/:postsId", 
        Component: PostDisplay, 
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`)
      }
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
