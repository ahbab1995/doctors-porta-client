import { format } from "date-fns";
import React, { useState,useEffect } from "react";


const AvailableServices = ({selected}) => {
    const [services,setServices] = useState([])
    useEffect(() => {
       fetch('services.json')
       .then(res=>res.json())
       .then(data =>setServices(data))
    }, []);
  return (
    <div>
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selected, "PP")}
      </p>
    </div>
  );
};

export default AvailableServices;
