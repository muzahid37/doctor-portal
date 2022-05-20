
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import{useQuery}  from 'react-query'

const AvailableAppoinment = ({date}) => {
    // console.log(date)
    const formatetDate=format(date,'PP');
    // const [services ,setServices]=useState([]);
    const [treatment, setTreatment]=useState(null);
    // useEffect(
    //     ()=>{
    //         fetch(`http://localhost:5000/available?date=${formatetDate}`)
    //         .then(res=>res.json())
    //         .then(data=>setServices(data));
    //     },[formatetDate])
    const { isLoading,  data:services,refetch } = useQuery(['available', formatetDate], () =>
    fetch(`http://localhost:5000/available?date=${formatetDate}`)
       .then(res=>res.json()
    )
  )
  if(isLoading){
      return<button className='btn loading'></button>
  }
    return (
        <div>
           <p className='text-xl text-secondary text-center mt-2'> Available Appointments on{format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service=><Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment&& <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;