import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";

const ChefRecipes = () => {
  const { chefId } = useParams();
  const chefDetail = useLoaderData();
  const [allRecipes, setAllRecipes] = useState([]);
  const [ChefRecipes, setChefRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetch(
      "https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/recipes"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllRecipes(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const recipes = allRecipes.filter(
      (singleRecipe) => singleRecipe.chef_id === parseInt(chefId)
    );
    setChefRecipes(recipes);
  }, [allRecipes]);
  return (
    <div className="bg-[#FE3A4A] text-white px-16 py-16 lg:px-32 ">
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12 mx-auto">
          <div className="">
            <img
              className="lg:w-72 rounded-lg lg:mx-0 mx-auto"
              src={picture_url}
              alt={name}
              loading="lazy"
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
      )}
      <div className="pt-10 lg:pt-14">
        <h1 className="text-2xl lg:text-5xl font-bold">
          Featured recipes from {name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-8 ">
          {ChefRecipes.map((recipe) => (
            <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
