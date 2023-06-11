import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from './Testimonial/Testimonial';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
