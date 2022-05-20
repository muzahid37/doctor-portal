import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {  toast } from 'react-toastify';


const BookingModal = ({date, treatment,setTreatment,refetch }) => {
  
  const [user] = useAuthState(auth);
    // console.log(date);
  const {_id, name, slots } = treatment;
  // console.log(_id, name, slots)
 const formatedDate=format(date, 'PP');
  const onSubmit= event=>{
      event.preventDefault();
      const slot=event.target.slot.value;
      const booking={
        treatmentId:_id,
        treatment:name,
        date:formatedDate,
        slot,
        patient:user.email,
        patientName:user.name,
        phone:event.target.phone.value
      }
      // console.log(booking);
      fetch('http://localhost:5000/booking',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
       if(data.success){
         toast(`Appoinent is set ${formatedDate}, at ${slot}`)
       }
       else{
        toast.error(`You allready Appoinent on ${data.booking?.date} at ${data.booking?.slot}`)
       }
       refetch();
        setTreatment(null);
      })
    //   fetch('http://localhost:5000/booking', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(booking)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setTreatment(null);
    //     });
      

  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 class="font-bold text-lg text-center">Booking for: {name}</h3>
          <form onSubmit={onSubmit}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
           
            
          >
            <input className=" " type="text" disabled value={format(date, 'PP')}class="input w-full max-w-xs" />
            <select name="slot" class="select select-bordered w-full max-w-xs">
             {
              slots.map(slot=><option value={slot}>{slot}</option>)
            }
              
            </select>
            <input
              className=" "
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              placeholder="Your name"
              class="input w-full max-w-xs"
            />
            <input
              className=" "
              type="email"
              name="email"
              disabled
              value={user?.email}
              placeholder="Email address"
              class="input w-full max-w-xs"
            />
            <input
              className=" "
              type="text"
              name="phone"
              placeholder="Your number"

              class="input w-full max-w-xs"
            />
           

            <input
              className=""
              type="submit"
              value="submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
