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
    <div className="bg-[#FE3A4A] text-white px-32 h-[300vh]">
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
          <div className="mt-auto font-light text-lg">
            <p>Recipes: {num_recipes}</p>
            <p>Experience: {years_of_experience} years</p>
            <p>
              <FontAwesomeIcon icon={faHeart} /> {likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
