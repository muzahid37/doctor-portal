import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title m-auto text-primary ">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span>No slots avoilable</span>
          )}
        </p>
        <p>{slots.length} is available</p>
        <div className="card-actions justify-center">
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
           className="btn btn-secondary text-white uppercase"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;