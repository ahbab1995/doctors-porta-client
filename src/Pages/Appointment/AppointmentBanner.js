import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { format } from "date-fns";
const AppointmentBanner = ({ selected, setSelected }) => {

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p className="py-5">You picked {format(selected, "PP")}.</p>;
  }
  
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="Chair img"
          className="sm:w-72  lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div className="mr-6 sm:w-full">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
