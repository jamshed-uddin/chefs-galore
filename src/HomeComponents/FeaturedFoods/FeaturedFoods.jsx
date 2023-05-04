import React, { useEffect, useState } from "react";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(
      "https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/foods"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className=" bg-[#FE3A4A] text-white py-12">
      <h1 className="text-center text-2xl lg:text-5xl font-bold pb-8">
        Our most loved foods
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-16 lg:px-32">
        {foods.map((food) => (
          <div className="border-2 border-white rounded-xl" key={food.id}>
            <div>
              <img
                className="rounded-t-xl"
                src={food?.food_img_url}
                alt={food?.food_name}
                loading="lazy"
              />
            </div>
            <div className="px-4 py-3">
              <h1 className="text-2xl font-semibold pb-2">{food?.food_name}</h1>
              <p className="text-lg font-light">{food?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
