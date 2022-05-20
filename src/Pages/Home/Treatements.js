import React from "react";
import treatement from "../../assets/images/treatment.png";

const Treatements = () => {
  return (
    <div>
      <div className="card  lg:card-side bg-base-100 shadow-xl">
        <figure className="px-10">
          <img src={treatement} alt="Album" />
        </figure>
        <div className="card-body content-center">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Treatements;
