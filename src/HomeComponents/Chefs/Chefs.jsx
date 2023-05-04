import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" bg-[#FE3A4A] text-white py-12">
      <h1 className="text-3xl pb-10 lg:text-6xl font-bold text-center">
        Our best chefs to serve you.
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-16  lg:px-32">
          {chefs.map((chef) => (
            <ChefCard chef={chef} key={chef.id}></ChefCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chefs;
