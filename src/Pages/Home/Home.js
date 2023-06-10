import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
import MakeAppointment from './MakeAppointment/MakeAppointment';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;
