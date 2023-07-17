import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyAppointment = () => {

const [appointment, setAppointment] = useState([]);

const [user] = useAuthState(auth);

useEffect(() => {
 if (user) {
  fetch(`http://localhost:5000/booking?patient${user?.email}`,{
    method:'GET',
    headers:{
      'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res=>res.json())
  .then(data=>setAppointment(data))
 }
}, [user]);

    return (
        <div className="overflow-x-auto">
          <h1>Appointment{appointment.length}</h1>
  <table className="table">
    
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {appointment.map(a=><tr>
        <th>1</th>
        <td>{a.patientName}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)}
     
    
    </tbody>
  </table>
</div>
    );
};

export default MyAppointment;