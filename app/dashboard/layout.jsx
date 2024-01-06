"use client"
import Sidebar from "@/components/Sidebar"
import React, { useState } from 'react';

export default function DashboardLayout({
    children,
  }) {
    

    const [myBoolean, setMyBoolean] = useState(true)

    const toggleBoolean = () => {
      setMyBoolean(!myBoolean);
    };
    



    return (
    <main className="flex h-screen">
        
        <div className={`${myBoolean ? "w-[20%]" : "w-[5%]"} transition-all duration-300 h-full flex flex-col bg-[#121212] `}>

          <Sidebar toggleBooleanProp={toggleBoolean} myBooleanProp={myBoolean}/>

        </div>  


        <div className={`${myBoolean ? "w-[80%]" : "w-[95%]"} bg-[#F5F5F5] transition-all duration-300  h-screen overflow-y-auto `}>

        {children}
        </div>
        </main>
        )
  }