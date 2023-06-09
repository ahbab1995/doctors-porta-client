import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" lg:w-1/2  rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-gradient-to-r from-secondary to-primary uppercase text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;