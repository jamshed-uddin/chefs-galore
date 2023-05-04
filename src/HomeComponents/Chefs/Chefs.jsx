import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  console.log(chefs);

  useEffect(() => {
    fetch(
      "https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className=" bg-[#FE3A4A] text-white py-12">
      <h1 className="text-3xl pb-10 lg:text-6xl font-bold text-center">
        Our best chefs to serve you.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-16  lg:px-32">
        {chefs.map((chef) => (
          <ChefCard chef={chef} key={chef.id}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
