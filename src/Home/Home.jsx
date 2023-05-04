import React from "react";
import Banner from "../HomeComponents/Banner/Banner";
import Chefs from "../HomeComponents/Chefs/Chefs";
import FeaturedFoods from "../HomeComponents/FeaturedFoods/FeaturedFoods";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Chefs />
      <FeaturedFoods />
    </div>
  );
};

export default Home;
