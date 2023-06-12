import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableServices from './AvailableServices';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}            
            ></AppointmentBanner>
            <AvailableServices selected={selected}></AvailableServices>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;