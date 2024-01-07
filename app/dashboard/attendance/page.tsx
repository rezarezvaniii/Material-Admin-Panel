
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

        <div className="px-4 pt-4">
            <div className="w-full max-[1250px]:flex-col max-[1250px]:items-center gap-4 flex justify-between">
                <div className="w-[31%] max-[1250px]:w-1/2 max-[950px]:w-3/4 max-[550px]:w-full flex flex-col gap-3">
                    <MasterCard />
                </div>

                <div className="w-[31%] max-[1250px]:w-1/2 max-[950px]:w-3/4 max-[550px]:w-full flex flex-col gap-3">
                  {/* <PostPieChart /> */}
                  <Upcomming/>
                </div>

                <div className="w-[31%] max-[1250px]:w-1/2 max-[950px]:w-3/4 max-[550px]:w-full flex flex-col gap-3">

                  <Upcomming/>
                    
                </div>

            </div>


            <div className="flex w-full gap-3 max-[1150px]:flex-col max-[1150px]:items-center mt-3 ">
              <div className="w-[31%] max-[1150px]:w-full ">
                <Transaction />
              </div>

              <div className="w-[69%] max-[1150px]:w-full flex flex-col gap-3 ">
                <div className="w-full">

                <StaticComponent />
                </div>
                <div className="w-full max-[620px]:overflow-x-auto">
                    <Breakdown />
                </div>

              </div>

            </div>
        </div>
        
        </>
     );
}
 
export default Attendance;