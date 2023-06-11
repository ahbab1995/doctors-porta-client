import React from "react";
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
  return (
    <section style={{background:`URL(${appointment})`}} className="text-center" >
      <h4 className="text-xl text-primary ">ContactUs</h4>
      <h2 className="text-4xl">Stay connected with us</h2>
      <div>
       <form>
        <input type="email" placeholder="Email"></input> <br/>
        <input type="terxt" placeholder="Subject"></input> <br/>
        <button className="btn bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white">Submit</button>
       </form>
      </div>
    </section>
  );
};

export default ContactUs;
