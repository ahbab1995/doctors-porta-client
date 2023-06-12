import React from "react";

const Service = ({ booking }) => {
  const { name, price, slots } = booking;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-700">Try Another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-end">
          <button disabled={slots.length === 0} className="btn bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
