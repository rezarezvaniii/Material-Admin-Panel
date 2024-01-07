import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';
import Image from 'next/image';
import LogoImgSite from "../public/picture/INKOMOKOWHAITE..png"
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import GridViewIcon from '@mui/icons-material/GridView';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import { usePathname } from 'next/navigation'

const SidebarRes = (props:any) => {

    const { open } = props;
    const { toggleDrawer } = props;
    const pathname = usePathname()
    

    const redirectTOLogin = ()=>{
      localStorage.removeItem('token');
    }


    return ( 
        <>


      <Drawer  color='success' open={open} onClose={toggleDrawer(false)}>
        <div className='w-full h-screen overflow-y-auto bg-[#121212]'>

        <div className={` w-full flex justify-end mt-2 pe-3 `}>
            <button  onClick={toggleDrawer(false)} >
              <FormatIndentDecreaseIcon  className="text-white/50 w-8 h-8"/>
            </button>
          </div>

        <div className="w-full flex justify-center mt-10">

            <Image
            src={LogoImgSite}
            alt="Picture of the Logo"
            />
          </div>

          <div className={`ps-5 w-full h-full flex flex-col gap-2 mt-10  `}>

          <Link className={`h-16 hover:bg-[#212121] rounded-s-lg w-full flex items-center ${pathname =="/dashboard" ?  "bg-[#212121] ps-7 max-[980px]:ps-2"  : "" }`} href={"/dashboard"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center  gap-3 ps-3   ${pathname =="/dashboard" ? "bg-[#FF698D]" : "" } `}>
              <GridViewIcon className={`${pathname =="/dashboard" ? "text-white": "text-[#757575]"}`} />
              <p className={` ${pathname =="/dashboard" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Overview</p>
            </div>
          </Link>

          <Link className={`h-16 hover:bg-[#212121] rounded-s-lg w-full flex items-center ${pathname =="/dashboard/employe" ?  "bg-[#212121] ps-7 max-[980px]:ps-2"  : "" }`} href={"/dashboard/employe"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center  gap-3 ps-3   ${pathname =="/dashboard/employe" ? "bg-[#FF698D]" : "" } `}>
              <SupervisedUserCircleIcon className={`${pathname =="/dashboard/employe" ? "text-white": "text-[#757575]"}`} />
              <p className={` ${pathname =="/dashboard/employe" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Employe</p>
            </div>
          </Link>

          <Link className={`h-16 hover:bg-[#212121] rounded-s-lg w-full flex items-center ${pathname =="/dashboard/attendance" ?  "bg-[#212121] ps-7 max-[980px]:ps-2"  : "" }`} href={"/dashboard/attendance"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center  gap-3 ps-3   ${pathname =="/dashboard/attendance" ? "bg-[#FF698D]" : "" } `}>
              <AccessAlarmIcon className={`${pathname =="/dashboard/attendance" ? "text-white": "text-[#757575]"}`} />
              <p className={` ${pathname =="/dashboard/attendance" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Attendance</p>
            </div>
          </Link>

          <Link className={`h-16 hover:bg-[#212121] rounded-s-lg w-full flex items-center ${pathname =="/dashboard/leave" ?  "bg-[#212121] ps-7 max-[980px]:ps-2"  : "" }`} href={"/dashboard/leave"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center  gap-3 ps-3   ${pathname =="/dashboard/leave" ? "bg-[#FF698D]" : "" } `}>
              <EnergySavingsLeafIcon className={`${pathname == "/dashboard/leave" ? "text-white": "text-[#757575]"}`} />
              <p className={` ${pathname =="/dashboard/leave" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Leave</p>
            </div>
          </Link>

          <Link className={`h-16 hover:bg-[#212121] rounded-s-lg w-full flex items-center ${pathname =="/dashboard/payroll" ?  "bg-[#212121] ps-7 max-[980px]:ps-2"  : "" }`} href={"/dashboard/payroll"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center  gap-3 ps-3   ${pathname =="/dashboard/payroll" ? "bg-[#FF698D]" : "" } `}>
              <WalletIcon className={`${pathname =="/dashboard/payroll" ? "text-white": "text-[#757575]"}`} />
              <p className={` ${pathname =="/dashboard/payroll" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Payroll</p>
            </div>
          </Link>

          {/* <Link className={`h-16 hover:bg-[#212121] rounded-s-lg w-full flex items-center ${pathname =="/dashboard/settings" ?  "bg-[#212121] ps-7 max-[980px]:ps-2"  : "" }`} href={"/dashboard/settings"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center  gap-3 ps-3   ${pathname =="/dashboard/settings" ? "bg-[#FF698D] text-white" : "text-[#757575]" } `}>
              <SettingsIcon className={`${pathname =="/dashboard/settings" ? "text-white": "text-[#757575]"}`} />
              <p className={` ${pathname =="/dashboard/settings" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Settings</p>
            </div>
          </Link> */}


          <div className="h-16 mt-12 ps-3 rounded-s-lg w-full py-3" >
            <Link onClick={redirectTOLogin} className={`w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  bg-[#FF698D]`} href={"/auth/login"}>
              <LoginIcon sx={{ color: "#ffffff" }} />
              <p className={` text-white font-semibold text-base`}>Overview</p>
            </Link>
          </div>

          


        </div>
        </div>
      </Drawer>


          
        </>
     );
}
 
export default SidebarRes;