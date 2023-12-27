"use client"
import { useState } from "react";


const TableApproval = () => {

  const data = [
    {name : "Casual leave" , date : "03/07/2021" , duration:"02 (05-06 Jul)" , status:"Pending"},
    {name : "Late entry" , date : "27/06/2022" , duration:"01 (06 Jul)" , status:"Rejected"},
    {name : "maternity leave" , date : "16/06/2022" , duration:"05 (05-06 Jul)" , status:"Approved"}, 
    {name : "Late entry" , date : "01/07/2022" , duration:"02 (06 Jul)" , status:"Approved"},
    {name : "Sick leave" , date : "22/05/2022" , duration:"02 (05-06 Jul)" , status:"Approved"}, 
  ]

  
    return (
        <>
          <h1 className="font-bold text-base text-[#424242] ms-4">Approval</h1>

<table className="w-full ">
<tbody>
  <tr className=" h-10 w-full font-bold text-[#757575] text-sm">
    <th className=" text-start ps-4">Date of Application</th>
    <th className=" text-start">Application type</th>
    <th className=" text-start">Duration</th>
    <th className=" text-center ">Status</th>
    
  </tr>

  {data.map((item , index)=>(
    <tr key={index} className={` ${index % 2 ==0 ? "bg-[#FAFAFA]": "bg-white"} font-normal text-[#424242] text-sm w-full h-10`}>
    <td className="text-start ps-4">{item.date}</td>
    <td>{item.name}</td>
    <td>{item.duration}</td>
    <td className={` text-[13px] text-center font-medium `}>
      <p className={`${item.status== 'Pending' ? "text-[#FF9600] bg-[#FFF3DE]" : item.status == "Rejected" ? "text-[#EF6E68] bg-[#FFEAED]" : "text-[#2196F3] bg-[#E3F2FD]"  }  inline p-1 rounded-sm`}> {item.status}</p>
    </td>
    
  </tr>
  ))}
   </tbody>
</table>

<div className="flex gap-4 ps-4 font-medium h-10 items-center text-[13px]">
  <p className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#2196F3] "></span>Approved</p>
  <p className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#EF6E68] "></span>Rejected</p>
  <p className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-[#FF9600] "></span>Pending</p>
</div>


        </>
     );
}
 
export default TableApproval;