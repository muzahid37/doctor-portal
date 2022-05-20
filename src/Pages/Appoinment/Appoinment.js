import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";

const Appoinment = () => {
    
const [date, setDate]=useState(new Date());
  return (
    <div>
        <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
        <AvailableAppoinment date={date}></AvailableAppoinment>
    </div>
  );
};

export default Appoinment;
