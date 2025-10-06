import { Menu, X } from "lucide-react";
import React, { useState } from "react";
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: "home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: "info",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
    icon: "briefcase",
  },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
    icon: "layers",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
    icon: "book",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
    icon: "phone",
  },
];

const Navbar = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const menuItem = navItems.map((data) => (
    <a href="">
      <li className="hover:bg-white rounded-sm p-1" >{data.name}</li>
    </a>
  ));
  let MenuClick = clickMenu;

  console.log(clickMenu);

  return (
    <nav className="flex justify-between w-10/12 mx-auto items-center">
      <div className="lg:hidden ">
        {clickMenu || (
          <Menu
            className="  w-10"
            onClick={() => setClickMenu(!MenuClick)}
          ></Menu>
        )}
        {clickMenu && (
          <X className="w-10" onClick={() => setClickMenu(!MenuClick)}></X>
        )}

        <ul
          className={` shadow-lg rounded-xl absolute bg-gray-300 p-2  duration-500 ${
            clickMenu ? "m-0" : "-mt-100 "
          } `}
        >
          {menuItem}
        </ul>
      </div>
      <h1>Jahid Hasan</h1>
      <ul className="hidden lg:flex gap-9 justify-center  ">{menuItem}</ul>
      <button className="btn">Profile</button>
    </nav>
  );
};

export default Navbar;
