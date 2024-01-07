


const Tabledata = () => {

    const data = [
        {name : "Casual leave" , date : "03/07/2021" , duration:"02 (05-06 Jul)" , status:"Pending" , application:"Project Manager" , common:"Keza Ana"},
        {name : "Late entry" , date : "27/06/2022" , duration:"01 (06 Jul)" , status:"Rejected" , application:"Software Developer" , common:"Hirwa Patrick"},
        {name : "maternity leave" , date : "16/06/2022" , duration:"05 (05-06 Jul)" , status:"Approved" , application:"Nursing Assistant" , common:"Mugabo Peter"}, 
        {name : "Late entry" , date : "01/07/2022" , duration:"02 (06 Jul)" , status:"Approved" , application:"Nursing Assistant" , common:"Amata"},
      ]


    return ( 
        <>
         <h1 className="font-bold text-base text-[#424242] ms-4">Approval</h1>

<table className="w-full max-[600px]:w-[580px]">
<tbody>
  <tr className=" h-10 w-full font-bold text-[#757575] text-sm">
    <th className=" text-start ps-4">Date of Application</th>
    <th className=" text-start">Application</th>
    <th className=" text-start">Application type</th>
    <th className=" text-center ">Duration</th>
    
  </tr>

  {data.map((item , index)=>(
    <tr key={index} className={` ${index % 2 ==0 ? "bg-[#FAFAFA]": "bg-white"} font-normal text-[#424242] text-sm w-full h-12`}>
    <td className="text-start ps-4">{item.date}</td>
    <td><p className="flex flex-col"><span className="text-[#1E88E5] font-bold text-sm">{item.common}</span>{item.application}</p></td>
    <td>{item.name}</td>
    <td className={` text-[13px] text-center font-medium `}>
        {item.duration}
    </td>
    
  </tr>
  ))}
  </tbody>
</table>


        </>
     );
}
 
export default Tabledata;