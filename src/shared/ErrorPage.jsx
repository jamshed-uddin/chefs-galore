import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center">
      <div>
        <div className="pt-10">
          <Player
            autoplay
            loop
            src={
              "https://assets2.lottiefiles.com/packages/lf20_dvvuUunK9D.json"
            }
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
        <div>
          <h1 className="text-xl py-2 font-semibold">
            Something wrong occured!
          </h1>
        </div>
        <div className="py-3">
          <h1 className="text-xl ">Try:</h1>
          <ul className="pl-10 text-lg list-disc">
            <li>Reloading the page.</li>
            <li>Checking the connection.</li>
            <li>Checking the URL.</li>
          </ul>
        </div>
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
