import React from "react";
import "../../styles/home.css";
import Signup from "../component/signup";

export const Home = () => {
  return (
    <div className="d-flex justify-content-center text-center mt-5 align-items-center">
      <p className="d-flex justify-content-center">
        <Signup />
      </p>
    </div>
  );
};
