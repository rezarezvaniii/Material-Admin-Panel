import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const NoticeList = () => {

  const commentData = [
    {date: "05 June" ,name:"Annual Retreat" ,caption:"Announcement concrning the public holidays lorem20 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum nobis, quasi animi iste ipsum perspiciatis esse incidunt mollitia ratione." },
    {date: "05 June" ,name:"Annual Retreat" ,caption:"Announcement concrning the public holidays lorem20 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum nobis, quasi animi iste ipsum perspiciatis esse incidunt mollitia ratione." },
    {date: "05 June" ,name:"Annual Retreat" ,caption:"Announcement concrning the public holidays lorem20 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum nobis, quasi animi iste ipsum perspiciatis esse incidunt mollitia ratione." },
  ]

    return ( 
        <>
          <div className="flex justify-between px-3 py-5">
                  <p className="font-bold text-base text-[#424242]">Notice</p>
                  <button className="gap-2 text-[#1E88E5] font-medium text-sm">All Notices <ArrowForwardIosIcon/> </button>
                </div>

                {
                  commentData.map((item , index)=>(
                    <div key={index} className="w-full border-b-[2px] pb-3 pt-5 border-[#F5F5F5] flex px-3 justify-between ">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-xs">{item.date}</p>
                      <p className="font-bold text-sm ">{item.name} <span className="font-normal text-sm">-{item.caption.slice(0,40)}...</span></p>
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <button className="font-medium text-xs ">Details</button>
                  </div>
                </div>
                  ))
                }
        </>
     );
}
 
export default NoticeList;