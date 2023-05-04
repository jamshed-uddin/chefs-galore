import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(reviews);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://chefs-galore-server-jamsheduddin03-gmailcom.vercel.app/reviews"
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#FE3A4A] py-16 px-16 lg:px-32">
      <h1 className="text-white text-5xl font-bold text-center pb-10">
        Words from our loving customer
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-3">
          {reviews.slice(0, 4).map((reviewInfo) => (
            <SingleReview
              key={reviewInfo.id}
              reviewInfo={reviewInfo}
            ></SingleReview>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
