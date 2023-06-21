import { format } from "date-fns";
import React from "react";

const BookingModel = ({selected, treatment,setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault()
    const slot = e.target.slot.value
    console.log(slot)
    setTreatment(null)
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
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
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
