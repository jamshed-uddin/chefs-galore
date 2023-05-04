import {
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, picture_url, bio } = chef;
  const [showBtn, setShowBtn] = useState(true);
  return (
    <Link to={`../chef/${id}`}>
      <div
        onMouseEnter={() => setShowBtn(false)}
        onMouseLeave={() => setShowBtn(true)}
        className=" relative rounded-xl transition duration-500  hover:-translate-y-1 cursor-pointer drop-shadow-xl  lg:w-64 mx-auto"
      >
        <img
          className="object-cover rounded-xl"
          src={picture_url}
          alt={name}
          loading="lazy"
        />

        <div className="flex flex-col bg-black bg-opacity-80 text-white p-3 absolute inset-0 rounded-xl transition duration-500 opacity-0 hover:opacity-100">
          <h1 className="text-xl font-bold mb-6">{name}</h1>
          <p>{bio.slice(0, 150)} . . .</p>
          <p className="mt-auto text-md font-semibold py-4">
            See Recipes{"   "} <FontAwesomeIcon icon={faArrowRightLong} />
          </p>
        </div>
        <p
          className={` ${!showBtn ? "lg:hidden" : "lg:block"} 
          absolute bottom-4 left-2 bg-[#FE3A4A] px-2  mt-auto text-md text-white font-semibold py-2 rounded-xl transition-all duration-700`}
        >
          See Recipes{"   "} <FontAwesomeIcon icon={faArrowRightLong} />
        </p>
      </div>
    </Link>
  );
};

export default ChefCard;
