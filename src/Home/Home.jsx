import React from "react";
import Banner from "../HomeComponents/Banner/Banner";
import Chefs from "../HomeComponents/Chefs/Chefs";
import FeaturedFoods from "../HomeComponents/FeaturedFoods/FeaturedFoods";
import Reviews from "../HomeComponents/Reviews/Reviews";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Chefs />
      <FeaturedFoods />
      <Reviews />
    </div>
  );
};

export default Home;
