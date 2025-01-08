import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-neutral-600 h-[50px] w-full flex text-white justify-around items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex flex-row list-none justify-between w-[50%] ">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/restraunt"}>
          <li>Resturant</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact Us</li>
        </Link>
      </div>
      <div className="flex list-none gap-6">
        <Link to={"/login"}>
          <li>Login</li>
        </Link>
        <Link to={"/signup"}>
          <li>SignUp</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
