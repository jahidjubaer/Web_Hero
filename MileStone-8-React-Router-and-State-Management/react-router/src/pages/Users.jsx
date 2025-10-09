import React from "react";
import { useLoaderData } from "react-router";
import User from "../components/User";

const Users = () => {
  const user = useLoaderData();
  // console.log(user);

  return (
    <div>
      {user.map((userdata) => (
        <User userdata={userdata}></User>
      ))}
    </div>
  );
};

export default Users;
