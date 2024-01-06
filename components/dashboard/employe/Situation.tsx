"use client"
import cludeSunImggreen from "../../../public/picture/CloudSungreen.svg"
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const Situation = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


    return ( 
        <>
          <div className="w-full py-3 rounded-lg from-[15%] to-[85%] flex bg-gradient-to-r from-[#99F2C8] to-[#1F4037] ">
                  <div className="w-2/12 flex border-e-[1px] border-dashed border-[#424242] items-center justify-center flex-col">
                    <Image
                    src={cludeSunImggreen}
                    alt="cludesun"
                    />
                    <p className="font-medium text-sm text-[#1F4037]">Partly Cloudy</p>
                  </div>

                  <div className="w-10/12 flex justify-between">


                  <div className="flex  flex-col justify-center items-center ms-3">
                    <p className="font-medium text-sm  text-[#1F4037]">21 September 2022</p>
                    <p className="font-bold text-[32px] text-[#1F4037]">Today</p>
                  </div>
        
        
                <div className=" flex gap-2 pe-3">
 
                  <div className="flex  flex-col justify-center items-end ms-3 me-2">
                    <p className="font-medium text-sm text-[#99F2C8]">Present-on time</p>
                    <p className="font-bold text-[32px] text-[#99F2C8] ">70</p>
                  </div>
                  <div className="flex  flex-col justify-center items-end ms-3 me-2">
                    <p className="font-medium text-sm text-[#99F2C8]">Late</p>
                    <p className="font-bold text-[32px] text-[#99F2C8]">20</p>
                  </div>
                  <div className="flex  flex-col justify-center items-end ms-3 me-2">
                    <p className="font-medium text-sm text-[#99F2C8]">Absent</p>
                    <p className="font-bold text-[32px] text-[#99F2C8]">7</p>
                  </div>
                  <div className="flex  flex-col justify-center items-end ms-3 me-2">
                    <p className="font-medium text-sm text-[#99F2C8]">Leave</p>
                    <p className="font-bold text-[32px] text-[#99F2C8]">3</p>
                  </div>
                  
                </div>

                </div>


                </div>

        </>
     );
}
 
export default Situation;