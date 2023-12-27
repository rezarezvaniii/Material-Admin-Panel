"use client"
import Header from "@/components/Header";
import HomeComponent from "@/components/dashboard/homecomopnent/DateComponent";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import TableApproval from "@/components/dashboard/homecomopnent/TableApproval";
import GradientChart from "@/components/dashboard/homecomopnent/GradientChart";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Dashboard = () => {

  

  



    return ( 
        <>
          <div className="w-full ">
            <Header/>

            <div className="w-full bg-[#F5F5F5] px-3 flex flex-col gap-3">

              <div className="flex gap-3">

              <div className="w-[75%] flex flex-col gap-3">
                
                <HomeComponent/>


                <div className="w-full bg-white  rounded-lg">
                <TableApproval />
              </div>

              </div>  

              <div className="w-[25%] pt-3 ">

              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DateCalendar className="w-full " sx={{backgroundColor:"white" , borderRadius:"5px" }}/>
              </LocalizationProvider>

              </div>
              </div>

            {/* <div className="w-full bg-white h-64">
              
            <GradientChart/>

            </div> */}

            <div className="w-full flex">

              <div className="w-1/2 bg-white rounded-lg flex flex-col ">
                <div className="flex justify-between px-3 py-5">
                  <p className="font-bold text-base text-[#424242]">Notice</p>
                  <button className="gap-2 text-[#1E88E5] font-medium text-sm">All Notices <ArrowForwardIosIcon/> </button>
                </div>

                <div className="w-full ">
                  

                </div>
              </div>


              <div className="w-1/2 bg-white rounded-lg ">

              </div>


            </div>





            </div>

          </div>
        </>
     );
}
 
export default Dashboard;