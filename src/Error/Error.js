import React from "react";
import ErrorImg from "../assets/images/error.png";

const Error = () => {
  return (
    <div className="container mt-5">
      <div className="w-100">
        <img className="mx-auto w-100" style={{ height: "800px" }} src={ErrorImg} alt="" />
      </div>
    </div>
  );
};

export default Error;
