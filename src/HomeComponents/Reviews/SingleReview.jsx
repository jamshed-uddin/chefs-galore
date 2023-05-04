import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Reviews.css";

const SingleReview = ({ reviewInfo }) => {
  const { id, reviewer_name, review, rating } = reviewInfo;
  return (
    <div className="review-container bg-white border-2 border-black p-3 rounded-xl">
      <p className="font-light text-lg">
        <sup className="text-lg">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </sup>
        {"  "}
        {review}
        <sup className="text-lg">
          {" "}
          <FontAwesomeIcon icon={faQuoteRight} />
        </sup>
      </p>
      <h1 className="text-right font-semibold">
        -{reviewer_name}{" "}
        <span className="font-normal">
          ({rating}{" "}
          <FontAwesomeIcon className="text-yellow-500" icon={faStar} />)
        </span>
      </h1>
    </div>
  );
};

export default SingleReview;
