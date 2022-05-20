import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyApoinment = () => {
    const [appointments, setAppointments]=useState([]);
    const [user]=useAuthState(auth)

    useEffect(()=>{
       if(user){
        fetch(`http://www.localhost.com:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAppointments(data))
       }

    },[user])

    return (
       

        <div>
            <h2>my appointments:{appointments.length}</h2>
        </div>
    );
};

export default MyApoinment;