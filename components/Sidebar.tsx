"use client"
import Link from "next/link"
import Image from "next/image"
import LogoImgSite from "../public/picture/INKOMOKOWHAITE..png"
import GridViewIcon from '@mui/icons-material/GridView';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'


const Sidebar = () => {

    const pathname = usePathname()

    console.log(pathname)

    return ( 
        <>
        
        <div className="w-full flex justify-center mt-14">
          
          <Image
          src={LogoImgSite}
          alt="Picture of the Logo"
          />

          </div>


          <div className="w-full h-full flex flex-col mt-14 ps-5">


          <Link className="h-16 bg-[#212121] ps-3 rounded-s-lg w-full py-3" href={"/dashboard"}>
            <div className="w-10/12 rounded-lg h-full flex items-center ps-4 gap-3 bg-[#FF698D] ">
              <GridViewIcon sx={{ color: "#ffffff" }} />
              <p className="text-white font-semibold text-base">Overview</p>
            </div>
          </Link>


          <Link className="h-16 hover:bg-[#212121] ps-3 rounded-s-lg w-full py-3" href={"/dashboard/good"}>
            
            <div className="w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  ">
              <SupervisedUserCircleIcon sx={{ color: "#757575" }} />
              <p className="text-[#757575] font-medium text-sm">Employe Management</p>
            </div>
            
          </Link>

          <Link className="h-16 hover:bg-[#212121] ps-3 rounded-s-lg w-full py-3" href={"/dashboard/hello"}>
            
            <div className="w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  ">
              <AccessAlarmIcon sx={{ color: "#757575" }} />
              <p className="text-[#757575] font-normal text-base">Attendance</p>
            </div>
            
          </Link>

          

          <Link className="h-16 hover:bg-[#212121] ps-3 rounded-s-lg w-full py-3" href={"/dashboard/good"}>
            
            <div className="w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  ">
              <EnergySavingsLeafIcon sx={{ color: "#757575" }} />
              <p className="text-[#757575] font-medium text-sm">Leave</p>
            </div>
            
          </Link>

          <Link className="h-16 hover:bg-[#212121] ps-3 rounded-s-lg w-full py-3" href={"/dashboard/good"}>
            
            <div className="w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  ">
              <WalletIcon sx={{ color: "#757575" }} />
              <p className="text-[#757575] font-medium text-sm">Payroll</p>
            </div>
            
          </Link>

          <Link className="h-16 hover:bg-[#212121] ps-3 rounded-s-lg w-full py-3" href={"/dashboard/good"}>
            
            <div className="w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  ">
              <SettingsIcon sx={{ color: "#757575" }} />
              <p className="text-[#757575] font-medium text-sm">Settings</p>
            </div>
            
          </Link>
          <Link className="h-16 hover:bg-[#212121] ps-3 rounded-s-lg w-full py-3" href={"/dashboard/good"}>
            
            <div className="w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  ">
              <ReceiptIcon sx={{ color: "#757575" }} />
              <p className="text-[#757575] font-medium text-sm">Report</p>
            </div>
            
          </Link>

          <div className="h-16 mt-20 ps-3 rounded-s-lg w-full py-3" >
            <Link className="w-10/12 rounded-lg h-full flex items-center pl-4 gap-3 bg-[#FF698D] " href={"/dashboard/hello"}>
              <LoginIcon sx={{ color: "#ffffff" }} />
              <p className="text-white font-semibold text-base">Overview</p>
            </Link>
          </div>


          </div>
        
        </>

     );
}
 
export default Sidebar;