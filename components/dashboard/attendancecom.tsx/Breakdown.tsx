import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Breakdown = () => {


  const data = [
    {name:"Housing" , price:320.00 , persont:"15"},
    {name:"subscriptions" , price:420.00 , persont:"2"},
    {name:"lunch" , price:250.00 , persont:"25"},
    {name:"electricity" , price:260.00 , persont:"20"},
    {name:"salaries" , price:500.00 , persont:"15"},
    {name:"trips" , price:160.00 , persont:"10"},
    
  ]
    return ( 
        <>
          <p className="text-xl font-normal text-[#878787]">Expenses Breakdown</p>
          
          <div className="w-full h-full rounded-md mt-2  max-[620px]:w-[600px] gap-4 justify-between flex flex-wrap bg-white px-4 py-6  shadow-[0_35px_60px_-15px_rgba(76,103,100,0.12)]">

          {data.map((item , index)=>(
            <div key={index} className="flex  gap-3 items-center w-[30%]">
            <div className="h-fit rounded-lg flex flex-col gap-[2px] w-fit bg-[#D2D2D240] p-2 ">
            {/* {item.logo && <item.logo />} */}
            <GarageOutlinedIcon sx={{color:"#878787"}}/>
            </div>

            <div className="flex w-full ">
              <div className="flex w-full items-center justify-evenly">
                <div className="flex flex-col">
                <p className="font-medium text-xs text-[#878787]">{item.name}</p>
                <p className="text-base font-bold text-[#191919]">${item.price}</p>
                <p className="font-medium text-sm text-[#9F9F9F]">{item.persont}% <span className='text-[#4DAF6E]'><ArrowUpwardIcon className='w-4 h-4' /></span></p>
                </div>
                <button className=' ms-5'>

                <ArrowForwardIcon sx={{color:"#9F9F9F"}}/>
                </button>

              </div>

            </div>
          </div>
          ))
          
          }

          </div>
        </>
     );
}
 
export default Breakdown;