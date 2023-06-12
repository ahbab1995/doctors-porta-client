import { format } from "date-fns";
import React from "react";

const AvailableServices = ({selected}) => {
  return (
    <div>
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selected, "PP")}
      </p>
    </div>
  );
};

export default AvailableServices;
