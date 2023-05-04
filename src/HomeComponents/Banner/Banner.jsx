import React from "react";
import "./Banner.css";

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
        <button className="btn btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
