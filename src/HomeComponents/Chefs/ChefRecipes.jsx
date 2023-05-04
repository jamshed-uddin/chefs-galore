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
    <div className="bg-[#FE3A4A] text-white px-32">
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
        <div className="lg:py-10 lg:w-[60%]">
          <h1 className="text-4xl font-semibold pb-3">{name}</h1>
          <p className="">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
