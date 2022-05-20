import React from 'react';
import fluride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from './Service';


const Services = () => {
    const services=[
        {
        _id:1,
        name:"Fluoride Tratmment",
        description:'',
        img:fluride

    },
    {
        _id:2,
        name:"cavity filling",
        description:'',
        img:cavity

    },
    {
        _id:1,
        name:"whitening",
        description:'',
        img:whitening

    },
]
    return (
        <div classNameName='my-28'>
           <div classNameName='text-center text-xl  font-bold'>
           <h3 classNameName=' uppercase text-primary'>Our servises</h3>
            <h3 classNameName='text-4xl'>Service we provide</h3>
           </div>
           <div classNameName='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
               {
                   services.map(service=><Service key={service._id} service={service}s></Service>)
               }
           </div>
            </div>
       
    );
};

export default Services;