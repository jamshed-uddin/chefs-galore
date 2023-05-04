import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const SingleRecipe = ({ recipe }) => {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(true);
    toast("Recipe added to your favourites.");
  };
  return (
    <>
      <div className="border-2 rounded-lg p-3">
        <div className="flex items-center">
          <p className="text-2xl font-bold">{recipe?.recipe_name}</p>
          <p className="ml-auto cursor-pointer" onClick={handleLiked}>
            <FontAwesomeIcon
              className={`text-xl ${liked && "text-black"}`}
              icon={faHeart}
            />
          </p>
        </div>
        <span className="block h-[2px] w-36 mt-2  bg-white"></span>
        <div className="py-3 space-y-2  flex flex-col">
          <p className="text-xl font-bold">Ingredients</p>
          <ul className="text-lg font-light">
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>- {ingredient}</li>
            ))}
          </ul>
          <p className="text-xl font-bold">Cooking method</p>
          <p className="text-lg font-light">{recipe?.cooking_method}</p>
          <p className="text-xl font-bold mt-auto">Ratings: {recipe?.rating}</p>
        </div>
      </div>
    </>
  );
};

export default SingleRecipe;
