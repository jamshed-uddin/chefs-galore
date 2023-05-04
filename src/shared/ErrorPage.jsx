import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h1 className="font-bold text-4xl py-8">
          Oops!Something wrong occured.
        </h1>
        <div className="text-center">
          <Link to={"/"} className="btn border-0 bg-[#FE3A4A] hover:bg-red-500">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
