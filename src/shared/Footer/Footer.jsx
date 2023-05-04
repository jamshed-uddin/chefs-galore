import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 px-10">
        <div className=" mx-auto  grid grid-cols-2 lg:grid-cols-3">
          <div className="mx-auto">
            <h1 className="text-2xl font-bold">Chefs Galore</h1>
            <Link
              to={"/chefs"}
              className="mr-4 block hover:text-gray-400 transition duration-300 cursor-pointer"
            >
              Chefs
            </Link>
            <Link
              to={"./blogs"}
              className="mr-4 block hover:text-gray-400 transition duration-300 cursor-pointer"
            >
              Blogs
            </Link>
            <p className="mr-4 hover:text-gray-400 transition duration-300 cursor-pointer">
              FAQ
            </p>
            <p className="mr-4 hover:text-gray-400 transition duration-300 cursor-pointer">
              Contact Us
            </p>
          </div>
          <div className="mx-auto">
            <h1 className="text-xl font-bold">Quick links</h1>

            <p className="mr-4 hover:text-gray-400 transition duration-300 cursor-pointer">
              Menu
            </p>
            <p className="mr-4 hover:text-gray-400 transition duration-300 cursor-pointer">
              Reservation
            </p>
            <p className="mr-4 hover:text-gray-400 transition duration-300 cursor-pointer">
              Delivery
            </p>
            <p className="mr-4 hover:text-gray-400 transition duration-300 cursor-pointer">
              Reviews
            </p>
          </div>
          <div className="mx-auto lg:pl-0 pl-[70px] lg:pt-0 pt-5">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p>1234 Main Street, Anytown, USA 12345</p>
            <p>Phone: (555) 555-5555</p>
            <p>Email: info@chefsgalore.com</p>
          </div>
        </div>
        <div className=" mx-auto text-center text-gray-400 mt-8">
          <p>&copy; 2023 Chefs Galore. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
