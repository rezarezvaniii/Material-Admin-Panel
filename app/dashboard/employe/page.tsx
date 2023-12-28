"use client"
import Header from "@/components/Header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Situation from "@/components/dashboard/employe/Situation";
import Tabledata from "@/components/dashboard/employe/Tabledate";
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts"
const Heaven= () => {

  const data = [
    {
      "name": "01",
      "uv": 40,
      "pv": 25,
      "amt": 2400
    },
    {
      "name": "05",
      "uv": 30,
      "pv": 10,
      "amt": 2210
    },
    {
      "name": "10",
      "uv": 5,
      "pv":5,
      "amt": 2290
    },
    {
      "name": "15",
      "uv": 5,
      "pv": 5,
      "amt": 2000
    },
    {
      "name": "20",
      "uv": 100,
      "pv": 75,
      "amt": 2181
    },
    {
      "name": "25",
      "uv": 85,
      "pv": 75,
      "amt": 2500
    },
    {
      "name": "30",
      "uv": 75,
      "pv": 75,
      "amt": 2100
    }
  ]
  

  
    return ( 
        <>
        <Header />


        <div className="w-full bg-[#F5F5F5] pb-6 px-3 flex flex-col gap-3">

              <div className="flex gap-3">

              <div className="w-[75%] flex flex-col gap-3">
                
                <Situation />


                <div className="w-full bg-white  rounded-lg pb-3">

                  <Tabledata/>
                  
                </div>

              </div>  

              <div className="w-[25%] pt-3 ">

              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DateCalendar className="w-full " sx={{backgroundColor:"white" , borderRadius:"5px" }}/>
              </LocalizationProvider>

              </div>

              </div>

                <div className="w-full bg-white flex rounded-lg">
                  <div className="w-4/12 ">
                  
                  </div>
                  <div className="w-8/12 ">
                 
                  </div>

                </div>

              
              </div>



        </>
     );
}
 
export default Heaven;