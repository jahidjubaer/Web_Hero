import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import AuthProvider from "./context/authContext/AuthProvider.jsx";
import PrivetRouters from "./routers/PrivetRouters.jsx";
import Products from "./pages/products/Products.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      // privet router ;
      {
        path: "/products",
        element: (
          <PrivetRouters>
            <Products></Products>
          </PrivetRouters>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRouters>
            <Profile></Profile>
          </PrivetRouters>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRouters>
            <Dashboard></Dashboard>
          </PrivetRouters>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* auth provider ; */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
