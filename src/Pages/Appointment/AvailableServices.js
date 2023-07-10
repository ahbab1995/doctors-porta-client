import { format } from "date-fns";
import React, { useState, useEffect } from "react";

import Service from "./Service";
import BookingModel from "./BookingModel";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableServices = ({ selected }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(selected, "PP");

  const { isLoading, error, data:services,refetch } = useQuery(["available",formatedDate], () =>
    fetch(
      `http://localhost:5000/available?date=${format(selected, "PP")}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${format(selected, "PP")}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // const formatedDate = format(selected, "PP")
  // }, [format(selected, "PP")]);

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {formatedDate}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModel
          setTreatment={setTreatment}
          selected={selected}
          treatment={treatment}
          refetch={refetch}
        ></BookingModel>
      )}
    </div>
  );
};

export default AvailableServices;
