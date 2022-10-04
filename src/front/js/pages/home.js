import React from "react";
import "../../styles/home.css";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Home = () => {
  return (
    <div className="text-center mt-5">
     
      <p>
        <img src={rigoImageUrl} />
      </p>

      <h1>Please login or register if you don't have account</h1>
    </div>
  );
};
