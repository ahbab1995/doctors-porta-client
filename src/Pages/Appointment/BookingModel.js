import { format } from "date-fns";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import {  toast } from 'react-toastify';

const BookingModel = ({selected, treatment,setTreatment,refetch }) => {
  const {_id, name, slots } = treatment;

  const [user, loading] = useAuthState(auth);

 

  const handleBooking = (e) => {
    e.preventDefault()
    const slot = e.target.slot.value

    const formatdate = format(selected, "PP");
   
    const booking = {
      treatmentId : _id,
      treatment : name,
      date:format(selected, "PP"),
      slot,
      patient:user.email,
      patientName:user.displayName,
      phonenumber:e.target.phone.value,
    }

    fetch('http://localhost:5000/booking', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.success){
        toast.success(`Appiontment is set, ${formatdate} on ${slot}`)
      }
      else{
        toast.error(`Already have an appiontment on, ${data.booking?.date} on ${data.booking?.slot}`)
      }
      setTreatment(null)
      refetch()
    })
    
  }
   
  return (
    <div>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-secondary">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={format(selected, "PP")}
              disabled
              className="input w-full input-bordered "
            />
            <select
              name="slot"
              className="select select-bordered w-full"
            >
              {
                slots.map((slot,i) => <option key={i} value={slot}>{slot}</option>)
              }
            </select>
            <input
              name="name"
              type="text"
              disabled
             value={user?.displayName || ''}
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email || ''}
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
