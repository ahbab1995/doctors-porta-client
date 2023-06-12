import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}            
            ></AppointmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;