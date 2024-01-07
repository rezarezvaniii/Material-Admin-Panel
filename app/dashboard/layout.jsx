"use client"
import Sidebar from "@/components/Sidebar"
import SidebarRes from "../../components/SidebarRes"
import React, { useState } from 'react';
import Header from "../../components/Header"


export default function DashboardLayout({
    children,
  }) {
    

    const [myBoolean, setMyBoolean] = useState(true)

    const toggleBoolean = () => {
      setMyBoolean(!myBoolean);
      
    };

    const [open, setOpen] = React.useState(false);

    const toggleDrawer =
      (inOpen) => (event) => {
        if (
          event.type === 'keydown' &&
          ((event ).key === 'Tab' ||
            (event ).key === 'Shift')
        ) {
          return;
        }
  
        setOpen(inOpen);
      };


    const [sidebarres, setSidebarres] = useState(true)

    const toggleSidebarres = () => {
      setSidebarres(!sidebarres);
    };
    



    return (
    <main className="flex h-screen">
        
        <div className={`${myBoolean ? "w-[20%] max-[1150px]:w-[25%] max-[750px]:hidden" : "w-[5%] max-[750px]:hidden max-[1150px]:w-[6%] max-[970px]:w-[8%] "} transition-all duration-300 h-screen overflow-y-auto flex flex-col bg-[#121212] `}>

          <Sidebar toggleBooleanProp={toggleBoolean} myBooleanProp={myBoolean} />

          <SidebarRes open={open} toggleDrawer={toggleDrawer} />

        </div>


        <div className={`${myBoolean ? "w-[80%] max-[1150px]:w-[75%] max-[750px]:w-full" : "w-[95%] max-[1150px]:w-[94%] max-[970px]:w-[92%] max-[750px]:w-full "} bg-[#F5F5F5] transition-all duration-300  h-screen overflow-y-auto bodyscroller`}>
          <Header open={open} toggleDrawer={toggleDrawer} />
        {children}
        </div>
        </main>
        )
  }