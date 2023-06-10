import React from "react";

const InfoCard = ({card}) => {
    const {name,description,icon,bgClass} = card;
  return (
    <div>
      <div className={`card text-white p-6 md:card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure>
          <img
            src={icon}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="leading-4">{description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
