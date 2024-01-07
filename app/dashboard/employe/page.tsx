"use client"
import Header from "@/components/Header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Situation from "@/components/dashboard/employe/Situation";
import Tabledata from "@/components/dashboard/employe/Tabledate";
import EmployPieChart from "@/components/dashboard/employe/EmployPieChart";
import EmployeBarCharts from "@/components/dashboard/employe/EmployBarCharts";
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


        <div className="w-full bg-[#F5F5F5] pb-6 px-3 flex pt-3 flex-col gap-3">

              <div className="flex gap-3 max-[1150px]:flex-col  ">

              <div className="w-[75%] max-[1150px]:w-full flex flex-col gap-3">
                
                <Situation />


                <div className="w-full bg-white max-[600px]:overflow-x-auto rounded-lg pb-3">

                  <Tabledata/>
                  
                </div>

              </div>  

              <div className="w-[25%] max-[1150px]:w-full bg-white flex items-center rounded-md">

              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DateCalendar className="w-full " sx={{backgroundColor:"white" , borderRadius:"5px" }}/>
              </LocalizationProvider>

              </div>

              </div>

                <div className="w-full max-[1150px]:flex-col flex gap-3 rounded-lg">
                  <div className="w-4/12 max-[1150px]:w-full flex items-center justify-center bg-white rounded-md ">

                    <EmployPieChart/>
                  
                  </div>
                  <div className="w-8/12 max-[1150px]:w-full bg-white flex items-center rounded-md ">
                    <EmployeBarCharts />
                  </div>

                </div>

              
              </div>



        </>
     );
}
 
export default Heaven;