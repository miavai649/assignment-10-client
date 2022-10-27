import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorImg from "../assets/images/error.png";

const Error = () => {
  const error = useRouteError()
  return (
    <div className="mt-5">
      {error && <h1 className="text-center text-danger mb-4">{error.statusText || error.message}</h1>}
      <div className="">
        <img className="mx-auto d-block" src={ErrorImg} alt="" />
      </div>
    </div>
  );
};

export default Error;
