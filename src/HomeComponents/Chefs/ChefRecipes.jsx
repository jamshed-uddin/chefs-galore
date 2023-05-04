import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipes = () => {
  const { chefId } = useParams();
  const chefDetail = useLoaderData();
  const [allRecipes, setAllRecipes] = useState([]);
  const [ChefRecipes, setChefRecipes] = useState([]);
  const {
    id,
    name,
    picture_url,
    bio,
    likes,
    num_recipes,
    years_of_experience,
  } = chefDetail;

  console.log(chefDetail);
  console.log(allRecipes);
  console.log(ChefRecipes);
  useEffect(() => {
    fetch(
      "https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/recipes"
    )
      .then((res) => res.json())
      .then((data) => setAllRecipes(data));
  }, []);
  useEffect(() => {
    const recipes = allRecipes.filter(
      (singleRecipe) => singleRecipe.chef_id === parseInt(chefId)
    );
    setChefRecipes(recipes);
  }, [allRecipes]);
  return (
    <div className="bg-[#FE3A4A] text-white px-32 ">
      <h1>hello recipes:{chefId}</h1>
      <h1>all recipes:{ChefRecipes.length}</h1>
      <div className="flex flex-col lg:flex-row gap-12 mx-auto">
        <div className="">
          <img
            className="w-72 rounded-lg lg:mx-0 mx-auto"
            src={picture_url}
            alt=""
          />
        </div>
        <div className="lg:py-10 lg:w-[60%] lg:mx-auto flex flex-col">
          <div>
            <h1 className="text-5xl font-bold pb-3">{name}</h1>
            <p className="font-light text-xl">{bio}</p>
          </div>
          <div className="mt-auto lg:pt-0 pt-10 font-light text-lg">
            <p>Recipes: {num_recipes}</p>
            <p>Experience: {years_of_experience} years</p>
            <p>
              <FontAwesomeIcon icon={faHeart} /> {likes}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 lg:pt-14">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Featured recipes from {name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-8 ">
          {ChefRecipes.map((recipe) => (
            <div key={recipe?.id} className="border-2 rounded-lg p-3">
              <p className="text-2xl font-bold">{recipe?.recipe_name}</p>
              <span className="block h-[2px] w-36 mt-2  bg-white"></span>
              <div className="py-3 space-y-2  flex flex-col">
                <p className="text-xl font-bold">Ingredients</p>
                <ul className="text-lg font-light">
                  {recipe?.ingredients?.map((ingredient) => (
                    <li>- {ingredient}</li>
                  ))}
                </ul>
                <p className="text-xl font-bold">Cooking method</p>
                <p className="text-lg font-light">{recipe?.cooking_method}</p>
                <p className="text-xl font-bold mt-auto">
                  Ratings: {recipe?.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
