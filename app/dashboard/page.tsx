"use client"
import * as React from 'react';
import Header from "@/components/Header";
import HomeComponent from "@/components/dashboard/homecomopnent/DateComponent";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import TableApproval from "@/components/dashboard/homecomopnent/TableApproval";
import GradientChart from "@/components/dashboard/homecomopnent/GradientChart";
import NoticeList from "@/components/dashboard/homecomopnent/NoticeList";
import { BarChart } from '@mui/x-charts/BarChart';



const Dashboard = () => {

  
  const chartSetting = {
    xAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 500,
    height: 300,
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Fev',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'Apr',
    },
    
  ];
  
  const valueFormatter = (value:any) => `${value}mm`;
  
  


    return ( 
        <>
          <div className="w-full ">
            <Header/>

            <div className="w-full bg-[#F5F5F5] pb-6 px-3 flex flex-col gap-3">

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

            <div className="w-full flex gap-3">

              <div className="w-1/2 bg-white rounded-lg flex flex-col pb-6">
                
                <NoticeList/>

              </div>


              <div className="w-1/2 bg-white rounded-lg ">

              <BarChart
              className='h-20'
              sx={{borderRadius:"20px"}}
                dataset={dataset}
                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
                layout="horizontal"
                {...chartSetting}
              />

              </div>


            </div>





            </div>

          </div>
        </>
     );
}
 
export default Dashboard;