import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      style={{ background: `URL(${appointment})` }}
      className="text-center py-16"
    >
      <h4 className="text-xl text-primary ">ContactUs</h4>
      <h2 className="text-4xl text-white mb-4">Stay connected with us</h2>
      <div>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full max-w-xs my-4"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-primary w-full max-w-xs my-4"
          />{" "}
          <br />
          <textarea
            className="textarea textarea-primary my-4"
            placeholder="Your message"
          ></textarea>
          <br />
          <button className="btn bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
