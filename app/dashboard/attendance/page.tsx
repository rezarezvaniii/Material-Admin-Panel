
import Header from "@/components/Header";
import MasterCard from "@/components/dashboard/attendancecom.tsx/MasterCard";
import PostPieChart from "@/components/dashboard/attendancecom.tsx/PostPieChart";
import Upcomming from "../../../components/dashboard/attendancecom.tsx/Upcomming";
import Transaction from "@/components/dashboard/attendancecom.tsx/Transaction";
import StaticComponent from "@/components/dashboard/attendancecom.tsx/StaticComponent";
import Breakdown from "@/components/dashboard/attendancecom.tsx/Breakdown";




const Attendance = () => {
    return ( 
        <>
        <Header />

        <div className="px-4 pt-4">
            <div className="w-full gap-4 flex justify-between">
                <div className="w-[31%] flex flex-col gap-3">
                    <MasterCard />
                </div>

                <div className="w-[31%] flex flex-col gap-3">
                  {/* <PostPieChart /> */}
                </div>

                <div className="w-[31%] flex flex-col gap-3">

                  <Upcomming/>
                    
                </div>

            </div>


            <div className="flex w-full gap-3 mt-3 ">
              <div className="w-[31%] ">
                <Transaction />
              </div>
              <div className="w-[69%] flex flex-col gap-3 ">
                <div className="w-full">

                <StaticComponent />
                </div>
                <div className="w-full ">
                    <Breakdown />
                </div>

              </div>

            </div>
        </div>
        
        </>
     );
}
 
export default Attendance;