import { format } from "date-fns";
import React, { useState, useEffect } from "react";

import Service from "./Service";

const AvailableServices = ({ selected }) => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <p className="text-center text-secondary font-bold my-20">
        Available Appointments on {format(selected, "PP")}
      </p>
      <section className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-6">
        
        {
            bookings.map((booking) => (<Service 
                key={booking._id} 
                booking={booking}>

                </Service>
            ))
        }
      </section>
    </div>
  );
};

export default AvailableServices;
