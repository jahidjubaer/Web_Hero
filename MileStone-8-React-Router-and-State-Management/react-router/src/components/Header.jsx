import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className="">
      <Link to="/home">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/project">Project</Link>
      <Link to="/services">Services</Link>
      <NavLink to="/user"> User</NavLink>
      <NavLink to="/user2">User2</NavLink>
      <NavLink to = "/posts">Posts</NavLink>
    </div>
  );
};

export default Header;
