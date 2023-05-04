import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner h-screen py-12 px-4 md:px-12 flex justify-center items-center text-center">
      <div className="">
        <h1 className="text-4xl font-bold text-white mb-4">
          Delicious cuisine for every taste
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Experience the best flavors from around the world.
        </p>
        <Link
          to={"/chefs"}
          className="btn btn-wide bg-[#FE3A4A] hover:bg-red-500"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Banner;
