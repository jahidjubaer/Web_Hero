import React, { use } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRouters = ({ children }) => {
  // get the user from authContext ;
  const { user, loading } = use(AuthContext);
  console.log(user);

  // current location ;
  const location = useLocation();
  console.log(location);

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
  //   it will give the location form where its try to login ;
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivetRouters;
