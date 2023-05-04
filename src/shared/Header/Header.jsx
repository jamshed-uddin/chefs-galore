import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "./Header.css";

import { Link, NavLink } from "react-router-dom";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-between h-16 text-white  items-center px-6 lg:px-16 py-3 lg:py-0 shadow-lg fixed top-0 right-0 left-0 bg-[#FE3A4A] z-40">
      <div>
        <Link to={"/"}>
          {" "}
          <h1 className="text-4xl font-bold">Chefs Galore</h1>
        </Link>
      </div>

      {/*  nav button  section starts*/}
      <div
        className={` block lg:flex lg:w-[65%] justify-end items-center px-32  lg:px-0 py-32 lg:py-0  z-40 lg:bg-inherit  lg:static transition-all duration-700  ${
          isOpen ? "absolute top-0 right-0" : "absolute top-0 -right-96"
        } bg-gray-500 text-white`}
      >
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-14 font-semibold nav-links ">
          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            to={"chefs"}
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
          >
            Chefs
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={`link px-2 py-1 lg:py-0 ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to={"/blogs"}
          >
            Blogs
          </NavLink>
        </div>

        <div className="mt-4 lg:mt-0  ml-3 lg:ml-10 " title={user?.email}>
          <Link
            to={`${user ? "/profile" : "/login"}`}
            className="cursor-pointer"
          >
            <FontAwesomeIcon className="text-4xl" icon={faCircleUser} />
          </Link>
        </div>
      </div>
      {/*  nav button  section ends*/}

      <div className="lg:hidden z-50 text-3xl cursor-pointer">
        {isOpen ? (
          <FontAwesomeIcon onClick={() => setOpen(false)} icon={faXmark} />
        ) : (
          <FontAwesomeIcon onClick={() => setOpen(true)} icon={faBars} />
        )}
      </div>
    </div>
  );
};

export default Header;
