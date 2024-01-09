"use client"
import Header from "@/components/Header";
import { useState } from "react";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined';
import CameraOutdoorOutlinedIcon from '@mui/icons-material/CameraOutdoorOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';



const Leave = () => {

  const data = [
    {name : "Simba" , date : "headsets" , duration:"17 May, 2023" , Payment :"Credit Card", status:"160.00" , logo:SportsEsportsOutlinedIcon},
    {name : "Electro" , date : "furniture" , duration:"17 May, 2023" , Payment :"Invoice", status:"$20.00" , logo:FoundationOutlinedIcon},
    {name : "Marketplace" , date : "Biriyani" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$35.00" , logo:CameraOutdoorOutlinedIcon},
    {name : "Marketplace" , date : "Internet" , duration:"17 May, 2023",  Payment :"Credit Card",status:"$20.00" , logo:MovieFilterOutlinedIcon},
    {name : "Electro" , date : "Car" , duration:"17 May, 2023" , Payment :"cash", status:"$15.00" , logo:GarageOutlinedIcon}, 
    {name : "Simba" , date : "Lunch items" , duration:"17 May, 2023",  Payment :"Credit Card",status:"$10.00" , logo:DinnerDiningOutlinedIcon},
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
    {name : "Marketplace" , date : "Keyboard" , duration:"17 May, 2023" , Payment :"Credit Card", status:"$25.00" , logo:SportsEsportsOutlinedIcon}, 
  ]

  const [moreinfo , setMoreinfo] = useState(7)

  const [pagetab , setPagetab] = useState(1)

  const togelMoreItem = ()=>{
    setMoreinfo(14)
  }
  const togelewerItem = ()=>{
    setMoreinfo(7)
  }

    return ( 
        <>

          <div className="w-full px-4 mt-6 ">

          <p className="font-normal text-[22px] text-[#878787]">Recent Transaction</p>

          <div className="flex gap-5 mt-2">
            <button onClick={()=>setPagetab(1)} className={`font-bold text-base  ${pagetab == 1 ? "text-[#FF698D] border-b-2 border-[#FF698D]" : "text-[#525256]"}`}>All</button>
            <button onClick={()=>setPagetab(2)} className={`font-bold text-base  ${pagetab == 2 ? "text-[#FF698D] border-b-2 border-[#FF698D]" : "text-[#525256]"}`}>Revenue</button>
            <button onClick={()=>setPagetab(3)} className={`font-bold text-base  ${pagetab == 3 ? "text-[#FF698D] border-b-2 border-[#FF698D]" : "text-[#525256]"}`}>Expenses</button>
          </div>

          <div className="w-full rounded-lg  pb-4 mt-6 shadow-[0_35px_60px_-15px_rgba(76,103,100,0.1)]">
          <div className="w-full overflow-x-auto">

          <table className="w-full max-[1050px]:w-[900px]  ">
            <tbody>
              <tr className=" h-10 w-full font-bold text-[#191919] text-sm">
                <th className=" text-start ps-4 ">Items</th>
                <th className=" text-start">Shop name</th>
                <th className=" text-start">Date</th>
                <th className=" text-start">Payment Method</th>
                <th className=" text-start ">Amount</th>
                
              </tr>

              {data.slice(0, moreinfo ).map((item , index)=>(
                <tr key={index} className={`h-14 text-[#666] font-medium text-sm w-full `}>
                <td className="text-start ps-4"><p>
                <span className="mr-2 text-[#666]">
                  {item.logo && <item.logo />}
                </span>
                  {item.date}</p></td>
                <td>{item.name}</td>
                <td>{item.duration}</td>
                <td>{item.duration}</td>
                <td className={` text-[13px]   font-medium `}>
                  <p className={`  inline p-1 rounded-sm`}> {item.status}</p>
                </td>
                
              </tr>
              ))}
              </tbody>
            </table>
              </div>

                <div className="w-full flex justify-center mt-2">
                  {
                    moreinfo == 7 ?
                <button onClick={togelMoreItem} className="text-white text-sm items-center rounded-md justify-center px-6 py-2  font-medium bg-[#FF698D] flex p-2 ">
                Load More  
              </button>
                    :
                    <button onClick={togelewerItem} className="text-white text-sm items-center rounded-md justify-center px-6 py-2  font-medium bg-[#FF698D] flex p-2 ">
                fewer
              </button>

                  }
              
                </div>

          </div>

          </div>
        </>
     );
}
 
export default Leave;