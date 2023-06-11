import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
