import { format } from "date-fns";
import React, { useState, useEffect } from "react";

import Service from "./Service";
import BookingModel from "./BookingModel";

const AvailableServices = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(selected, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && <BookingModel treatment={treatment}></BookingModel>}
    </div>
  );
};

export default AvailableServices;
