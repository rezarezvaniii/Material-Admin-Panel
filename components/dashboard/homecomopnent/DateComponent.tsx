"use client"
import cludeSunImg from "../../../public/picture/CloudSun.svg"
import Image from "next/image";
import humanRunning from "../../../public/picture/Group 32.png"
import React, { useState, useEffect } from 'react';

const HomeComponent = () => {

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
          <div className="w-full py-4 rounded-md from-[20%] to-[80%] flex bg-gradient-to-r from-[#FFD370] to-[#E16F7C] ">
                  <div className="w-2/12 max-[600px]:w-3/12 max-[440px]:hidden   flex border-e-[1px] border-dashed border-[#424242] items-center justify-center flex-col">
                    <Image
                    src={cludeSunImg}
                    alt="cludesun"
                    />
                    <p className="font-medium text-sm text-[#424242]">Partly Cloudy</p>
                  </div>

                  <div className="w-10/12 flex justify-between">


                  <div className="flex  flex-col justify-center items-center ms-3">
                    <p className="font-medium text-sm text-[#424242]">21 September 2022</p>
                    <p className="font-bold text-[32px] ">Today</p>
                  </div>

                  <div className="relative flex max-[600px]:hidden  items-center ">
                  <Image className="absolute -top-[52px] -end-5" src={humanRunning} alt="human-running"/>
                  <p className="p-2 font-medium text-sm bg-[#73877B] rounded-md text-white ">Present-on time</p>
                  </div>


                  <div className="flex w-4/12 max-[600px]:w-6/12 flex-col justify-center items-center ms-3 me-2">
                    <p className="font-medium text-sm text-[#D9F0C5]">Entry Time</p>
                    <p className="font-bold text-[32px] text-[#D9F0C5]">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                  

                  </div>


                </div>
        </>
     );
}
 
export default HomeComponent;