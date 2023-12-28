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
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';

const Sidebar = (props:any) => {
  const { myBooleanProp } = props;
  const { toggleBooleanProp } = props;

  console.log(myBooleanProp)

    const pathname = usePathname()

    console.log(pathname)

    return ( 
        <>
          <div className={`${myBooleanProp == true ? "" : "justify-center pe-0" } w-full flex justify-end mt-2 pe-3 `}>
            <button onClick={toggleBooleanProp} className="">
              {
                myBooleanProp?
              <FormatIndentDecreaseIcon  className="text-white/50 w-8 h-8"/>
              :
              <FormatIndentIncreaseIcon  className="text-white/50 w-8 h-8"/>
              }

            </button>
          </div>
        
        <div className="w-full flex justify-center mt-10">
          
          {
            myBooleanProp?
            <Image
            src={LogoImgSite}
            alt="Picture of the Logo"
            />
            :
            null

          }

          </div>


          <div className={`${myBooleanProp == true ? "ps-5" : "px-1" } w-full h-full flex flex-col gap-2 mt-10  `}>


          <Link className={`h-16 ps-3 hover:bg-[#212121] ${myBooleanProp == true ? "" : "rounded-lg ps-0 justify-center" } rounded-s-lg w-full flex items-center ${pathname =="/dashboard" ? "bg-[#212121] ps-7" : "" }`} href={"/dashboard"}>
            <div className={`w-10/12 rounded-lg h-10  flex items-center  ps-4 gap-3 ${pathname =="/dashboard" ? "bg-[#FF698D]" : "" } `}>
              <GridViewIcon className={`${pathname =="/dashboard" ? "text-white": "text-[#757575]"}`} />
              <p className={`${myBooleanProp == true ? "" : "hidden" } ${pathname =="/dashboard" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Overview</p>
            </div>
          </Link>


          <Link className={`h-16 ps-3 hover:bg-[#212121] ${myBooleanProp == true ? "" : "rounded-lg ps-0 justify-center" } rounded-s-lg w-full flex items-center ${pathname =="/dashboard/employe" ? "bg-[#212121] ps-7" : "" }`} href={"/dashboard/employe"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center ps-4 gap-3 ${pathname =="/dashboard/employe" ? "bg-[#FF698D]" : "" } `}>
              <SupervisedUserCircleIcon className={`${pathname =="/dashboard/employe" ? "text-white": "text-[#757575]"}`} />
              <p className={` ${myBooleanProp == true ? "" : "hidden" } ${pathname =="/dashboard/employe" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Employe</p>
            </div>
          </Link>

          <Link className={`h-16 ps-3 hover:bg-[#212121] ${myBooleanProp == true ? "" : "rounded-lg ps-0 justify-center" } rounded-s-lg w-full flex items-center ${pathname =="/dashboard/attendance" ? "bg-[#212121] ps-7" : "" }`} href={"/dashboard/attendance"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center ps-4 gap-3 ${pathname =="/dashboard/attendance" ? "bg-[#FF698D]" : "" } `}>
              <AccessAlarmIcon className={`${pathname =="/dashboard/attendance" ? "text-white": "text-[#757575]"}`} />
              <p className={`${myBooleanProp == true ? "" : "hidden" } ${pathname =="/dashboard/attendance" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Attendance</p>
            </div>
          </Link>

          

          <Link className={`h-16 ps-3 hover:bg-[#212121] ${myBooleanProp == true ? "" : "rounded-lg ps-0 justify-center" } rounded-s-lg w-full flex items-center ${pathname =="/dashboard/leave" ? "bg-[#212121] ps-7" : "" }`} href={"/dashboard/leave"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center ps-4 gap-3 ${pathname =="/dashboard/leave" ? "bg-[#FF698D]" : "" } `}>
              <EnergySavingsLeafIcon className={`${pathname =="/dashboard/leave" ? "text-white": "text-[#757575]"}`} />
              <p className={`${myBooleanProp == true ? "" : "hidden" } ${pathname =="/dashboard/leave" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Leave</p>
            </div>
          </Link>


          <Link className={`h-16 ps-3 hover:bg-[#212121] ${myBooleanProp == true ? "" : "rounded-lg ps-0 justify-center" } rounded-s-lg w-full flex items-center ${pathname =="/dashboard/payroll" ? "bg-[#212121] ps-7" : "" }`} href={"/dashboard/payroll"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center ps-4 gap-3 ${pathname =="/dashboard/payroll" ? "bg-[#FF698D]" : "" } `}>
              <WalletIcon className={`${pathname =="/dashboard/payroll" ? "text-white": "text-[#757575]"}`} />
              <p className={`${myBooleanProp == true ? "" : "hidden" } ${pathname =="/dashboard/payroll" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Payroll</p>
            </div>
          </Link>


          <Link className={`h-16 ps-3 hover:bg-[#212121] ${myBooleanProp == true ? "" : "rounded-lg ps-0 justify-center" } rounded-s-lg w-full flex items-center ${pathname =="/dashboard/settings" ? "bg-[#212121] ps-7" : "" }`} href={"/dashboard/settings"}>
            <div className={`w-10/12 rounded-lg h-10 flex items-center ps-4 gap-3 ${pathname =="/dashboard/settings" ? "bg-[#FF698D]" : "" } `}>
              <SettingsIcon className={`${pathname =="/dashboard/settings" ? "text-white": "text-[#757575]"}`} />
              <p className={`${myBooleanProp == true ? "" : "hidden" } ${pathname =="/dashboard/settings" ? "text-white font-semibold text-base" : "text-[#757575] font-medium text-sm" }`}>Settings</p>
            </div>
          </Link>
         

          
          

          <div className="h-16 mt-20 ps-3 rounded-s-lg w-full py-3" >
            <Link className={`w-10/12 rounded-lg h-full flex items-center pl-4 gap-3  ${myBooleanProp == true ? "bg-[#FF698D]" : "bg-[#212121] pl-2 hover:bg-[#FF698D]" }`} href={"/dashboard/hello"}>
              <LoginIcon sx={{ color: "#ffffff" }} />
              <p className={`${myBooleanProp == true ? "" : "hidden" } text-white font-semibold text-base`}>Overview</p>
            </Link>
          </div>


          </div>
        
        </>

     );
}
 
export default Sidebar;