import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
const InfoCards = () => {
    return (
        <div className='grid mt-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={clock}></InfoCard>
        </div>
    );
};

export default InfoCards;