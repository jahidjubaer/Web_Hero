import React, { use } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Navigate } from "react-router";

const PrivetRouters = ({ children }) => {
  // get the user from authContext ;
  const { user, loading } = use(AuthContext);
  console.log(user);

  if (loading) {
    return (
      <div>
        <h1>Loading........</h1>
      </div>
    );
  }

  //   if sign in and there have an user then go the children i mean where you not to go ; or define in router ;
  if (user) {
    return children;
  }
  // but if your not sign in please login first ;
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRouters;
